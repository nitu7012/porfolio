import React from 'react';
import './SkillsSection.css';

// Easily add, remove, or edit skills from this array
const skillsData = [
  { id: 1, name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { id: 2, name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
  { id: 3, name: 'Framer', icon: 'https://www.svgrepo.com/show/306070/framer.svg' },
  { id: 4, name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg' },
  { id: 5, name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { id: 6, name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { id: 7, name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { id: 8, name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
];

const SkillsSection = () => {
  return (
    <section className="nsk-about-skills-section">
      <div className="nsk-about-skills-container">
        
        {/* Left Side Header */}
        <div className="nsk-about-skills-header">
          <span className="nsk-about-skills-subtitle">
            Skills That Drive Results
          </span>
          <h2 className="nsk-about-skills-title">
            From Design to<br />Development
          </h2>
        </div>

        {/* Right Side Skills Grid */}
        <div className="nsk-about-skills-grid">
          {skillsData.map((skill) => (
            <div key={skill.id} className="nsk-about-skill-card">
              <div className="nsk-about-skill-icon-wrapper">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="nsk-about-skill-icon" 
                />
              </div>
              <p className="nsk-about-skill-name">{skill.name}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;