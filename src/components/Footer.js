import React from 'react';
import footer from '../images/lp-footer.png'; // Ensure the image path is correct
import visa from '../images/visa.png';
import { Link } from 'react-router-dom';
import ScrollToTopButton from './Scrolltotop';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* About Section with Logo */}
          <div className="col-md-4">
            <h5 className="footer-heading-sub">
              <img src={footer} alt="Web Design Mania Logo" style={{ maxWidth: '150px' }} />
            </h5>
            <p>
              As a versatile, full-service agency specializing in website design and development, we create visually striking and cost-effective solutions for businesses of every scale.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3">
            <h5 className="footer-heading">Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
             
            </ul>
          </div>

          {/* Our Services Section */}
          <div className="col-md-3">
            <h5 className="footer-heading">Our Services</h5>
            <ul className="footer-links">
            <li><Link to="/logo-design">Logo Design</Link></li>
            <li><a href="/">Website Design</a></li>
            <li><Link to="/app-design">App Design</Link></li>
            <li><Link to="/stationary">Stationary</Link></li>
            <li><Link to="/seo">SEO</Link></li>
            <li><Link to="/smm">SMM</Link></li>
              
            </ul>
          </div>

          {/* Payment Methods and Social Icons Section */}
          <div className="col-md-2">
            <h5 className="footer-heading">Payment Methods</h5>
            <div className="payment-icons">
              <img src={visa} alt="Visa" />
              {/* Uncomment if needed */}
              {/* <img src="images/mastercard.png" alt="Mastercard" />
              <img src="images/paypal.png" alt="Paypal" /> */}
            </div>
            {/* <h5 className="footer-heading mt-3">Follow Us</h5>
            <div className="social-icons">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom Section with two columns */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            {/* Left Column */}
            <div className="col-6 text-start">
              <p>©Copyright 2024, <strong>WebDesignMania</strong>. Powered by RFS</p>
            </div>
            {/* Right Column */}
            <div className="col-6 text-end">
              <a href="#">Terms & conditions</a> | 
              <a href="#">Privacy Policy</a>
              <ScrollToTopButton/>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
