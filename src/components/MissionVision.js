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
                        Our Website Developers Will <br />Elevate Your Digital Identity
  
                        </h2>
                    </div>
                    <div className="col-md-5">
                        <p className="about-desc">
                        Let’s engineer efficient codes that deliver high-performance websites optimized for speed, SEO, and long-term growth. From front-end frameworks to back-end solutions, our website developers specialize in all. 

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
                                    To develop efficient, secure code for real-time, dynamic websites. We aim to deliver visually stunning websites that focus on fast data handling and provide users with smooth interactions.

                                    </p>
                                </div>
                            </div>

                            {/* Icon Box 2: Our Vision */}
                            <div className="icon-box">
                                <img src={visionIcon} alt="Our Vision" className="icon-image" />
                                <div className="icon-content">
                                    <h4>Our Vision</h4>
                                    <p>
                                    To set a new benchmark in web development by combining cutting-edge technology with user-centered design. We envision pushing the boundaries of our website developers to continuously innovate, leveraging the latest in web standards and frameworks.
                                    </p>
                                </div>
                            </div>

                            {/* Icon Box 3: Our Philosophy */}
                            <div className="icon-box">
                                <img src={workIcon} alt="Our Philosophy" className="icon-image" />
                                <div className="icon-content">
                                    <h4>Our Value</h4>
                                    <p>
                                    Transparency and honesty are key to everything we do. Every project we work on is developed with attention to detail and a commitment to excellence. We take pride in building long-lasting relationships that foster trust.
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
