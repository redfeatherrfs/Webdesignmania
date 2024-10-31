import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../LandingPage.css'; 
import lpcta2 from "../../images/lpcta2.png"; // Ensure this path is correct

const LpCtaSec2 = () => {
    return (
        <section
            className="lp-cta-sec2 d-flex align-items-center"
            style={{
                backgroundImage: `url(${lpcta2})`, // Use template literals for the URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // height: '400px', 
            }}
        >
            <div className="container">
                <div className="row align-items-center">
                    {/* Column 1: Heading and Text */}
                    <div className="col-md-8 text-white">
                        <h2>Creative Web Design?</h2>
                        <p>Drop Us A Message, And Our Experts Will Get Back To You Shortly</p>
                    </div>

                    {/* Column 2: Button */}
                    <div className="col-md-4 text-center">
                        <button className="cta2-button">Leave A Message</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LpCtaSec2;
