<?php

namespace App\Http\Controllers;
use App\Service\AnnouncementService;
use App\Service\AboutService;
use App\Service\CategoryService;
use App\Service\EduService;
use App\Service\FerghanaService;
use App\Service\ImageService;
use App\Service\NukusService;
use App\Service\PostService;
use App\Service\SamarkandService;
use App\Service\StatuteService;
use App\Service\StructureService;
use App\Service\VideoService;

class PressController extends Controller
{
    public function __construct(
        protected PostService $postService,
        protected StatuteService $statuteService,
        protected VideoService $videoService,
        protected ImageService $imageService,
        protected AboutService $aboutService,
        protected CategoryService $categoryService,
        protected EduService $eduService,
        protected NukusService $nukusService,
        protected StructureService $structureService,
        protected FerghanaService $ferghanaService,
        protected SamarkandService $samarkandService,
        protected AnnouncementService $announcementService,
        )
        {

        }
    public function news(){
        $posts = $this->postService->getByPaginate(10);
        return view('press.news')->with(['posts' => $posts]);
    }

    public function nukus(){
        $nukuses = $this->nukusService->getByPaginate(10);
        return view('press.nukus-news')->with(['nukuses' => $nukuses]);
    }

    public function fergana(){
        $ferganes = $this->ferghanaService->getByPaginate(10);
        return view('press.fergana-news')->with(['ferganes' => $ferganes]);
    }

    public function samarkand(){
        $samarkands = $this->samarkandService->getByPaginate(10);
        return view('press.samarkand-news')->with(['samarkands' => $samarkands]);
    }

    public function videos(){
        $videos = $this->videoService->getByPaginate(10);
        return view('press.videos')->with(['videos' => $videos]);
    }

    public function videodetails($video){
        $video = $this->videoService->getById($video);
        $recent_videos = $this->videoService->getLatestById($video);
        return view('press.video-details')->with([
            'video' => $video,
            'recent_videos' => $recent_videos
    ]);
    }

    public function news_details($post){
        $post = $this->postService->getById($post);
        $recent_posts = $this->postService->getLatestById($post);
        return view('press.news-details')->with([
            'post' => $post,
            'recent_posts' => $recent_posts
    ]);
    }
    public function fergana_details($fergana){
        $fergana = $this->ferghanaService->getById($fergana);
        $recent_ferganes = $this->ferghanaService->getLatestById($fergana);
        return view('press.fergana-news-details')->with([
            'fergana' => $fergana,
            'recent_ferganes' => $recent_ferganes
    ]);
    }
    public function samarkand_details($samarkand){
        $samarkand = $this->samarkandService->getById($samarkand);
        $recent_samarkands = $this->samarkandService->getLatestById($samarkand);
        return view('press.samar-news-details')->with([
            'samarkand' => $samarkand,
            'recent_samarkands' => $recent_samarkands
    ]);
    }
    public function nukus_details($nukus){
        $nukus = $this->nukusService->getById($nukus);
        $recent_nukuses = $this->nukusService->getLatestById($nukus);
        return view('press.nukus-news-details')->with([
            'nukus' => $nukus,
            'recent_nukuses' => $recent_nukuses
    ]);
    }
    public function fotos(){
        $fotos = $this->imageService->getByPaginate(10);
        return view('press.fotos')->with([
            'fotos' => $fotos,
    ]);
    }
    public function information($category){
        $category = $this->categoryService->getById($category);
        $categories = $this->categoryService->getByPaginate(10);
        return view('press.information')->with([
            'category' => $category,
            'categories' => $categories
    ]);
    }
    public function announcement_details($announcement){
        $announcement = $this->announcementService->getById($announcement);
        $recent_announcement = $this->announcementService->getLatestById($announcement);
        return view('press.announcement_details')->with([
            'announcement' => $announcement,
            'recent_announcement' => $recent_announcement
    ]);
    }
    public function announcement(){
        $announcements = $this->announcementService->getByPaginate(10);
        return view('press.announce')->with(['announcements' => $announcements]);
    }
    public function statute(){
        $statutes = $this->statuteService->getByPaginate(10);
        return view('press.statute')->with(['statutes' => $statutes]);
    }
    public function structure(){
        $structures = $this->structureService->getByPaginate(10);
        return view('press.structure')->with(['structures' => $structures]);
    }
    public function edusearch(){
        $edusearchs = $this->eduService->getByPaginate(10);
        return view('press.edusearch')->with(['edusearchs' => $edusearchs]);
    }
}

