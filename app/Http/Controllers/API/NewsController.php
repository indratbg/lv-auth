<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\NewsCollection;
use App\News;

class NewsController extends Controller
{
    public function index()
    {
        return response()->json(News::paginate());
    }
    public function show($post_date, $title)
    {

        return News::where('post_date', $post_date)->where('title', $title)->first();
    }
}
