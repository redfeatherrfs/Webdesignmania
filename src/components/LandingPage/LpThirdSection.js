import React from 'react';
import '../../LandingPage.css'; // Ensure the path is correct
import web_design from '../../images/web_design.png';
import app_design from '../../images/app_design.png';
import seo from '../../images/seo.png';
import stationary from '../../images/stationary.png';
import smm from '../../images/smm.png';
import logo_design from '../../images/logo_design.png';

const LpthirdSection = () => {
    return (
        <section className="lpthirdsection">
            <div className="container">
                {/* First Row */}
                <div className="row text-center justify-content-center">
                    <div className="col-12 lpthird-head">
                        <h2>Interested in our services?</h2>
                        Drop us a line, and our experts will reach out soon!
                    </div>
                </div>

                {/* Second Row */}
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="lpiconbox">
                            <img src={web_design} alt="Icon 1" className="lpicon-image" />
                            <h4>Web Design  </h4>
                            <p>Web design is one of the most important aspects of a website that catches a customer's attention. At Red Feather Solutions we refine the platform to empower remarkable small businesses and inspire incredible startups.</p>
                        </div>
                    </div>


                    {/* Column 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="lpiconbox">
                            <img src={app_design} alt="Icon 2" className="lpicon-image" />
                            <h4>App Design</h4>
                            <p>Today, customers are attracted to a visually pleasing design that is trendsetting and graceful. The shorter the website's loading time, the better.</p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="lpiconbox">
                            <img src={seo} alt="Icon 3" className="lpicon-image" />
                            <h4>SEO</h4>
                            <p>Boost your digital presence today with our expert SEO services offered by our best website development company. Unlock the full potential of your website and get ahead of the competition. </p>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="lpiconbox">
                            <img src={smm} alt="Icon 3" className="lpicon-image" />
                            <h4>SMM</h4>
                            <p>Transform your website through our Social Media Marketing for the millions watching you with our brilliant ecommerce website design. Reach out to the right people with our best marketing efforts.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="lpiconbox">
                            <img src={stationary} alt="Icon 3" className="lpicon-image" />
                            <h4>Stationary Design</h4>
                            <p>Standout from the competition with our unparalleled Stationary Designs. Every website needs a website designer. Your success begins with our website designs for small businesses and other innovative designs that capture the imagination of millions.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="lpiconbox">
                            <img src={logo_design} alt="Icon 3" className="lpicon-image" />
                            <h4>Logo Design</h4>
                            <p>Think different, think better with our creative and attractive logo designs. We will craft your classy brand with our impeccable logo designs. </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default LpthirdSection;
