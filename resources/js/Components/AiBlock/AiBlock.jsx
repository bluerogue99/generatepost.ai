import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './AiBlock.css'; 
import AiForm from '../AiForm/AiForm';

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
    const [buttonText, setButtonText] = useState(buttonTexts.Facebook); // Initialize button text

    const handleIconClick = (platform) => {
        setSelectedPlatform(platform);
        setButtonText(buttonTexts[platform]); // Update button text based on selected platform
    };
    
    return (
        <div className="social-media-generator">
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
                    
                    {/* Add Threads icon if you have an icon for it */}
                </div>
                <h2 className="title">{selectedPlatform} Post Generator</h2> {/* Dynamic title */}
                <div className="description-block">
                    {descriptions[selectedPlatform]}
                </div>
                <AiForm buttonText={buttonText} selectedPlatform={selectedPlatform} /> {/* Pass button text to AiForm */}
            </div>
        </div>
    );
};

export default SocialMediaGenerator;
