import React, { useState } from 'react';
import './SelectedWorks.css';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Real Estate Portal',
    description: 'Building clean and user-focused interfaces.',
    category: 'Web Design',
    video: '/Realstate.mp4',
    image: '/Realstate.png',
    btnType: 'primary',
    isLive: true,
    liveUrl: 'https://tinywebs.site/pWJbno'
  },
  {
    id: 2,
    title: 'Sanonyx — Corporate Tech Agency Website',
    description: 'Modern, responsive corporate landing page crafted with clean HTML/CSS and structured Bootstrap components.',
    category: 'Web Design',
    image: '/synonyx.png',
    btnType: 'secondary',
    isLive: true,
    liveUrl: 'https://sanonyx.com/'
  },
  {
    id: 3,
    title: 'Regular Print — E-Commerce Web Design',
    description: 'Custom E-Commerce UI built with HTML5, CSS3, and Bootstrap for seamless print-on-demand shopping.',
    category: 'Web Design',
    video: '/regularPrint.mp4',
    image: '/Realstate.png',
    btnType: 'secondary',
    isLive: true,
    liveUrl: 'https://regularprint.com'
  },
  {
    id: 4,
    title: 'SpeedyParts Dashboard',
    description: 'Building clean and user-focused interfaces for e-commerce automotive parts.',
    category: 'Case Studies',
    image: '/speedyparts.png',
    btnType: 'secondary',
    isLive: false,
    liveUrl: 'https://surl.li/fnqixi'
  },
  {
    id: 5, // Duplicate ID fixed (was 4 earlier)
    title: 'Rathee Greenhouse — Business Showcase',
    description: 'Visual-centric responsive web design emphasizing natural aesthetics and user-friendly navigation.',
    category: 'Web Design',
    video: '/Rathee.mp4',
    image: '/rathee.png',
    btnType: 'secondary',
    isLive: true,
    liveUrl: 'https://ratheegreenhouse.com'
  },
  {
    id: 6,
    title: 'Bot Media Digital',
    description: 'Modern redesign for a digital marketing agency.',
    category: 'Redesigns',
    video: '/botmedia.mp4', 
    image: '/th.png',
    btnType: 'primary',
    isLive: false,
    liveUrl: 'https://tinywebs.site/NQIBHa'
  },
  {
    id: 7,
    title: 'Scale Your Business With Next-Gen Digital Marketing',
    description: 'We turn clicks into customers using data-driven strategies, ROI-focused campaigns, and high-impact brand designs.',
    category: 'Redesigns',
    video: '/botmedia.mp4', 
    image: '/thn.png',
    btnType: 'secondary',
    isLive: false,
    liveUrl: '/sequ.png'
  },
  {
  id: 8,
  title: 'Smart Rural Commerce Platform',
  description:
    'An AI-powered rural marketplace connecting local shopkeepers and customers through voice search, image recognition, and location-based shopping.',
  category: 'Case Studies',
  video: '/gramkart.mp4',
  image: '/banner 4.png',
  btnType: 'primary',
  isLive: false,
  liveUrl: 'https://l1nq.com/zxvpvcu'
}
];

const CATEGORIES = ['All', 'Live Projects', 'Case Studies', 'Redesigns', 'Web Design'];
const ITEMS_PER_PAGE = 4; // Max items to show initially

export default function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Corrected Filter Logic
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Live Projects') return project.isLive === true;
    return project.category === activeCategory;
  });

  // Limit displayed projects based on active page count
  const displayedProjects = filteredProjects.slice(0, visibleCount);

  // Reset pagination count when switching categories
  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(ITEMS_PER_PAGE);
  };

  return (
    <div className="works-container">
      {/* Header */}
      <header className="works-header">
        <h1 className="works-title">Selected Works</h1>
        <a href="/projects" className="view-all-btn">
          VIEW ALL<span>&#x2197;</span>
        </a>
      </header>

      {/* Category Tabs Bar */}
      <div className="categories-container">
        <span className="categories-label">Categories :-</span>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategoryChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="works-grid">
        {displayedProjects.length > 0 ? (
          displayedProjects.map((project) => (
            <article className="work-card" key={project.id}>
              {/* Header with Title and Live Badge */}
              <div className="card-header">
                <h2 className="card-title">{project.title}</h2>
                {project.isLive && (
                  <span className="live-badge">
                    <span className="live-dot"></span> Live
                  </span>
                )}
              </div>

              <p className="card-description">{project.description}</p>

              {/* Media Container: Video vs Image */}
              <div className="card-image-wrapper">
                {project.video ? (
                  <video
                    src={project.video}
                    poster={project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="card-media"
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="card-media"
                  />
                )}

                {/* Redirect Link Button */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`card-action-btn ${project.btnType}`}
                  title={project.isLive ? "View Live Demo" : "View Project"}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>
              </div>
            </article>
          ))
        ) : (
          <p className="no-projects">No projects found in this category.</p>
        )}
      </div>

      {/* Load More Pagination Button */}
      {visibleCount < filteredProjects.length && (
        <div className="see-container">
          <button 
            className="load-more-btn"
            onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
          >
            SEE MORE PROJECTS
          </button>
        </div>
      )}
    </div>
  );
}