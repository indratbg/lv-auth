<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Footer extends Model
{
    public $table = 'footers';
    protected $fillable = ['type', 'body', 'created_at', 'updated_at'];
}
