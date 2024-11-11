import React from 'react';
import axios from 'axios';

function StripeSubscription() {
    const handleCheckout = async () => {
        try {
            // Send a request to the backend to create a checkout session
            const response = await axios.post('/create-checkout-session');
            const sessionId = response.data.id;

            // Redirect to Stripe Checkout
            const stripe = Stripe(process.env.STRIPE_KEY);  // Make sure you have your Stripe publishable key here
            const { error } = await stripe.redirectToCheckout({ sessionId });

            if (error) {
                console.error('Stripe Checkout error:', error);
            }
        } catch (error) {
            console.error('Error creating checkout session:', error);
        }
    };

    return (
        <div>
            <h2>Subscribe to our service</h2>
            <button onClick={handleCheckout}>Subscribe</button>
        </div>
    );
}

export default StripeSubscription;
