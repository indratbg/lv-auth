<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsRequest;
use Illuminate\Http\Request;
use App\Http\Resources\NewsCollection;
use App\News;
use Illuminate\Support\Facades\DB;

class NewsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin')->except(['index', 'topNews', 'show']);
    }

    public function index()
    {
        return response()->json(News::orderBy('created_at', 'desc')->paginate(10));
    }

    public function topNews()
    {
        return News::all()->take(10);
    }

    public function show($post_date, $title)
    {

        return News::where('post_date', $post_date)->where('title', $title)->first();
    }
    public function store(NewsRequest $request)
    {
        $model = new News();
        $model->created_by = auth('admin')->user()->name;
        $model->fill($request->all());
        $model->save();
        return response(['message' => 'News successfully saved']);
    }
}
