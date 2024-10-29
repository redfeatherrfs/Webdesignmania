import React from "react";
import webdesignlogo from '../../images/webdesignlogowhite.png';
import bgimg from '../../images/lpbg.png';
import formbg from '../../images/formbglp.png';
import formbg2 from '../../images/formbglp2.png';
import bracket from '../../images/bracket.png';
import trustpilot from '../../images/truspiloticon.png';
import clutch from '../../images/clutchicon.png';
import barkicon from '../../images/barkicon.png';

import '../../LandingPage.css';

const Lpbanner = () => {
  return (
    <section 
            className="lpbanner" 
            style={{ backgroundImage: `url(${bgimg})` }} // Correctly format the background image
        >
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-7 lp-left-column">
            <img src={webdesignlogo} alt="Logo" className="lpbanner-logo" />
            <div className="lpbanner-heading-container" style={{ display: 'flex', alignItems: 'center' }}>
    <img 
        src={bracket} // Make sure this path is correct
        alt="Bracket"
        className="lpbanner-bracket-img" // Optional class for styling
        style={{ marginRight: '10px' }} // Space between the image and text
    />
    <h1 className="lpbanner-heading">
        Custom Web Design <br />
        Starts just <span className="lpbanner-price">$199</span>
    </h1>
</div>


            {/* <h1 className="lpbanner-heading">
              <span className="lpbanner-bracket">{`{`}</span> Custom Web Design <br/> Starts just <span className="lpbanner-price">$199</span>
             
            </h1> */}
            <div className="lp-banner-margin">
            <p className="lpbanner-text">Is your brand getting lost in a sea of online noise? Looking for a way to make waves and drive growth?</p>
            <div className="lpbanner-buttons">
              <button className="btn btn-dark lpbanner-btn">Get Started</button>
              <button className="btn btn-outline-light lpbanner-btn">View Pricing</button>
            </div>
            <div className="lpbanner-badges">
              <img src={clutch} alt="Clutch" />
              
              <img src={trustpilot} alt="Trustpilot" />
              <img src={barkicon} alt="Bark" />
            </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-5 lp-right-column" 
            style={{ 
                backgroundImage: `url(${formbg2})`, // Use your background image here
                backgroundSize: 'cover', // Cover the entire column
                backgroundPosition: 'center', // Center the image
                padding: '70px', // Add padding for spacing
                borderRadius: '5px', // Optional: rounded corners
                // height: '600px', // Ensure the height covers the content
            }}
        >
            <div className="lpbanner-form">
                <h3 className="lpbanner-form-title">Get a Website Quote</h3>
                <p>Get response from us within 24 hours</p>
                <form>
                    <input type="text" placeholder="Enter your name" className="lpbanner-input" />
                    <input type="tel" placeholder="Enter your number" className="lpbanner-input" />
                    <input type="email" placeholder="Enter your email" className="lpbanner-input" />
                    <textarea placeholder="Message" className="lpbanner-input lpbanner-textarea"></textarea>
                    <button type="submit" className="btn btn-dark lpbanner-submit-btn">Send Your Query</button>
                </form>
            </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Lpbanner;
