<?php

namespace App\Http\Controllers;
use App\Models\About;
use App\Models\Post;
use App\Models\Video;
use App\Models\Image;
use App\Models\Announcement;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    // public function laymain(){
    //     return view('components.layouts.main')->with([
    //         'categories' => Category::all(),
    //     ]);
    // }

    public function main(){
        return view('main.home')->with([
            'posts' => Post::all(),
            'videos' => Video::all(),
            'images' => Image::all(),
            'announcements' => Announcement::all(),
        ]);
    }

    public function contact(){
        return view('main.contact');
    }

    public function about(){
        return view('main.institute')->with([
            'abouts' => About::all(),
        ]);
    }
}
