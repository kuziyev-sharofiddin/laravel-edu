<?php

namespace App\Http\Controllers;

use App\Http\Requests\VideoRequest;
use App\Http\Requests\VideoUpdateRequest;
use Illuminate\Http\Request;
use App\Service\VideoService;

class VideoController extends Controller
{
    public function __construct(protected VideoService $service)
    {

    }
    public function index()
    {
        $ferghanas = $this->service->getByPaginate(10);
        return view('vid.show_news')->with(['ferghanas' => $ferghanas]);
    }
    public function create()
    {
        return view('vid.add_news');
    }
    public function store(VideoRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('videos.index');
    }
    public function edit($video)
    {
        $video = $this->service->getById($video);
        return view('vid.edit_news')->with(['video'=>$video]);
    }
    public function update($video,VideoUpdateRequest $request)
    {
        $video = $this->service->update($video,$request->validated());
        return redirect()->route('videos.index', ['video' => $video]);
    }
    public function destroy($video)
    {
        $this->service->destroy($video);
        return redirect()->route('videos.index');
    }
}
