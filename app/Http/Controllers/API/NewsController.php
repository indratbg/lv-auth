<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\NewsCollection;
use App\News;
use Illuminate\Support\Facades\DB;

class NewsController extends Controller
{
    public function index()
    {
        return response()->json(News::orderBy('post_date', 'desc')->paginate(10));
    }

    public function topNews()
    {
        return News::all()->take(10);
    }

    public function show($post_date, $title)
    {

        return News::where('post_date', $post_date)->where('title', $title)->first();
    }
}
