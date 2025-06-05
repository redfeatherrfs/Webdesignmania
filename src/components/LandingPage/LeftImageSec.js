import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import foodDeliveryImage from '../../images/foodpanda.webp'; // Replace with the actual image path
import './LeftImage.css';

const contents = [
  {
    title: "Food Delivery Application",
    description: "A food delivery application is a mobile platform that allows users to conveniently order food from local restaurants for delivery or pick-up. The app features an intuitive interface where users can browse through restaurant menus, customize their orders, and view real-time GPS tracking of their deliveries. It supports multiple payment options, including credit/debit cards and digital wallets, ensuring secure transactions. Customers can also receive push notifications for order updates, promotions, and new menu items. Additionally, the app includes a review and rating system, enabling users to share feedback on their dining experiences, enhancing the overall service quality and customer satisfaction."
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
