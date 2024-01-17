<?php

namespace App\Repository;

use App\Models\Ferghana;
use App\Repository\BaseRepository;

class FerghanaRepository extends BaseRepository
{
    public function __construct(Ferghana $model)
    {
        parent::__construct($model);
    }
}
