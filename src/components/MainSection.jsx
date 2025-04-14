import React, { useEffect } from 'react';
import '../styles/MainSection.css';
import img1 from "../Images/MainSectionimgs/img1.webp";
import img2 from "../Images/MainSectionimgs/img2.jpg";
import img3 from "../Images/MainSectionimgs/img3.jpg";
import img4 from "../Images/MainSectionimgs/img4.jpeg";
import img5 from "../Images/MainSectionimgs/img5.jpg";

function MainSection() {
  // Add smooth animation when scrolling
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.card').forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      document.querySelectorAll('.card').forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="main-container">
      {/* Hero Section */}
      <div
        className="hero-image"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${img1})` }}
      >
        <div className="hero-text">
          <h1>With you for<br />the long haul</h1>
          <div className="hero-line"></div>
        </div>
        <div className="dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="scroll-indicator">
          <div className="circle">
            <span className="arrow">&#x25BC;</span>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="cards-container">
        <div className="card contact">
          <div className="card-image-container">
            <img src={img2} alt="Contact" className="gallery-image" />
            <div className="card-image-overlay"></div>
          </div>
          <div className="card-content">
            <h4>Contact Us</h4>
            <p>Our global network <span className="arrow-right">→</span></p>
          </div>
        </div>

        <div className="card news">
          <div className="card-image-container">
            <img src={img3} alt="News" className="gallery-image" />
            <div className="card-image-overlay"></div>
          </div>
          <div className="card-content">
            <span className="card-label">Latest News</span>
            <h4>Rules Relating to the 2025...</h4>
            <div className="card-footer">
              <span className="date">10 Apr 2025</span>
              <span className="arrow-right">→</span>
            </div>
          </div>
        </div>

        <div className="card fraud">
          <div className="card-image-container">
            <img src={img4} alt="Fraud Alert" className="gallery-image" />
            <div className="card-image-overlay"></div>
          </div>
          <div className="card-content">
            <h4>Fraud Alert</h4>
            <p>View More <span className="arrow-right">→</span></p>
          </div>
        </div>

        <div className="card profile">
          <div className="card-image-container profile-bg">
            <img src={img5} alt="Pacific Basin" className="logo" />
          </div>
          <div className="card-content">
            <h4>Pacific Basin Shipping</h4>
            <span className="date">2025-04-09</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;