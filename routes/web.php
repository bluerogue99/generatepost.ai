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
use Inertia\Inertia;
use App\Http\Controllers\PostGeneratorController;
use App\Http\Controllers\SubscriptionController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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



Route::get('/subscription', [SubscriptionController::class, 'index'])->name('subscription');
// Route::post('/create-checkout-session', [SubscriptionController::class, 'createCheckoutSession']);

Route::middleware('auth:sanctum')->get('/subscription-status', [SubscriptionController::class, 'getSubscriptionStatus']);
// Route::post('/cancel-subscription', [SubscriptionController::class, 'cancelledbyuser']);
// Route::post('/stripe-webhook', [SubscriptionController::class, 'webhook']);


// Checkout page
Route::get('/subscriptions', function(Request $request) {
    $user = $request->user();
    $intent = $user->createSetupIntent();
    return view ('subscriptions', compact('intent'));
});

// Create a sub
Route::post('/subscriptions/create', function(Request $request) {

    $request->user()->newSubscription(
        'default', 'price_1QLPvQRtESZgc9O9QPpFSd12'
    )->create($request->payment_method);
    return Inertia::render('SubscriptionSuccess');
})->name('subscriptions.create');

// Cancel with Grace period of 30 days
Route::get('/subscriptions/cancel', function(Request $request) {
    $user = $request->user();
    $activeDefaultSubscription = $user->subscription('default'); 
    $activeDefaultSubscription->cancel();
    return Inertia::render('SubscriptionCancel');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/integration', [IntegrationController::class, 'index'])->name('integration');
});

/*Facebook Group Function for Integration*/
/*
Route::middleware('auth')->prefix('facebook')->group(function () {
    Route::get('/', [IntegrationController::class, 'indexFacebook']);
    Route::post('/', [IntegrationController::class, 'storeFacebook']);
    Route::get('/{id}', [IntegrationController::class, 'showFacebook']);
    Route::put('/{id}', [IntegrationController::class, 'updateFacebook']);
    Route::delete('/{id}', [IntegrationController::class, 'destroyFacebook']);
    Route::post('/facebook/callback', [IntegrationController::class, 'handleFacebookCallback']);
});
*/

/*FAQ*/
Route::get('/faq', function () {
    return Inertia::render('FAQ');
});

/*Legal*/
Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
});
Route::get('/cookie-policy', function () {
    return Inertia::render('CookiePolicy');
});
Route::get('/terms-and-conditions', function () {
    return Inertia::render('TermsAndConditions');
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
