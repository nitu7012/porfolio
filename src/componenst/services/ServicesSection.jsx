import React from 'react';
import './ServicesSection.css';

const servicesData = [
  {
    id: 1,
    title: 'UI/UX Design',
    description: 'Designing intuitive, user-centered, and visually engaging interfaces focused on usability, accessibility, and seamless user experiences.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Web Design',
    description: 'Creating responsive and modern websites with clean layouts, strong visual hierarchy, and engaging interactions across all devices.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'User Research & Strategy',
    description: 'Understanding user behavior, business goals, and pain points to build meaningful and effective digital solutions.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Design Systems',
    description: 'Building scalable design systems, reusable components, and consistent UI patterns for modern digital products.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    )
  },
  {
    id: 5,
    title: 'Wireframing & Prototyping',
    description: 'Building scalable design systems, reusable components, and consistent UI patterns for modern digital products.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    )
  },
  {
    id: 6,
    title: 'Visual & Brand Design',
    description: 'Building scalable design systems, reusable components, and consistent UI patterns for modern digital products.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    )
  }
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      {/* Background Diamond pattern layer */}
      <div className="bg-diamond-pattern"></div>

      <div className="services-container">
        {/* Left Headline Section */}
        <div className="left-content">
          <p className="sub-title">What I Do</p>
          <div className="title-underline"></div>
          <h2 className="main-title">
            Building clean and<br />
            user-focused interfaces.
          </h2>

          {/* Hands & Lightbulb Vector Graphics */}
          <div className="illustration-wrapper">
           <img src="/work-do-img.svg" alt="" />
          </div>
        </div>

        {/* Right Cards Grid */}
        <div className="cards-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-icon">{service.icon}</div>
              <h3 className="card-title">{service.title}</h3>
              <p className="card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}