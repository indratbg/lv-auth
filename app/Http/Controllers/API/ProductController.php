<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:admin')->except(['index']);
    }
    public function index()
    {
        return response()->json(Products::orderBy('created_at', 'desc')->get());
    }
    public function store(ProductRequest $request)
    {
        $model = new Products();
        $model->fill($request->all());
        $model->save();
        return response()->json(['message' => 'Succesfully save product'], 200);
    }
    public function destroy($id)
    {
        Products::find($id)->delete();
        return response()->json(['message' => 'Succesfully delete product'], 200);
    }
    public function show($id)
    {
        return response()->json(Products::find($id));
    }
    public function update(ProductRequest $request, $id)
    {
        $model = Products::find($id);
        $model->fill($request->all());
        $model->save();
        return response()->json(['message' => 'Succesfully update product'], 200);
    }
}
