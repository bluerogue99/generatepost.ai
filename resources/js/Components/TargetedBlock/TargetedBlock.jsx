import React from 'react';
import './TargetedBlock.css';
import TargetedButton from '/public/assets/GuestLayoutDesign/TargetedBlock/arrow-right.svg';
import { FaPenNib, FaBuilding, FaRegHandshake, FaLaptopCode, FaBullhorn, FaUsers, FaBriefcase, FaShoppingCart, FaStore, FaCalendarAlt } from 'react-icons/fa';
const TargetedBlock = () => {
  const cards = [
    { title: "Content Creators", description: "Craft engaging content with ease.", icon: <FaPenNib /> },
    { title: "Social Media Agencies", description: "Scale client campaigns effortlessly.", icon: <FaBuilding /> },
    { title: "Brand Makers", description: "Build brands that resonate with audiences.", icon: <FaRegHandshake /> },
    { title: "Digital Agencies", description: "Deliver impactful social media strategies.", icon: <FaLaptopCode /> },
    { title: "Social Media Marketers", description: "Engage and grow audiences consistently.", icon: <FaBullhorn /> },
    { title: "Influencers", description: "Boost follower engagement and growth.", icon: <FaUsers /> },
    { title: "Freelancers", description: "Effortlessly manage multiple client accounts.", icon: <FaBriefcase /> },
    { title: "E-commerce Owners", description: "Drive sales with targeted social media posts.", icon: <FaShoppingCart /> },
    { title: "Small Business Owners", description: "Attract customers with engaging posts.", icon: <FaStore /> },
    { title: "Event Planners", description: "Promote events and engage attendees.", icon: <FaCalendarAlt /> }
];

  return (
    <div className="targeted-container" id="audience">
      <h2 className="targeted-title">Who is postgenerator.io for?</h2>
      <p className="targeted-description">PostGenerator.io empowers anyone looking to <span className="highlighted-targeted-description">create impactful social media content</span>, from content creators and agencies to small business owners and event planners. 
      Effortlessly <span className="highlighted-targeted-description">scale campaigns, engage audiences, and boost your brand’s presence</span> with AI-driven posts tailored to your needs.</p>
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="card-image">{card.icon}</div>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
            <button className="card-button">
              <img src={TargetedButton} alt="Arrow icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TargetedBlock;
