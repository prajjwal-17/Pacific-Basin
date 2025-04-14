import React from 'react';
import '../styles/MainSection.css';
import img1 from "../Images/MainSectionimgs/img1.webp";
import img2 from "../Images/MainSectionimgs/img2.jpg";
import img3 from "../Images/MainSectionimgs/img3.jpg";
import img4 from "../Images/MainSectionimgs/img4.jpeg";
import img5 from "../Images/MainSectionimgs/img5.jpg";

function MainSection() {
  return (
    <div className="main-container">
      {/* Hero Section */}
      <div
        className="hero-image"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="hero-text">
          <h1>With you for<br />the long haul</h1>
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

      {/* Card Section - DIRECTLY INSIDE main-container */}
      <div className="card contact">
        <img src={img2} alt="Contact" className="gallery-image" />
        <h4>Contact Us</h4>
        <p>Our global network →</p>
      </div>

      <div className="card news">
        <img src={img3} alt="News" className="gallery-image" />
        <h4>Latest News</h4>
        <p className="date">10 Apr 2025</p>
        <p>Rules Relating to the 202...</p>
        <span className="arrow">→</span>
      </div>

      <div className="card fraud">
        <img src={img4} alt="Fraud Alert" className="gallery-image" />
        <h4>Fraud Alert</h4>
        <p>View More →</p>
      </div>

      <div className="card profile">
        <img src={img5} alt="Pacific Basin" className="logo" />
        <p className="company">Pacific Basin Shipping</p>
        <p className="date">2025-04-09</p>
      </div>
    </div>
  );
}

export default MainSection;