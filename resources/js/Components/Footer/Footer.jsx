import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container-outer">
      <div className="footer-container-inner">
        {/* Legal Column */}
        <div>
          <h3 className="footer-title">Legal</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none' }}>Privacy Policy</a></li>
            <li><a href="/cookie-policy" style={{ color: '#fff', textDecoration: 'none' }}>Cookie Policy</a></li>
            <li><a href="/terms-and-conditions" style={{ color: '#fff', textDecoration: 'none' }}>Terms and Conditions</a></li>
          </ul>
        </div>

        {/* Help Column */}
        <div>
          <h3 className="footer-title">Help</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="/faq" style={{ color: '#fff', textDecoration: 'none' }}>FAQ</a></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className="footer-title">Contact</h3>
          <p>Name: Simco József</p>
          <p>Email: <a href="mailto:info@jozsefsimco.com" style={{ color: '#fff' }}>info@jozsefsimco.com</a></p>
          <p>Phone: +36 20 972 6362</p>
          <p>Address: 
            <a 
            href="https://www.google.hu/maps/place/HonlapM%C3%A9dia+-+Honlapk%C3%A9sz%C3%ADt%C3%A9s,+Weboldal+k%C3%A9sz%C3%ADt%C3%A9s,+Web%C3%A1ruh%C3%A1z+k%C3%A9sz%C3%ADt%C3%A9s,+Keres%C5%91optimaliz%C3%A1l%C3%A1s/@47.5893343,21.6876333,17z/data=!3m1!4b1!4m6!3m5!1s0x47470fe2a2c99189:0xb618bbfc2339fda!8m2!3d47.5893343!4d21.6876333!16s%2Fg%2F11h89n63ps?hl=hu&entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#fff', textDecoration: 'none' }}
            >
            Debrecen 4002, Salakos street 85
            </a>
        </p>
        </div>

        {/* Tools Column */}
        <div>
          <h3 className="footer-title">Tools</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><a href="/facebook-post-generator" style={{ color: '#fff', textDecoration: 'none' }}>Facebook Post Generator</a></li>
            <li><a href="/instagram-post-generator" style={{ color: '#fff', textDecoration: 'none' }}>Instagram Post Generator</a></li>
            <li><a href="/tiktok-post-generator" style={{ color: '#fff', textDecoration: 'none' }}>TikTok Post Generator</a></li>
            <li><a href="/x-post-generator" style={{ color: '#fff', textDecoration: 'none' }}>X Post Generator</a></li>
            <li><a href="/linkedin-post-generator" style={{ color: '#fff', textDecoration: 'none' }}>LinkedIn Post Generator</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
