<?php

namespace App\Service;
use App\Repository\StructureRepository;

class StructureService
{
    public function __construct(protected StructureRepository $repository)
    {
        $this->repository = $repository;
    }
    public function getByPaginate($limit)
    {
        return $this->repository->paginate($limit);
    }
    public function create(array $data){
        $result = [
            "title"=> $data["title"],
            "description"=> $data["description"],
        ];
        $this->repository->create($result);
    }
    public function getById($id)
    {
       return $this->repository->getById($id);
    }
    public function update($id,array $data){
        $result = [
            "title"=> $data["title"],
            "description"=> $data["description"],
        ];
        return $this->repository->update($id,$result);
    }
    public function destroy($id){
        return $this->repository->delete($id);
}
}
