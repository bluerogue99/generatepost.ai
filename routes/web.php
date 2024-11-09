<?php

use App\Http\Controllers\AuthHeadlineGeneratorController;
use App\Http\Controllers\AuthImageGeneratorController;
use App\Http\Controllers\AuthPostGeneratorController;
use App\Http\Controllers\HeadlineGeneratorController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ImageGeneratorController;
use App\Http\Controllers\IntegrationController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostGeneratorController;
use Illuminate\Support\Facades\Auth;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

/*Auth Layout Routes*/
Route::get('/generate', function () {
    return Inertia::render('Generate');
})->middleware(['auth', 'verified'])->name('generate');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/analytics', function () {
    return Inertia::render('Analytics');
})->middleware(['auth', 'verified'])->name('analytics');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/integration', [IntegrationController::class, 'index'])->name('integration');
});

/*Facebook Group Function for Integration*/

Route::middleware('auth')->prefix('facebook')->group(function () {
    Route::get('/', [IntegrationController::class, 'indexFacebook']);
    Route::post('/', [IntegrationController::class, 'storeFacebook']);
    Route::get('/{id}', [IntegrationController::class, 'showFacebook']);
    Route::put('/{id}', [IntegrationController::class, 'updateFacebook']);
    Route::delete('/{id}', [IntegrationController::class, 'destroyFacebook']);

    Route::post('/facebook/callback', [IntegrationController::class, 'handleFacebookCallback']);
});



/*Authenticated Layout Routes*/
Route::middleware('auth')->group(function () {
    /*Generate post routes*/
    Route::post('/api/generate-authenticated-post', [AuthPostGeneratorController::class, 'generatePost']);
    Route::post('/api/generate-authenticated-headline', [AuthHeadlineGeneratorController::class, 'generateHeadline']);
    Route::post('/api/generate-authenticated-image', [AuthImageGeneratorController::class, 'generateImage']);
    /*Post CRUD in auth layer*/
    Route::post('/api/posts', [PostController::class, 'store']);
    Route::get('/api/posts', [PostController::class, 'index']);
    Route::delete('/api/posts/{id}', [PostController::class, 'destroy']);
    Route::put('/api/posts/{id}', [PostController::class, 'update']);
});



/*Public Layout Routes*/
Route::post('/api/generate-post', [PostGeneratorController::class, 'generatePost']);
Route::post('/api/generate-headline', [HeadlineGeneratorController::class, 'generateHeadline']);
Route::post('/api/generate-image', [ImageGeneratorController::class, 'generateImage']);

require __DIR__.'/auth.php';
