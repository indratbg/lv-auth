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
// Route::group(['middleware' => ['auth:api']], function () {
//     Route::delete('/logout', 'AuthController@logout');
// });

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

Route::get('topFour', 'API\ProductsController@topFour');

Route::get('footer/{type}', 'API\FooterController@footer');

//Feedback
Route::post('/feedback', 'API\FeedbackController@store');

//VERIFY EMAIL
Route::get('/email/resend', 'API\VerificationController@resend')->name('verification.resend');
Route::get('/email/verify/{id}/{hash}', 'API\VerificationController@verify')->name('verification.verify');

//RESET PASSWORD
Route::post('/password/email', 'API\ForgotPasswordController@sendResetLinkEmail');
Route::post('/password/reset', 'API\ResetPasswordController@reset')->name('password.reset');



//ADMIN
Route::group(['prefix' => 'admin'], function () {

    Route::post('/adminlogin', 'API\AdminLoginController@login');

    Route::middleware('auth:admin')->group(function () {

        Route::get('/user', function (Request $request) {
            return $request->user();
        });
        Route::post('/adminlogout', 'API\AdminLoginController@logout');
        //News
        Route::post('news/store', 'API\NewsController@store');
        Route::get('news/getEditableNews', 'API\NewsController@getEditableNews');
        Route::get('news/view/{post_date}/{title}', 'API\NewsController@show');
        Route::post('news/update/{post_date}/{title}', 'API\NewsController@update');
        Route::delete('news/delete/{post_date}/{title}', 'API\NewsController@destroy');

        //FOoter
        Route::post('footer/store', 'API\FooterController@store');
        Route::get('footer/getFooters', 'API\FooterController@getFooters');
        Route::get('footer/show/{id}', 'API\FooterController@show');
        Route::post('footer/update/{id}', 'API\FooterController@update');
        Route::delete('footer/delete/{id}', 'API\FooterController@destroy');

        //Product
        Route::get('product/index', 'API\ProductController@index');
        Route::post('product/store', 'API\ProductController@store');
        Route::delete('product/delete/{id}', 'API\ProductController@destroy');
        Route::get('product/view/{id}', 'API\ProductController@show');
        Route::post('product/update/{id}', 'API\ProductController@update');
    });
});
