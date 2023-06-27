<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Ferghana;

class FerghanaController extends Controller
{

    public function index()
    {
        return view('ferg.show_news')->with([
            'ferghanas' => Ferghana::all()
        ]);
    }


    public function create()
    {
        return view('ferg.add_news');
    }


    public function store(Request $request)
    {
        if ($request->hasFile('photo')){
            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }


        $ferghana = Ferghana::create([
            // 'user_id'=>aut h()->user()->id,
            // "category_id"=>$request->category_id,
            'title' => $request->title,
            'description' => $request->description,
            'photo' => $path ?? null ,
        ]);

        return redirect()->route('ferghanas.index');
    }

    public function edit(Ferghana $ferghana)
    {
        return view('ferg.edit_news')->with(['ferghana'=>$ferghana]);
    }


    public function update(Request $request, Ferghana $ferghana)
    {
        // Gate::authorize('update-post', $post);

        if ($request->hasFile('photo')){

            if (isset($ferghana->photo)){
                Storage::delete($ferghana->photo);
            }

            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }

        $ferghana->update([
            'title' => $request->title,
            'description' => $request->description,
            'photo' => $path ?? $ferghana->photo,
        ]);
        return redirect()->route('ferghanas.index', ['ferghana' => $ferghana->id]);
    }


    public function destroy(Ferghana $ferghana)
    {
        if (isset($ferghana->photo)){
            Storage::delete($ferghana->photo);
        }
        $ferghana->delete();
        return redirect()->route('ferghanas.index');
    }
}
