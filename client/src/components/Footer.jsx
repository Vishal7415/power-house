import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">💪</span>
              THE FITNESS <span>EMPIRE</span>
            </Link>
            <p className="footer-desc">
              Transform your body and lifestyle at Sehore's premier fitness destination. State-of-the-art equipment, expert trainers, and a supportive community.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/plans">Memberships</Link></li>

              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><Link to="/">BMI Calculator</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The Fitness Empire. All rights reserved. Made in Sehore.</p>
        </div>
      </div>
    </footer>
  );
}
