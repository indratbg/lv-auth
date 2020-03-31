<?php

namespace App\Http\Controllers\API;

use App\Feedback;
use App\Http\Controllers\Controller;
use App\Http\Requests\FeedbackRequest;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function store(FeedbackRequest $request)
    {
        $model = new Feedback;
        $model->fill($request->all());
        $model->save();
        return response()->json(['success' => 'Feedback has been sent'], 200);
    }
}
