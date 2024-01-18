<?php

namespace App\Http\Controllers;

use App\Http\Requests\SamarkandRequest;
use App\Http\Requests\SamarkandUpdateRequest;
use App\Service\SamarkandService;

class SamarkandController extends Controller
{
    public function __construct(protected SamarkandService $service)
    {

    }
    public function index()
    {
        $samarkands = $this->service->getByPaginate(10);
        return view('sam.show_news')->with(['samarkands' => $samarkands]);
    }
    public function create()
    {
        return view('sam.add_news');
    }
    public function store(SamarkandRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('samarkands.index');
    }
    public function edit($samarkand)
    {
        $samarkand = $this->service->getById($samarkand);
        return view('sam.edit_news')->with(['samarkand'=>$samarkand]);
    }
    public function update($samarkand,SamarkandUpdateRequest $request)
    {
        $ferghana = $this->service->update($samarkand,$request->validated());
        return redirect()->route('samarkands.index', ['samarkand' => $samarkand]);
    }
    public function destroy($samarkand)
    {
        $this->service->destroy($samarkand);
        return redirect()->route('samarkands.index');
    }
}
