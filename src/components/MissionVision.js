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
                        Let's create powerful, high-performance websites engineered for speed, SEO, and sustainable growth. From cutting-edge front-end design to robust back-end solutions, our expert developers have you covered.

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
                                    To create secure, efficient code that powers dynamic, real-time websites. We’re committed to delivering visually captivating websites with rapid data handling, ensuring seamless user interactions and optimal performance.

                                    </p>
                                </div>
                            </div>

                            {/* Icon Box 2: Our Vision */}
                            <div className="icon-box">
                                <img src={visionIcon} alt="Our Vision" className="icon-image" />
                                <div className="icon-content">
                                    <h4>Our Vision</h4>
                                    <p>
                                    To redefine industry standards in web development by merging the latest technology with user-centric design. We envision our team as trailblazers, continuously innovating and leveraging the most advanced web standards and frameworks to inspire change.
                                    </p>
                                </div>
                            </div>

                            {/* Icon Box 3: Our Philosophy */}
                            <div className="icon-box">
                                <img src={workIcon} alt="Our Philosophy" className="icon-image" />
                                <div className="icon-content">
                                    <h4>Our Value</h4>
                                    <p>
                                    Honesty and transparency guide all our efforts. Each project is executed with precision and a commitment to excellence, fostering long-lasting relationships built on trust and quality service.
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
