<?php

namespace App\Repository;

use App\Models\Statute;
use App\Repository\BaseRepository;
use NunoMaduro\Collision\Adapters\Phpunit\State;

class StatuteRepository extends BaseRepository
{
    public function __construct(Statute $model)
    {
        parent::__construct($model);
    }
}
