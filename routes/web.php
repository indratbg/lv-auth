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
// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/{any}', 'FrontController@index')->where('any', '.*');
// Auth::routes();

// Route::get('/home', 'HomeController@index')->name('home');


//Testing
Route::get('/', function () {
    return view('welcome');
});
Route::get('/email', function () {
    return new App\Mail\TestingEmail;
});


//register with google
Route::get('/social/{provider}', 'API\SocialiteController@redirectToProvider')->name('social.google');
Route::get('/social/{provider}/callback', 'API\SocialiteController@handleProviderCallback');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('socialregister/{provider}', 'AuthController@SocialSignup');
Route::post('sociallogin/{provider}', 'AuthController@SocialLogin');
