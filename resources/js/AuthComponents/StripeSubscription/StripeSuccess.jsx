import React from 'react';
import './StripeSuccess.css'; 

const StripeSuccess = () => {
    return (
        <div className="stripe-success-container">
            <div className="stripe-success-content">
                <h1 className="stripe-success-title">Subscription Successful!</h1>
                <p className="stripe-success-message">
                    Thank you for subscribing! You will receive a confirmation email shortly.
                </p>
                <button className="home-button" onClick={() => window.location.href = '/'}>
                    Go to Home
                </button>
            </div>
        </div>
    );
};

export default StripeSuccess;
