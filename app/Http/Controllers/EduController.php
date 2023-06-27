<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Edu;

class EduController extends Controller
{
    public function index()
    {
        return view('edu.show_news')->with([
            'edus' => Edu::all(),
        ]);
    }


    public function create()
    {
        return view('edu.add_news');
    }


    public function store(Request $request)
    {
        $edu  = Edu::create([
            // 'user_id'=>aut h()->user()->id,
            // "category_id"=>$request->category_id,
            'fullname' => $request->fullname,
            'theme' => $request->theme,
            'leader' => $request->leader,
            'address' => $request->address,
        ]);

        return redirect()->route('edus.index');
    }

    public function edit(Edu $edu)
    {
        return view('edu.edit_news')->with(['edu'=>$edu]);
    }


    public function update(Request $request, Edu $edu)
    {
        // Gate::authorize('update-post', $post);
        $edu->update([
            // 'user_id'=>aut h()->user()->id,
            // "category_id"=>$request->category_id,
            'fullname' => $request->fullname,
            'theme' => $request->theme,
            'leader' => $request->leader,
            'address' => $request->address,
        ]);
        return redirect()->route('edus.index', ['edu' => $edu->id]);
    }


    public function destroy(Edu $edu)
    {

        $edu->delete();
        return redirect()->route('edus.index');
    }
}
