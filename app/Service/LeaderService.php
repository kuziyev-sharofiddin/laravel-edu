<?php

namespace App\Service;
use App\Repository\LeaderRepository;
use Illuminate\Support\Facades\Storage;

class LeaderService
{
    public function __construct(protected LeaderRepository $repository)
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
            'category_id' => $this->getByCategoryId($id),
            "position"=> $data["position"],
            'fullname' => $data["fullname"],
            'phone' => $data["phone"],
            "photo"=> $path,
            'day' => $data["day"],
        ];
        $this->repository->create($result);
    }

    public function getById($id)
    {
       return $this->repository->getById($id);
    }
    public function getByCategoryId($id)
    {
       return $this->repository->getByCategoryId($id);
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
            'category_id' => $this->getByCategoryId($id),
            "position"=> $data["position"],
            'fullname' => $data["fullname"],
            'phone' => $data["phone"],
            "photo"=> $path ?? $data["photo"],
            'day' => $data["day"],
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
