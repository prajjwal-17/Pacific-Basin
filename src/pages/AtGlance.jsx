// src/pages/AtGlance.jsx
import React, { useEffect } from 'react';
import SidebarGlance from '../components/SidebarGlance';
import '../styles/AtGlance.css';

const AtGlance = () => {
  // Add smooth scroll behavior
  useEffect(() => {
    // Initialize any animations or JS functionality
    const sections = document.querySelectorAll('.section');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="at-glance-container">
      <SidebarGlance />
      
      <div className="content-area">
        <h1 className="page-title">Pacific Basin - At a Glance</h1>
        
        <section id="purpose" className="section">
          <h2 className="section-heading">Who We Are</h2>
          <p>
            Pacific Basin is one of the world's leading owners and operators of modern Handysize and Supramax dry bulk ships
          </p>
          <ul className="info-list">
            <li>We are passionate about our customers, our people and our business</li>
            <li>Our vision is to be the global leader in minor bulk shipping and the partner of choice for customers and other stakeholders</li>
            <li>We work closely with our customers to understand and meet their individual and changing needs</li>
            <li>We strive to deliver an industry-leading localised, tailored and responsive freight service</li>
            <li>We provide over 600 industrial producers, traders and users of dry bulk commodities with a reliable and competitive freight service</li>
            <li>Our fleet of ~277 ships and 14 offices on 6 continents offers a global service</li>
            <li>We own ships, crews and in-house technical operations for enhanced service</li>
            <li>Headquartered and listed in Hong Kong</li>
          </ul>
        </section>

        <section id="market" className="section">
          <h2 className="section-heading">Fast Facts</h2>
          <div className="image-container">
            <img src="./images/fast.jpg" alt="Fast Facts" className="fast-facts-image" />
          </div>
        </section>

        <section id="framework" className="section">
          <h2 className="section-heading">Our Strengths</h2>
          <ul className="info-list">
            <li>World-leading minor bulk shipping expertise, solid track record and expert understanding of the shipping cycles</li>
            <li>Customer and cargo-focused business model, high fleet utilisation and time-charter equivalent (TCE) earnings premium over market rates</li>
            <li>Robust cost control, competitive operating costs, conservative gearing and strong financial health</li>
            <li>Commitment to strong corporate governance – sound internal controls, transparency and accountability to all stakeholders – which underpins everything we do</li>
          </ul>
          <div className="highlight-box">
            <p>
              Together, these strengths enhance confidence in Pacific Basin as a preferred counterparty for our customers and a compelling place to invest.
            </p>
          </div>
        </section>

        <section id="value" className="section">
          <h2 className="section-heading">Our Strategy</h2>
          <p>
            We have a focused strategy, robust customer-focused business model and competitive edge, supported by our key drivers:
          </p>
          <ul className="info-list">
            <li>Experienced team working across an extensive global network, sharing a passion for service</li>
            <li>Close customer partnerships, generating enhanced access to spot cargoes and long-term cargo contracts</li>
            <li>Large fleet of substitutable ships, facilitating reliable service and scheduling flexibility</li>
            <li>Strong corporate and financial profile, reflecting a strong cash position and best-in-class governance, CSR and reporting</li>
          </ul>
          <p>
            This leads to outstanding customer service, superior fleet utilisation, and enhanced TCE earnings and attractive long-term returns for our shareholders over the shipping cycle.
          </p>
        </section>

        <section id="leadership" className="section">
          <h2 className="section-heading">Our Fleet</h2>
          <p>
            We are ship owners and operators – we own 112 ships and operate approximately 165 more under charter. Our fleet of around 277 Handysize and Supramax ships is one of the world's largest fleets of modern minor bulk ships.
          </p>
          <p>
            We combine our fleet size, global office network and local understanding to provide customers with class-leading service.
          </p>
          <p>
            All our ships are designed and equipped to fit our trades for the long term. Built mainly in Japan, they offer superior reliability, longevity, value retention and fuel efficiency.
          </p>
          <p>
            Our award-winning in-house technical operations facilitate service quality and reliability.
          </p>
        </section>

        <section id="directors" className="section">
          <h2 className="section-heading">Leadership</h2>
          <p>
            Our Board comprises 9 Directors whose complementary expertise and shared commitment to responsible investment and management practices is harnessed in the best interests of our diverse shareholders and other stakeholders.
          </p>
          <ul className="info-list">
            <li>Chairman Stanley H. Ryan was appointed in 2023</li>
            <li>Chief Executive Officer Martin Fruergaard joined in 2021</li>
          </ul>
        </section>

        <section id="management" className="section">
          <h2 className="section-heading">Our Team</h2>
          <div className="stat-card">
            <div className="stat-value">4,600+</div>
            <div className="stat-label">Seafarers</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">403</div>
            <div className="stat-label">Onshore Staff</div>
          </div>
        </section>

        <section id="history" className="section">
          <h2 className="section-heading">Locations</h2>
          <p>
            Our corporate headquarters are in Hong Kong, and our global network spans 14 offices across six continents.
          </p>
        </section>

        <section id="awards" className="section">
          <h2 className="section-heading">Financial Highlights</h2>
          <p>As at 2024 Annual Results (in USD):</p>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">$131.7M</div>
              <div className="stat-label">Net Profit</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">$114.1M</div>
              <div className="stat-label">Underlying Profit</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">$2,581.6M</div>
              <div className="stat-label">Revenue</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">$333.4M</div>
              <div className="stat-label">EBITDA</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">$547.6M</div>
              <div className="stat-label">Total Available Liquidity</div>
            </div>
          </div>
          
          <h3 className="sub-heading">Listing Info</h3>
          <div className="highlight-box">
            <p>
              <strong>Equity Stock:</strong> Pacific Basin shares (Stock code: 2343) have traded on the Hong Kong Stock Exchange since 2004. Our stock is a constituent member of the Hang Seng sub index series and the MSCI index series, and it is eligible for Southbound Trading under the Shenzhen-Hong Kong Stock Connect Programme.
            </p>
            <p>
              <strong>Convertible Bonds:</strong> 3.0% Convertible Bonds due 2025 (Stock code: 40097)
            </p>
          </div>
        </section>

        <section className="section">
          <h2 className="section-heading">Gallery</h2>
          <div className="visuals-gallery">
            <div className="visual-item">
              <img src="./images/fast.jpg" alt="Visual 1" />
            </div>
            <div className="visual-item">
              <img src="./images/fast.jpg" alt="Visual 2" />
            </div>
            <div className="visual-item">
              <img src="./images/fast.jpg" alt="Visual 3" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AtGlance;