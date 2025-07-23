import React from 'react';
import "./Footer.css";

const Footer = () => (
  <footer>
    <div className="footer-body">

      {/* Branding Section */}
      <div className="footer-branding">
        <h1>Hotel Paradise</h1>
        <h3>Your comfort is our priority</h3>
      </div>

      {/* About Section */}
<div className="footer-section">
  <h2>📍 Location</h2>
  <p>Goa, India</p>
  <p>(Full address coming soon)</p>
</div>

      {/* Contact Section */}
      <div className="footer-section">
        <h2>📞 Contact</h2>
        <p>Email: will be available soon</p>
<p>📞 Phone number will be available soon</p>      </div>

      {/* Quick Links */}
      <div className="footer-section">
        <h2>🔗 Quick Links</h2>
        <ul>
          <li><a href="/rooms">Rooms & Suites</a></li>
          <li><a href="/services">Dining</a></li>
          <li><a href="/services">Spa & Wellness</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="/booking">Book Now</a></li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="footer-section">
        <h2>🌐 Follow Us</h2>
        <p>Facebook | Instagram | Twitter</p>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
      </div>

    </div>
  </footer>
);

export default Footer;