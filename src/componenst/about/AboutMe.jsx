import React from 'react';
import { Download, ArrowUpRight } from 'lucide-react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section className="nsk-about-section">
            <div className="nsk-about-container">

                {/* Left Column: Text & CTA */}
                <div className="nsk-about-content">
                    <span className="nsk-about-section-tag">ABOUT ME</span>

                    <h1 className="nsk-about-main-heading">
                        Designing intuitive digital experiences with creativity, clarity, and purpose.
                    </h1>

                    <p className="nsk-about-description-text">
                        I'm a UI/UX and Web Designer passionate about creating clean, modern, and user-focused digital experiences. I enjoy transforming ideas into intuitive interfaces that balance aesthetics, usability, and functionality.
                    </p>

                    <p className="nsk-about-description-text">
                        With experience in responsive web design and mobile application interfaces, I focus on crafting visually engaging solutions that improve user interaction and create meaningful digital experiences.
                    </p>

                    <p className="nsk-about-description-text">
                        I specialize in UI design, responsive websites, frontend implementation, and modern design systems using tools like Figma, HTML, CSS, Bootstrap, and JavaScript.
                    </p>

                    <div className="nsk-about-button-group">
                        <a href="/Nitu_Kumari_Resume.pdf" className="nsk-about-btn-primary" download="Nitu_Kumari_Resume.pdf">
                            Download Resume <Download size={18} />
                        </a>

                        <a
                            href="https://wa.me/919508062053"
                            target="_blank"
                            rel="noreferrer"
                            className="nsk-about-btn-secondary"
                        >
                            Let's Connect <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>

                {/* Right Column: Image Container */}
                <div className="nsk-about-image-wrapper">
                    <img
                        src="/about.png"
                        alt="Profile"
                        className="nsk-about-profile-image"
                    />
                </div>

            </div>
        </section>
    );
};

export default AboutMe;