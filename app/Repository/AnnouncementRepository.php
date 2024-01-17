<?php

namespace App\Repository;

use App\Models\Announcement;
use App\Repository\BaseRepository;

class AnnouncementRepository extends BaseRepository
{
    public function __construct(Announcement $model)
    {
        parent::__construct($model);
    }
}
