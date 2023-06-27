<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PressController;
use App\Http\Controllers\FerghanaController;
use App\Http\Controllers\NukusController;
use App\Http\Controllers\SamarkandController;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\StatuteController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\StructureController;
use App\Http\Controllers\EduController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\LeaderController;
use App\Http\Controllers\ContactController;



Route::get('/', [HomeController::class, 'main'])->name('main.home');
Route::get('/contact', [HomeController::class, 'contact'])->name('main.contact');
Route::get('/about-institute', [HomeController::class, 'about'])->name('main.institute');
Route::get('admin', [AuthController::class, 'login'])->name('admin.login');
Route::post('authenticate', [AuthController::class, 'authenticate'])->name('authenticate');
Route::get('dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');
Route::get('dashboard/add/posts', [PostController::class, 'news'])->name('inst.add_news');
Route::post('dashboard/add/posts', [PostController::class, 'store'])->name('inst.store');
Route::get('dashboard/show/posts', [PostController::class, 'show'])->name('inst.show_news');
Route::get('dashboard/edit/posts/{post}', [PostController::class, 'edit'])->name('inst.edit_news');
Route::delete('dashboard/edit/posts/{post}', [PostController::class, 'destroy'])->name('inst.destroy_news');
Route::put('dashboard/posts/{post}', [PostController::class, 'update'])->name('inst.update');


Route::get('/news', [PressController::class, 'news'])->name('press.news');
Route::get('/fergana-news', [PressController::class, 'fergana'])->name('press.fergana-news');
Route::get('/nukus-news', [PressController::class, 'nukus'])->name('press.nukus-news');
Route::get('/samarkand-news', [PressController::class, 'samarkand'])->name('press.samarkand-news');
Route::get('/video-news', [PressController::class, 'videos'])->name('press.videos');
Route::get('video-details/{video}', [PressController::class, 'videodetails'])->name('press.videodetails');
Route::get('news-details/{post}', [PressController::class, 'news_details'])->name('press.news_details');
Route::get('fergana-news-details/{fergana}', [PressController::class, 'fergana_details'])->name('press.fergana_news_details');
Route::get('samarkand-news-details/{samarkand}', [PressController::class, 'samarkand_details'])->name('press.samarkand_news_details');
Route::get('nukus-news-details/{nukus}', [PressController::class, 'nukus_details'])->name('press.nukus_news_details');
Route::get('image-news', [PressController::class, 'fotos'])->name('press.images');
Route::get('leadership/category_id={category}', [PressController::class, 'information'])->name('press.information');
Route::get('announcement', [PressController::class, 'announcement'])->name('press.announcement');
Route::get('announcement/{announcement}', [PressController::class, 'announcement_details'])->name('press.announcement_details');
Route::get('/about-statute', [PressController::class, 'statute'])->name('press.statute');
Route::get('/about-structure', [PressController::class, 'structure'])->name('press.structure');
Route::get('/about-edusearch', [PressController::class, 'edusearch'])->name('press.edusearch');


Route::resources([
    'ferghanas' => FerghanaController::class,
    'nukuses' => NukusController::class,
    'samarkands' => SamarkandController::class,
    'videos' => VideoController::class,
    'images' => ImageController::class,
    'announcements' => AnnouncementController::class,
    'abouts' => AboutController::class,
    'statutes' => StatuteController::class,
    'structures' => StructureController::class,
    'edus' => EduController::class,
    'categories' => CategoryController::class,
    'leaders' => LeaderController::class,
    'contacts' => ContactController::class,

]);

