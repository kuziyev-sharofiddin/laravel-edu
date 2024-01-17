<?php

namespace App\Repository;

use App\Models\Edu;
use App\Repository\BaseRepository;

class EduRepository extends BaseRepository
{
    public function __construct(Edu $model)
    {
        parent::__construct($model);
    }
}
