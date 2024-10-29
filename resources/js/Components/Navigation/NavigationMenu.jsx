import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons
import './NavigationMenu.css';

const NavigationMenu = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navigation-menu">
            <div className="nav-wrapper">
                <div className="logo-container">
                    <a href="/">
                        <img src="/assets/logo.svg" alt="Logo" className="logo" />
                    </a>
                </div>
                <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between icons */}
                </div>
                <ul className={`navigation-list a-center ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li className="navigation-item">
                        <a href="#home" className="navigation-link">Home</a>
                    </li>
                    <li className="navigation-item">
                        <a href="#features" className="navigation-link">Features</a>
                    </li>
                    <li className="navigation-item">
                        <a href="#about" className="navigation-link">About</a>
                    </li>
                    <li className="navigation-item">
                        <a href="#contact" className="navigation-link">Contact</a>
                    </li>
                    {/* Login and Register Buttons */}
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
