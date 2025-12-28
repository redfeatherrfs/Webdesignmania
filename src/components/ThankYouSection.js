// ThankYouPage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../ThankYouPage.css'; // Create this CSS file

const ThankYouPage = () => {
  return (
    <Container className="thank-you-container d-flex justify-content-center align-items-center">
      <Row className="text-center">
        <Col>
          <h1 className="thankyou-heading">Thank You!</h1>
          <p className="lead">We appreciate your response. Your submission has been received successfully.</p>
          <Button 
            variant="primary" 
            href="/" 
            className="mt-3 home-button"
          >
            Return to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankYouPage;