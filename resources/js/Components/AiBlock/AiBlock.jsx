import React, { useState, useEffect } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';
import './AiBlock.css'; 
import AiForm from '../AiForm/AiForm';

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

const SocialMediaGenerator = ({ selectedPlatformFromMenu, setSelectedPlatformFromMenu }) => {
    const [selectedPlatform, setSelectedPlatform] = useState('Facebook');
    const [buttonText, setButtonText] = useState(buttonTexts.Facebook);

    useEffect(() => {
        // Update selectedPlatform and buttonText whenever selectedPlatformFromMenu changes
        if (selectedPlatformFromMenu && selectedPlatformFromMenu !== selectedPlatform) {
            setSelectedPlatform(selectedPlatformFromMenu);
            setButtonText(buttonTexts[selectedPlatformFromMenu]);
        }
    }, [selectedPlatformFromMenu, selectedPlatform]);

    const handleIconClick = (platform) => {
        setSelectedPlatform(platform);
        setSelectedPlatformFromMenu(platform); // Update the menu platform selection
        setButtonText(buttonTexts[platform]);
    };

    const platformIcons = [
        { name: 'Facebook', icon: FaFacebook },
        { name: 'Instagram', icon: FaInstagram },
        { name: 'TikTok', icon: FaTiktok },
        { name: 'X', icon: FaTwitter },
        { name: 'LinkedIn', icon: FaLinkedin },
    ];

    return (
        <div className="social-media-generator" id="postgenerator">
            <div className="wrapper">
                <div className="icon-container">
                    {platformIcons.map(({ name, icon: Icon }) => (
                        <Icon
                            key={name}
                            onClick={() => handleIconClick(name)}
                            className={selectedPlatform === name ? 'active' : 'passive'}
                        />
                    ))}
                </div>
                <h2 className="title">{selectedPlatform} Post Generator</h2>
                <div className="description-block">
                    {descriptions[selectedPlatform]}
                </div>
                <AiForm buttonText={buttonText} selectedPlatform={selectedPlatform} />
            </div>
        </div>
    );
};

export default SocialMediaGenerator;
