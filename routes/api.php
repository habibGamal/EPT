<?php

use App\Http\Controllers\BookController;
use App\Http\Controllers\MeetingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/book/index',[BookController::class,'index']);
Route::post('/save-book',[BookController::class,'store']);
Route::post('/book_update/{book}',[BookController::class,'update']);
Route::post('/book_delete/{book}',[BookController::class,'destroy']);


Route::get('/meeting/index',[MeetingController::class,'index']);
Route::get('/meeting/{meeting}',[MeetingController::class,'show']);
Route::post('/save-meeting',[MeetingController::class,'store']);
Route::post('/update-meeting/{meeting}',[MeetingController::class,'update']);
Route::post('/delete-meeting/{meeting}',[MeetingController::class,'destroy']);
