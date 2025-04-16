import React, { useEffect, useRef } from 'react';
import SidebarGlance from '../components/SidebarGlance';
import '../styles/Purpose.css';

const Purpose = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const numParticles = 60;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        alpha: Math.random()
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(1, 87, 155, ${p.alpha})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      }
      requestAnimationFrame(draw);
    };

    draw();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, []);

  return (
    <div className="page-layout">
      <canvas ref={canvasRef} className="particles-background"></canvas>

      <SidebarGlance />
      <main className="purpose-main">
        <div className="purpose-container fade-in">
          <div className="content-card glass-card">
            <h1 className="title">Our Purpose & Vision</h1>
            <p className="paragraph">
              Our purpose is to safely and sustainably deliver by sea the dry bulk commodities that are essential to society.
            </p>
            <p className="paragraph">
              Our vision is to be the leading ship owner/operator in dry bulk shipping, and the first choice partner for customers and other stakeholders.
            </p>

            <h2 className="subtitle">Our Business Principles</h2>
            <p className="intro">Our guiding principles dictate everything we do:</p>
            <ul className="principles-list">
              <li>We are passionate about our customers, our people, our business and our brand</li>
              <li>We honour our commitments, and we value long-term relationships over short-term gain</li>
              <li>We offer a personalised, flexible, responsive and reliable service</li>
              <li>We promote high standards of safety, wellbeing and environmental responsibility</li>
              <li>We are all corporate ambassadors and share a strong sense of belonging</li>
              <li>We are caring, fair, and want all colleagues to feel safe, wanted and trusted</li>
              <li>We value diversity, dignity, respect and equal opportunity</li>
              <li>We target excellence and success through dedication and teamwork</li>
              <li>We continuously look to enhance our business model and conduct</li>
              <li>We seek collaboration to tackle our industry's challenges</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Purpose;
