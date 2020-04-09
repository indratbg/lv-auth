<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\User;
use Exception;
use Illuminate\Http\Request;
use Socialite as Socialite;

class SocialiteController extends Controller
{
    public function __construct()
    {
        $this->middleware(['web']);
    }

    /**
     * Redirect the user to the social network authentication page.
     *
     * @return Response
     */
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Obtain the user information from social network
     *
     * @return Response
     */
    public function handleProviderCallback($provider)
    {
        try {

            $user = Socialite::driver($provider)->user();
        } catch (Exception $ex) {
            return response()->json(['errors' => $ex->getMessage()]);
        }

        $userExisting = User::where('email', $user->email)->first();

        if ($userExisting) {

            return redirect('/login');
        } else {
            $newUser = new User();
            $newUser->name = $user->name;
            $newUser->google_id = $user->id;
            $newUser->email = $user->email;
            $newUser->avatar = $user->avatar;
            $newUser->avatar_original = $user->avatar_original;
            $newUser->save();
        }
        return response()->json(['data' => $user]);
    }
}
