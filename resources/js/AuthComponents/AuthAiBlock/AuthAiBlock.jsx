import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './AuthAiBlock.css'; 
import AuthAiForm from '../AuthAiForm/AuthAiForm';

const descriptions = {
    Facebook: "Create engaging and shareable posts for Facebook that resonate with your audience, incorporating images, links, and text to enhance interaction and visibility.",
    Instagram: "Craft catchy and creative captions for your Instagram photos that grab attention and encourage engagement.",
    Threads: "Generate thoughtful and concise posts for Threads, focusing on sparking conversation and fostering community around trending topics.",
    TikTok: "Write fun and impactful captions for your TikTok posts that complement your visuals and inspire viewers to engage with your content.",
    X: "Quickly generate witty and concise tweets that fit Twitter's character limit, helping you stay relevant and connected with your audience.",
    LinkedIn: "Create professional and insightful posts for LinkedIn that showcase your expertise, promote your brand, and encourage networking opportunities.",
};

const buttonTexts = {
    Facebook: "Create Facebook Post",
    Instagram: "Create Instagram Post",
    TikTok: "Create TikTok Post",
    X: "Create X Post",
    LinkedIn: "Create LinkedIn Post",
};

const SocialMediaGenerator = () => {
    const [selectedPlatform, setSelectedPlatform] = useState('Facebook');
    const [buttonText, setButtonText] = useState(buttonTexts.Facebook);
    const [subscriptionStatus, setSubscriptionStatus] = useState(null);

    const handleIconClick = (platform) => {
        setSelectedPlatform(platform);
        setButtonText(buttonTexts[platform]); 
    };

    useEffect(() => {
        const fetchSubscriptionStatus = async () => {
            try {
                const response = await axios.get('/subscription-status'); 
                setSubscriptionStatus(response.data.subscription_status); 
            } catch (error) {
                console.error('Error fetching subscription status:', error);
            }
        };
        if (!subscriptionStatus) {
            fetchSubscriptionStatus();
        }
    }, [subscriptionStatus]);

    const handleCheckout = async () => {
        try {
            const stripeKey = import.meta.env.VITE_STRIPE_KEY;
            const response = await axios.post('/create-checkout-session');
            const sessionId = response.data.id;
        
            const stripe = window.Stripe(stripeKey);
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
            {subscriptionStatus === 'active' ? (
                /*Subscribed*/
                <div id="premium-social-generator" className="bg-gradient-to-r from-blue-500 to-blue-700 social-media-generator">
                <div className="wrapper">
                <div className="icon-container">
                    <FaFacebook 
                        onClick={() => handleIconClick('Facebook')} 
                        className={selectedPlatform === 'Facebook' ? 'active' : 'passive'} 
                    />
                    <FaInstagram 
                        onClick={() => handleIconClick('Instagram')} 
                        className={selectedPlatform === 'Instagram' ? 'active' : 'passive'} 
                    />
                    <FaTiktok 
                        onClick={() => handleIconClick('TikTok')} 
                        className={selectedPlatform === 'TikTok' ? 'active' : 'passive'} 
                    />
                    <FaTwitter 
                        onClick={() => handleIconClick('X')} 
                        className={selectedPlatform === 'X' ? 'active' : 'passive'} 
                    />
                    <FaLinkedin 
                        onClick={() => handleIconClick('LinkedIn')} 
                        className={selectedPlatform === 'LinkedIn' ? 'active' : 'passive'} 
                    />
                    
                </div>
                    <h2 className="title">{selectedPlatform} Post Generator</h2>
                    <div className="premium-inner-container">
                        <img height="30px" width="30px" src="assets/premium.png" className="premium-icon"/>
                        <span className="premium-tag">Premium</span>
                    </div>
                <div className="description-block">
                    {descriptions[selectedPlatform]}
                </div>
                <AuthAiForm buttonText={buttonText} selectedPlatform={selectedPlatform} /> 
            </div>
            </div>
            ) : (
                /*Not subscribed*/
                <div id="premium-social-generator" className="bg-gradient-to-r from-blue-500 to-blue-700 social-media-generator not-subscribed-wrapper">
                <div className="wrapper">
                <div className="icon-container">
                    <FaFacebook 
                        onClick={() => handleIconClick('Facebook')} 
                        className={selectedPlatform === 'Facebook' ? 'active' : 'passive'} 
                    />
                    <FaInstagram 
                        onClick={() => handleIconClick('Instagram')} 
                        className={selectedPlatform === 'Instagram' ? 'active' : 'passive'} 
                    />
                    <FaTiktok 
                        onClick={() => handleIconClick('TikTok')} 
                        className={selectedPlatform === 'TikTok' ? 'active' : 'passive'} 
                    />
                    <FaTwitter 
                        onClick={() => handleIconClick('X')} 
                        className={selectedPlatform === 'X' ? 'active' : 'passive'} 
                    />
                    <FaLinkedin 
                        onClick={() => handleIconClick('LinkedIn')} 
                        className={selectedPlatform === 'LinkedIn' ? 'active' : 'passive'} 
                    />
                    
                </div>
                    <h2 className="title">{selectedPlatform} Post Generator</h2>
                    <div className="premium-inner-container">
                        <img height="30px" width="30px" src="assets/premium.png" className="premium-icon"/>
                        <span className="premium-tag">Premium</span>
                    </div>
                <div className="description-block">
                    {descriptions[selectedPlatform]}
                </div>
                <AuthAiForm buttonText={buttonText} selectedPlatform={selectedPlatform} /> 

                <div className="unlock-section-wrapper">
                    <h2 className="unlock-title">Unlock Premium</h2>
                    <p className="unlock-description">Unlock Premium Features and start generating posts like a PRO targeting Your audience.</p>
                    <ul className="unlock-list-wrapper">
                        <li className="unlock-list-item">Unlock Target Audience by Age, Gender, Location and Interest.</li>
                        <li className="unlock-list-item">Unlock Tone, Image and Text Premium Prompts.</li>
                        <li className="unlock-list-item">Unlock GPT 4.0 for Smartest Results.</li>
                    </ul>
                    <button className="get-premium-button" onClick={handleCheckout}>Get Premium Now!</button>
                </div>
            </div>
            </div>
            )}
        </div>
    );
};

export default SocialMediaGenerator;
