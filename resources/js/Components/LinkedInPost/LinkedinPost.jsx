import React from 'react';
import './LinkedInPost.css';

const LinkedInPost = ( {postContent, generatedImageUrl, generatedHeadline} ) => {
  return (
    <div id="generated-content" className="linkedin-post generated-passive">
      
      {/* LinkedIn Header */}
      <div className="linkedin-header d-flex">
        <div className="linkedin-profile">
          <img className="linkedin-profile-image" src="/assets/linkedin_profile.svg" alt="Profile" />
          
          <div className="linkedin-profile-container">
            <span className="linkedin-brand d-flex">Your Brand</span>
            <span className="linkedin-followed-count">26,548 followers</span>
            <span className="linkedin-promoted-tag d-flex">Promoted</span>
          </div>
        </div>
        <img className="linkedin-dots" src="/assets/linkedin_dots.svg" alt="Options" />
      </div>

      {/* LinkedIn Content */}
      <div className="linkedin-content d-flex">
        <p className="linkedin-post-text">{postContent}</p>
      </div>

      {/* LinkedIn Image Container */}
      <div className="linkedin-image-container">
        <div className="linkedin-image-container-inner">
            <img className="linkedin-image" src={generatedImageUrl} adlt="Post" />
            <h2 className="linkedin-post-title d-flex">{generatedHeadline}</h2>
        </div>
      </div>

      {/* LinkedIn Social Section */}
      <div className="linkedin-social">
        <div className="linkedin-social-left">
          <img className="linkedin-like" src="/assets/linkedin_like_interact_icon.svg" alt="Like" />
          <img className="linkedin-heart" src="/assets/linkedin_heart_interact_icon.svg" alt="Heart" />
          <span className="linkedin-heart-count">1025</span>
        </div>
        <div className="linkedin-social-right">
          <span className="linkedin-comment-count">753 comments</span>
          <span className="linkedin-dot">•</span>
          <span className="linkedin-share-count">234 shares</span>
        </div>
      </div>

      {/* LinkedIn Divider */}
      <div className="linkedin-divider"></div>

      {/* LinkedIn Interact Section */}
      <div className="linkedin-interact">
        <div className="linkedin-like-container">
          <img className="linkedin-like-icon" src="/assets/linkedin_like.svg" alt="Like" />
          <span className="linkedin-like-text">Like</span>
        </div>
        
        <div className="linkedin-comment-container">
          <img className="linkedin-comment-icon" src="/assets/linkedin_comment.svg" alt="Comment" />
          <span className="linkedin-comment-text">Comment</span>
        </div>
        
        <div className="linkedin-share-container">
          <img className="linkedin-share-icon" src="/assets/linkedin_share.svg" alt="Share" />
          <span className="linkedin-share-text">Share</span>
        </div>
        
        <div className="linkedin-send-container">
          <img className="linkedin-send-icon" src="/assets/linkedin_send.svg" alt="Send" />
          <span className="linkedin-send-text">Send</span>
        </div>
      </div>
    </div>
  );
};

export default LinkedInPost;
