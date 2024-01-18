<?php

namespace App\Http\Controllers;

use App\Http\Requests\StatuteRequest;
use App\Service\StatuteService;

class StatuteController extends Controller
{
    public function __construct(protected StatuteService $service)
    {

    }
    public function index()
    {
        $statutes = $this->service->getByPaginate(10);
        return view('statute.show_news')->with(['statutes' => $statutes]);
    }
    public function create()
    {
        return view('statute.add_news');
    }
    public function store(StatuteRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('statutes.index');
    }
    public function edit($statute)
    {
        $statute = $this->service->getById($statute);
        return view('statute.edit_news')->with(['statute'=>$statute]);
    }
    public function update($statute,StatuteRequest $request)
    {
        $statute = $this->service->update($statute,$request->validated());
        return redirect()->route('statutes.index', ['statute' => $statute]);
    }
    public function destroy($statute)
    {
        $this->service->destroy($statute);
        return redirect()->route('statutes.index');
    }
}
