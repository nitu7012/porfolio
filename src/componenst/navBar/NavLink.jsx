import React from 'react';

const NavLink = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <a 
        href="#projects" 
        onClick={(e) => handleScroll(e, 'projects')} 
        className="nav-link"
      >
        Projects
      </a>

      <a 
        href="#about" 
        onClick={(e) => handleScroll(e, 'about')} 
        className="nav-link"
      >
        About
      </a>

      <a 
        href="/Nitu_Kumari_Resume.pdf" 
        download="Nitu_Kumari_Resume.pdf" 
        className="nav-link"
      >
        Resume
      </a>
    </>
  );
};

export default NavLink;