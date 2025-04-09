// About.jsx
import React from 'react';
import { FiUsers, FiLock, FiZap, FiGlobe } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <div className="dark-container">
      <section className="about-section">
        <div className="content-wrapper">
          <h1 className="responsive-headline">
            <span className="neon-gradient">Wisdom AI</span>
            <br />
            Enterprise Intelligence Redefined
          </h1>

          <div className="about-grid">
            {/* Who We Are */}
            <div className="about-card">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-text">
                African AI innovators building secure, enterprise-grade solutions that automate operations, 
                boost productivity, and deliver actionable insights through private, compliant systems.
              </p>
            </div>

            {/* Team Stats */}
            <div className="stats-card">
              <FiUsers className="stats-icon" />
              <div className="stats-content">
                <h3 className="stat-number">113+</h3>
                <p className="stat-label">AI Specialists</p>
                <p className="stat-detail">Engineering Excellence Team</p>
              </div>
            </div>

            {/* Approach Grid */}
            <div className="approach-grid">
              <div className="approach-item">
                <FiLock className="approach-icon" />
                <h4>Secure by Design</h4>
                <p>Privacy-first architecture</p>
              </div>
              <div className="approach-item">
                <FiZap className="approach-icon" />
                <h4>Enterprise Core</h4>
                <p>Scalable internal solutions</p>
              </div>
              <div className="approach-item">
                <FiGlobe className="approach-icon" />
                <h4>African Innovation</h4>
                <p>Global-standard local expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;