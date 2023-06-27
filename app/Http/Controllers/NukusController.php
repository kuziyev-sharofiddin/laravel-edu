<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Nukus;

class NukusController extends Controller
{

    public function index()
    {
        return view('nukus.show_news')->with([
            'nukuses' => Nukus::all(),
        ]);
    }


    public function create()
    {
        return view('nukus.add_news');
    }


    public function store(Request $request)
    {
        if ($request->hasFile('photo')){
            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }


        $post = Nukus::create([
            // 'user_id'=>aut h()->user()->id,
            // "category_id"=>$request->category_id,
            'title' => $request->title,
            'description' => $request->description,
            'photo' => $path ?? null ,
        ]);

        return redirect()->route('nukuses.index');
    }

    public function edit(Nukus $nukus)
    {
        return view('nukus.edit_news')->with(['nukus'=>$nukus]);
    }


    public function update(Request $request, Nukus $nukus)
    {
        // Gate::authorize('update-post', $post);

        if ($request->hasFile('photo')){

            if (isset($nukus->photo)){
                Storage::delete($nukus->photo);
            }

            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }

        $nukus->update([
            'title' => $request->title,
            'description' => $request->description,
            'photo' => $path ?? $nukus->photo,
        ]);
        return redirect()->route('nukuses.index', ['nukus' => $nukus->id]);
    }


    public function destroy(Nukus $nukus)
    {
        if (isset($nukus->photo)){
            Storage::delete($nukus->photo);
        }
        $nukus->delete();
        return redirect()->route('nukuses.index');
    }
}
