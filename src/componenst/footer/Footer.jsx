import React from 'react';
import { Mail, Phone } from 'lucide-react';
import './Footer.css';
import LogoIcon from '../navBar/LogoIcon';

const Footer = () => {
  return (
    <footer className="nsk-footer-section">
      <div className="nsk-footer-container">

        {/* Top Section */}
        <div className="nsk-footer-top">

          {/* Logo Block */}
          <div className="nsk-footer-logo-box">
            <LogoIcon />
          </div>

          {/* Nav Links */}
          <nav className="nsk-footer-nav">
            <a href="https://www.linkedin.com/in/nitukumari70/" target="_blank" rel="noreferrer" className="nsk-footer-nav-link">
              LINKEDIN
            </a>
            <a href="https://www.instagram.com/uxnest.design?" target="_blank" rel="noreferrer" className="nsk-footer-nav-link">
              INSTAGRAM
            </a>
            <a href="https://www.behance.net/nitukumari59" target="_blank" rel="noreferrer" className="nsk-footer-nav-link">
              BEHANCE
            </a>
            <a href="mailto:nitukumari251001@gmail.com" className="nsk-footer-nav-link">
              EMAIL
            </a>
          </nav>

          {/* Contact Details */}
          <div className="nsk-footer-contact-box">
            <div className="nsk-footer-contact-item">
              <div className="nsk-footer-icon-badge">
                <Mail size={14} />
              </div>
              <span className="nsk-footer-contact-label">Email :</span>
              <a href="mailto:nitukumari251001@gmail.com" className="nsk-footer-contact-value">
                nitukumari251001@gmail.com
              </a>
            </div>

            <div className="nsk-footer-contact-item">
              <div className="nsk-footer-icon-badge">
                <Phone size={14} />
              </div>
              <span className="nsk-footer-contact-label">Mb :</span>
              <a href="tel:+919508062053" className="nsk-footer-contact-value">
                +91 9508062053
              </a>
            </div>
          </div>

        </div>

        {/* Divider Line */}
        <div className="nsk-footer-separator"></div>

        {/* Bottom Section */}
        <div className="nsk-footer-bottom">
          <p className="nsk-footer-copyright">
            © 2026 UI/UX PORTFOLIO. BUILT WITH PRECISION.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;