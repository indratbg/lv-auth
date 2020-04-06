<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\News as News;
use Faker\Generator as Faker;

$factory->define(News::class, function (Faker $faker) {
    return [
        'post_date' => $faker->date(),
        'title' => $faker->sentence(6, false),
        'category' => 'news',
        'body' => 'Occaecat aliquip aliqua eu fugiat labore non irure aute. Anim exercitation id ut aliquip ut nisi reprehenderit dolor laboris laboris in nostrud labore aliquip. Nulla commodo qui labore id pariatur fugiat dolore ipsum exercitation consequat commodo.

Qui anim non incididunt non elit duis occaecat. Ut veniam id quis ea ad excepteur voluptate sit officia sunt laborum sunt magna ex. Quis aliquip dolor nulla tempor ullamco non. Dolor proident ad dolor nisi dolore sit sint ut reprehenderit ut commodo. Esse enim dolor pariatur ullamco elit esse amet laboris labore sint. Elit excepteur in occaecat velit excepteur et laborum labore culpa eiusmod anim irure Lorem est.

Sunt ea sunt incididunt aliqua cillum ipsum eiusmod et exercitation est reprehenderit enim minim. Et incididunt velit elit velit et irure laboris sit magna ea veniam. Pariatur enim consequat proident consectetur reprehenderit culpa do veniam ipsum fugiat id deserunt. Esse ipsum pariatur do ex eu esse enim id. Aute eu ad pariatur duis laboris commodo et voluptate non sunt ut. Reprehenderit excepteur Lorem nostrud excepteur ad velit amet. Pariatur eu eu quis enim excepteur exercitation anim aute id enim ipsum dolor veniam.

Amet consequat enim id nostrud eu sit. Qui ut ullamco aliqua Lorem occaecat minim dolore Lorem culpa nulla sint Lorem tempor sit. Ipsum duis irure voluptate laborum fugiat veniam ea ullamco aliquip. Aliqua laborum pariatur pariatur aliqua proident consectetur. Pariatur elit consequat duis adipisicing. Ipsum non eu quis in enim eu excepteur dolore non ad incididunt minim. Nisi irure commodo nostrud excepteur labore ea.

Qui aute labore do qui est veniam ullamco officia adipisicing. Consectetur sint ullamco quis ut reprehenderit. Officia enim voluptate aliquip adipisicing excepteur est. Ex ut ex nisi id exercitation in culpa cupidatat incididunt sunt ipsum incididunt. Deserunt quis labore nulla pariatur amet anim enim in in est do cillum. Laborum do enim id mollit elit officia ipsum commodo laborum eu irure. Amet ut eu qui proident consectetur amet consequat Lorem reprehenderit culpa nostrud quis.

Pariatur id elit labore nostrud nostrud est deserunt. Occaecat ut velit culpa elit excepteur nostrud id id nisi cillum. Tempor in ex velit sit adipisicing occaecat eu ea nostrud. Velit culpa eu aute culpa incididunt reprehenderit mollit do esse sunt do velit. Aliqua ea consequat adipisicing irure voluptate sit sit ullamco et. Ad labore non pariatur ad ea eiusmod proident.

Laboris nisi ex sunt consequat deserunt mollit. Ipsum nostrud duis exercitation ex fugiat eiusmod culpa quis pariatur ex. Ut eu pariatur labore dolore ipsum incididunt fugiat nostrud veniam culpa quis excepteur. Exercitation elit ex deserunt consequat incididunt cupidatat labore tempor aliqua. Esse veniam officia pariatur adipisicing aliquip eu qui labore sunt non adipisicing nostrud veniam. Consectetur aliqua consectetur est quis ullamco laboris ut.

Quis proident voluptate veniam nostrud. Officia non magna fugiat anim voluptate incididunt excepteur. Ex Lorem do sit aute ea magna consequat aute enim. Laboris elit commodo tempor occaecat aliqua.

Lorem consectetur ut cupidatat quis non nisi mollit proident laboris. Et commodo Lorem id consequat quis fugiat adipisicing non. Enim aliquip duis sit deserunt esse ad sint et. Cupidatat tempor elit voluptate velit laborum excepteur irure minim Lorem ad cupidatat deserunt eiusmod. Pariatur reprehenderit amet aliqua id. Cupidatat tempor consequat nulla consectetur velit magna.

Occaecat deserunt deserunt velit enim deserunt. Velit dolor ipsum sit Lorem eiusmod officia. Ex excepteur tempor excepteur commodo quis irure excepteur nisi. Et ad sit velit reprehenderit proident reprehenderit enim veniam. Elit ullamco laborum officia in in non deserunt commodo cillum enim.',
        'created_by' => $faker->userName,
        'created_at' => now(),
        'updated_at' => now()
    ];
});
