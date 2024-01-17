<?php

namespace App\Service;
use App\Repository\ContactRepository;

class ContactService
{
    public function __construct(protected ContactRepository $repository)
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
            "email"=> $data["email"],
            "phone"=> $data["phone"],
            "comment"=> $data["comment"],
        ];
        $this->repository->create($result);
    }
    public function destroy($id){
        return $this->repository->delete($id);
}
}
