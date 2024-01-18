<?php

namespace App\Http\Controllers;

use App\Http\Requests\LeaderRequest;
use App\Http\Requests\LeaderUpdateRequest;
use App\Models\Leader;
use App\Models\Category;
use App\Service\CategoryService;
use App\Service\LeaderService;

class LeaderController extends Controller
{
    public function __construct(protected LeaderService $service, protected CategoryService $categoryService)
    {

    }
    public function index()
    {
        $leaders = $this->service->getByPaginate(10);
        return view('leader.show_news')->with(['leaders' => $leaders]);
    }
    public function create()
    {
        $categories = $this->service->getByPaginate(10);
        return view('leader.add_news')->with([
            'categories' => $categories
        ]);
    }
    public function store(LeaderRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('leaders.index');
    }
    public function edit($leader)
    {
        $leader = $this->service->getById($leader);
        $categories = $this->service->getByPaginate(10);
        return view('leader.edit_news')->with([
        'leader'=>$leader,
        'categories' => $categories
    ]);
    }
    public function update($leader,LeaderUpdateRequest $request)
    {
        $leader = $this->service->update($leader,$request->validated());
        return redirect()->route('leaders.index', ['leader' => $leader]);
    }


    public function destroy($leader)
    {
        $this->service->destroy($leader);
        return redirect()->route('leaders.index');
    }
}
