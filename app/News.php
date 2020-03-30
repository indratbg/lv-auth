<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    protected $table = 'tbl_news';
    protected $fillable = ['post_date', 'title', 'category', 'body', 'created_by', 'created_at', 'updated_at'];
    protected $perPage = 10;
}
