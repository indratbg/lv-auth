<?php

namespace App\Http\Controllers\API;

use App\Footer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FooterController extends Controller
{
    public function footer($type)
    {
        return Footer::where('type', $type)->orderBy('created_at', 'desc')->get();
    }
    public function store(Request $request)
    {

        $valid = $request->validate(['type' => 'required', 'body' => 'required']);

        if ($valid) {
            $model = new Footer();
            $model->fill($request->all());
            $model->save();
            return response()->json(['success' => 'Footer save successfully'], 200);
        }
    }
    public function getFooters()
    {
        return response()->json(Footer::all());
    }
    public function show($id)
    {
        return response()->json(Footer::find($id), 200);
    }
    public function update(Request $request, $id)
    {
        $model = Footer::find($id);
        $model->fill($request->all());
        $model->save();
        return response()->json(['message' => 'Footer Successfully updated']);
    }
    public function destroy($id)
    {
        Footer::find($id)->delete();
        return response()->json(['message' => 'Footer Successfully deleted']);
    }
}
