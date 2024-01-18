<?php

namespace App\Http\Controllers;

use App\Http\Requests\StructureRequest;
use App\Service\StructureService;

class StructureController extends Controller
{
    public function __construct(protected StructureService $service)
    {

    }
    public function index()
    {
        $structures = $this->service->getByPaginate(10);
        return view('structure.show_news')->with(['structures' => $structures]);
    }
    public function create()
    {
        return view('structure.add_news');
    }
    public function store(StructureRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('structures.index');
    }
    public function edit($structure)
    {
        $structure = $this->service->getById($structure);
        return view('structure.edit_news')->with(['structure'=>$structure]);
    }
    public function update($structure,StructureRequest $request)
    {
        $structure = $this->service->update($structure,$request->validated());
        return redirect()->route('structures.index', ['structure' => $structure]);
    }
    public function destroy($structure)
    {
        $this->service->destroy($structure);
        return redirect()->route('structures.index');
    }
}
