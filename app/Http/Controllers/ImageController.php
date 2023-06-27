<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Image;

class ImageController extends Controller
{

    public function index()
    {
        return view('img.show_news')->with([
            'images' => Image::all(),
        ]);
    }

    public function create()
    {
        return view('img.add_news');
    }


    public function store(Request $request)
    {
        if ($request->hasFile('photo')){
            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }


        $image = Image::create([
            // 'user_id'=>aut h()->user()->id,
            // "category_id"=>$request->category_id,
            'photo' => $path ?? null ,
        ]);

        return redirect()->route('images.index');
    }


    public function edit(Image $image)
    {
        return view('img.edit_news')->with(['image'=>$image]);
    }

    public function update(Request $request, Image $image)
    {
        // Gate::authorize('update-post', $post);

        if ($request->hasFile('photo')){

            if (isset($image->photo)){
                Storage::delete($image->photo);
            }

            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }

        $image->update([
            'photo' => $path ?? $image->photo,
        ]);
        return redirect()->route('images.index', ['image' => $image->id]);
    }

    public function destroy(Image $image)
    {
        if (isset($image->photo)){
            Storage::delete($image->photo);
        }
        $image->delete();
        return redirect()->route('images.index');
    }
}
