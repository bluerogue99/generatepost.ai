import React from 'react';
import './StripeFail.css'; 

const StripeFail = () => {
    return (
        <div className="stripe-fail-container">
            <div className="stripe-fail-content">
                <h1 className="stripe-fail-title">Subscription Failed</h1>
                <p className="stripe-fail-message">
                    Oops! Something went wrong with your payment. Please try again later or contact support.
                </p>
                <button className="retry-button" onClick={() => window.location.reload()}>
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default StripeFail;
