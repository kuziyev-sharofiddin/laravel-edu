<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Nukus;
use App\Models\Ferghana;
use App\Models\Samarkand;
use App\Models\Video;
use App\Models\Statute;
use App\Models\Image;
use App\Models\Category;
use App\Models\Structure;
use App\Models\Edu;
use App\Models\Announcement;

class PressController extends Controller
{
    public function news(){
        return view('press.news')->with([
            'posts' => Post::all(),
        ]);
    }

    public function nukus(){
        return view('press.nukus-news')->with([
            'nukuses' => Nukus::all(),
        ]);
    }

    public function fergana(){
        return view('press.fergana-news')->with([
            'ferganes' => Ferghana::all(),
        ]);
    }

    public function samarkand(){
        return view('press.samarkand-news')->with([
            'samarkands' => Samarkand::all(),
        ]);
    }

    public function videos(){
        return view('press.videos')->with([
            'videos' => Video::all(),
        ]);
    }

    public function videodetails(Video $video){
        return view('press.video-details')->with([
            'video' => $video,
            'recent_videos' => Video::latest()->get()->except($video->id)->take(2),
    ]);
    }

    public function news_details(Post $post){
        return view('press.news-details')->with([
            'post' => $post,
            'recent_posts' => Post::latest()->get()->except($post->id)->take(6),
    ]);
    }

    public function fergana_details(Ferghana $fergana){
        return view('press.fergana-news-details')->with([
            'fergana' => $fergana,
            'recent_ferganes' => Ferghana::latest()->get()->except($fergana->id)->take(6),
    ]);
    }

    public function samarkand_details(Samarkand $samarkand){
        return view('press.samar-news-details')->with([
            'samarkand' => $samarkand,
            'recent_samarkands' => Samarkand::latest()->get()->except($samarkand->id)->take(6),
    ]);
    }

    public function nukus_details(Nukus $nukus){
        return view('press.nukus-news-details')->with([
            'nukus' => $nukus,
            'recent_nukuses' => Nukus::latest()->get()->except($nukus->id)->take(6),
    ]);
    }

    public function fotos(){
        return view('press.fotos')->with([
            'fotos' => Image::all(),
    ]);
    }

    public function information(Category $category){

        return view('press.information')->with([
            'category' => $category,
            'categories' => Category::all()
    ]);
    }

    public function announcement_details(Announcement $announcement){

        return view('press.announcement_details')->with([
            'announcement' => $announcement,
            'recent_announcement' => Announcement::latest()->get()->except($announcement->id)->take(3),
    ]);
    }

    public function announcement(){
        return view('press.announce')->with([
            'announcements' => Announcement::all(),
        ]);
    }

    public function statute(){
        return view('press.statute')->with([
            'statutes' => Statute::all(),
        ]);
    }

    public function structure(){
        return view('press.structure')->with([
            'structures' => Structure::all(),
        ]);
    }

    public function edusearch(){
        return view('press.edusearch')->with([
            'edusearchs' => Edu::all(),
        ]);
    }

}

