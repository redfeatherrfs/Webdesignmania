import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ourmission from '../../images/ourmission.png';
import ourvission from '../../images/ourvission.png';
import '../../OurMission.css'; // Unique CSS for this section

const OurMission = () => {
    return (
        <section className="ourmission-section py-5">
            <div className="container text-center">
                
                {/* First Row - Subheading and Heading */}
                <div className="row mb-5">
                    <div className="col-12">
                        <p className="sub-heading text-muted">ABOUT US</p>
                        <h2 className="main-heading">
                            Creatively led.<br /> Results digital agency
                        </h2>
                    </div>
                </div>
                
                {/* Second Row - Image and Text Columns */}
                <div className="row align-items-center">
                    {/* First Column - Image and Text */}
                    <div className="col-12 col-md-5 text-center mb-4 mb-md-0">
                        <img src={ourmission} alt="Our Mission 1" className="img-fluid mission-img" />
                        <p className="mission-text mt-3">If you wanna stand out, gotta be outstanding. Embrace the creativity with Kendrick. Our designers and development rockstars are here to make your digital dreams pop.</p>
                    </div>

                    {/* Border Between Columns */}
                    <div className="col-12 col-md-2 d-none d-md-block">
                        <div className="vertical-line mx-auto"></div>
                    </div>

                    {/* Second Column - Image and Text */}
                    <div className="col-12 col-md-5 text-center">
                        <img src={ourvission} alt="Our Mission 2" className="img-fluid mission-img" />
                        <p className="mission-text mt-3">If you wanna stand out, gotta be outstanding. Embrace the creativity with Kendrick. Our designers and development rockstars are here to make your digital dreams pop.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurMission;
