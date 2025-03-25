import React from 'react';
import bannerImage from '../images/div.diag_slides.png';

const StatisticsSection = () => {
  return (
    <>
      {/* Start Statistics Section */}
      <section className="my-abouts">
        <div className="container">
          <div className="row">
            {/* Left Side: Heading */}
            <div className="col-md-7">
              <h2 className="sub-heading">Company Statistics</h2>
              <h2 className="about-heading">
              Grow With Exceptional UI Designs At Creative Logo Design

              </h2>
            </div>
            {/* Right Side: Description */}
            <div className="col-md-5">
              <p className="about-desc">
              We understand that the key to a successful digital product lies in its usability. At Creative Logo Design, our dedicated team of UI designers creates intuitive interfaces that blend beauty and functionality seamlessly.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Statistics Section */}

      {/* Start Full Width Image Section */}
      <section className="secbanner-section">
        <img src={bannerImage} alt="Background" className="img-fluid" />
      </section>
      {/* End Full Width Image Section */}
    </>
  );
};

export default StatisticsSection;
