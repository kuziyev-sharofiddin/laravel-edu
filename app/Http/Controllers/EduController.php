<?php

namespace App\Http\Controllers;

use App\Http\Requests\EduRequest;
use App\Service\EduService;

class EduController extends Controller
{
    public function __construct(protected EduService $service)
    {

    }
    public function index()
    {
        $edus = $this->service->getByPaginate(10);
        return view('edu.show_news')->with(['edus' => $edus]);
    }
    public function create()
    {
        return view('edu.add_news');
    }
    public function store(EduRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('edus.index');
    }
    public function edit($edu)
    {
        $edu = $this->service->getById($edu);
        return view('edu.edit_news')->with(['edu'=>$edu]);
    }
    public function update($edu, EduRequest $request)
    {
        $edu = $this->service->update($edu,$request->validated());
        return redirect()->route('edus.index', ['edu' => $edu]);
    }
    public function destroy($edu)
    {
        $this->service->destroy($edu);
        return redirect()->route('edus.index');
    }
}
