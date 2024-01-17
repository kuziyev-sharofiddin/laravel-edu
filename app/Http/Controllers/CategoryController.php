<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryRequest;
use App\Service\CategoryService;

class CategoryController extends Controller
{
    public function __construct(protected CategoryService $service)
    {

    }
    public function index()
    {
        $categories = $this->service->getByPaginate(10);
        return view('category.show_news')->with([
            'categories' =>  $categories,
        ]);
    }
    public function create()
    {
        return view('category.add_news');
    }
    public function store(CategoryRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('categories.index');
    }
    public function edit($category)
    {
        $category = $this->service->getById($category);
        return view('category.edit_news')->with(['category'=>$category]);
    }
    public function update($category,CategoryRequest $request)
    {
        $category = $this->service->update($category, $request->validated());
        return redirect()->route('categories.index', ['category' => $category]);
    }
    public function destroy($category)
    {
        $this->service->destroy($category);
        return redirect()->route('categories.index');
    }
}
