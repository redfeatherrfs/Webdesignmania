import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../LandingPage.css';
import bgImgcta from "../../images/ctabgimg.png"; // Import the image

const LpCta1 = () => {
  return (
    <section
      className="lp-cta1 d-flex align-items-center justify-content-center text-center"
      style={{ "--bg-image": `url(${bgImgcta})` }} // Set CSS variable
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="cta-heading">Ignite curiosity, and inspire action with our classy web design services. </h2>
            <p className="cta-text">
            Leave a message. Our website design agency’s professional web designers will get in touch with you.
            </p>
            <div className="cta-buttons">
              <a target="_blank" href="https://wa.me/18482369397" className="btn btn-primary leave-message-btn">Leave A Message</a>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LpCta1;


