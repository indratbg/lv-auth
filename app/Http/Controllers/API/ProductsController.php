<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        return Products::paginate();
    }

    public function show($id)
    {
        return Products::find($id);
    }

    public function topFour()
    {
        return Products::orderBy('created_at','desc')->take(4)->get();
    }
}
