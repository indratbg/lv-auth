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
    })->middleware('verified');
    Route::post('/logout', 'AuthController@logout');
});


Route::post('/login', 'AuthController@login');
Route::post('/register', 'AuthController@register');
Route::group(['middleware' => ['auth:api']], function () {
    Route::delete('/logout', 'AuthController@logout');
});

//News
Route::group(['prefix' => 'news'], function () {

    Route::get('/', 'API\NewsController@index');
    Route::get('/topten', 'API\NewsController@topNews');
    Route::get('/{post_date}/{title}', 'API\NewsController@show');
});

//Products
Route::group(['prefix' => 'products'], function () {

    Route::get('/', 'API\ProductsController@index');
    Route::get('/{id}', 'API\ProductsController@show');
});

//Feedback
Route::post('/feedback', 'API\FeedbackController@store');

//VERIFY EMAIL
Route::get('/email/resend', 'API\VerificationController@resend')->name('verification.resend');
Route::get('/email/verify/{id}/{hash}', 'API\VerificationController@verify')->name('verification.verify');

//RESET PASSWORD
Route::post('/password/email', 'API\ForgotPasswordController@sendResetLinkEmail');
Route::post('/password/reset', 'API\ResetPasswordController@reset')->name('password.reset');
