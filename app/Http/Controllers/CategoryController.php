<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        return view('category.show_news')->with([
            'categories' => Category::all(),
        ]);
    }


    public function create()
    {
        return view('category.add_news');
    }


    public function store(Request $request)
    {
        $category  = Category::create([
            // 'user_id'=>aut h()->user()->id,
            // "category_id"=>$request->category_id,
            'name' => $request->name,
        ]);

        return redirect()->route('categories.index');
    }

    public function edit(Category $category)
    {
        return view('category.edit_news')->with(['category'=>$category]);
    }


    public function update(Request $request, Category $category)
    {
        // Gate::authorize('update-post', $post);
        $category->update([
            'name' => $request->name,
        ]);
        return redirect()->route('categories.index', ['category' => $category->id]);
    }


    public function destroy(Category $category)
    {

        $category->delete();
        return redirect()->route('categories.index');
    }
}
