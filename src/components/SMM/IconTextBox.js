import React from "react";
import '../.././IconTextBox.css';
import { Container, Row, Col } from "react-bootstrap";

import socialMediaIcon from '../../images/smmic1.png'; 
import seoIcon from '../../images/smmic2.png'; 
import ppcIcon from '../../images/smmic3.png'; 


const IconTextBox = ({ sectionHeading, subHeading, iconBoxes }) => {
  return (
    <Container className="icon-textbox-section py-5">
      {/* Heading Row */}
      <Row className="text-center mb-5">
        <Col>
          <p className="subheading">{subHeading}</p>
          <h2 className="section-heading">{sectionHeading}</h2>
        </Col>
      </Row>

      {/* Icon Boxes Row */}
      <Row className="iconbox2-row">
        {iconBoxes.map((box, index) => (
          <Col md={4} sm={12} className="mb-4" key={index}>
            <div className="iconbox2 d-flex align-items-start">
              <div className="iconbox2-icon">
                <img src={box.icon} alt={`${box.title} Icon`} className="icon-image-ic" />
              </div>
              <div className="iconbox2-text-content">
                <h3>{box.title}</h3>
                <p>{box.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default IconTextBox;
