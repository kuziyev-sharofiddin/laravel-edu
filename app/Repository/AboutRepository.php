<?php

namespace App\Repository;

use App\Models\About;
use App\Repository\BaseRepository;

class AboutRepository extends BaseRepository
{
    public function __construct(About $model)
    {
        parent::__construct($model);
    }
}
