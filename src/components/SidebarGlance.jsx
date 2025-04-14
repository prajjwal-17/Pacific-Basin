// src/components/SidebarGlance.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/SidebarGlance.css';

const SidebarGlance = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'purpose', label: 'PURPOSE, VISION AND BUSINESS PRINCIPLES', path: '/atglance/purpose' },
    { id: 'market', label: 'OUR CORE MARKET', path: '/atglance/market' },
    { id: 'framework', label: 'OUR STRATEGIC FRAMEWORK', path: '/atglance/framework' },
    { id: 'value', label: 'HOW WE CREATE VALUE', path: '/atglance/value' },
    { id: 'leadership', label: 'LEADERSHIP TEAM', path: '/atglance/leadership' },
    { id: 'directors', label: 'BOARD OF DIRECTORS', path: '/atglance/directors' },
    { id: 'management', label: 'MANAGEMENT', path: '/atglance/management' },
    { id: 'history', label: 'OUR HISTORY', path: '/atglance/history' },
    { id: 'awards', label: 'AWARDS', path: '/atglance/awards' }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button 
        className="sidebar-toggle" 
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div className={`sidebar-glance ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>AT A GLANCE</h2>
          <div className="blue-line"></div>
          <button 
            className="close-sidebar" 
            onClick={toggleSidebar}
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
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={closeSidebar}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default SidebarGlance;