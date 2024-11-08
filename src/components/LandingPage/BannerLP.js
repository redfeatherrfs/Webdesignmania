import React, { useState } from "react";
import webdesignlogo from '../../images/webdesignlogowhite.png';
import bgimg from '../../images/lpbg.png';
import formbg from '../../images/formbglp.png';
import formbg2 from '../../images/formbglp2.png';
import bracket from '../../images/bracket.png';
import trustpilot from '../../images/truspiloticon.png';
import clutch from '../../images/clutchicon.png';
import barkicon from '../../images/barkicon.png';

import '../../LandingPage.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Lpbanner = ({ updatePopupTitle }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false); // Loading state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmailAndPhone = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phoneRegex = /^\+1\d{10}$/

        let html = ''

        if (!emailRegex.test(formData.email))
            html = "Invalid email address<br />"

        if (!phoneRegex.test(formData.phone))
            html += "Invalid phone number. Example: +19876543210"

        if(html.length > 0)
            Swal.fire('Error', html, 'error')

        return phoneRegex.test(formData.phone) && emailRegex.test(formData.email)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        // Email & phone validation
        if(!validateEmailAndPhone())
            return

        setLoading(true)

        await fetch(/*'http://localhost:9090'*//*"https://webdesignmania.co.uk/php/index.php"*/"https://webdesignmania.com/php_mailer/index.php", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(({ success, message }) => {
                setLoading(false)
                if (success)
                    navigate('/thank-you')
                else
                    Swal.fire('Error', message, 'error')
            })
    }

    return (
        <section
            className="lpbanner"
            style={{ backgroundImage: `url(${bgimg})` }} // Correctly format the background image
        >
            <div className="container">
                <div className="row">
                    {/* Left Column */}
                    <div className="col-md-7 lp-left-column">
                        <img src={webdesignlogo} alt="Logo" className="lpbanner-logo" />
                        <div className="lpbanner-heading-container" style={{ display: 'flex', alignItems: 'center' }}>
                            <img
                                src={bracket} // Make sure this path is correct
                                alt="Bracket"
                                className="lpbanner-bracket-img" // Optional class for styling
                                style={{ marginRight: '10px' }} // Space between the image and text
                            />
                            <h1 className="lpbanner-heading">
                                Custom Web Design <br />
                                Starts just <span className="lpbanner-price">$199</span>
                            </h1>
                        </div>

                        <div className="lp-banner-margin">
                            <p className="lpbanner-text">Is your brand getting lost in a sea of online noise? Looking for a way to make waves and drive growth?</p>
                            <div className="lpbanner-buttons">
                                <button className="btn btn-dark lpbanner-btn" data-bs-toggle="modal" data-bs-target="#popupForm" onClick={() => updatePopupTitle('Basic Package - $199')}>Get Started</button>
                                <a className="btn btn-outline-light lpbanner-btn" href="#pricing-section" >View Pricing</a>
                            </div>
                            <div className="lpbanner-badges">
                                <img src={clutch} alt="Clutch" />
                                <img src={trustpilot} alt="Trustpilot" />
                                <img src={barkicon} alt="Bark" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-md-5 lp-right-column"
                        style={{
                            backgroundImage: `url(${formbg2})`, // Use your background image here
                            backgroundSize: 'cover', // Cover the entire column
                            backgroundPosition: 'center', // Center the image
                            padding: '70px', // Add padding for spacing
                            borderRadius: '5px', // Optional: rounded corners
                            // height: '600px', // Ensure the height covers the content
                        }}
                    >
                        <div className="lpbanner-form">
                            <h3 className="lpbanner-form-title">Get a Website Quote</h3>
                            <p>Get response from us within 24 hours</p>
                            <form method="POST" onSubmit={handleSubmit} id="bannerForm">
                                <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} className="lpbanner-input" required />
                                <input type="tel" placeholder="Enter your number" name="phone" value={formData.phone} onChange={handleChange} className="lpbanner-input" required />
                                <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} className="lpbanner-input" required />
                                <textarea placeholder="Message" name="message" className="lpbanner-input lpbanner-textarea" value={formData.message} onChange={handleChange} required ></textarea>
                                <button type="submit" className="btn btn-dark lpbanner-submit-btn" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                            <span role="status">Submitting...</span>
                                        </>
                                    ) : 'Send Your Query'}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Lpbanner;
