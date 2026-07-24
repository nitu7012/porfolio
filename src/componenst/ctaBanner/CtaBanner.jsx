
import React from 'react';

import { Mail, MessageCircle, Code2 } from 'lucide-react';
import './CtaBanner.css';

// 1. Custom SVG for Behance Icon
const BehanceIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.101 1.169.088 2.169h-8.081c.088 1.781 1.211 2.812 2.811 2.812 1.238 0 2.052-.562 2.417-1.425h2.589zm-5.267-5.013c-1.401 0-2.311.832-2.483 2.112h4.86c-.052-1.201-.813-2.112-2.377-2.112zm-10.459 8.013h-8v-16h7.514c3.212 0 5.039 1.393 5.039 3.848 0 1.57-.751 2.723-2.039 3.328 1.708.572 2.586 1.936 2.586 3.793 0 2.946-2.227 5.031-5.1 5.031zm-5.053-13.013v3.136h3.69c1.238 0 2.08-.501 2.08-1.572 0-1.042-.812-1.564-2.08-1.564h-3.69zm0 5.864v3.832h3.989c1.45 0 2.353-.611 2.353-1.892 0-1.321-.92-1.94-2.353-1.94h-3.989z"/>
  </svg>
);

// 2. Custom SVG for LinkedIn Icon (Import error se bachne ke liye safe SVG)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

// Array with social links
const socialLinks = [

  {
    id: 2,
    name: 'Behance',
    url: 'https://www.behance.net/nitukumari59',
    icon: <BehanceIcon />
  },
  {
    id: 3,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/nitukumari70/',
    icon: <LinkedInIcon />
  },
  {
    id: 4,
    name: 'WhatsApp',
    url: 'https://wa.me/919508062053',
    icon: <MessageCircle size={22} />
  },
  {
    id: 5,
    name: 'Code',
    url: 'https://github.com/nitu7012',
    icon: <Code2 size={22} />
  }
];

const CtaBanner = () => {
  return (
    <section className="nsk-about-cta-section">
      
      {/* Background Illustrations */}
      <div className="nsk-about-cta-bg-wrapper">
       <img 
          src="/lets-left-img.svg" 
          alt="Left Idea Graphic" 
          className="nsk-about-cta-bg-left" 
        />
        <img 
          src="/lets-ringh-img.svg" 
          alt="Right Thinking Graphic" 
          className="nsk-about-cta-bg-right" 
        />
      </div>

      {/* Main Content */}
      <div className="nsk-about-cta-content">
        <h2 className="nsk-about-cta-title">
          Let's build something<br />meaningful together.
        </h2>

        {/* Dynamic Social Icons */}
        <div className="nsk-about-cta-socials">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              className="nsk-about-cta-icon-card"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

    </section>
  );
};

export default CtaBanner;