// Footer.jsx
import React, { useState } from 'react';
import { FiPhone, FiMail, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useScrollToSection } from "../../components/scrollToSection"
import './Footer.css';

const Footer = () => {

  const scrollTo = useScrollToSection();

  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const copyEmail = () => {
    navigator.clipboard.writeText('info@wisdomai.africa');
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 2000);
  };

  const Modal = ({ title, content, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          {/* <h3 className="neon-gradient">{title}</h3> */}
          <button className="modal-close" onClick={onClose}>
            <FiX />
          </button>
        </div>
        <div className="modal-body">
          {content}
        </div>
      </div>
    </div>
  );

  return (
    <footer className="wisdom-footer">
      {/* Modals */}
      {showPrivacyModal && (
        <Modal
          title="Privacy Policy"
          content={
            <p>We respect your privacy. Wisdom AI does not collect personal data without consent
              and does not track users across the web. All data collected through internal systems
              is stored securely and used only for operational purposes.</p>
          }
          onClose={() => setShowPrivacyModal(false)}
        />
      )}

      {showTermsModal && (
        <Modal
          title="Terms of Service"
          content={
            <p>Use of this website is subject to Wisdom AI’s terms and conditions. All intellectual
              property belongs to Wisdom AI. Users may not copy, reuse, or republish materials without
              permission. Full terms available upon request.</p>
          }
          onClose={() => setShowTermsModal(false)}
        />
      )}
      {/* Copy Notification */}
      <div className={`copy-notification ${showCopyNotification ? 'visible' : ''}`}>
        Email copied to clipboard
      </div>

      <div className="footer-container">
        {/* Brand Column */}
        <div className="wisdom-brand">
          <h3 className="footer-heading">WisdomAI.Africa</h3>
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
          <button className="footer-link" onClick={() => setShowPrivacyModal(true)}>
            Privacy Policy
          </button>
          <span className="link-divider">|</span>
          <button className="footer-link" onClick={() => setShowTermsModal(true)}>
            Terms of Service
          </button>
          <Link onClick={() => { scrollTo("contact", "/contact") }} className="footer-link">Contact Us</Link>
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