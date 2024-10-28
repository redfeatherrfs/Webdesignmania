import React from "react";
import '../.././IconTextBox.css';
import { Container, Row, Col } from "react-bootstrap";


const IconTextBox = () => {
  return (
    <Container className="icon-textbox-section py-5">
      {/* Heading Row */}
      <Row className="text-center mb-5">
        <Col>
          <p className="subheading">ABOUT US</p>
          <h2 className="section-heading">Marketing, Social Media Marketing</h2>
        </Col>
      </Row>

      {/* Icon Boxes Row */}
      <Row className="icon-box-row">
        <Col md={4} sm={12} className="mb-4">
          <div className="icon-box d-flex align-items-start">
            <div className="icon">📱</div>
            <div className="text-content">
              <h3>Social Media Management</h3>
              <p>We create bespoke brochure designs that embody your value propositions and goals.</p>
            </div>
          </div>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <div className="icon-box d-flex align-items-start">
            <div className="icon">📊</div>
            <div className="text-content">
              <h3>Search Engine Optimization</h3>
              <p>We deliver initial design concepts in the lowest possible times.</p>
            </div>
          </div>
        </Col>
        <Col md={4} sm={12} className="mb-4">
          <div className="icon-box d-flex align-items-start">
            <div className="icon">💰</div>
            <div className="text-content">
              <h3>PPC Management</h3>
              <p>Fulfilling all your design needs under one roof.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default IconTextBox;
