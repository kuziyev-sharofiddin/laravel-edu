<?php

namespace App\Repository;

use App\Models\Image;
use App\Repository\BaseRepository;

class ImageRepository extends BaseRepository
{
    public function __construct(Image $model)
    {
        parent::__construct($model);
    }
}
