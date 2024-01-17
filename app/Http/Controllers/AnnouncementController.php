<?php

namespace App\Http\Controllers;

use App\Http\Requests\AnnouncementRequest;
use App\Http\Requests\AnnouncementUpdateRequest;
use App\Service\AnnouncementService;

class AnnouncementController extends Controller
{
    public function __construct(protected AnnouncementService $service)
    {

    }
    public function index()
    {
        $announcements = $this->service->getByPaginate(10);
        return view('announ.show_news')->with(['announcements' => $announcements]);
    }
    public function create()
    {
        return view('announ.add_news');
    }
    public function store(AnnouncementRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('announcements.index');
    }
    public function edit($announcement)
    {
        $announcement = $this->service->getById($announcement);
        return view('announ.edit_news')->with(['announcement'=>$announcement]);
    }
    public function update($announcement, AnnouncementUpdateRequest $request)
    {
        $announcement = $this->service->update($announcement,$request->validated());
        return redirect()->route('announcements.index', ['announcement' => $announcement]);
    }
    public function destroy($announcement)
    {
        $this->service->destroy($announcement);
        return redirect()->route('announcements.index');
    }
}
