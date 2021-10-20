<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;

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

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', [AuthController::class, 'login'])->name('login');
    Route::group(['middleware' => 'auth:sanctum'], function () {
        Route::post('logout', [AuthController::class, 'logout'])->name('logout');
        Route::post('logout/all', [AuthController::class, 'logoutAll'])->name('logout.all');
    });
});
Route::group(['prefix' => 'user', 'middleware' => 'auth:sanctum'], function () {
    Route::get('/current', [UserController::class, 'currentUser']);
    Route::get('/', [UserController::class, 'index'])->name('user.index');
    Route::get('/{userId}', [UserController::class, 'show'])->name('user.show');
    Route::post('/', [UserController::class, 'store'])->name('user.store');
    Route::put('/{userId}', [UserController::class, 'update'])->name('user.update');
    Route::delete('/{userId}', [UserController::class, 'destroy'])->name('user.destroy');
});
