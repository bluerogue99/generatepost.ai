import './FeaturesBlock.css';
import astronautImage from '/public/assets/GuestLayoutDesign/Astronaut/astrounaut-main.png'; 
import "../ParticleBackground/ParticleBackground.css";
import ParticleBackground from '../ParticleBackground/ParticleBackground';


const FeaturesBlock = () => {


  const handleRegisterClick = () => {
    window.location.href = "/register";
  };

    return (
        <div className="features-container" id="features">
          <ParticleBackground />
          <div className="features-image-container">
            <img src={astronautImage} alt="Feature" className="features-image" />
          </div>
          <div className="feature-subcontainer">
            <h3 className="showcase-subtitle">Create Impactful Content</h3>
            <h2 className="showcase-title">Empower Your Brand with AI</h2>
            <p className="showcase-description">
              Elevate your social media presence effortlessly with AI-driven posts that resonate with your audience.
            </p>
            <ul className="showcase-benefits">
  <li>
    <span className="benefit-title">Select the Perfect Tone:</span>
    <span className="benefit-description">Choose the right tone to align with your brand’s personality and messaging.</span>
  </li>
  <li>
    <span className="benefit-title">Configure Target Audience:</span>
    <span className="benefit-description">Tailor your messaging for specific demographics, ensuring it resonates with the right audience.</span>
  </li>
  <li>
    <span className="benefit-title">Dashboard Overview of Posts:</span>
    <span className="benefit-description">Get a comprehensive view of all your generated posts, helping you manage and organize them effectively.</span>
  </li>
  <li>
    <span className="benefit-title">Save for Later:</span>
    <span className="benefit-description">Save posts as drafts or schedule them to go live at the ideal time for maximum impact.</span>
  </li>
  <li>
    <span className="benefit-title">Post Preview:</span>
    <span className="benefit-description">See exactly how your posts will look across different platforms to ensure consistency.</span>
  </li>
  <li>
    <span className="benefit-title">Edit Previously Created Posts:</span>
    <span className="benefit-description">Revisit and refine your posts anytime, making updates or tweaks as needed to keep them fresh.</span>
  </li>
</ul>

            <button className="showcase-button" onClick={handleRegisterClick}>Sign up for free!</button>
          </div>
        </div>
      );
};

export default FeaturesBlock;
