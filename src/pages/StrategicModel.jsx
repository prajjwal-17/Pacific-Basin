import React, { useEffect, useRef } from 'react';
import '../styles/StrategicModel.css';

function StrategicModel() {
  const particlesRef = useRef(null);

  useEffect(() => {
    // Simple particles animation
    const canvas = particlesRef.current;
    const ctx = canvas.getContext('2d');
    const particles = [];
    const particleCount = 50;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: `rgba(0, 119, 182, ${Math.random() * 0.5 + 0.1})`,
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="strategic-model-container">
      <canvas ref={particlesRef} className="particles-bg"></canvas>
      <div className="content-wrapper">
        <h2 className="strategic-model-title">Our Strategic Model</h2>
        <p className="strategic-model-description">
          Our strategic model leverages four broad characteristics, driving business growth and long-term
          value for our customers and shareholders, including attractive returns over the shipping cycle.
        </p>

        <div className="model-diagram">
          <div className="circle-container">
            <div className="circle customer-focus">
              <div className="circle-inner">
                <div className="circle-content">
                  <h3 className="circle-title">CUSTOMER FOCUS</h3>
                  <ul className="circle-list">
                    <li>Priority to build and sustain long-term customer relationships</li>
                    <li>Solution-driven approach ensures accessibility, responsiveness and flexibility</li>
                    <li>Close partnership generates enhanced access to spot cargoes and long-term contracts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="circle global-network">
              <div className="circle-inner">
                <div className="circle-content">
                  <h3 className="circle-title">GLOBAL OFFICE NETWORK</h3>
                  <ul className="circle-list">
                    <li>Integrated international service with experienced staff worldwide</li>
                    <li>Local presence enables understanding of customers' needs</li>
                    <li>Global reach facilitates market intelligence and optimal fleet positioning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="circle versatile-fleet">
              <div className="circle-inner">
                <div className="circle-content">
                  <h3 className="circle-title">VERSATILE FLEET</h3>
                  <ul className="circle-list">
                    <li>Large and modern fleet of Handysize and Supramax vessels</li>
                    <li>Accommodating diverse customer needs across cargo types and ports</li>
                    <li>Flexibility to switch between different dry bulk commodities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="circle corporate-profile">
              <div className="circle-inner">
                <div className="circle-content">
                  <h3 className="circle-title">STRONG CORPORATE PROFILE</h3>
                  <ul className="circle-list">
                    <li>Track record of operational excellence and prudent financial management</li>
                    <li>Solid balance sheet providing stability and ability to seize opportunities</li>
                    <li>Commitment to safety, environmental protection and ethical conduct</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="center-logo">
              <div className="logo-content">STRATEGIC<br />APPROACH</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategicModel;