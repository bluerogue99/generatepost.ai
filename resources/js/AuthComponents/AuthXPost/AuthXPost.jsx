import React from 'react';
import './AuthXPost.css';

const AuthXPost = ( {postContent, generatedImageUrl, generatedHeadline} ) => {
  return (
    <div id="generated-content" className="x-post generated-passive">
      {/* X Header */}
      <div className="x-header">
        <img className="x-profile-image" src="/assets/x_profile_image.svg" alt="Profile" />
        
        <div className="x-user">
          <div className="x-profile-name-container">
            <span className="x-profile-name">Your Name</span>
            <img className="x-verified-icon" src="/assets/x_verified_icon.png" alt="Verified" />
          </div>
          <span className="x-username d-flex">@your_name</span>
        </div>

        <div className="x-plan">
          <button className="x-subscribe-button">Subscribe</button>
          <div className="x-dots">
            <img className="x-dot-icon" src="/assets/x_dot_icon.svg" alt="Dot" />
          </div>
        </div>
      </div>

      {/* X Post Content */}
      <div className="x-post-content">
        <h3 className="x-post-title">{generatedHeadline}</h3>
        <p className="x-post d-flex">{postContent}</p>
      </div>

      {/* X Image */}
      <div className="x-image">
        <img src={generatedImageUrl} alt="Post Image" />
      </div>

      {/* X Post Data */}
      <div className="x-post-data">
        <span className="x-publish-time">12:00PM</span>
        <img src="/assets/x_dot.svg" className="x-spacer-dot"/>
        <span className="x-publish-date">Oct 14, 2023</span>
        <img src="/assets/x_dot.svg" className="x-spacer-dot"/>
        <span className="x-view-count">200.0K Views</span>
      </div>

      {/* X Share */}
      <div className="x-share">
        <div className="x-comment">
          <img className="x-comment-icon" src="/assets/x_comment_icon.svg" alt="Comment" />
          <span className="x-comment-count">991</span>
        </div>
        
        <div className="x-share">
          <div className="x-share-icon-container">
            <img className="x-share-up-icon" src="/assets/x_share_up_icon.svg" alt="Share Up" />
            <img className="x-share-down-icon" src="/assets/x_share_down_icon.svg" alt="Share Down" />
          </div>
          <span className="x-share-count">1,581</span>
        </div>

        <div className="x-heart">
          <img className="x-heart-icon" src="/assets/x_heart_icon.svg" alt="Heart" />
          <span className="x-heart-count">9,867</span>
        </div>

        <div className="x-mark">
          <img className="x-mark-icon" src="/assets/x_mark_icon.svg" alt="Mark" />
          <span className="x-mark-count">90</span>
        </div>

        <div className="x-upload">
          <img className="x-upload-icon" src="/assets/x_share_cloud_icon.svg" alt="Upload" />
        </div>
      </div>
    </div>
  );
};

export default AuthXPost;
