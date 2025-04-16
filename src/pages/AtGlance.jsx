// src/pages/AtGlance.jsx
import React, { useEffect, useState, useRef } from 'react';
import SidebarGlance from '../components/SidebarGlance';
import '../styles/AtGlance.css';

const AtGlance = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const contentRef = useRef(null);
  
  const sections = [
    { id: 'purpose', title: 'Who We Are' },
    { id: 'market', title: 'Fast Facts' },
    { id: 'framework', title: 'Our Strengths' },
    { id: 'value', title: 'Our Strategy' },
    { id: 'leadership', title: 'Our Fleet' },
    { id: 'directors', title: 'Leadership' },
    { id: 'management', title: 'Our Team' },
    { id: 'history', title: 'Locations' },
    { id: 'awards', title: 'Financial Highlights' },
    { id: 'gallery', title: 'Gallery' }
  ];

  // Function to animate numbers
  const animateValue = (obj, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Different easing for smoother animation
      const easeOutQuad = progress * (2 - progress);
      const value = Math.floor(easeOutQuad * (end - start) + start);
      
      // Format the value based on type (money vs regular number)
      const formattedValue = obj.dataset.format === 'money' 
        ? `$${value.toLocaleString()}M`
        : value.toLocaleString();
        
      obj.textContent = formattedValue;
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        // Ensure the final value is exactly what we want
        obj.textContent = obj.dataset.format === 'money' 
          ? `$${parseFloat(end).toLocaleString()}M`
          : parseFloat(end).toLocaleString();
      }
    };
    window.requestAnimationFrame(step);
  };

  // Handle scroll to section with offset
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Offset in pixels to account for fixed headers
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      // On mobile, collapse the navigation after clicking
      if (window.innerWidth <= 768) {
        setIsNavExpanded(false);
      }
    }
  };

  // Toggle mobile navigation
  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  useEffect(() => {
    // Initialize animations and scroll behavior
    const sectionElements = document.querySelectorAll('.section');
    
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -20% 0px', // Adjust the top margin to account for header
      threshold: 0.1
    };

    // Observer for section visibility
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          setActiveSection(entry.target.id);
          
          // Find and animate number elements in this section
          const numberElements = entry.target.querySelectorAll('.animate-number');
          numberElements.forEach(el => {
            // Reset animation state so it plays every time
            el.dataset.animated = 'false';
            
            // Run animation each time element comes into view
            const startValue = 0;
            const endValue = parseFloat(el.dataset.value);
            animateValue(el, startValue, endValue, 1500);
          });
        }
      });
    }, observerOptions);

    sectionElements.forEach(section => {
      observer.observe(section);
    });

    // Update active section on scroll
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Find the current section
      sectionElements.forEach(section => {
        const sectionTop = section.offsetTop - 120; // Offset for header
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sectionElements.forEach(section => {
        observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="at-glance-container">
      <SidebarGlance />
      
      <div className="content-wrapper" ref={contentRef}>
        <div className="page-header">
          <h1 className="page-title">Pacific Basin - At a Glance</h1>
        </div>
        
        <div className="content-area">
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
              <li>Our fleet of ~<span className="animate-number" data-value="277" data-format="regular">277</span> ships and <span className="animate-number" data-value="14" data-format="regular">14</span> offices on <span className="animate-number" data-value="6" data-format="regular">6</span> continents offers a global service</li>
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
              We are ship owners and operators – we own <span className="animate-number" data-value="112" data-format="regular">112</span> ships and operate approximately <span className="animate-number" data-value="165" data-format="regular">165</span> more under charter. Our fleet of around <span className="animate-number" data-value="277" data-format="regular">277</span> Handysize and Supramax ships is one of the world's largest fleets of modern minor bulk ships.
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
              Our Board comprises <span className="animate-number" data-value="9" data-format="regular">9</span> Directors whose complementary expertise and shared commitment to responsible investment and management practices is harnessed in the best interests of our diverse shareholders and other stakeholders.
            </p>
            <ul className="info-list">
              <li>Chairman Stanley H. Ryan was appointed in 2023</li>
              <li>Chief Executive Officer Martin Fruergaard joined in 2021</li>
            </ul>
          </section>

          <section id="management" className="section">
            <h2 className="section-heading">Our Team</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value"><span className="animate-number" data-value="4600" data-format="regular">4,600</span>+</div>
                <div className="stat-label">Seafarers</div>
              </div>
              <div className="stat-card">
                <div className="stat-value"><span className="animate-number" data-value="403" data-format="regular">403</span></div>
                <div className="stat-label">Onshore Staff</div>
              </div>
            </div>
          </section>

          <section id="history" className="section">
  <h2 className="section-heading">Locations</h2>
  <p>
    Our corporate headquarters are in Hong Kong, and our global network spans <span className="animate-number" data-value="14" data-format="regular">14</span> offices across <span className="animate-number" data-value="6" data-format="regular">6</span> continents.
  </p>
  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.527601900434!2d-0.10417002334939794!3d51.52188217181656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5116a39051%3A0xb9428ed63c9c5085!2s82%20St%20John%20St%2C%20London%20EC1M%204JN%2C%20UK!5e0!3m2!1sen!2sin!4v1744836689553!5m2!1sen!2sin"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="google-map"
      title="London Office Location"
    ></iframe>
  </div>
</section>

          <section id="awards" className="section">
            <h2 className="section-heading">Financial Highlights</h2>
            <p>As at 2024 Annual Results (in USD):</p>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-value"><span className="animate-number" data-value="131.7" data-format="money">$131.7M</span></div>
                <div className="stat-label">Net Profit</div>
              </div>
              <div className="stat-card">
                <div className="stat-value"><span className="animate-number" data-value="114.1" data-format="money">$114.1M</span></div>
                <div className="stat-label">Underlying Profit</div>
              </div>
              <div className="stat-card">
                <div className="stat-value"><span className="animate-number" data-value="2581.6" data-format="money">$2,581.6M</span></div>
                <div className="stat-label">Revenue</div>
              </div>
              <div className="stat-card">
                <div className="stat-value"><span className="animate-number" data-value="333.4" data-format="money">$333.4M</span></div>
                <div className="stat-label">EBITDA</div>
              </div>
              <div className="stat-card">
                <div className="stat-value"><span className="animate-number" data-value="547.6" data-format="money">$547.6M</span></div>
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

          <section id="gallery" className="section">
            <h2 className="section-heading">Gallery</h2>
            <div className="visuals-gallery">
              <div className="visual-item">
                <img src="./images/fast.jpg" alt="Visual 1" />
                <div className="visual-caption">Our Fleet in Action</div>
              </div>
              <div className="visual-item">
                <img src="./images/fast.jpg" alt="Visual 2" />
                <div className="visual-caption">Global Operations</div>
              </div>
              <div className="visual-item">
                <img src="./images/fast.jpg" alt="Visual 3" />
                <div className="visual-caption">Our Team</div>
              </div>
            </div>
          </section>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="mobile-nav-toggle" 
          onClick={toggleNav}
          aria-label="Toggle navigation menu"
        >
          {isNavExpanded ? '✕' : '☰'}
        </button>
        
        {/* Fixed Navigation Panel */}
        <div className={`section-nav ${isNavExpanded ? 'expanded' : ''}`}>
          <div className="nav-header">
            <span className="nav-title">Page Sections</span>
            <div className="progress-container">
              <div className="progress-bar"></div>
            </div>
          </div>
          <div className="nav-buttons">
            {sections.map((section) => (
              <button 
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={activeSection === section.id ? 'active' : ''}
              >
                <span className="nav-text">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtGlance;