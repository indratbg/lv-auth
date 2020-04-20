<?php

namespace App\Http\Controllers\API;

use App\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use \GuzzleHttp\Client;

class AdminLoginController extends Controller
{
    public function login(Request $request)
    {
        $http = new Client;

        try {
            $response = $http->post(config('services.passport.login_endpoint'), [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => config('services.passport.client_id'),
                    'client_secret' => config('services.passport.client_secret'),
                    'username' => $request->email,
                    'password' => $request->password,
                    'provider' => 'admins'
                ]
            ]);

            return json_decode((string) $response->getBody(), true);
        } catch (\GuzzleHttp\Exception\RequestException $e) {
            if ($e->getCode() === 400) {
                abort(400, 'Invalid E-Mail/Password');
                return response()->json(['message' => 'Invalid Request. Please enter a username or a password.' . $e->getCode()]);
            } else if ($e->getCode() === 401) {
                return response()->json(['message' => 'Your credentials are incorrect. Please try again ' . $e->getCode()]);
            }

            return response()->json('Something went wrong on the server.' . $e->getMessage(), $e->getCode());
        }
    }

    public function logout()
    {
        auth('admin')->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out successfully', 200);
    }
}
