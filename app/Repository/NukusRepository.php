<?php

namespace App\Repository;

use App\Models\Nukus;
use App\Repository\BaseRepository;

class NukusRepository extends BaseRepository
{
    public function __construct(Nukus $model)
    {
        parent::__construct($model);
    }
}
