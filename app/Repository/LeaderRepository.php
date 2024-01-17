<?php

namespace App\Repository;

use App\Models\Leader;
use App\Repository\BaseRepository;

class LeaderRepository extends BaseRepository
{
    public function __construct(Leader $model)
    {
        parent::__construct($model);
    }
}
