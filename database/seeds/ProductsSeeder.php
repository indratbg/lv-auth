<?php

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tbl_products')->insert([
            ['product' => 'Gelas Luminarc', 'tags' => 'Perlengkapan Dapur', 'desc' => 'Commodo pariatur ullamco velit nostrud nisi fugiat duis excepteur enim ut anim. Deserunt adipisicing sit ullamco tempor aliqua elit sit pariatur quis. Ex elit dolor dolor laborum culpa enim exercitation laborum voluptate.', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['product' => 'Piring Luminarc', 'tags' => 'Perlengkapan Dapur', 'desc' => 'Commodo pariatur ullamco velit nostrud nisi fugiat duis excepteur enim ut anim. Deserunt adipisicing sit ullamco tempor aliqua elit sit pariatur quis. Ex elit dolor dolor laborum culpa enim exercitation laborum voluptate.', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
            ['product' => 'Mangkok Luminarc', 'tags' => 'Perlengkapan Dapur', 'desc' => 'Commodo pariatur ullamco velit nostrud nisi fugiat duis excepteur enim ut anim. Deserunt adipisicing sit ullamco tempor aliqua elit sit pariatur quis. Ex elit dolor dolor laborum culpa enim exercitation laborum voluptate.', 'created_at' => Carbon::now(), 'updated_at' => Carbon::now()],
        ]);
    }
}
