import React, { useEffect } from "react";
import "../styles/BottomBar.css";

function BottomBar() {
  useEffect(() => {
    const footer = document.querySelector(".bottom-footer");
    footer.classList.add("slide-up");
  }, []);

  return (
    <footer className="bottom-footer">
      <div className="footer-container">
        <img src="/logo.png" alt="Pacific Basin Logo" className="logo" />

        <div className="subscribe-box">
          <span className="subscribe-text">Subscribe for updates</span>

          {/* Newsletter Input */}
          <div className="subscribe-input-group">
            <input type="email" placeholder="Your email" aria-label="Email address" />
            <button>Subscribe</button>
          </div>

          {/* Social Icons */}
          <div className="subscribe-icons">
            <a href="https://www.facebook.com/pacificbasin.shipping/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/pacificbasinshipping/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://x.com/pacificbasin" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCSdCGsQ6Vr98foRBEkv0gQA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="/sitemap">Sitemap</a>
            <a href="/faq">FAQ</a>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
          </div>

          <div className="copyright">
            &copy; 2025 Pacific Basin Shipping Limited
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BottomBar;