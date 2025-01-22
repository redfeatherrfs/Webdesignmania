import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './SupportSection.css';

// Importing images
import supportIcon from '../../images/oursupport.png'; // Replace with the actual path to your icon
import consultIcon from '../../images/consuilt.png';  // Replace with the actual path to your icon
import chatIcon from '../../images/live.png';        // Replace with the actual path to your icon

const SupportSection = () => {
  return (
    <div className="support-section">
      <Container>
        <Row className="align-items-start justify-content-start">
          <Col xs={12} md={6} lg={6} xl={4} className="support-col">
          <a href="https://wa.me/+447309931252" target="_blank" rel="noopener noreferrer">
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
            <a href="tel:+02045112009" target="_blank" rel="noopener noreferrer">
              <div className="support-item">
                <img src={consultIcon} alt="Consult Expert Icon" className="support-icon" />
                <div className="support-text">
                  <p className="support-heading">Consult Our Expert</p>
                  <p className="support-detail">0204 511 2009</p>
                </div>
              </div>
            </a>
          </Col>
          <Col xs={12} md={6} lg={6} xl={4} className="support-col support-col-end">
            <a href="https://wa.me/+447309931252" target="_blank" rel="noopener noreferrer">
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
            <Col xs={12} md={6} className="footer-col copyright-text text-md-start text-center">
                <p>&#169; Copyright 2025, WebDesignMania.</p>
            </Col>
            <Col xs={12} md={6} className="footer-col terms-links text-md-end text-center">
                <p>
                <a href="https://webdesignmania.co.uk/lp/terms" target="_blank">Terms & Conditions</a> | 
                <a href="https://webdesignmania.co.uk/lp/privacy" target="_blank">Privacy Policy</a>
                </p>
            </Col>
        </Row>

      </Container>
    </div>
  );
};

export default SupportSection;
