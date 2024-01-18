<?php

namespace App\Http\Controllers;

use App\Http\Requests\LeaderRequest;
use App\Http\Requests\LeaderUpdateRequest;
use App\Models\Leader;
use App\Models\Category;
use App\Service\LeaderService;

class LeaderController extends Controller
{
    public function __construct(protected LeaderService $service)
    {

    }
    public function index()
    {
        $leaders = $this->service->getByPaginate(10);
        return view('leader.show_news')->with(['leaders' => $leaders]);
    }
    public function create()
    {
        return view('leader.add_news')->with([
            'categories' => Category::all(),
        ]);
    }
    public function store(LeaderRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('leaders.index');
    }
    public function edit(Leader $leader)
    {
        $leader = $this->service->getById($leader);
        return view('leader.edit_news')->with([
        'leader'=>$leader,
        'categories' => Category::all()]);
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
