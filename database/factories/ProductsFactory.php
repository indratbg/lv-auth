<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Products;
use Faker\Generator as Faker;

$factory->define(Products::class, function (Faker $faker) {
    return [
        'img_thumbnail' => 'http://localhost/lv-auth/thubnails/example.jpg',
        'product' => $faker->name(),
        'tags' => 'Perlengkapan Rumah',
        'price' => $faker->randomNumber(),
        'desc' => 'Ut anim quis magna sit eiusmod esse. Commodo amet laborum dolore id excepteur dolore est velit voluptate culpa esse duis. Sint ad occaecat ea velit dolor magna. Ipsum mollit in minim non labore ex nulla commodo mollit do. Consectetur ad ullamco laborum deserunt cillum qui mollit ullamco. Laboris officia nostrud aliqua aliquip dolore do cupidatat magna. Officia laborum eu adipisicing magna dolor qui in sint.',
    ];
});
