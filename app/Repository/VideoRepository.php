<?php

namespace App\Repository;

use App\Models\Video;
use App\Repository\BaseRepository;

class VideoRepository extends BaseRepository
{
    public function __construct(Video $model)
    {
        parent::__construct($model);
    }
}
