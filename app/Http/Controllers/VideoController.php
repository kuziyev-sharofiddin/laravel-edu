<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Video;

class VideoController extends Controller
{

    public function index()
    {
        return view('vid.show_news')->with([
            'videos' => Video::all(),
        ]);
    }


    public function create()
    {
        return view('vid.add_news');
    }


    public function store(Request $request)
    {

        if ($request->hasFile('photo')){
            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }

        $video = Video::create([
            // 'user_id'=>aut h()->user()->id,
            // "category_id"=>$request->category_id,
            'title' => $request->title,
            'photo' => $path ?? null ,
            'description' => $request->description,
            'youtube' => $request->youtube
        ]);

        return redirect()->route('videos.index');
    }

    public function edit(Video $video)
    {
        return view('vid.edit_news')->with(['video'=>$video]);
    }


    public function update(Request $request, Video $video)
    {
        // Gate::authorize('update-post', $post);

        if ($request->hasFile('photo')){

            if (isset($video->photo)){
                Storage::delete($video->photo);
            }

            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }


        $video->update([
            'title' => $request->title,
            'photo' => $path ?? $video->photo,
            'description' => $request->description,
            'youtube' => $request->youtube
        ]);
        return redirect()->route('videos.index', ['video' => $video->id]);


    }


    public function destroy(Video $video)
    {

        $video->delete();
        return redirect()->route('videos.index');
    }
}
