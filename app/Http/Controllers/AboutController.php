<?php

namespace App\Http\Controllers;

use App\Http\Requests\AboutRequest;
use App\Service\AboutService;

class AboutController extends Controller
{
    public function __construct(protected AboutService $service)
    {

    }
    public function index()
    {
        $abouts = $this->service->getByPaginate(10);
        return view('about.show_news')->with(['abouts' => $abouts]);
    }
    public function create()
    {
        return view('about.add_news');
    }
    public function store(AboutRequest $request)
    {
        $this->service->create($request->all());

        return redirect()->route('abouts.index');
    }
    public function edit($about)
    {
        $about = $this->service->getById($about);
        return view('about.edit_news')->with(['about'=>$about]);
    }
    public function update($about,AboutRequest $request)
    {
        $about = $this->service->update($about,$request->validated());
        return redirect()->route('abouts.index', ['about' => $about]);
    }
    public function destroy($about)
    {
        $this->service->destroy($about);
        return redirect()->route('abouts.index');
    }
}
