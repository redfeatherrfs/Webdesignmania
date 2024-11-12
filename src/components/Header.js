// Header.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import '../header.css'; // Import the CSS file
import header from '../images/header logo.png'; // Ensure the image path is correct
import { Link } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 800;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="custom-header">
      <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
        <Link className="navbar-brand" to="/">  
            <img src={header} alt="Logo" width="150" />
            </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link custom-nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-us" className="nav-link custom-nav-link">About Us</Link>
              </li>
              <li className="nav-item dropdown custom-dropdown">
                <Link to="/services" className="nav-link dropdown-toggle custom-nav-link" id="servicesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
                <ul className="dropdown-menu" aria-labelledby="servicesDropdown">
                  <li><Link to="/logo-design" className="dropdown-item">Logo Design</Link></li>
                  <li><Link to="/" className="dropdown-item">Website Design</Link></li>
                  <li><Link to="/app-design" className="dropdown-item">App Design</Link></li>
                  <li><Link to="/stationary" className="dropdown-item">Stationary</Link></li>
                
                  <li><Link to="/seo" className="dropdown-item">SEO</Link></li>
                  <li><Link to="/smm" className="dropdown-item">SMM</Link></li>

                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact-us" className="nav-link custom-nav-link">Contact Us</Link>
              </li>
            </ul>
            <div className="custom-phone-number ms-3">
              <a href="tel:+15515543283" className="nav-link">
                +1 (551) 554-3283
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
