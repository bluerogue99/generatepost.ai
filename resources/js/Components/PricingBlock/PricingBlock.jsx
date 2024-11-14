// src/Components/PricingBlock/PricingBlock.jsx
import React from 'react';
import './PricingBlock.css';
import { FaCheck, FaTimes } from 'react-icons/fa';

const getIconForFeature = (status) => {
  return status === 'included' ? <FaCheck color="green" /> : <FaTimes color="red" />;
};

const PricingBlock = () => {
  const features = {
    free: {
      price: "0.00 $",
      included: [
        'Supported platforms: Facebook, Instagram, TikTok, X, LinkedIn',
        'Unlimited requests',
        'Set a topic',
        'Set an image prompt',
        'Select tone',
        'Generate text',
        'Generate image',
        'AI Model: GPT 4o Mini',
        'See a preview of your post',
        'Download generated contents'
      ],
      excluded: [
        'Save generated image and text',
        'Dashboard overview of your generated contents',
        'Target your audience by age',
        'Target your audience by geographic location',
        'Target your audience by interest'
      ]
    },
    premium: {
      originalPrice: "24.99 $",
      discountPrice: "10.00 $",
      included: [
        'Supported platforms: Facebook, Instagram, TikTok, X, LinkedIn',
        'Unlimited requests',
        'Set a topic',
        'Set an image prompt',
        'Select tone',
        'Generate text',
        'Generate image',
        'AI Model: GPT 4o Mini',
        'See a preview of your post',
        'Download generated contents',
        'Save generated image and text',
        'Dashboard overview of your generated contents',
        'Target your audience by age',
        'Target your audience by geographic location',
        'Target your audience by interest'
      ],
      excluded: []
    }
  };

  const scrollToSocialMediaGenerator = () => {
    const section = document.querySelector('.social-media-generator');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRegisterClick = () => {
    window.location.href = "/register";
  };

  return (
    <div className="pricing-container" id="pricing">
      <h2 className="pricing-title">Choose Your Plan</h2>
      <p className="pricing-description">
        Select a plan that fits your needs and start creating amazing content.
      </p>

      <div className="pricing-blocks">
        {/* Free Plan */}
        <div className="pricing-block">
          <div>
            <h3 className="pricing-sub-title">Free</h3>
            <p className="price">{features.free.price}</p> 
            <ul className="feature-list">
              {features.free.included.map((feature, index) => (
                <li key={index}>
                  <span className="icon">{getIconForFeature('included')}</span> {feature}
                </li>
              ))}
              {features.free.excluded.map((feature, index) => (
                <li key={index}>
                  <span className="icon">{getIconForFeature('excluded')}</span> {feature}
                </li>
              ))}
            </ul>
          </div>
          <button className="pricing-button" onClick={scrollToSocialMediaGenerator}>
            Try for free
          </button>
        </div>

        {/* Premium Plan */}
        <div className="pricing-block">
          <div>
          <h3 className="pricing-sub-title">Premium</h3>
          <div className="black-friday-sale d-flex">
            <img className="discount-icon" src="/assets/GuestLayoutDesign/Price/sale.png" />
            <p className="discount-reason-notice">Black Friday Sale!</p>
          </div>
            <p className="price">
              <span className="original-price">{features.premium.originalPrice}</span>
              <span className="discount-price">{features.premium.discountPrice}</span>
            </p>
            <ul className="feature-list">
              {features.premium.included.map((feature, index) => (
                <li key={index}>
                  <span className="icon">{getIconForFeature('included')}</span> {feature}
                </li>
              ))}
              {features.premium.excluded.map((feature, index) => (
                <li key={index}>
                  <span className="icon">{getIconForFeature('excluded')}</span> {feature}
                </li>
              ))}
            </ul>
          </div>
          <button className="pricing-button" onClick={handleRegisterClick}>
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingBlock;
