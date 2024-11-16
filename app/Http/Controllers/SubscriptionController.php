<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use Stripe\Stripe;
use Stripe\Exception\ApiErrorException;
use Stripe\Subscription;
use Stripe\Webhook;
use App\Models\User;


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
            return response()->json(['error' => 'An error occurred while creating the checkout session.'], 500);
        } catch (\Exception $e) {
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

    public function getSubscriptionStatus(Request $request)
    {
        $user = $request->user();
        $subscription = $user->subscription('default'); 
        
        $stripeStatus = $subscription ? $subscription->stripe_status : null;
        $endDate = $this->getSubscriptionEndDate($subscription);

        return response()->json([
            'subscription_status' => $stripeStatus,
            'ends_at' => $endDate, // Send the 'ends_at' date in the response
        ]);
    }

    private function getSubscriptionEndDate($subscription)
    {
        if ($subscription && $subscription->ends_at) {
            return $subscription->ends_at->toDateString();
        }
        return null; 
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
        return response()->json(['error' => 'An error occurred while cancelling the subscription.'], 500);
    }
    }
}
