<?php

namespace App\Repository;

use App\Models\Structure;
use App\Repository\BaseRepository;

class StructureRepository extends BaseRepository
{
    public function __construct(Structure $model)
    {
        parent::__construct($model);
    }
}
