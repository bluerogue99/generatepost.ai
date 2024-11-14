import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp, FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Importing icons
import './NavigationMenu.css';

const NavigationMenu = ( {onMenuClick} ) => {
    const [isScrolled, setIsScrolled] = useState(false); 
    const [extraPadding, setExtraPadding] = useState('0px');

    const handleMenuItemClick = (platform) => {
        onMenuClick(platform);  
    };

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isPostGeneratorOpen, setPostGeneratorOpen] = useState(false); // State for dropdown

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const togglePostGenerator = () => {
        setPostGeneratorOpen(!isPostGeneratorOpen); 
    };


    /*Fixed on scroll*/
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true); // Set to true when scrolled down
                setExtraPadding('160px');
            } else {
                setIsScrolled(false); // Set to false when at the top
                setExtraPadding('0px');
            }
        };

        window.addEventListener('scroll', handleScroll); // Add scroll listener

        // Clean up the listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const handleMenuClick = (event, targetId) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 80; // Adjust this value as needed to match your menu height
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });
        }
    };


    return (
        <nav className={`navigation-menu ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-wrapper">
                <div className="logo-container">
                    <a href="/">
                        <img src="/assets/logo.svg" alt="Logo" className="logo" />
                    </a>
                </div>
                <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between icons */}
                </div>
                <ul className={`navigation-list a-center ${isMobileMenuOpen ? 'active' : 'passive-hide'}`}>
                    <li className="navigation-item">
                        <a href="#home" className="navigation-link">Home</a>
                    </li>
                    <li className="navigation-item">
                        <div className="dropdown-toggle" onClick={togglePostGenerator}>
                            <span className="navigation-link">Post Generators</span>
                            {/* Chevron icon toggles between up and down */}
                            {isPostGeneratorOpen ? <FaChevronUp className="chevron-icon" /> : <FaChevronDown className="chevron-icon" />}
                        </div>
                        {/* Dropdown items */}
                        {isPostGeneratorOpen && (
                            <ul className="dropdown-list">
                                <li className="dropdown-item nav-facebook" onClick={() => handleMenuItemClick('Facebook')}>
                                    <a href="#postgenerator" className="navigation-link">
                                        <FaFacebook className="post-generator-icon" /> <span>Facebook Post Generator</span>
                                    </a>
                                </li>
                                <li className="dropdown-item nav-instagram" onClick={() => handleMenuItemClick('Instagram')}>
                                    <a href="#postgenerator" className="navigation-link">
                                        <FaInstagram className="post-generator-icon" /> Instagram Post Generator
                                    </a>
                                </li>
                                <li className="dropdown-item nav-tiktok" onClick={() => handleMenuItemClick('TikTok')}>
                                    <a href="#postgenerator" className="navigation-link">
                                        <FaTiktok className="post-generator-icon" /> TikTok Post Generator
                                    </a>
                                </li>
                                <li className="dropdown-item nav-x" onClick={() => handleMenuItemClick('X')}>
                                    <a href="#postgenerator" className="navigation-link">
                                        <FaTwitter className="post-generator-icon" /> X Post Generator
                                    </a>
                                </li>
                                <li className="dropdown-item nav-linkedin" onClick={() => handleMenuItemClick('LinkedIn')}>
                                    <a href="#postgenerator" className="navigation-link">
                                        <FaLinkedin className="post-generator-icon" /> LinkedIn Post Generator
                                    </a>
                                </li>
                            </ul>
                        )}
                    </li>

                    
                    
                    <li className="navigation-item">
                        <a href="#showcase" className="navigation-link" onClick={(e) => handleMenuClick(e, 'showcase')}>Showcase</a>
                    </li>
                    <li className="navigation-item">
                        <a href="#testimonials" className="navigation-link" onClick={(e) => handleMenuClick(e, 'testimonials')}>Testimonials</a>
                    </li>
                    <li className="navigation-item">
                        <a href="#features" className="navigation-link" onClick={(e) => handleMenuClick(e, 'features')}>Features</a>
                    </li>
                    <li className="navigation-item">
                        <a href="#audience" className="navigation-link" onClick={(e) => handleMenuClick(e, 'audience')}>Audience</a>
                    </li>
                    <li className="navigation-item">
                        <a href="#pricing" className="navigation-link" onClick={(e) => handleMenuClick(e, 'pricing')}>Pricing</a>
                    </li>
                    <li className="navigation-item">
                        <a href="/login" className="navigation-link login-button">Login</a>
                    </li>
                    <li className="navigation-item navigation-item-highlighted">
                        <a href="/register" className="navigation-link register-button">Register</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavigationMenu;
