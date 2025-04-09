// Header.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import './Header.css';
import logo from "../../assets/logo.png" // Update with actual path
import { useScrollToSection } from '../scrollToSection';

const Header = () => {

  const scrollTo = useScrollToSection();


  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', a: "home" },
    { name: 'Solutions', path: '/solutions', a: "solutions" },
    { name: 'About', path: '/about', a: "about" },
    { name: 'Contact', path: '/contact', a: "contact" },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="header-container">
        <Link to="/about" className="logo">
          <img
            src={logo}
            alt="Company Logo"
            className="logo-image"
          />
        </Link>

        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              className="nav-link"
              onClick={() => scrollTo(link.a, link.path)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Navigation menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;