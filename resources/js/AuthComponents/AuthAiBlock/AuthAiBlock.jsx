import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './AuthAiBlock.css'; 
import AuthAiForm from '../AuthAiForm/AuthAiForm';

const descriptions = {
    Facebook: "Create engaging and shareable posts for Facebook that resonate with your audience, incorporating images, links, and text to enhance interaction and visibility.",
    Instagram: "Craft catchy and creative captions for your Instagram photos that grab attention and encourage engagement, while also including relevant hashtags.",
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

    const handleIconClick = (platform) => {
        setSelectedPlatform(platform);
        setButtonText(buttonTexts[platform]); 
    };
    
    return (
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 social-media-generator">
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
    );
};

export default SocialMediaGenerator;
