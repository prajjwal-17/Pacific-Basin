import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // Images for each dropdown section
  const sectionImages = {
    'ABOUT US': '/images/about-us.jpg',
    'OUR SERVICE': '/images/our-service.jpg',
    'OUR FLEET': '/images/our-fleet.jpg',
    'INVESTORS': '/images/investors.jpg',
    'SUSTAINABILITY': '/images/sustainability.jpg',
    'CAREERS': '/images/careers.jpg',
    'MEDIA': '/images/media.jpg',
  };

  const navItems = [
    {
      title: 'ABOUT US',
      description: 'Learn more about Pacific Basin, our team, and our vision',
      links: [
        'At a glance',
        'Leadership team',
        'Purpose, Vision and Business Principles',
        'Board of directors',
        'Our core market',
        'Management',
        'Our strategic framework',
        'Our history',
        'How we create value',
        'Awards',
      ],
    },
    {
      title: 'OUR SERVICE',
      description: 'Discover our comprehensive shipping solutions',
      links: ['Dry Bulk Shipping', 'Customer Service', 'Chartering', 'Operations'],
    },
    {
      title: 'OUR FLEET',
      description: 'Explore our modern and efficient vessel fleet',
      links: ['Fleet Overview', 'Fleet List', 'Fleet Development'],
    },
    {
      title: 'INVESTORS',
      description: 'Information for our shareholders and potential investors',
      links: ['Financial Reports', 'Announcements', 'Shareholders'],
    },
    {
      title: 'SUSTAINABILITY',
      description: 'Our commitment to sustainable shipping practices',
      links: ['Environment', 'Governance', 'Initiatives'],
    },
    {
      title: 'CAREERS',
      description: 'Join our global team of maritime professionals',
      links: ['Why Join Us', 'Current Openings', 'Life at PB'],
    },
    {
      title: 'MEDIA',
      description: 'Latest news and updates from Pacific Basin',
      links: ['News', 'Events', 'Media Library'],
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set loaded state after a short delay to trigger animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Handle mouseenter for dropdowns
  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  // Handle mouseleave for dropdowns
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle dropdown for mobile
  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // Split links into two columns
  const splitLinks = (links) => {
    const halfLength = Math.ceil(links.length / 2);
    const firstColumn = links.slice(0, halfLength);
    const secondColumn = links.slice(halfLength);
    return [firstColumn, secondColumn];
  };

  return (
    <header className={`fixed-header ${scrolled ? 'scrolled' : ''} ${loaded ? 'loaded' : ''}`}>
      {/* Top bar */}
      <div className="top-bar">
        <div className="container">
          <div className="contacts-language">
            <a href="#" className="top-link">CONTACTS</a>
            <div className="language-selector">
              <a href="#" className="top-link language">EN</a>
              <div className="language-dropdown">
                <a href="#" className="language-option">中文</a>
                <a href="#" className="language-option">日本語</a>
              </div>
            </div>
          </div>
          <div className="stock-info">
            <span className="stock-price">1.630 HKD</span>
            <span className="stock-change">+0.050 (3.16%)</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container">
          {/* Logo */}
          <a href="/" className="navbar-logo animate-item">
            <div className="logo-container">
              <img src="/logo.png" alt="Pacific Basin" />
              <span className="logo-pb">PB</span>
            </div>
          </a>

          {/* Desktop menu */}
          <div className={`navbar-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item, index) => (
              <div 
                key={index} 
                className={`navbar-item animate-item delay-${index}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button className={`navbar-link ${activeDropdown === index ? 'active' : ''}`}>
                  {item.title}
                  <i className="dropdown-icon"></i>
                </button>
                
                {/* Unified dropdown menu with image */}
                {activeDropdown === index && (
                  <div className={`unified-dropdown ${item.title === 'MEDIA' ? 'media-dropdown' : ''}`}>
                    <div className="unified-dropdown-content">
                      <div className="dropdown-text">
                        <h3>{item.title}</h3>
                        <p className="dropdown-description">{item.description}</p>
                        <div className="dropdown-links-container">
                          {splitLinks(item.links).map((columnLinks, colIndex) => (
                            <div key={colIndex} className="dropdown-column">
                              {columnLinks.map((link, idx) => (
                                <a key={idx} href="#" className="unified-dropdown-link">
                                  {link}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="dropdown-image">
                        <div className="image-overlay"></div>
                        <img src={sectionImages[item.title]} alt={item.title} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="mobile-toggle animate-item" onClick={toggleMobileMenu}>
            <span className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menus */}
      <div className={`mobile-dropdowns ${isMobileMenuOpen ? 'show' : ''}`}>
        {navItems.map((item, index) => (
          <div key={index} className="mobile-dropdown">
            <button 
              className={`mobile-dropdown-toggle ${activeDropdown === index ? 'active' : ''}`}
              onClick={() => toggleDropdown(index)}
            >
              {item.title}
              <i className={`mobile-dropdown-icon ${activeDropdown === index ? 'active' : ''}`}></i>
            </button>
            <div className={`mobile-dropdown-menu ${activeDropdown === index ? 'active' : ''}`}>
              <div className="mobile-dropdown-content">
                <div className="mobile-content-wrapper">
                  <div className="mobile-text">
                    <p className="mobile-description">{item.description}</p>
                    <div className="mobile-links-container">
                      {splitLinks(item.links).map((columnLinks, colIndex) => (
                        <div key={colIndex} className="mobile-column">
                          {columnLinks.map((link, idx) => (
                            <a key={idx} href="#" className="mobile-dropdown-link">
                              {link}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mobile-image">
                    <img src={sectionImages[item.title]} alt={item.title} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Navbar;