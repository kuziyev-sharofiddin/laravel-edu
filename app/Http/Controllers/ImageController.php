<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImageRequest;
use App\Http\Requests\ImageUpdateRequest;
use App\Service\ImageService;

class ImageController extends Controller
{
    public function __construct(protected ImageService $service)
    {

    }
    public function index()
    {
        $images = $this->service->getByPaginate(10);
        return view('img.show_news')->with(['images' => $images]);
    }
    public function create()
    {
        return view('img.add_news');
    }
    public function store(ImageRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('images.index');
    }


    public function edit($image)
    {
        $image = $this->service->getById($image);
        return view('img.edit_news')->with(['image'=>$image]);
    }

    public function update($image, ImageUpdateRequest $request)
    {
        $image = $this->service->update($image,$request->validated());
        return redirect()->route('images.index', ['image' => $image]);
    }

    public function destroy($image)
    {
        $this->service->destroy($image);
        return redirect()->route('images.index');
    }
}
