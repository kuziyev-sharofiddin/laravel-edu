<?php

namespace App\Service;
use App\Repository\ImageRepository;
use Illuminate\Support\Facades\Storage;

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
        if (isset($data["photo"])) {
            $name = $data["photo"]->getClientOriginalName();
            $path = $data["photo"]->storeAs('post-photos', $name);
        }
        $result = [
            "photo"=> $path
        ];
        $this->repository->create($result);
    }
    public function getById($id)
    {
       return $this->repository->getById($id);
    }
    public function update($id,array $data):bool
    {
        if (isset($data["photo"])){
            if (isset($id->photo)){
                Storage::delete($id->photo);
            }
            $name = $data["photo"]->getClientOriginalName();
            $path = $data["photo"]->storeAs('post-photos', $name);
        }
        $result = [
            'photo' => $path ?? $data['photo'],
        ];
        return $this->repository->update($id,$result);
    }

    public function destroy($id){
        if (isset($id->photo)){
            Storage::delete($id->photo);
        }
        return $this->repository->delete($id);
}
}
