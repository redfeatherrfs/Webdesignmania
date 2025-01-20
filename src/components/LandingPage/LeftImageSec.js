import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import foodDeliveryImage from '../../images/foodpanda.png'; // Replace with the actual image path
import './LeftImage.css';

const contents = [
  {
    title: "Food Delivery Application",
    description: "A food delivery app is a mobile platform that enables users to easily order food from local restaurants for delivery or pick-up. The app features a user-friendly interface where customers can explore restaurant menus, personalize their orders, and track deliveries in real-time using GPS. It supports various payment methods, including credit/debit cards and digital wallets, ensuring secure transactions. Users also receive push notifications for order updates, special offers, and new menu items. Additionally, the app includes a review and rating system, allowing customers to provide feedback on their dining experience, which helps improve service quality and customer satisfaction."
  }
];

function LeftImageSec() {
  const [index] = useState(0);

  return (
    <section className="custom-section-food">
      <Container>
        <Row className="content-row-food">
          <Col md={6} className="image-column-food">
            <img src={foodDeliveryImage} alt="Food Delivery App" className="img-fluid" />
          </Col>
          <Col md={6} className="content-column-food">
            <h2 className="content-title-food">{contents[index].title}</h2>
            <p className="content-description-food">{contents[index].description}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default LeftImageSec;
