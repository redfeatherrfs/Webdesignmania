import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../OurMission.css'; // Unique CSS for this section


// Default props in case no props are passed
const defaultBorderStyle = {
    top: 'none',
    right: 'none',
    bottom: 'none',
    left: 'none'
};

const OurMission = ({ 
    ourmissionImg, 
    ourvissionImg, 
    heading, 
    subHeading, 
    content1, 
    content2, 
    borderStyle1 = defaultBorderStyle, 
    borderStyle2 = defaultBorderStyle 
}) => {
    return (
        <section className="ourmission-section py-5">
            <div className="container text-center">
                
                {/* First Row - Subheading and Heading */}
                <div className="row mb-5">
                    <div className="col-12">
                        <p className="sub-heading text-muted">{subHeading}</p>
                        <h2 className="main-heading">{heading}</h2>
                    </div>
                </div>
                
                {/* Second Row - Image and Text Columns */}
                <div className="row align-items-center">
                    {/* First Column - Image and Text */}
                    <div className="col-12 col-md-5 text-center mb-4 mb-md-0 py-5" style={{ borderTop: borderStyle1.top, borderRight: borderStyle1.right, borderBottom: borderStyle1.bottom, borderLeft: borderStyle1.left }}>
                        <img src={ourmissionImg} alt="Our Mission 1" className="img-fluid mission-img" />
                        <h2>{content1.heading}</h2>
                        <p className="mission-text mt-3">{content1.text}</p>
                    </div>

                    {/* Border Between Columns */}
                    <div className="col-12 col-md-2 d-none d-md-block">
                        <div className="vertical-line mx-auto"></div>
                    </div>

                    {/* Second Column - Image and Text */}
                    <div className="col-12 col-md-5 text-center py-5" style={{ borderTop: borderStyle2.top, borderRight: borderStyle2.right, borderBottom: borderStyle2.bottom, borderLeft: borderStyle2.left }}>
                        <img src={ourvissionImg} alt="Our Mission 2" className="img-fluid mission-img" />
                        <h2>{content2.heading}</h2>
                        <p className="mission-text mt-3">{content2.text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default OurMission;
