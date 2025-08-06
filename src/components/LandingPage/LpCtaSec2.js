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
                        <h2>Looking for Innovative Web Design?</h2>
                        <p>Message us, and our team will be in touch soon!</p>
                    </div>

                    {/* Column 2: Button */}
                    <div className="col-md-4 text-center">
                    <a target="_blank" href="https://wa.me/+447491860363"><button className="cta2-button">Leave A Message</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LpCtaSec2;
