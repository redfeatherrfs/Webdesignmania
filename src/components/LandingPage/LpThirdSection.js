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
                        <h2>We Specialize in Coding High Performing Websites</h2>
                    </div>
                </div>

                {/* Second Row */}
                <div className="row">
                    {/* Column 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="lpiconbox">
                            <img src={lpicon1} alt="Icon 1" className="lpicon-image" />
                            <h4>Mobile Friendly</h4>
                            <p>Today, customers look for a website that loads quickly and gives a seamless unbreakable experience on any mobile device.</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="lpiconbox">
                            <img src={lpicon2} alt="Icon 2" className="lpicon-image" />
                            <h4>Mobile Friendly</h4>
                            <p>Today, customers look for a website that loads quickly and gives a seamless unbreakable experience on any mobile device.</p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="lpiconbox">
                            <img src={lpicon3} alt="Icon 3" className="lpicon-image" />
                            <h4>Mobile Friendly</h4>
                            <p>Today, customers look for a website that loads quickly and gives a seamless unbreakable experience on any mobile device.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LpthirdSection;
