<?php

namespace App\Service;
use App\Repository\AboutRepository;

class AboutService
{
    public function __construct(protected AboutRepository $repository)
    {
        $this->repository = $repository;
    }
    public function getByPaginate($limit)
    {
        return $this->repository->paginate($limit);
    }

    public function create(array $data){
        $result = [
            // 'user_id'=>auth()->user()->id,
            "title"=> $data["title"],
            "description"=> $data["description"],
        ];
        $this->repository->create($result);
    }

    public function getById($id)
    {
       return $this->repository->getById($id);
    }
    public function update($id,array $data):bool
    {
        $result = [
           // 'user_id'=>auth()->user()->id,
           "title"=> $data["title"],
           "description"=> $data["description"],
        ];
        return $this->repository->update($id,$result);
    }
    public function destroy($id){
        return $this->repository->delete($id);
}
}
