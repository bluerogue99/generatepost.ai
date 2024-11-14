import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import './GDPRCompliance.css';

const GDPRCompliance = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const hasUserConsented = localStorage.getItem('gdprConsent');
    if (hasUserConsented === null) {
      setIsVisible(true);
    }

    // Apply dark background
    document.body.style.backgroundColor = '#0D0D0D';
    document.body.style.margin = '0';
    document.body.style.minHeight = '100vh';
    
    // Cleanup function
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gdprConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('gdprConsent', 'declined');
    window.location.href = 'https://google.com';
  };

  if (!isVisible) return null;

  return (
    <div className="gdpr-popup">
      <div className="gdpr-container">
        <div className="gdpr-content">
          <h3 className="gdpr-title">Cookie Consent</h3>
          <p className="gdpr-text">
            We use cookies and similar technologies to help personalize content, 
            tailor and measure ads, and provide a better experience. By clicking 
            accept, you agree to this use of cookies and data processing as described 
            in our{' '}
            <a target="_blank" href="/privacy-policy" className="privacy-policy-link">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="gdpr-buttons">
          <button
            onClick={handleDecline}
            className="gdpr-button decline-button"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="gdpr-button accept-button"
          >
            Accept
          </button>
        </div>
        <button
          onClick={handleDecline}
          className="gdpr-close-button"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default GDPRCompliance;