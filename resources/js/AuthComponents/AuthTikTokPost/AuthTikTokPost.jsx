import React, { useState } from 'react';
import './AuthTikTokPost.css';

const AuthTikTokPost = ({ postContent, generatedImageUrl, generatedHeadline }) => {

    const [isExpanded, setIsExpanded] = useState(false);
    const words = postContent.split(' ');
    const displayedContent = isExpanded ? postContent : words.slice(0, 20).join(' ') + '...';


  return (
    <div id="generated-content" className="tiktok-post generated-passive">
      {/* TikTok Container with Background Image */}
      <div className="tiktok-container">
        <img
          src={generatedImageUrl}
          alt="TikTok Background"
          className="tiktok-bck"
        />
        {/* TikTok Header */}
        <div className="tiktok-header">
            <span className="header-option">Following</span>
            <span className="header-option active">For You</span>
        </div>

        <div className="tiktok-left-content">
            {/* User Info */}
            <div className="tiktok-user-info">
            <span className="tiktok-name">@tiktok_name</span>
            <p className="tiktok-post-headline">{generatedHeadline}</p>
            <p className="tiktok-post-content">{displayedContent}</p>
            <button className="show-more-button" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
            </div>

            {/* Music Data */}
            <div className="tiktok-music-data">
            <img className="tiktok-music-icon" src="/assets/tiktok_music_icon.svg" alt="Music Icon" />
            <span className="tiktok-music-title">Music Title</span>
            </div>
        </div>

        {/* Share, Comment, and Heart */}
        <div className="tiktok-right-content">
            <div>
                <img className="tiktok-music-disc-outer" src="/assets/tiktok_disk_outer.svg" alt="Music Disc Outer" />
                <img className="tiktok-music-disc-inner" src="/assets/tiktok_disk_inner.svg" alt="Music Disc Inner" />
            </div>
            <div className="tiktok-share">
                <img className="tiktok-share-icon" src="/assets/tiktok_share.svg" alt="Share Icon" />
                <span className="tiktok-share-text">Share</span>
            </div>
            <div className="tiktok-comment">
                <img className="tiktok-comment-icon" src="/assets/tiktok_comment.svg" alt="Comment Icon" />
                <span className="tiktok-comment-count">578</span>
            </div>
            <div className="tiktok-heart">
                <img className="tiktok-heart-icon" src="/assets/tiktok_heart.svg" alt="Heart Icon" />
                <span className="tiktok-heart-count">328.7K</span>
            </div>
            <div className="tiktok-profile">
                <img className="tiktok-profile-icon" src="/assets/tiktok_profile.svg" alt="Profile" />
                <img className="tiktok-profile-plus" src="/assets/tiktok_plus.svg" alt="Follow" />
            </div>
            </div>
        </div>

      {/* TikTok Navigation */}
      <div className="tiktok-navigation">
        <div className="nav-item">
          <img src="/assets/tiktok_home.svg" alt="Home" />
          <span>Home</span>
        </div>
        <div className="nav-item">
          <img src="/assets/tiktok_search.svg" alt="Discover" />
          <span>Discover</span>
        </div>
        <div className="nav-item">
          <img src="/assets/tiktok_add.svg" alt="Add" />
        </div>
        <div className="nav-item">
          <img src="/assets/tiktok_inbox.svg" alt="Inbox" />
          <span>Inbox</span>
        </div>
        <div className="nav-item">
          <img src="/assets/tiktok_me.svg" alt="Me" />
          <span>Me</span>
        </div>
      </div>

      {/* TikTok Footer */}
      <div className="tiktok-footer">
        <img src="/assets/tiktok_line.svg" alt="Footer Dash" />
      </div>
    </div>
  );
};

export default AuthTikTokPost;
