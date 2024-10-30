import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../LandingPage.css';
import logo from '../../images/lp-footer.png'; // Replace with actual path to your logo image

const LpFooterSec = () => {
    return (
        <section className="lp-footer-sec text-white d-flex flex-column justify-content-center" style={{ backgroundColor: '#3E1DCE' }}>
            <div className="container">
                {/* First Row - Logo Centered */}
                <div className="row justify-content-center py-3">
                    <div className="col-12 text-center">
                        <img src={logo} alt="Web Design Mania Logo" className="footer-logo" />
                    </div>
                </div>

                {/* Second Row - Copyright and Links */}
                <div className="row align-items-center pt-3" style={{ borderTop: '1px solid white' }}>
                    <div className="col-md-6 text-md-start text-center">
                        <p className="mb-0">
                            &copy; Copyright 2024, <strong>WebDesignMania</strong>. Powered by RFS
                        </p>
                    </div>
                    <div className="col-md-6 text-md-end text-center">
                        <a href="/terms" className="footer-link me-3">Terms & Conditions</a>
                        <a href="/privacy" className="footer-link">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LpFooterSec;
