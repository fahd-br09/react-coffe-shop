import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <h3>☕ BR Coffee</h3>
            <p>Brewing excellence since today. We're passionate about delivering the perfect cup of coffee to brighten your day.</p>
            <div className="social-links">
              <button className="social-link" aria-label="Facebook">📘</button>
              <button className="social-link" aria-label="Instagram">📷</button>
              <button className="social-link" aria-label="Twitter">🐦</button>
              <button className="social-link" aria-label="LinkedIn">💼</button>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#products">Our Menu</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/#about">About Us</Link></li>
            <li><Link to="/#feedback">Feedback</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Our Products</h4>
          <ul className="footer-links">
            <li><Link to="/#products">Premium Coffee</Link></li>
            <li><Link to="/#products">Artisan Teas</Link></li>
            <li><Link to="/#products">Fresh Pastries</Link></li>
            <li><Link to="/#products">Gourmet Sandwiches</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Info</h4>
          <div className="contact-info">
            <p>📍 123 Coffee Street, Bean City, BC 12345</p>
            <p>📞 (555) 123-BREW</p>
            <p>✉️ hello@brcoffee.com</p>
            <p>🕒 Mon-Sun: 6:00 AM - 10:00 PM</p>
          </div>
        </div>

        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe to get updates on new products and special offers!</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Coffee Shop. All rights reserved.</p>
          <div className="footer-bottom-links">
            <button>Privacy Policy</button>
            <button>Terms of Service</button>
            <button>Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;