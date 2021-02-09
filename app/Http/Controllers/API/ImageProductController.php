<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\ImageProducts;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Storage;

class ImageProductController extends Controller
{

    public function store(Request $request)
    {
        if ($request->hasFile('images')) {
            if ($request->validate(['images.*' => 'file|max:1024'], ['images.*.max' => 'Max file 1 Mb'])) {
                foreach ($request->file('images') as $image) {

                    $fileName = Carbon::now()->format('YmdHis') . $image->getClientOriginalName();
                    $path = 'product';
                    Storage::disk('public')->putFileAs($path, $image, $fileName);
                    //store images
                    $model = new ImageProducts();
                    $model->id_product = $request->input('id_product');
                    $model->filename = $fileName;
                    $model->category = 'product';
                    $model->save();
                }
            }
        }

        return response()->json(['message' => 'OK']);
    }

    public function show($id_product)
    {
        return response()->json(ImageProducts::where('id_product', $id_product)->get());
    }
    public function destroy($id)
    {
        //cek images untuk dihapus dari storage
        Storage::disk('public')->delete('product/' . ImageProducts::find($id)->filename);
        ImageProducts::find($id)->delete();
        return response()->json('OK');
    }
}
