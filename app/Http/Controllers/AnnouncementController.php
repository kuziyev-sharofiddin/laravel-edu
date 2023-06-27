<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Announcement;

class AnnouncementController extends Controller
{

    public function index()
    {
        return view('announ.show_news')->with([
            'announcements' => Announcement::all(),
        ]);
    }


    public function create()
    {
        return view('announ.add_news');
    }


    public function store(Request $request)
    {
        if ($request->hasFile('photo')){
            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }


        $announcement = Announcement::create([
            // 'user_id'=>aut h()->user()->id,
            // "category_id"=>$request->category_id,
            'title' => $request->title,
            'photo' => $path ?? null ,
        ]);

        return redirect()->route('announcements.index');
    }


    public function edit(Announcement $announcement)
    {
        return view('announ.edit_news')->with(['announcement'=>$announcement]);
    }

    public function update(Request $request, Announcement $announcement)
    {
        // Gate::authorize('update-post', $post);

        if ($request->hasFile('photo')){

            if (isset($announcement->photo)){
                Storage::delete($announcement->photo);
            }

            $name = $request->file('photo')->getClientOriginalName();
            $path = $request->file('photo')->storeAs('post-photos', $name);
        }

        $announcement->update([
            'title' => $request->title,
            'photo' => $path ?? $announcement->photo,
        ]);
        return redirect()->route('announcements.index', ['announcement' => $announcement->id]);
    }


    public function destroy(Announcement $announcement)
    {
        if (isset($announcement->photo)){
            Storage::delete($announcement->photo);
        }
        $announcement->delete();
        return redirect()->route('announcements.index');
    }
}
