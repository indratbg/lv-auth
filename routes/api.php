<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::post('/logout', 'AuthController@logout');
});


Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
Route::group(['middleware' => ['auth:api']], function () {
    Route::delete('/logout', 'AuthController@logout');
});

//News
// Route::resource('/news', 'API\NewsController');
Route::group(['prefix' => 'news'], function () {

    Route::get('/', 'API\NewsController@index');
    Route::get('/{post_date}/{title}', 'API\NewsController@show');
});
