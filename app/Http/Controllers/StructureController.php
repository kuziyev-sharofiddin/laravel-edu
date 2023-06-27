<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Structure;

class StructureController extends Controller
{
    public function index()
    {
        return view('structure.show_news')->with([
            'structures' => Structure::all(),
        ]);
    }


    public function create()
    {
        return view('structure.add_news');
    }


    public function store(Request $request)
    {
        $structure  = Structure::create([
            // 'user_id'=>aut h()->user()->id,
            // "category_id"=>$request->category_id,
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return redirect()->route('structures.index');
    }

    public function edit(Structure $structure)
    {
        return view('structure.edit_news')->with(['structure'=>$structure]);
    }


    public function update(Request $request, Structure $structure)
    {
        // Gate::authorize('update-post', $post);
        $structure->update([
            'title' => $request->title,
            'description' => $request->description,
        ]);
        return redirect()->route('structures.index', ['structure' => $structure->id]);
    }


    public function destroy(Structure $structure)
    {

        $structure->delete();
        return redirect()->route('structures.index');
    }
}
