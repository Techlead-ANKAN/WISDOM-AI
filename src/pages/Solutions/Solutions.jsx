// Solutions.jsx
import React from 'react';
import { FiTool, FiActivity, FiSettings, FiArrowUpRight } from 'react-icons/fi';
import './Solutions.css';
import { useScrollToSection } from "../../components/scrollToSection";

const Solutions = () => {
  const scrollTo = useScrollToSection();

  return (
    <div className="dark-container">
      <section className="solutions-hero">
        <div className="dark-overlay"></div>
        <div className="hero-content">
          <h1 className="responsive-headline">
            <span className="neon-gradient">Enterprise AI Solutions</span>
            <br />
            Built for Internal Excellence
          </h1>

          <div className="solutions-grid">
            {/* AI Assistants */}
            <div className="solution-card">
              <FiTool className="solution-icon" />
              <h3>Internal AI Assistants</h3>
              <p>Virtual agents handling research, scheduling, and task automation for internal teams</p>
            </div>

            {/* Analytics */}
            <div className="solution-card">
              <FiActivity className="solution-icon" />
              <h3>Predictive Analytics</h3>
              <p>AI-powered dashboards forecasting trends and optimizing internal decisions</p>
            </div>

            {/* Workflow Automation */}
            <div className="solution-card">
              <FiSettings className="solution-icon" />
              <h3>Workflow Engines</h3>
              <p>Automation systems reducing manual work in standard operations</p>
            </div>
          </div>

          <div className="disclaimer-note">
            <p>Private AI tools built exclusively for internal enterprise use</p>
            <button 
              onClick={() => scrollTo("contact", "/contact")}
              className="cta-dark primary-dark"
            >
              Contact Us to Learn More
              <FiArrowUpRight className="cta-icon" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;