import React from "react";
import "../styles/BottomBar.css";

function BottomBar() {
  return (
    <footer className="bottom-footer">
      <img src="/logo.png" alt="Pacific Basin Logo" className="logo" />

      <div className="subscribe-box">
        <span className="subscribe-text">Subscribe for updates</span>
        <div className="subscribe-icons">
          <a href="https://www.facebook.com/pacificbasin.shipping/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/pacificbasinshipping/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://x.com/pacificbasin" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-x-twitter"></i> {/* Fixed the icon class */}
          </a>
          <a href="https://www.youtube.com/channel/UCSdCGsQ6Vr98foRBEkv0gQA" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>

      <div className="footer-links">
        <span>Sitemap</span>
        <span>FAQ</span>
        <span>Privacy</span>
        <span>Terms</span>
      </div>

      <div className="copyright">
        &copy; 2025 Pacific Basin Shipping Limited
      </div>
    </footer>
  );
}

export default BottomBar;
