<?php

namespace App\Repository;

use App\Models\Samarkand;
use App\Repository\BaseRepository;

class SamarkandRepository extends BaseRepository
{
    public function __construct(Samarkand $model)
    {
        parent::__construct($model);
    }
}
