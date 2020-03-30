<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\News as News;
use Faker\Generator as Faker;

$factory->define(News::class, function (Faker $faker) {
    return [
        'post_date' => $faker->date(),
        'title' => $faker->sentence(6, false),
        'category' => 'news',
        'body' => $faker->text(),
        'created_by' => $faker->userName,
        'created_at' => now(),
        'updated_at' => now()
    ];
});
