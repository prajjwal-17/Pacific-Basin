// HeroSection.jsx
import React, { useEffect, useState, useRef } from 'react';
import '../styles/HeroSection.css';

function Counter({ target, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const animationRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const hasAnimated = useRef(false);
  
  useEffect(() => {
    // Create intersection observer to detect when counter is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // Update state when visibility changes
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when at least 10% of the element is visible
        rootMargin: '0px' // No margin around the viewport
      }
    );
    
    // Start observing the counter element
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    // Cleanup observer on unmount
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    // Only start/restart animation when element comes into view
    if (isInView) {
      startAnimation();
    } else {
      // Cancel any ongoing animation when out of view
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  }, [isInView]);
  
  const startAnimation = () => {
    // Convert target to number and handle non-numeric inputs
    const end = parseInt(target, 10);
    
    if (isNaN(end) || end <= 0) return;
    
    // Reset the counter when starting a new animation
    setCount(0);
    
    // Cancel any ongoing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    // Animation timing variables
    const startTime = Date.now();
    const endTime = startTime + duration;
    
    // Animate with requestAnimationFrame for smoother counting
    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      
      // Use easeOutQuad for smoother deceleration at the end
      const easeOutQuad = (t) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      // Calculate current count value
      const currentValue = Math.floor(easedProgress * end);
      setCount(currentValue);
      
      if (now < endTime) {
        animationRef.current = requestAnimationFrame(updateCounter);
      } else {
        setCount(end); // Ensure we end exactly on target
        hasAnimated.current = true;
      }
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(updateCounter);
  };
  
  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  return (
    <span className="counter-value" ref={counterRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

function HeroSection() {
  const heroRef = useRef(null);
  
  return (
    <div className="hero-container" ref={heroRef}>
      <div className="hero-content">
        <h2 className="hero-title">Our Fleet & Network</h2>
        <p className="hero-subtitle">
          We own and operate a large fleet of interchangeable dry bulk ships of the highest quality,
          designed and equipped to fit our customers' trades for the long term.
        </p>

        <div className="hero-stats-grid">
          <div className="stat-item">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7-7H4a2 2 0 0 0-2 2v17Z"></path>
                <path d="M15 2v5h5M8 10v8M12 10v8M16 10v8"></path>
              </svg>
            </div>
            <h3><Counter target="277" /></h3>
            <p>Ships operating worldwide *</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="5" r="3"></circle>
                <path d="m9 13 3 9 3-9"></path>
                <path d="M7 13h10"></path>
              </svg>
            </div>
            <h3><Counter target="882" /> / <Counter target="100" /></h3>
            <p>Ports & Countries</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20M4.5 4.5 19 19"></path>
                <path d="M4 12H2M10 12H8M16 12h-2M22 12h-2M19.5 4.5 4 19"></path>
              </svg>
            </div>
            <h3><Counter target="90" suffix="." /><span className="unit">2 million</span></h3>
            <p>Tonnes carried in 2024</p>
          </div>
        </div>

        <p className="hero-description">
          Our global network positions our staff close to our customers so we can better understand
          their dry bulk shipping needs and deliver a first-rate personalised service.
        </p>

        <div className="hero-stats-grid bottom-grid">
          <div className="stat-item">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
            </div>
            <h3><Counter target="14" /></h3>
            <p>Offices on 6 continents</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3><Counter target="4600" /> / <Counter target="403" /></h3>
            <p>Seafarers / Shore staff</p>
          </div>
          <div className="stat-item">
            <div className="stat-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3><Counter target="600" suffix="+" /></h3>
            <p>Customers around the world</p>
          </div>
        </div>

        <button className="fleet-btn">Learn more about our fleet</button>

        <p className="hero-note">
          *including owned vessels, long-term chartered vessels and average number of short-term and
          index-linked vessels operated in December 2024
        </p>
      </div>
    </div>
  );
}

export default HeroSection;