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
            <h2 className="cta-heading">Looking For A Creative Web Design?</h2>
            <p className="cta-text">
              Drop Us A Message, And Our Experts Will Get Back To You Shortly
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary leave-message-btn">Leave A Message</button>
              <button className="btn btn-outline-light live-chat-btn">Live Chat</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LpCta1;


