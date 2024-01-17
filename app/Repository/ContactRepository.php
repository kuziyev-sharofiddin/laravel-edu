<?php

namespace App\Repository;

use App\Models\Contact;
use App\Repository\BaseRepository;

class ContactRepository extends BaseRepository
{
    public function __construct(Contact $model)
    {
        parent::__construct($model);
    }
}
