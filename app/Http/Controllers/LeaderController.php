<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Leader;
use App\Models\Category;

class LeaderController extends Controller
{
    public function index()
    {
        return view('leader.show_news')->with([
            'leaders' => Leader::all(),
        ]);
    }


    public function create()
    {
        return view('leader.add_news')->with([
            'categories' => Category::all(),
        ]);
    }


    public function store(Request $request)
    {
        if ($request->hasFile('photo')){
            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }

        $leader  = Leader::create([
            // 'user_id'=>aut h()->user()->id,
            "category_id"=>$request->category_id,
            'position' => $request->position,
            'fullname' => $request->fullname,
            'phone' => $request->phone,
            'photo' => $path ?? null ,
            'day' => $request->day,
        ]);

        return redirect()->route('leaders.index');
    }

    public function edit(Leader $leader)
    {
        return view('leader.edit_news')->with([
        'leader'=>$leader,
        'categories' => Category::all()]);
    }


    public function update(Request $request, Leader $leader)
    {
        // Gate::authorize('update-post', $post);

        if ($request->hasFile('photo')){

            if (isset($leader->photo)){
                Storage::delete($leader->photo);
            }

            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }

        $leader->update([
            // 'user_id'=>aut h()->user()->id,
            "category_id"=>$request->category_id,
            'position' => $request->position,
            'fullname' => $request->fullname,
            'phone' => $request->phone,
            'photo' => $path ?? $leader->photo,
            'day' => $request->day,
        ]);
        return redirect()->route('leaders.index', ['leader' => $leader->id]);
    }


    public function destroy(Leader $leader)
    {
        if (isset($leader->photo)){
            Storage::delete($leader->photo);
        }

        $leader->delete();
        return redirect()->route('leaders.index');
    }
}
