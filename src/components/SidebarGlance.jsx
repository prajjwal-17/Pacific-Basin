// src/components/SidebarGlance.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Menu, X, ChevronRight, Home, Info, Award, Clock, Users, Briefcase } from 'lucide-react';
import '../styles/SidebarGlance.css';

const SidebarGlance = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { 
      id: 'purpose', 
      label: 'Purpose & Vision', 
      path: '/atglance/purpose',
      icon: <Info size={18} />
    },
    { 
      id: 'market', 
      label: 'Our Core Market', 
      path: '/atglance/market',
      icon: <Briefcase size={18} />
    },
    { 
      id: 'framework', 
      label: 'Strategic Framework', 
      path: '/atglance/framework',
      icon: <Briefcase size={18} />
    },
    { 
      id: 'value', 
      label: 'How We Create Value', 
      path: '/atglance/value',
      icon: <Briefcase size={18} />
    },
    { 
      id: 'leadership', 
      label: 'Leadership Team', 
      path: '/atglance/leadership',
      icon: <Users size={18} />
    },
    { 
      id: 'directors', 
      label: 'Board of Directors', 
      path: '/atglance/directors',
      icon: <Users size={18} />
    },
    { 
      id: 'management', 
      label: 'Management', 
      path: '/atglance/management',
      icon: <Users size={18} />
    },
    { 
      id: 'history', 
      label: 'Our History', 
      path: '/ourhistory',
      icon: <Clock size={18} />
    },
    { 
      id: 'awards', 
      label: 'Awards', 
      path: '/atglance/awards',
      icon: <Award size={18} />
    }
  ];

  useEffect(() => {
    // Close mobile sidebar when route changes
    setIsMobileOpen(false);
  }, [location]);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile toggle button - top */}
      <button 
        className="sidebar-toggle sidebar-toggle-top" 
        onClick={toggleMobileSidebar}
        aria-label="Toggle sidebar"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Mobile toggle button - bottom left */}
      <button 
        className="sidebar-toggle sidebar-toggle-bottom" 
        onClick={toggleMobileSidebar}
        aria-label="Toggle sidebar"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Main sidebar */}
      <div 
        className={`sidebar-glance ${isExpanded ? 'expanded' : 'collapsed'} ${isMobileOpen ? 'mobile-open' : ''}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Home icon for collapsed state */}
        {!isExpanded && !isMobileOpen && (
          <Link to="/" className="collapsed-home-icon" aria-label="Home">
            <Home size={24} color="#0093c4" />
          </Link>
        )}

        <div className="sidebar-header">
          <Link to="/" className="home-link">
            <Home size={20} />
            <h2>AT A GLANCE</h2>
          </Link>
          <div className="blue-line"></div>
          <button 
            className="close-sidebar" 
            onClick={() => setIsMobileOpen(false)}
            aria-label="Close sidebar"
          >
            <X size={24} />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <ul>
            {menuItems.map(item => (
              <li key={item.id}>
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => 
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  <div className="nav-link-content">
                    <span className="icon-wrapper">{item.icon}</span>
                    <span className="link-text">{item.label}</span>
                  </div>
                  <ChevronRight className="icon-chevron" size={16} />
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Hover tab for collapsed state */}
        <div className="sidebar-hover-tab">
          <Menu size={20} />
        </div>
  
        {/* Quick links footer */}
        <div className="sidebar-footer">
          <Link to="/contact" className="footer-link">Contact</Link>
          <Link to="/feedback" className="footer-link">Feedback</Link>
          <Link to="/help" className="footer-link">Help</Link>
        </div>
      </div>
      
      {/* Overlay for mobile view */}
      {isMobileOpen && (
        <div className="sidebar-overlay" onClick={() => setIsMobileOpen(false)}></div>
      )}

      {/* Arrow hint when sidebar is collapsed */}
      {!isExpanded && !isMobileOpen && (
        <div 
          className="sidebar-arrow-hint" 
          onClick={() => setIsExpanded(true)}
          title="Expand Sidebar"
        >
          <ChevronRight size={24} color="white" />
        </div>
      )}
    </>
  );
};
  
export default SidebarGlance;