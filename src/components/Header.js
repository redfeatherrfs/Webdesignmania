import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import header from '../images/header logo.png'; // Ensure the image path is correct


const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect handler
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
          {/* Logo */}
          <a className="navbar-brand" href="#">
            <img src={header} alt="Logo" width="150" />
          </a>
          {/* Toggle button for mobile view */}
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
          {/* Navbar Links */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link custom-nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-nav-link" href="#">Expertise</a>
              </li>
            </ul>
            {/* Phone Number */}
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
