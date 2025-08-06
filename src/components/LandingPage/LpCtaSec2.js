import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../LandingPage.css';
import lpcta2 from "../../images/Group 1000009907.png"; // Ensure this path is correct

const LpCtaSec2 = () => {
    console.log(lpcta2); // Debugging line to check if the path is correct

    return (
        <section class="lp-cta-sec2 d-flex align-items-center">
        <div class="container">
            <div class="row align-items-center">
                {/* <!-- Column 1: Heading and Text --> */}
                <div class="col-md-8 text-white">
                    <h2>Let’s Build Bespoke Web<br/>
                    Solutions for Your Business</h2>
                    <p>Drop us a message, and our experts will get back to you shortly</p>
                </div>
    
                {/* <!-- Column 2: Button --> */}
                <div class="col-md-4 text-center">
                    <a target="_blank" href="https://wa.me/+447380107663">
                        <button class="cta2-button">Leave A Message</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
    );
};

export default LpCtaSec2;
