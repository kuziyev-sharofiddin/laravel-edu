<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\About;

class AboutController extends Controller
{
    public function index()
    {
        return view('about.show_news')->with([
            'abouts' => About::all(),
        ]);
    }


    public function create()
    {
        return view('about.add_news');
    }


    public function store(Request $request)
    {
        $about = About::create([
            'user_id'=>auth()->user()->id,
            'title' => $request->title,
            'description' => $request->description,
        ]);

        return redirect()->route('abouts.index');
    }

    public function edit(About $about)
    {
        return view('about.edit_news')->with(['about'=>$about]);
    }


    public function update(Request $request, About $about)
    {
        // Gate::authorize('update-post', $post);
        $about->update([
            'title' => $request->title,
            'description' => $request->description,
        ]);
        return redirect()->route('abouts.index', ['about' => $about->id]);
    }


    public function destroy(About $about)
    {
        if (isset($about->photo)){
            Storage::delete($about->photo);
        }
        $about->delete();
        return redirect()->route('abouts.index');
    }
}
