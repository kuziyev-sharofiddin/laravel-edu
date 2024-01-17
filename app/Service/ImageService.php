<?php

namespace App\Service;
use App\Repository\ImageRepository;

class ImageService
{
        public function __construct(protected ImageRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getByPaginate($limit)
    {
        return $this->repository->paginate($limit);
    }

    public function create(array $data){
        $result = [
            ""=> $data[""],
        ];
        $this->repository->create($result);
    }

    public function getById($id)
    {
       return $this->repository->getById($id);
    }
    public function update(array $data, $id){

        $result = [
            ""=> $data[''],
        ];
        return $this->repository->update($result, $id);
    }

    public function destroy($id){
        return $this->repository->delete($id);
}
}
