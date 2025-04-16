import React from 'react';
import '../styles/Contact.css';
import Rowan from "../Images/MainSectionimgs/Rowan.png";

function Contact() {
  return (
    <div className="contact-container fade-slide fade-delay-1">
      <h1>Contact Us</h1>

      <div className="company-info fade-slide fade-delay-1">
        <h2>PACIFIC BASIN SHIPPING (UK) LIMITED</h2>
        <p><strong>Company Number:</strong> 03677286</p>
        <p><strong>Status:</strong> Active</p>
        <p><strong>Type:</strong> Private limited Company</p>
        <p><strong>Incorporated on:</strong> 2 December 1998</p>
        <p><strong>Address:</strong><br />82 St John Street,<br />London, EC1M 4JN</p>
        <p><strong>Email:</strong> rowan.james@example.com</p>
        <p><strong>Phone:</strong> +44 7350291091</p>
        <div className="contact-actions">
          <a href="mailto:rowan.james@example.com" className="email-link">Mail Us</a>
          <a href="tel:+447350291091" className="email-link">Call Us</a>
        </div>
      </div>

      <div className="team-member fade-slide fade-delay-2">
        <img src={Rowan} alt="Rowan James" />
        <div className="team-info">
          <h3>
            <strong>Rowan James</strong>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg"
              alt="UK Flag"
              className="flag"
            />
          </h3>
          <p>Chartering Manager</p>
        </div>
      </div>

      <div className="our-location-box fade-slide fade-delay-3">
        <h3>Our Location</h3>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.527601900434!2d-0.10417002334939794!3d51.52188217181656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5116a39051%3A0xb9428ed63c9c5085!2s82%20St%20John%20St%2C%20London%20EC1M%204JN%2C%20UK!5e0!3m2!1sen!2sin!4v1744836689553!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;