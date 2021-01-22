<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Footer;
use App\Model;
use Faker\Generator as Faker;

$factory->define(Footer::class, function (Faker $faker) {
    return [
        'type'=>'right',
        'body'=>$faker->paragraph(3),
        'created_at'=>$faker->dateTime('now'),
        'updated_at'=>$faker->dateTime('now')
    ];
});
