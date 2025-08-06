import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './SupportSection.css';
import {  FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

// Importing images
import supportIcon from '../../images/oursupport.png'; // Replace with the actual path to your icon
import consultIcon from '../../images/consuilt.png';  // Replace with the actual path to your icon
import chatIcon from '../../images/live.png';        // Replace with the actual path to your icon

const SupportSection = () => {
  return (
    <div className="support-section">
      <Container>
        <Row className="align-items-start">
          <Col xs={12} md={6} lg={6} xl={4} className="support-col">
          
          <a href="https://wa.me/+447380107663" target="_blank" rel="noopener noreferrer">
            <div className="support-item">
              <img src={supportIcon} alt="Support Icon" className="support-icon" />
              <div className="support-text">
                <p className="support-heading">Our Support Team</p>
                <p className="support-detail">24/7 Online</p>
              </div>
            </div>
            </a>
          </Col>
          <Col xs={12} md={6} lg={6} xl={4} className="support-col">
            <a href="tel:+442045112054" target="_blank" rel="noopener noreferrer">
              <div className="support-item">
                <img src={consultIcon} alt="Consult Expert Icon" className="support-icon" />
                <div className="support-text">
                  <p className="support-heading">Consult Our Expert</p>
                  <p className="support-detail">0204-511-2054</p>
                </div>
              </div>
            </a>
          </Col>
          <Col xs={12} md={6} lg={6} xl={4} className="support-col support-col-end">
            <a href="https://wa.me/+447380107663" target="_blank" rel="noopener noreferrer">
              <div className="support-item">
                <img src={chatIcon} alt="Live Support Icon" className="support-icon" />
                <div className="support-text">
                  <p className="support-heading">Live Support</p>
                  <p className="support-detail">Chat Now</p>
                </div>
              </div>
            </a>
          </Col>

        </Row>
        <Row className="footer-row justify-content-center">
  
            <Col xs={12} md={4} className="footer-col copyright-text text-md-start text-center">
                
                <div className="social-icons d-flex text-center">
          
          <Link to="https://www.facebook.com/Creativelogodesignuk/" target='blank' className="text-light"><FaFacebookF size={25} /></Link>
          <Link to="https://www.linkedin.com/company/creativelogo-design-uk/" target='blank'  className="text-light"><FaLinkedinIn size={25} /></Link>
          <Link to="https://www.instagram.com/creative_logo_design_uk/" target='blank' className="text-light"><FaInstagram size={25} /></Link>
          {/* <Link to="#" className="text-light"><FaYoutube size={25} /></Link> */}
        </div>
            </Col>
            <Col xs={12} md={4} className="footer-col terms-links text-md-end text-center">
            <p>&#169; Copyright 2025, Creative Logo Design</p>
            </Col>
            <Col xs={12} md={4} className="footer-col terms-links text-md-end text-center">
                <p>
                <a href="/terms-and-conditions.html" target="_blank">Terms & Conditions</a> | 
                <a href="/privacy-policy.html" target="_blank">Privacy Policy</a>
                </p>
            </Col>
        </Row>

      </Container>
    </div>
  );
};

export default SupportSection;
