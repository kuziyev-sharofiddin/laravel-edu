<?php

namespace App\Http\Controllers;
use App\Service\AboutService;
use App\Service\AnnouncementService;
use App\Service\ImageService;
use App\Service\PostService;
use App\Service\VideoService;

class HomeController extends Controller
{
    public function __construct(
    protected PostService $postService,
    protected VideoService $videoService,
    protected ImageService $imageService,
    protected AboutService $aboutService,
    protected AnnouncementService $announcementService,
    )
    {

    }
    public function main(){
        $posts = $this->postService->getByPaginate(10);
        $videos = $this->videoService->getByPaginate(10);
        $images = $this->imageService->getByPaginate(10);
        $announcements = $this->announcementService->getByPaginate(10);
        return view('main.home')->with([
            'posts' => $posts,
            'videos' => $videos,
            'images' => $images,
            'announcements' => $announcements,
        ]);
    }
    public function contact(){
        return view('main.contact');
    }
    public function about(){
        $abouts = $this->aboutService->getByPaginate(10);
        return view('main.institute')->with(['abouts' => $abouts]);
    }
}
