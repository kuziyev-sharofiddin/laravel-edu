<?php

namespace App\Http\Controllers;

use App\Http\Requests\NukusRequest;
use App\Http\Requests\NukusUpdateRequest;
use App\Service\NukusService;

class NukusController extends Controller
{
    public function __construct(protected NukusService $service)
    {

    }
    public function index()
    {
        $nukuses = $this->service->getByPaginate(10);
        return view('nukus.show_news')->with(['nukuses' => $nukuses]);
    }
    public function create()
    {
        return view('nukus.add_news');
    }
    public function store(NukusRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('nukuses.index');
    }
    public function edit($nukus)
    {
        $nukus = $this->service->getById($nukus);
        return view('nukus.edit_news')->with(['nukus'=>$nukus]);
    }
    public function update($nukus,NukusUpdateRequest $request)
    {
        $nukus = $this->service->update($nukus,$request->validated());
        return redirect()->route('nukuses.index', ['nukus' => $nukus]);
    }
    public function destroy($nukus)
    {
        $this->service->destroy($nukus);
        return redirect()->route('nukuses.index');
    }
}
