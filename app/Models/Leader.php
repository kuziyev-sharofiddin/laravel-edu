<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
USE Illuminate\Database\Eloquent\Relations\BelongsTo;

class Leader extends Model
{
    use HasFactory;

    protected $fillable = ['category_id', 'position', 'fullname', 'phone', 'photo', 'day'];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
}
