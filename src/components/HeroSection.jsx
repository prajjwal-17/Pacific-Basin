import React from 'react';
import '../styles/HeroSection.css';

function Herosection() {
  return (
    <div className="hero-container">
      <h2 className="hero-title">Our Fleet & Network</h2>
      <p className="hero-subtitle">
        We own and operate a large fleet of interchangeable dry bulk ships of the highest quality,
        designed and equipped to fit our customers' trades for the long term
      </p>

      <div className="hero-stats-grid">
        <div className="stat-item">
          <i className="fas fa-ship"></i>
          <h3>≈277</h3>
          <p>Ships operating worldwide *</p>
        </div>
        <div className="stat-item">
          <i className="fas fa-anchor"></i>
          <h3>882/100</h3>
          <p>Ports & Countries</p>
        </div>
        <div className="stat-item">
          <i className="fas fa-weight-hanging"></i>
          <h3>90.2<span className="unit">million</span></h3>
          <p>Tonnes carried in 2024</p>
        </div>
      </div>

      <p className="hero-description">
        Our global network positions our staff close to our customers so we can better understand
        their dry bulk shipping needs and deliver a first-rate personalised service
      </p>

      <div className="hero-stats-grid bottom-grid">
        <div className="stat-item">
          <i className="fas fa-globe"></i>
          <h3>14</h3>
          <p>Offices on 6 continents</p>
        </div>
        <div className="stat-item">
          <i className="fas fa-user-friends"></i>
          <h3>4,600+/403</h3>
          <p>Seafarers / Shore staff</p>
        </div>
        <div className="stat-item">
          <i className="fas fa-users"></i>
          <h3>600+</h3>
          <p>Customers around the world</p>
        </div>
      </div>

      <button className="fleet-btn">Learn more about our fleet →</button>

      <p className="hero-note">
        *including owned vessels, long-term chartered vessels and average number of short-term and
        index-linked vessels operated in December 2024
      </p>
    </div>
  );
}

export default Herosection;