<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $table = 'tbl_products';
    protected $fillable = ['product', 'tags', 'desc', 'created_at', 'updated_at'];
    protected $perPage = 12;
}
