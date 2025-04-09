// Contact.jsx
import React, { useState } from 'react';
import { FiPhone, FiMail, FiGlobe, FiMapPin, FiCopy } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <div className="dark-container">
      {/* Notification Popup */}
      <div className={`copy-notification ${showNotification ? 'visible' : ''}`}>
        <span className="notification-text">Email copied to clipboard!</span>
      </div>

      <section className="contact-hero">
        <div className="hero-bg-wrap">
          <div className="circle-gradient-left"></div>
          <div className="dark-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="responsive-headline">
            <span className="neon-gradient">Get in Touch</span>
            <br />
            With Wisdom AI
          </h1>

          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="contact-card">
                <FiPhone className="contact-icon" />
                <a href="tel:+254723757044" className="contact-link">
                  +254 723 757044
                </a>
              </div>

              <div className="contact-card" onClick={() => copyToClipboard('info@wisdomai.africa')}>
                <FiMail className="contact-icon" />
                <div className="email-wrapper">
                  <span className="contact-link">info@wisdomai.africa</span>
                  <FiCopy className="copy-icon" />
                </div>
              </div>

              <div className="contact-card">
                <FiGlobe className="contact-icon" />
                <a 
                  href="https://www.wisdomai.africa" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link"
                >
                  wisdomai.africa
                </a>
              </div>
            </div>

            {/* Location Box */}
            <a 
              href="https://maps.app.goo.gl/examplelocation" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="location-card"
            >
              <FiMapPin className="location-icon" />
              <h3 className="location-title">Our Headquarters</h3>
              <div className="map-container">
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8547767636343!2d36.82120931475387!3d-1.268635435975147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9de7%3A0xec3745e40b46d227!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1623942347106!5m2!1sen!2ske"
                  className="responsive-map"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;