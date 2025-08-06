import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../LandingPage.css';
import logo from '../../images/lp-footer.png'; // Replace with actual path to your logo image
import { Link } from 'react-router-dom';

const LpFooterSec = () => {
    return (
        <section className="lp-footer-sec text-white d-flex flex-column justify-content-center" style={{ backgroundColor: '#853101' }}>
            <div className="container">
                {/* First Row - Logo Centered */}
                <div className="row justify-content-center py-3">
                    <div className='col-md-4'>
                        <h3>Get Social</h3>

                        <div className='social-links'>
                            <a href='https://www.facebook.com/webdesignmaniauk/' target='_blank'>
                                <div className='d-flex align-items-center gap-3'>
                                    <i class="fa-brands fa-facebook-f"></i>
                                    <span>Facebook</span>
                                </div>
                            </a>
                            <a href='https://www.instagram.com/web_design_mania_uk/' target='_blank'>
                                <div className='d-flex align-items-center gap-3'>
                                    <i class="fa-brands fa-instagram"></i>
                                    <span>Instagram</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='text-center'>
                            <Link to='/lp'>
                                <img src={logo} alt="Web Design Mania Logo" className="footer-logo" />
                            </Link>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <h3>Contact Us</h3>

                        <div className='social-links'>
                            <a href='tel:0204 511 2009'>
                                <div className='d-flex align-items-center gap-3'>
                                    <i class="fa-solid fa-phone"></i>
                                    <span>0204 511 2009</span>
                                </div>
                            </a>
                            <a href='mailto:info@webdesignmania.co.uk'>
                                <div className='d-flex align-items-center gap-3'>
                                    <i class="fa-solid fa-envelope"></i>
                                    <span>info@webdesignmania.co.uk</span>
                                </div>
                            </a>
                            <a href='https://maps.app.goo.gl/hzEmaUB6sqde6kH28'>
                                <div className='d-flex align-items-center gap-3'>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <span>497 Sunleigh Rd, Wembley HA0 4LY, UK</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* <div className="col-12 text-center">
                        <Link to='/lp'>
                            <img src={logo} alt="Web Design Mania Logo" className="footer-logo" />
                        </Link>
                    </div> */}
                </div>

                {/* Second Row - Copyright and Links */}
                <div className="row align-items-center pt-3" style={{ borderTop: '1px solid white' }}>
                    <div className="col-md-6 text-md-start text-center">
                        <p className="mb-0">
                            &copy; Copyright 2024, <strong>WebDesignMania</strong>. Powered by RFS
                        </p>
                    </div>
                    <div className="col-md-6 text-md-end text-center">

                        <a href="/lp/terms" target="_blank" className="footer-link me-3">Terms & Conditions</a>
                        <a href="/lp/privacy" target="_blank" className="footer-link">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LpFooterSec;
