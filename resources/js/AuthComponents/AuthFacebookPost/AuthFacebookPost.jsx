import React from 'react';
import './AuthFacebookPost.css';
import { FaEllipsisH} from 'react-icons/fa';

const AuthFacebookPost = ({ postContent, generatedImageUrl, generatedHeadline }) => {
    const facebookPostCTA = "Learn More";
    const facebookWebsiteName = "websitename.com";

    return (
        <div id="generated-content" className="facebook-post generated-passive">
            {/* Header Section */}
            <div className="facebook-post-header-container">
                <div className="post-header">
                    <div className="profile-info">
                        <img src="/assets/facebook_profile_picture.svg" alt="Profile Icon" className="profile-icon" /> {/* Replace with profile icon path */}
                        
                        <div>
                            <div className="profile-name">Profile Name</div>
                            <div className="sponsored-container d-flex">
                            <div className="sponsored">Sponsored</div><img className="earth-icon" src="/assets/facebook_earth_icon.svg"/>
                            </div>
                        </div>
                    </div>
                    <FaEllipsisH className="menu-icon" />
                </div>
            </div>
            {/* Post Content */}
            <div className="post-content">
            <p className="received-from-ai">{postContent}</p>
            </div>

            {/* Post Image */}
            {generatedImageUrl && (
                <div className="facebook-post-image-container">
                    <div className="post-image">
                        <img src={generatedImageUrl} alt="Post visual" />
                    </div>
                </div>
            )}

            {/* CTA Section */}
            <div className="facebook-post-cta-container">
                <div className="facebook-headline-container">
                    <p className="facebook-website-name">{facebookWebsiteName}</p>
                    <h3 className="facebook-headline">{generatedHeadline}</h3>
                </div>
                <button className="facebook-cta-button">{facebookPostCTA}</button>
            </div>

            {/* Reaction Section */}
            <div className="facebook-post-reaction-container">
                <div className="post-reactions d-flex">
                    <div className="facebook-like-heart-container d-flex">
                        <img src="/assets/facebook_like_icon.svg" alt="Facebook Like Icon" className="facebook-reaction-icon like-icon" />
                        <img src="/assets/facebook_heart_icon.svg" alt="Facebook Heart Icon" className="facebook-reaction-icon heart-icon" />
                        <span className="facebook-heart-count">541</span>
                    </div>
                    <div className="facebook-comments-shares-container d-flex">
                        <span className="facebook-comment">26 Comments</span>
                        <span className="facebook-share">87 Shares</span>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="facebook-post-action-container">
                <div className="post-actions">
                    <span className="action-button">
                        <img src="/assets/facebook_footer_like_icon.svg" alt="Facebook Like Icon" className="facebook-like-icon facebook-footer-icon"/>
                        <span className="action-text">Like</span>
                    </span>
                    <span className="action-button">
                        <img src="/assets/facebook_footer_comment_icon.svg" alt="Facebook Comment Icon" className="facebook-comment-icon facebook-footer-icon"/>
                        <span className="action-text">Comment</span>                    
                    </span>
                    <span className="action-button">
                        <img src="/assets/facebook_footer_share_icon.svg" alt="Facebook Share Icon" className="facebook-share-icon facebook-footer-icon"/>
                        <span className="action-text">Share</span>
                    </span>
                    <span className="action-button">
                        <img src="/assets/facebook_profile_picture.svg" className="facebook-comment-profile" alt="Facebook Comment Profile"/>
                        <img src="/assets/facebook-chevron-icon.svg" className="facebook-chevron-icon" alt="Facebook Chevron Icon"/>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AuthFacebookPost;
