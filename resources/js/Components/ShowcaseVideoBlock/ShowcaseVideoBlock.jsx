import React from 'react';
import './ShowcaseVideoBlock.css';

const ShowcaseVideoBlock = () => {
  return (
    <div className="showcase-video-container">
      <h2 className="showcase-video-title">Watch how it works</h2>
      <div className="video-wrapper">
        <iframe
          className="showcase-video"
          src="https://www.youtube.com/embed/Y-x0efG1seA" 
          title="Showcase Video"
          allowFullScreen
        ></iframe>
      </div>
      <p className="showcase-video-description">
        Discover how PostGenerator.ai can elevate your content strategy and connect with your audience like never before.
      </p>
    </div>
  );
};

export default ShowcaseVideoBlock;
