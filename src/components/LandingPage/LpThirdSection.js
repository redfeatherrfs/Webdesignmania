import React from 'react';
import '../../LandingPage.css'; // Ensure the path is correct
import lpicon1 from '../../images/lpicon1.png';
import lpicon2 from '../../images/lpicon2.png';
import lpicon3 from '../../images/lpicon3.png';

const LpthirdSection = () => {
    return (
        <section className="lpthirdsection">
            <div className="container">
                {/* First Row */}
                <div className="row text-center justify-content-center">
                    <div className="col-12 lpthird-head">
                        <h2>We Excel in designing Highly Efficient Supercharged Websites</h2>
                    </div>
                </div>

                {/* Second Row */}
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="lpiconbox">
                            <img src={lpicon1} alt="Icon 1" className="lpicon-image" />
                            <h4>Custom Web Design </h4>
                            <p>Web design is one of the most essential aspects of a website that grabs a customer's attention. At Web Design Mania we hone the platform to build excellent small businesses and amazing startups.  </p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="lpiconbox">
                            <img src={lpicon2} alt="Icon 2" className="lpicon-image" />
                            <h4>App Design</h4>
                            <p>Today, customers flock to a highly interactive design that is trendsetting and graceful. The shorter the website's loading time, the better.</p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="lpiconbox">
                            <img src={lpicon3} alt="Icon 3" className="lpicon-image" />
                            <h4>SEO</h4>
                            <p>Boost your digital presence today with our expert SEO services. Unlock the full potential of your website and get ahead of the competition. </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default LpthirdSection;
