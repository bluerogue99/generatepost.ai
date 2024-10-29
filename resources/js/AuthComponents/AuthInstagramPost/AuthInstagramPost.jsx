import React from 'react';
import './AuthInstagramPost.css';

const AuthInstagramPost = ( {postContent, generatedImageUrl, generatedHeadline} ) => {
  return (
    <div id="generated-content" className="instagram-post generated-passive">
      {/* Insta Header */}
      <div className="insta-header">
        <div className="insta-profile-container">
            <img className="profile-image" src="/assets/instagram_profile.svg" alt="Profile" />
            <span className="profile-name profile-name-top">Your Name</span>
        </div>
        <img className="dots-icon" src="/assets/instagram_dots_icon.svg" alt="Menu Options" />
      </div>

      {/* Image */}
      <img className="post-image" src={generatedImageUrl} alt="Instagram Image" />
      {/* Insta Share Section */}
      <div className="insta-share">
        <div className="insta-share-icon-container">
            <img className="insta-heart" src="/assets/instagram_heart_icon.svg" alt="Like" />
            <img className="insta-comment" src="/assets/instagram_comment_icon.svg" alt="Comment" />
            <img className="insta-share-icon" src="/assets/instagram_share_icon.svg" alt="Share" />
        </div>
        <div className="insta-dots-icon-container">
            <img className="insta-dots_active" src="/assets/instagram_active_slide_icon.svg" alt="Slider" />
            <img className="insta-dots_passive" src="/assets/instagram_passive_slide_icon.svg" alt="Slider" />
        </div>
        <div className="insta-pin-icon-container">
            <img className="insta-pin" src="/assets/instagram_bookmark_icon.svg" alt="Save" />
        </div>
      </div>

      {/* Likes */}
      <div className="insta-likes d-flex">74 likes</div>

      {/* Insta Title */}
      <div className="insta-title">
        <span className="profile-name">Your Name</span>
        <span className="insta-post-title">{generatedHeadline}</span>
      </div>

      {/* Insta Content */}
      <div className="insta-content">
        <div className="insta-content-container">
            <p className="insta-post-content">{postContent}</p>
        </div>
        <div>
            <img className="heart-icon-full" src="/assets/instagram_heart_icon_filled.svg" alt="Liked" />
            <img className="heart-icon-empty" src="/assets/instagram_heart_icon_empty.svg" alt="Not Liked" />
        </div>
      </div>

      {/* Insta Date */}
      <div className="insta-date d-flex">June 7, 2024 <span className="view-translation"> · View translation</span></div>

      {/* Insta Interaction */}
      <div className="insta-interaction">
        <img className="insta-footer-interact-icon insta-home" src="/assets/instagram_home_icon.svg" alt="Home" />
        <img className="insta-footer-interact-icon insta-search" src="/assets/instagram_search_icon.svg" alt="Search" />
        <img className="insta-footer-interact-icon insta-add" src="/assets/instagram_newpost_icon.svg" alt="New Post" />
        <img className="insta-footer-interact-icon insta-heart" src="/assets/instagram_like_heart_icon.svg" alt="Activity" />
        <img className="insta-footer-interact-icon insta-profile" src="/assets/instagram_footer_profile.svg" alt="Profile" />
      </div>
    </div>
  );
};

export default AuthInstagramPost;
