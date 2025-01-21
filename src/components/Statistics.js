import React from 'react';
import bannerImage from '../images/companystatistics.webp';

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
              Grow With Exceptional UI Designs At Web Design Mania

              </h2>
            </div>
            {/* Right Side: Description */}
            <div className="col-md-5">
              <p className="about-desc">
              We understand that the key to a successful digital product lies in its usability. At Web Design Mania, our dedicated team of UI designers creates intuitive interfaces that blend beauty and functionality seamlessly.
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
