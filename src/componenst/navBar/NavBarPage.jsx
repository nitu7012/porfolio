import React, { useState } from 'react';
import './Navbar.css';
import LogoIcon from './LogoIcon';
import EmailIcon from './EmailIcon';
import WhatsAppIcon from './WhatsAppIcon';
import NavLink from './NavLink';



export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar-container">
            <div className="navbar-capsule">
                {/* Logo / Brand Section */}
                <div className="navbar-logo-area">
                    <LogoIcon />
                </div>

                {/* Desktop Navigation Links */}
                <div className="navbar-links">
                    <NavLink />
                </div>

                {/* Action Buttons / Contacts */}
                <div className="navbar-actions">
                    <a href="https://wa.me/yourlink" className="action-btn" aria-label="WhatsApp">
                        <WhatsAppIcon />
                    </a>
                    <a href="mailto:your@email.com" className="action-btn" aria-label="Email">
                        <EmailIcon />
                    </a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className={`mobile-burger ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Drawer Overlay */}
            {isMenuOpen && (
                <div className="mobile-menu-drawer">
                    <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                    <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                    <a href="#resume" onClick={() => setIsMenuOpen(false)} className="nav-link resume-download">Resume</a>
                </div>
            )}
        </nav>
    );
}