<?php

namespace App\Service;
use App\Repository\CategoryRepository;

class CategoryService
{
        public function __construct(protected CategoryRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getByPaginate($limit)
    {
        return $this->repository->paginate($limit);
    }

    public function create(array $data){
        $result = [
            "name"=> $data["name"],
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
            "name"=> $data['name'],
        ];
        return $this->repository->update($id,$result);
    }

    public function destroy($id){
        return $this->repository->delete($id);
}
}
