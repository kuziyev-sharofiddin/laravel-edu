<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Requests\PostUpdateRequest;
use App\Service\PostService;

class PostController extends Controller
{
    public function __construct(protected PostService $service)
    {

    }
    public function news(){
        return view('inst.add_news');
    }
    public function store(PostRequest $request)
    {
        $this->service->create($request->all());
        return redirect()->route('inst.show_news');
    }
    public function show(){
        $posts = $this->service->getByPaginate(10);
        return view('inst.show_news')->with(['posts' => $posts,]);
    }
    public function edit($post){
        $post = $this->service->getById($post);
        return view('inst.edit_news')->with(['post'=>$post]);
    }

    public function update($post,PostUpdateRequest $request)
    {
        $post = $this->service->update($post, $request->validated());
        return redirect()->route('inst.show_news', ['post' => $post]);
    }
    public function destroy($post)
    {
        $this->service->destroy($post);
        return redirect()->route('inst.show_news');
    }
}
