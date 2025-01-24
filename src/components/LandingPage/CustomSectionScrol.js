import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import supportIcon from '../../images/Group 1000009893.png';
import consultIcon from '../../images/Group 1000009896.png';
import chatIcon from '../../images/Group 1000009899.png';
import Website from '../../images/Group 1000009901.png';
import './customscrol.css';

const images = [supportIcon, consultIcon, chatIcon, Website];
const contents = [
  {
    title: "Healthcare</br>Management System",
    description: "The project aims to develop a reliable platform for hospitals, clinics, and healthcare providers to efficiently manage operations and securely handle patient data. It offers features like online appointment booking, secure management of patient records in compliance with HIPAA and GDPR, and integration of telemedicine for virtual consultations. The system also includes directories for doctors and departments, automated reminders for follow-ups and prescriptions, along with health tracking dashboards for patients."
  },
  {
    title: "Corporate Website</br> with Custom Features",
    description: "The website includes an engaging homepage with animations, comprehensive service pages highlighting case studies and testimonials, and a careers section with job listings and application forms. It also features an integrated blog or knowledge center for sharing insights and updates, alongside a custom analytics dashboard to track website performance. The site is built on WordPress for content management, utilizes JavaScript and CSS for interactive components, and incorporates Google Analytics for performance monitoring. "
  },
  {
    title: "Learning</br> Management System (LMS)",
    description: "This project is based on building an LMS for educational institutions and for multiple corporate training programs to deliver their online services. It provides different functions such as user registration, course catalog, interactive lessons, quizzes, and assignments. It also supports payment integration with user-friendly mobile design and third-party applications like Google Meet and Zoom that were built with software like React, Node, JS, and MongoDB for flexible online learning."
  },
  {
    title: "Custom E-commerce</br> Website",
    description: "An e-commerce platform developed to enable businesses to sell products or services online. The project offers a distinctive design that reflects the brand identity, advanced search and filtering options for products, secure checkout, and efficient inventory and order management. It also includes integrations with CRM and ERP systems, supports multi-vendor capabilities, and is SEO-optimized to boost online visibility and growth."
  }
];

function CustomSection() {
  const [index, setIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true); // Start transition
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % contents.length); // Update index
        setTransitioning(false); // End transition after animation
      }, 1000); // Matches CSS animation duration
    }, 9000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="custom-section" id="scroll-section">
        <Col md={12} className="main-heading-col text-center">
              <h2 className="main-heading">Here's Our Work that Defines Perfection!</h2> {/* Updated to h2 */}
              <p className="main-description text-center">Our superior web designs and development services increase growth across all industries. </p> {/* Description */}
            </Col>
      <Container>
        <div className={`transition-row ${transitioning ? "active" : ""}`}>
          <Row className="content-row">
            <Col md={6} className="content-column">
              <h3
                dangerouslySetInnerHTML={{
                  __html: contents[index].title
                }}
              ></h3>
              <p>{contents[index].description}</p>
            </Col>
            <Col md={6} className="image-column">
              <img src={images[index]} alt="Project example" className="img-fluid" />
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default CustomSection;
