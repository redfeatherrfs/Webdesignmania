// ThankYouPage.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ThankYouPage = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center thankyou">
      <Row className="text-center">
        <Col>
          <h1 className="thankyou">Thank You!</h1>
          <p className="lead">We appreciate your response. Your submission has been received successfully.</p>
          <Button variant="primary" href="/lp" className="mt-3" style={{ backgroundColor: '#ED5E39', border: 'none' }}>
            Return to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankYouPage;
