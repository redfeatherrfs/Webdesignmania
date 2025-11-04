import React from 'react';
import '../../whychoose.css';

const WhyChooseService = ({
  heading, // Props for the heading
  description, // Props for the paragraph
  steps // Array of steps with image, alt text, title, and description
}) => {
  return (
<section
  id="choose-service-section" className="py-5"
  
  style={{ backgroundColor: "#3E1EC9" }}
>


  {/* First Row: Heading and Description */}
  <div className="container">
  <div className="row">
    <div className="col-12 text-center">
      <h2 className="experience-heading">
        {heading.title} <span className="lightblue-h2">{heading.highlight}</span>{heading.title2}
      </h2>
      <p className="choose-service-description">{description}</p>
    </div>
  </div>

  {/* First Row: 3 Icon Boxes */}
  <div className="row">
    {steps.slice(0, 3).map((step, index) => (
      <div className="col-lg-4 col-md-4" key={index}>
        <div className="choose-service-icon-box">
          <img src={step.image} alt={step.alt} className="img-fluid mb-3 choose-service-icon" />
          <h5 className="choose-service-icon-title font-weight-bold">{step.title}</h5>
          <p className="choose-service-icon-text">{step.description}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Second Row: 6 Icon Boxes */}
  <div className="row">
    {steps.slice(3, 6).map((step, index) => (
      <div className="col-lg-4 col-md-4" key={index}>
        <div className="choose-service-icon-box">
          <img src={step.image} alt={step.alt} className="img-fluid mb-3 choose-service-icon" />
          <h5 className="choose-service-icon-title font-weight-bold">{step.title}</h5>
          <p className="choose-service-icon-text">{step.description}</p>
        </div>
      </div>
    ))}
  </div>

    {/* Third Row: 6 Icon Boxes */}
    <div className="row">
    {steps.slice(6, 9).map((step, index) => (
      <div className="col-lg-4 col-md-4" key={index}>
        <div className="choose-service-icon-box">
          <img src={step.image} alt={step.alt} className="img-fluid mb-3 choose-service-icon" />
          <h5 className="choose-service-icon-title font-weight-bold">{step.title}</h5>
          <p className="choose-service-icon-text">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
  </div>

<div className="container">
  <div className="button-container">
      <a href="tel:+02045112009" className="whychoose-live"> <button className="letsdiscuss">Let’s Discuss Your Project</button></a>
      <a href="https://wa.me/+447309931252" className="whychoose-live"><button className="live-chat">Live Chat</button></a>
    </div>
    </div>

</section>

  );
};

export default WhyChooseService;
