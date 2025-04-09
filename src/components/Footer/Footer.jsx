// Footer.jsx
import React, { useState } from 'react';
import { FiPhone, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('info@wisdomai.africa');
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };

  return (
    <footer className="wisdom-footer">
      {/* Copy Notification */}
      <div className={`copy-notification ${showCopyNotification ? 'visible' : ''}`}>
        Email copied to clipboard
      </div>

      <div className="footer-container">
        {/* Brand Column */}
        <div className="wisdom-brand">
          <h3 className="footer-heading">Wisdom AI</h3>
          <p className="brand-description">Empowering Enterprise Intelligence Across Africa</p>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <div className="contact-card">
            <FiPhone className="contact-icon" />
            <a href="tel:+254723757044" className="contact-link">
              +254 723 757044
            </a>
          </div>

          <div className="contact-card" onClick={copyEmail}>
            <FiMail className="contact-icon" />
            <div className="email-wrapper">
              <span className="contact-link">info@wisdomai.africa</span>
              <FiMail className="copy-icon" />
            </div>
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <span className="link-divider">|</span>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <span className="link-divider">|</span>
          <Link to="/contact" className="footer-link">Contact Us</Link>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          &copy; Wisdom AI 2025. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;