<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    protected $table = 'tbl_feedback';
    protected $fillable = ['id', 'name', 'subject', 'email', 'body', 'created_at', 'updated_at'];
}
