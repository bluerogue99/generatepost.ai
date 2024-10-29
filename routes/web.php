<?php

use App\Http\Controllers\HeadlineGeneratorController;
use App\Http\Controllers\ImageGeneratorController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostGeneratorController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
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
});

/*Public Layout Routes*/
Route::post('/api/generate-post', [PostGeneratorController::class, 'generatePost']);
Route::post('/api/generate-headline', [HeadlineGeneratorController::class, 'generateHeadline']);
Route::post('/api/generate-image', [ImageGeneratorController::class, 'generateImage']);

require __DIR__.'/auth.php';
