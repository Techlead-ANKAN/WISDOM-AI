import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { FiArrowUpRight } from 'react-icons/fi';

function Home() {
  return (
    <div className="dark-container">
      <section className="dark-hero">
        <div className="dark-overlay"></div>
        
        <div className="hero-content">
          <h1 className="dark-headline">
            <span className="neon-gradient">Wisdom AI</span>
            <br />
            Empowering Enterprise Intelligence
            <br />
            Across Africa
          </h1>
          
          <p className="dark-subheadline">
            Secure, private artificial intelligence solutions built for enterprise transformation. 
            Accelerate decision-making with privacy-first AI infrastructure.
          </p>

          <div className="dark-cta-group">
            <Link to="/solutions" className="cta-dark primary-dark">
              Explore AI Solutions
              <FiArrowUpRight className="cta-icon" />
            </Link>
            <Link to="/contact" className="cta-dark secondary-dark">
              Consult Our Experts
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;