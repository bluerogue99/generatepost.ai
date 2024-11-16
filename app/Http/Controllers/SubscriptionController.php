<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use Stripe\Stripe;
use Stripe\Exception\ApiErrorException;
use Stripe\Subscription;
use Stripe\Webhook;
use Illuminate\Support\Facades\Log;
use App\Models\User;
use Inertia\Inertia;


class SubscriptionController extends Controller
{
    public function createCheckoutSession(Request $request)
    {
        try {
            Stripe::setApiKey(env('STRIPE_SECRET'));
            $user = $request->user();
            

            $checkoutSession = Session::create([
                'payment_method_types' => ['card'],
                'line_items' => [
                    [
                        'price_data' => [
                            'currency' => 'usd',
                            'product_data' => [
                                'name' => 'PostGenerator.io Premium',
                            ],
                            'recurring' => [
                                'interval' => 'month',
                            ],
                            'unit_amount' => 1000,
                        ],
                        'quantity' => 1,
                    ],
                ],
                'mode' => 'subscription',
                'customer' => $user->stripe_customer_id,
                'success_url' => route('subscription.success'),
                'cancel_url' => route('subscription.cancel'),
            ]);

            return response()->json(['id' => $checkoutSession->id]);

        } catch (ApiErrorException $e) {
            Log::error('Stripe API Error: ' . $e->getMessage());
            return response()->json(['error' => 'An error occurred while creating the checkout session.'], 500);
        } catch (\Exception $e) {
            Log::error('General Error: ' . $e->getMessage());
            return response()->json(['error' => 'An unexpected error occurred.'], 500);
        }
    }

    public function success(Request $request)
    {
        $user = $request->user();
        $user->subscription_status = 'active';
        $user->save();
        return redirect()->route('generate'); 
    }

    public function cancel(Request $request)
    {
        $user = $request->user();
        $user->subscription_status = 'inactive';
        $user->save();
        return redirect()->route('generate'); 
    }


    public function webhook(Request $request)
    {
    $payload = $request->getContent();
    $sigHeader = $request->header('Stripe-Signature');
    $endpointSecret = env('STRIPE_WEBHOOK_SECRET'); 

    try {
        $event = Webhook::constructEvent($payload, $sigHeader, $endpointSecret);

        switch ($event->type) {
            case 'invoice.payment_succeeded':
            case 'invoice.payment_failed':
                $subscription = $event->data->object;
                $user = User::find($subscription->customer);

                if (!$user->stripe_subscription_id) {
                    $user->stripe_subscription_id = $subscription->id;
                    $user->save();
                }

                $user->save();
                break;
        }

        return response('Webhook received', 200);
    } catch (\Exception $e) {
        Log::error('Stripe Webhook Error: ' . $e->getMessage());
        return response('Webhook Error', 400);
    }
    }


    public function getSubscriptionStatus(Request $request)
    {
        $user = $request->user();
        $subscription = $user->subscription('default'); // Retrieve the subscription for the 'default' plan
        
        $stripeStatus = $subscription ? $subscription->stripe_status : null;
        $endDate = $this->getSubscriptionEndDate($subscription); // Get the end date from the subscription

        return response()->json([
            'subscription_status' => $stripeStatus,
            'ends_at' => $endDate, // Send the 'ends_at' date in the response
        ]);
    }

    private function getSubscriptionEndDate($subscription)
    {
        // Check if subscription exists and has an end date
        if ($subscription && $subscription->ends_at) {
            return $subscription->ends_at->toDateString(); // Format as 'YYYY-MM-DD' (adjust as needed)
        }

        return null; // Return null if there is no end date
    }




    public function cancelledbyuser(Request $request)
    {
    try {

        $user = $request->user();

        if ($user->subscription_status === 'active') {
            $user->subscription_status = 'inactive';
            $user->save();

            $stripeSubscription = Subscription::retrieve($user->stripe_subscription_id);
            $stripeSubscription->cancel();

            return response()->json(['success' => true, 'message' => 'Subscription cancelled successfully']);
        }

        return response()->json(['success' => false, 'message' => 'No active subscription found']);
    } catch (\Exception $e) {
        Log::error('Error during subscription cancellation: ' . $e->getMessage());
        Log::info('Stripe Subscription ID: ' . $user->stripe_subscription_id);
        return response()->json(['error' => 'An error occurred while cancelling the subscription.'], 500);
    }
    }
}
