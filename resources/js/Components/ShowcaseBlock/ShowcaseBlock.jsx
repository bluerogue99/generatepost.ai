import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ShowcaseBlock.css"; 
import im1 from '/public/assets/GuestLayoutDesign/ShowcaseBlock/im1.png';
import im2 from '/public/assets/GuestLayoutDesign/ShowcaseBlock/im2.png';
import im3 from '/public/assets/GuestLayoutDesign/ShowcaseBlock/im3.png';
import im4 from '/public/assets/GuestLayoutDesign/ShowcaseBlock/im4.png';
import im5 from '/public/assets/GuestLayoutDesign/ShowcaseBlock/im5.png';
import im6 from '/public/assets/GuestLayoutDesign/ShowcaseBlock/im6.png';
import im7 from '/public/assets/GuestLayoutDesign/ShowcaseBlock/im7.png';
import im9 from '/public/assets/GuestLayoutDesign/ShowcaseBlock/im9.png';
import im10 from '/public/assets/GuestLayoutDesign/ShowcaseBlock/im10.png'; 
import "../ParticleBackground/ParticleBackground.css";
import ParticleBackground from '../ParticleBackground/ParticleBackground';

const ShowcaseBlock = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,           
    infinite: true,       
    speed: 500,           
    slidesToShow: 3,      
    slidesToScroll: 3,    
    autoplay: false,       
    autoplaySpeed: 3000,
    beforeChange: (next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
    im1,
    im2,
    im3,
    im4,
    im5,
    im6,
    im7,
    im9,
    im10
  ];

  const handleRegisterClick = () => {
    window.location.href = "/register";
  };

  return (
    <div className="showcase-container" id="showcase">
      <ParticleBackground />
      <div className="description-container">
      <div className="showcase-subcontainer">
        <h3 className="showcase-subtitle">Build Lasting Connections</h3>
        <h2 className="showcase-title">Content that Resonates</h2>
        <p className="showcase-description">
          Go beyond likes and shares. Engage with your audience on a deeper level, building trust and community with every post.
        </p>
        <ul className="showcase-benefits">
          <li>Build authentic connections with content that resonates emotionally.</li>
          <li>Boost engagement and loyalty by fostering meaningful interactions.</li>
          <li>Save time with smart AI that generates high-quality posts effortlessly.</li>
          <li>Personalize every post to reflect your unique brand voice.</li>
          <li>Increase visibility with content that captures attention in any feed.</li>
        </ul>
        <button className="showcase-button" onClick={handleRegisterClick}>Register for free!</button>
      </div>
      </div>
      <div className="carousel-container">
      <Slider {...settings}>
          {images.map((image, index) => {
            const middleIndex = (currentSlide % images.length + 1) % images.length;
            const slideClass = index === middleIndex ? "current" : "not-current";
            return (
              <div key={index} className={`carousel-slide ${slideClass}`}>
                <img src={image} alt={`Slide ${index + 1}`} className="carousel-image" />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default ShowcaseBlock;
