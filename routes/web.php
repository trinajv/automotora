<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\CarDetailController;
use App\Http\Controllers\ContactController;


Route::get('/', function () {
    return view('welcome');
});


Route::get('/', [HomeController::class, 'index']);


Route::get('/auto/{brand}/{model}/{autoid}', [CarDetailController::class, 'getSingleCar'])
    ->name('auto.show');


Route::get('/contacto', [ContactController::class, 'index'])->name('contact.index');
Route::post('/contacto', [ContactController::class, 'send'])->name('contact.send');
