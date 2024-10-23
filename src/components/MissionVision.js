import React from 'react';
import aboutImage from '../images/abouts.png';
import missionIcon from '../images/Mission.png';
import visionIcon from '../images/vision.png';
import workIcon from '../images/work.png';

const OurMissionSection = () => {
  return (
    <section className="my-abouts">
      <div className="container">
        <div className="row">
          {/* Left Side: About Heading and Description */}
          <div className="col-md-7">
            <h2 className="sub-heading">ABOUT US</h2>
            <h2 className="about-heading">
              We are Professional
              <br />
              Digital Team
            </h2>
          </div>
          <div className="col-md-5">
            <p className="about-desc">
              We are a team of professional web designers and developers with expertise in creating custom websites that are tailored to meet the specific needs and goals of our clients.
            </p>
          </div>

          {/* Right Side: Image and Icon Boxes */}
          <div className="col-md-7">
            <img src={aboutImage} alt="About Us" className="img-fluid" />
          </div>
          <div className="col-md-5">
            <div className="icon-boxes">
              {/* Icon Box 1: Our Mission */}
              <div className="icon-box">
                <img src={missionIcon} alt="Our Mission" className="icon-image" />
                <div className="icon-content">
                  <h4>Our Mission</h4>
                  <p>
                    Our mission is to provide affordable, expert web design services that help businesses succeed in the digital world. We believe that every business deserves a website that reflects their unique brand and meets their business needs. That's why we offer a range of services tailored to meet the specific needs of our clients.
                  </p>
                </div>
              </div>

              {/* Icon Box 2: Our Vision */}
              <div className="icon-box">
                <img src={visionIcon} alt="Our Vision" className="icon-image" />
                <div className="icon-content">
                  <h4>Our Vision</h4>
                  <p>
                    Our vision is to be the go-to web design agency for businesses looking for affordable, high-quality web design services. We strive to provide our clients with the best possible experience and to exceed their expectations every time.
                  </p>
                </div>
              </div>

              {/* Icon Box 3: Our Philosophy */}
              <div className="icon-box">
                <img src={workIcon} alt="Our Philosophy" className="icon-image" />
                <div className="icon-content">
                  <h4>Our Philosophy</h4>
                  <p>
                    We're all about helping businesses succeed online. We think every business should have a website that shows off its unique style and meets its needs. That's why we offer affordable, expert web design services that are tailored to each client. We're committed to going the extra mile to make sure our clients' websites help them thrive in the digital world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMissionSection;
