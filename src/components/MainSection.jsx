import React, { useEffect, useState } from 'react';
import '../styles/MainSection.css';
import img1 from "../Images/MainSectionimgs/img1.webp";
import img2 from "../Images/MainSectionimgs/img2.jpg";
import img3 from "../Images/MainSectionimgs/img3.jpg";
import img4 from "../Images/MainSectionimgs/img4.jpeg";
import img5 from "../Images/MainSectionimgs/img5.jpg";

function MainSection() {
  // State for carousel
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [img1, img3, img5];
  const titles = ["With you for\nthe long haul", "Latest news and updates", "Pacific Basin services"];
  
  // Carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle dot navigation
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
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
      {/* Hero Section with Carousel */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '70vh',
        overflow: 'hidden'
      }}>
        {carouselImages.map((image, index) => (
          <div 
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: currentSlide === index ? 1 : 0
            }}
          >
           <div className="hero-text" style={{
  position: 'absolute',
  top: '50%',
  left: '10%',
  color: 'white',
  opacity: currentSlide === index ? 1 : 0,
  transform: currentSlide === index ? 'translateY(-50%)' : 'translateY(-40%)',
  transition: 'opacity 0.8s ease-in-out, transform 0.8s ease-in-out',
  transitionDelay: currentSlide === index ? '0.3s' : '0s'
}}>

              <h1 style={{ fontSize: '3rem', fontWeight: 'bold', whiteSpace: 'pre-line' }}>
                {titles[index]}
              </h1>
              <div className="hero-line" style={{
                width: '80px',
                height: '4px',
                backgroundColor: 'white',
                marginTop: '20px'
              }}></div>
            </div>
          </div>
        ))}

        <div className="dots" style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px',
          zIndex: 2
        }}>
          {carouselImages.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: currentSlide === index ? 'white' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
            ></span>
          ))}
        </div>
        
        <div className="scroll-indicator" style={{
          position: 'absolute',
          bottom: '30px',
          left: '10%',
          zIndex: 2
        }}>
          <div className="circle" style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'pulse 2s infinite'
          }}>
            <span className="arrow" style={{
              color: 'white',
              fontSize: '14px'
            }}>&#x25BC;</span>
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
      
      {/* Add some keyframe animations for the pulse effect */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default MainSection;