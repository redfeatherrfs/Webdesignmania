import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";  // You can use an icon or change it based on your needs
// import supportIcon from '../../images/oursupport.png'; // Replace with the actual path to your icon
// import consultIcon from '../../images/consuilt.png';  // Replace with the actual path to your icon
//  import chatIcon from '../../images/live.png';        // Replace with the actual path to your icon
// // You can replace these with the actual images/links you're using

const images = [

];

const contents = [
  {
    title: "CUSTOM E-COMMERCE WEBSITE",
    description: "E-commerce platform designed to help businesses sell products online. This project features a unique design aligned with the latest technology trends, advanced product search, filtering, secure checkout, and streamlined inventory management."
  },
  {
    title: "RESPONSIVE & SCALABLE",
    description: "Fully responsive and scalable designs, ensuring your e-commerce website works seamlessly on any device while growing with your business needs."
  },
  {
    title: "INTEGRATED PAYMENT SYSTEMS",
    description: "Advanced payment integrations for a seamless and secure transaction experience, including multiple payment methods and currency support."
  }
];

function CustomSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 500); // Changes content every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="custom-section">
      <Container>
        <Row>
          <Col md={6}>
            <h2>{contents[index].title}</h2>
            <p>{contents[index].description}</p>
          </Col>
          <Col md={6}>
            <img src={images[index]} alt="E-commerce example" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CustomSection;
