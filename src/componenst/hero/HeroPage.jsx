import React from 'react';
import './HeroSection.css';
import { ArrowUpRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="hero-container">

            <div className="hero-content">
                {/* Top Header Label Badge */}
                <div className="badge-wrapper">
                    <span className="hello-badge">Hello!</span>
                </div>
                <div className="hero-bg-layer">
                    <img src="/hero-bg.svg" alt="" className="hero-bg-img" />
                </div>
                {/* Core Primary Catchphrase */}
                <h1 className="main-headline">
                    I'm <span className="highlight-name">Nitu</span>,<br />
                    UI/UX & Web Designer.
                </h1>

                {/* Dual Column Layout Grid */}
                <div className="services-grid">
                    {/* Left Column: UI/UX */}
                    <div className="service-column left-align">
                        <h2 className="service-title">UI UX DESIGNER</h2>
                        <p className="service-description">
                            We create user-friendly, modern, and engaging digital experiences
                            that improve usability and customer satisfaction.
                        </p>
                    </div>

                    {/* Right Column: Web Design */}
                    <div className="service-column right-align">
                        <h2 className="service-title">Web Designer</h2>
                        <p className="service-description">
                            We design responsive, visually appealing, and high-performing
                            websites tailored to your business goals.
                        </p>
                    </div>
                </div>

                {/* Action Button Capsule Bar with Pure CSS Hover Trigger */}
                <div className="cta-capsule-wrapper">
                    <div className="toggle-container">

                        {/* Sliding Solid Background Slider Indicator */}
                        <div className="toggle-slider-pill"></div>

                        <a href="#work" className="btn-action btn-work">
                            View Work
                            <ArrowUpRight className="arrow-icon" size={18} strokeWidth={2} />                        </a>

                        <a href="#contact" className="btn-action btn-hire">
                            Hire me
                            <ArrowUpRight className="arrow-icon" size={18} strokeWidth={2} />
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
}