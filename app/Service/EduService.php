<?php

namespace App\Service;
use App\Repository\EduRepository;

class EduService
{
    public function __construct(protected EduRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getByPaginate($limit)
    {
        return $this->repository->paginate($limit);
    }

    public function create(array $data){
        $result = [
            "fullname"=> $data["fullname"],
            "theme"=> $data["theme"],
            "leader"=> $data["leader"],
            "address"=> $data["address"],
        ];
        $this->repository->create($result);
    }

    public function getById($id)
    {
       return $this->repository->getById($id);
    }
    public function update($id, array $data){
        $result = [
            "fullname"=> $data["fullname"],
            "theme"=> $data["theme"],
            "leader"=> $data["leader"],
            "address"=> $data["address"],
        ];
        return $this->repository->update($id,$result);
    }

    public function destroy($id){
        return $this->repository->delete($id);
}
}
