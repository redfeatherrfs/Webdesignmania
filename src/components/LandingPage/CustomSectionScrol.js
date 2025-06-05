import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import supportIcon from '../../images/Group 1000009893.webp';
import consultIcon from '../../images/Group 1000009896.webp';
import chatIcon from '../../images/Group 1000009899.webp';
import Website from '../../images/Group 1000009901.webp';
import './customscrol.css';

const images = [supportIcon, consultIcon, chatIcon, Website];
const contents = [
  {
    title: "Healthcare</br>Management System",
    description: "The project focuses on creating a robust platform for hospitals, clinics, and healthcare providers to manage their operations and patient data securely. It features online appointment scheduling, secure patient record management compliant with HIPAA and GDPR, and telemedicine integrations for virtual consultations. The system includes doctor and department directories, automated reminders for follow-ups and prescriptions, and health tracking dashboards for patients."
  },
  {
    title: "Corporate Website</br> with Custom Features",
    description: "The website features an interactive homepage with animations, detailed service pages showcasing case studies and testimonials, and a career section with job postings and application forms. It also includes an integrated blog or knowledge hub for sharing insights and updates, as well as a custom analytics dashboard to monitor website performance. Built using WordPress for content management, JavaScript and CSS for interactive elements, and Google Analytics for performance tracking."
  },
  {
    title: "Learning</br> Management System (LMS)",
    description: "This project involved developing an LMS for educational institutions and corporate training programs to deliver courses online. It includes user registration and role management, a searchable course catalog, interactive lessons with videos, quizzes, and assignments, and progress tracking. The system supports payment gateway integration, mobile-friendly design, and third-party tool integrations like Zoom and Google Meet for live sessions. Built with React, Node.js, and MongoDB, it offers a scalable and user-friendly platform for online learning."
  },
  {
    title: "Custom E-commerce</br> Website",
    description: "E-commerce platform designed to help businesses sell products or services online. The project features a unique design aligned with the brand identity, advanced product search and filtering, secure checkout, and streamlined inventory and order management. It includes integrations with CRM and ERP systems, supports multi-vendor functionality, and is SEO-optimized for enhanced online visibility and growth."
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
    }, 5000); // Change content every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="custom-section" id="scroll-section">
        <Col md={12} className="main-heading-col">
              <h2 className="main-heading">Our Work Speaks</h2> {/* Updated to h2 */}
              <p className="main-description text-center">Our innovative web design and development services drive success across all industries</p> {/* Description */}
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
