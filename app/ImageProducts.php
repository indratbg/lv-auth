<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ImageProducts extends Model
{
    protected $table = 'img_product';
    protected $fillable = ['id_product', 'category', 'filename'];
    public $timestamps = false;
}
