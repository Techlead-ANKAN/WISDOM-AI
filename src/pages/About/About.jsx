// About.jsx
import React from 'react';
import { FiUsers, FiLock, FiZap, FiGlobe } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <div className="dark-container">
      <section className="about-hero">
        {/* Updated Background Structure */}
        <div className="hero-bg-wrap">
          <div className="circle-gradient-left"></div>
          <div className="dark-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="responsive-headline">
            <span className="neon-gradient">African AI Innovation</span>
            <br />
            Built for Enterprise Excellence
          </h1>

          <div className="about-content">
            {/* Who We Are */}
            <div className="about-card">
              <h2 className="section-title neon-gradient">Who We Are</h2>
              <p className="section-text">
                Wisdom AI specializes in secure, internal-use AI systems that automate operations, 
                enhance productivity, and deliver data-driven insights within private enterprise environments.
              </p>
            </div>

            {/* Team Section */}
            <div className="team-card">
              <FiUsers className="team-icon" />
              <div className="stats-group">
                <h3 className="stat-number">113+</h3>
                <p className="stat-label">AI Experts Team</p>
                <p className="stat-detail">Engineers, Data Scientists & Innovation Specialists</p>
              </div>
            </div>

            {/* Approach Grid */}
            <div className="approach-grid">
              <div className="approach-item">
                <FiLock className="approach-icon" />
                <h4>Private Infrastructure</h4>
                <p>Compliant secure architecture</p>
              </div>
              <div className="approach-item">
                <FiZap className="approach-icon" />
                <h4>Enterprise Focus</h4>
                <p>Internal operations solutions</p>
              </div>
              <div className="approach-item">
                <FiGlobe className="approach-icon" />
                <h4>African Core</h4>
                <p>Global-grade local expertise</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;