<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Samarkand;

class SamarkandController extends Controller
{

    public function index()
    {
        return view('sam.show_news')->with([
            'samarkands' => Samarkand::all(),
        ]);
    }


    public function create()
    {
        return view('sam.add_news');
    }


    public function store(Request $request)
    {
        if ($request->hasFile('photo')){
            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }


        $post = Samarkand::create([
            // 'user_id'=>aut h()->user()->id,
            // "category_id"=>$request->category_id,
            'title' => $request->title,
            'description' => $request->description,
            'photo' => $path ?? null ,
        ]);

        return redirect()->route('samarkands.index');
    }

    public function edit(Samarkand $samarkand)
    {
        return view('sam.edit_news')->with(['samarkand'=>$samarkand]);
    }


    public function update(Request $request, Samarkand $samarkand)
    {
        // Gate::authorize('update-post', $post);

        if ($request->hasFile('photo')){

            if (isset($samarkand->photo)){
                Storage::delete($samarkand->photo);
            }

            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }

        $samarkand->update([
            'title' => $request->title,
            'description' => $request->description,
            'photo' => $path ?? $samarkand->photo,
        ]);
        return redirect()->route('samarkands.index', ['samarkand' => $samarkand->id]);
    }


    public function destroy(Samarkand $samarkand)
    {
        if (isset($samarkand->photo)){
            Storage::delete($samarkand->photo);
        }
        $samarkand->delete();
        return redirect()->route('samarkands.index');
    }
}
