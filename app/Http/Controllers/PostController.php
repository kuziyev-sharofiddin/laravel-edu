<?php

namespace App\Http\Controllers;
// use App\Http\Requests\NewRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function news(){
        return view('inst.add_news');
    }

    public function store(Request $request)
    {
        if ($request->hasFile('photo')){
            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }


        $post = Post::create([
            // 'user_id'=>aut h()->user()->id,
            // "category_id"=>$request->category_id,
            'title' => $request->title,
            'description' => $request->description,
            'photo' => $path ?? null ,
        ]);

        return redirect()->route('inst.show_news');

    }
    public function show(Post $post){
        return view('inst.show_news')->with([
            'posts' => Post::all(),
        ]);
    }

    public function edit(Post $post){
        return view('inst.edit_news')->with(['post'=>$post]);
    }

    public function update(Request $request, Post $post)
    {

        // Gate::authorize('update-post', $post);

        if ($request->hasFile('photo')){

            if (isset($post->photo)){
                Storage::delete($post->photo);
            }

            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }

        $post->update([
            'title' => $request->title,
            'description' => $request->description,
            'photo' => $path ?? $post->photo,
        ]);
        return redirect()->route('inst.show_news', ['post' => $post->id]);

    }

    public function destroy(Post $post)
    {
        if (isset($post->photo)){
            Storage::delete($post->photo);
        }
        $post->delete();
        return redirect()->route('inst.show_news');
    }

}
