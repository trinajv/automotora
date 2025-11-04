<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CarDetailController;

Route::get('/', function () {
    return view('welcome');
});


Route::get('/', [HomeController::class, 'index']);


Route::get('/auto/{brand}/{model}/{autoid}', [CarDetailController::class, 'getSingleCar'])
    ->name('auto.show');

