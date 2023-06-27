<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('leaders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->constrained();
            $table->text('position')->nullable();
            $table->text('fullname')->nullable();
            $table->text('phone')->nullable();
            $table->string('photo')->nullable();
            $table->text('day')->nullable();
            $table->timestamps();
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('leaders');
    }
};
