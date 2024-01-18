<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
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



Route::get('dashboard', [AdminController::class, 'dashboard'])->name('admin.dashboard');


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

