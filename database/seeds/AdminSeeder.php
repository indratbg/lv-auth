<?php

use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admin')->insert(['name' => 'Indra', 'email' => 'indra.tbg@gmail.com', 'password' => bcrypt('secret'), 'created_at' => now(), 'updated_at' => now()]);
    }
}
