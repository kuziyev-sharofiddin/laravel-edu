<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Statute;

class StatuteController extends Controller
{
    public function index()
    {
        return view('statute.show_news')->with([
            'statutes' => Statute::all(),
        ]);
    }


    public function create()
    {
        return view('statute.add_news');
    }


    public function store(Request $request)
    {
        $statute  = Statute::create([
            // 'user_id'=>aut h()->user()->id,
            // "category_id"=>$request->category_id,
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return redirect()->route('statutes.index');
    }

    public function edit(Statute $statute)
    {
        return view('statute.edit_news')->with(['statute'=>$statute]);
    }


    public function update(Request $request, Statute $statute)
    {
        // Gate::authorize('update-post', $post);
        $statute->update([
            'title' => $request->title,
            'description' => $request->description,
        ]);
        return redirect()->route('statutes.index', ['statute' => $statute->id]);
    }


    public function destroy(Statute $statute)
    {
        $statute->delete();
        return redirect()->route('statutes.index');
    }
}
