<?php

namespace App\Http\Controllers;

use App\Http\Requests\FerghanaRequest;
use App\Http\Requests\FerghanaUpdateRequest;
use App\Service\FerghanaService;

class FerghanaController extends Controller
{
    public function __construct(protected FerghanaService $service)
    {

    }
    public function index()
    {
        $ferghanas = $this->service->getByPaginate(10);
        return view('ferg.show_news')->with(['ferghanas' => $ferghanas]);
    }
    public function create()
    {
        return view('ferg.add_news');
    }
    public function store(FerghanaRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('ferghanas.index');
    }
    public function edit($ferghana)
    {
        $ferghana = $this->service->getById($ferghana);
        return view('ferg.edit_news')->with(['ferghana'=>$ferghana]);
    }
    public function update($ferghana,FerghanaUpdateRequest $request)
    {
        $ferghana = $this->service->update($ferghana,$request->validated());
        return redirect()->route('ferghanas.index', ['ferghana' => $ferghana]);
    }
    public function destroy($ferghana)
    {
        $this->service->destroy($ferghana);
        return redirect()->route('ferghanas.index');
    }
}
