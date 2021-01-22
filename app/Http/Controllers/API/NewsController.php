<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsRequest;
use Illuminate\Http\Request;
use App\Http\Resources\NewsCollection;
use App\News;
use Illuminate\Support\Facades\DB;
use App\Traits\CompositeKey;

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
        return response()->json(News::where('post_date', $post_date)->where('title', $title)->first(), 200);
    }
    public function store(NewsRequest $request)
    {
        $model = new News();
        $model->created_by = auth('admin')->user()->name;
        $model->fill($request->all());
        $model->save();
        return response(['message' => 'News successfully saved']);
    }

    public function getEditableNews()
    {
        return response()->json(News::select(['post_date', 'title', 'category', 'created_at'])->orderBy('created_at', 'desc')->get());
    }
    public function update(NewsRequest $request, $post_date, $title)
    {
        $model = News::where('post_date', $post_date)->where('title', $title)->update([
            'post_date' => $request->input('post_date'),
            'title' => $request->input('title'),
            'category' => $request->input('category'),
            'body' => $request->input('body')
        ]);
        return response(['message' => 'News successfully update']);
    }

    public function destroy($post_date, $title)
    {
        News::where('post_date', $post_date)->where('title', $title)->delete();
        return response(['message' => 'News successfully delete']);
    }
}
