<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', 'FrontController@index')->where('any', '.*');
// Route::get('/', function () {
//     return view('welcome');
// });
// Route::get('/home', 'HomeController@index')->name('home');
// Auth::routes(['verify'=>true]);

Route::post('socialregister/{provider}', 'AuthController@SocialSignup');
Route::post('sociallogin/{provider}', 'AuthController@SocialLogin');
