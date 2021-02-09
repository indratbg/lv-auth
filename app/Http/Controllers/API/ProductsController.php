<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Products;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function index()
    {

        $subImage = DB::table('img_product')
            ->select('id_product', 'category', DB::raw('MAX(filename) as filename'))
            ->groupBy('id_product', 'category');

        return DB::table('tbl_products')
            ->joinSub($subImage, 'img_product', function ($join) {
                $join->on('img_product.id_product', '=', 'tbl_products.id');
            }, null, null, 'left')
            ->select('tbl_products.*', 'img_product.category', 'img_product.filename')
            ->paginate();
    }

    public function show($id)
    {
        return Products::find($id);
    }

    public function topFour()
    {
        $subImage = DB::table('img_product')
            ->select('id_product', 'category', DB::raw('MAX(filename) as filename'))
            ->groupBy('id_product', 'category');

        return
            DB::table('tbl_products')
            ->joinSub($subImage, 'img_product', function ($join) {
                $join->on('img_product.id_product', '=', 'tbl_products.id');
            }, null, null, 'left')
            ->select('tbl_products.*', 'img_product.category', 'img_product.filename')
            ->take(4)->get();
    }
}
