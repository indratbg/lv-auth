<?php

namespace App\Http\Controllers;

use App\Mail\TestingEmail;
use Exception;
use Illuminate\Http\Request;
use \GuzzleHttp\Client;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Socialite as Socialite;

class AuthController extends Controller
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
                ]
            ]);
            return json_decode((string) $response->getBody(), true);
        } catch (\GuzzleHttp\Exception\RequestException $e) {
            if ($e->getCode() === 400) {
                return response()->json('Invalid Request. Please enter a username or a password.', $e->getCode());
            } else if ($e->getCode() === 401) {
                return response()->json('Your credentials are incorrect. Please try again', $e->getCode());
            }

            return response()->json('Something went wrong on the server.' . $e->getMessage(), $e->getCode());
        }
    }

    public function register(Request $request)
    {

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|required_with:password_confirmation|same:password_confirmation',
            'password_confirmation' => 'required|min:6'
        ]);
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        return  response()->json(['success' => 'User successfully registered'], 200);
    }
    public function logout()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out successfully', 200);
    }

    public function SocialSignup($provider)
    {
        // Socialite will pick response data automatic
        $user = Socialite::driver($provider)->stateless()->user();


        $userExisting = User::where('email', $user->email)->first();

        if ($userExisting) {

            if ($userExisting->google_id == null) {
                return response()->json(['errors' => ['err_code' => '-1', 'message' => 'Please login with google account']]);
            } else {
                return response()->json(['errors' => ['err_code' => '-1', 'message' => 'User has been registered, please login']]);
            }
        } else {
            $newUser = new User();
            $newUser->name = $user->name;
            $newUser->google_id = $user->id;
            $newUser->email = $user->email;
            $newUser->avatar = $user->avatar;
            $newUser->avatar_original = $user->avatar_original;
            $newUser->save();
            $token = $newUser->createToken('socialite')->accessToken;
            return response()->json(['access_token' => $token]);
        }
    }
    public function SocialLogin($provider)
    {
        $user = Socialite::driver($provider)->stateless()->user();
        $token = User::where('email', $user->email)->first()->createToken('socialite')->accessToken;
        //send a email
        Mail::to($user->email)->send(new TestingEmail);

        return response()->json(['access_token' => $token]);
    }
}
