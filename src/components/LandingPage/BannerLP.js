import React, { useState } from "react";
import webdesignlogo from '../../images/creativeorangelogo.webp';
import bgimg from '../../images/lpbgfinal.webp';
import saleprice from '../../images/saleprice.webp';
import formbg from '../../images/formbglp.png';
import formbg2 from '../../images/formbglp2.webp';
import bracket from '../../images/bracket.png';
import trustpilot from '../../images/trustpilotfinal.webp';
import clutch from '../../images/clutchicon.png';
import barkicon from '../../images/barkicon.png';

import '../../LandingPage.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { isAlphanumeric, isAlphabetic, fieldLengthValidator } from '../../utils/validationHelpers'


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
            // phoneRegex = /^\+1\d{10}$/
            phoneRegex = /^\+?\d{10,15}$/

        let html = ''

        if (!emailRegex.test(formData.email))
            html = "Invalid email address. Example: example@gmail.com<br />"

        if (!phoneRegex.test(formData.phone))
            html += "Invalid phone number. Example: 02071234564"

        if (html.length > 0)
            Swal.fire('Error', html, 'error')

        return phoneRegex.test(formData.phone) && emailRegex.test(formData.email)
    }

    const validateFormFields = () => {
        let isValid = true, html = ''

        // Name validation
        if (!isAlphabetic(formData.name) || !isAlphanumeric(formData.name) || !fieldLengthValidator(formData.name, 50)) {
            // document.querySelector('#contactForm input[name=name]').classList.add('is-invalid')
            html = "Must be alphabetic and not be greater than 50 characters.<br />"
            isValid = false
        }

        // Message validation
        if (!fieldLengthValidator(formData.message, 2000)) {
            html = "Message must not be greater than 2000 characters.<br />"
            isValid = false
        }

        if (html.length > 0)
            Swal.fire('Error', html, 'error')

        return isValid
    }

    const handleSubmit = async e => {
        e.preventDefault()

        // Email & phone validation
        if (!validateEmailAndPhone())
            return

        // Name & message fields validations
        if (!validateFormFields())
            return

        // setLoading(true)
        // await fetch("https://creativelogodesign.co.uk/lp/php_mailer/index.php", {
        //     method: 'POST',
        //     body: JSON.stringify(formData)
        // })
        //     .then(r => r.json())
        //     .then(({ success, message }) => {
        //         setLoading(false)
        //         if (success)
        //             navigate('https://creativelogodesign.co.uk/thanks.php')
        //         else
        //             Swal.fire('Error', message, 'error')
        //     })
            setLoading(true)
            await fetch("https://creativelogodesign.co.uk/lp/php_mailer/index.php", {
                method: 'POST',
                body: JSON.stringify(formData)
            })
            .then(r => r.json())
            .then(({ success, message }) => {
                console.log('Response:', success, message);  // Debugging output
                setLoading(false);
                if (success) {
                    window.location.href = "https://creativelogodesign.co.uk/thanks.php";
                } else {
                    Swal.fire('Error', message, 'error');
                }
            })
            .catch(error => {
                console.error('Error during fetch:', error);  // Log any fetch errors
                setLoading(false);
            });




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
                            {/* <img
                                src={bracket} 
                                alt="Bracket"
                                className="lpbanner-bracket-img" 
                                style={{ marginRight: '10px' }} 
                            /> */}
                            <h1 className="lpbanner-heading">
                                Custom Web Design <br />
                                Starts from <span className="lpbanner-price"><img className="saleprice" src={saleprice} alt="199" /></span>
                            </h1>
                        </div>

                        <div className="lp-banner-margin">
                            <p className="lpbanner-text">Creative Logo Design delivers visionary web design and development services, including 
                                custom websites, responsive design, e-commerce solutions, SEO optimization, and user-friendly interfaces to 
                                enhance your digital presence.</p>
                                <ul className="lpbanner-points">
                                <li>Top-Ranked Web Design Agency in the UK</li>
                                <li>Recognised for Award-Winning Web Designers</li>
                                <li>Reliable performance with top-notch security measures</li>
                                <li>Custom Web Design Solutions for Every Industry</li>
                            </ul>
                            <div className="lpbanner-buttons">
                                <button className="btn btn-dark lpbanner-btn" data-bs-toggle="modal" data-bs-target="#popupForm" onClick={() => updatePopupTitle('Website Starter Package - £199')}>Get Started</button>
                                <a className="btn btn-outline-light lpbanner-btn" href="#pricing-section" >View Pricing</a>
                            </div>
                            <div className="lpbanner-badges">
                                {/* <img src={clutch} alt="Clutch" /> */}
                                <a target="_blank" href="https://www.trustpilot.com/review/webdesignmania.co.uk">
                                    <img src={trustpilot} alt="Trustpilot" />
                                </a>
                                {/* <img src={barkicon} alt="Bark" /> */}
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
                        <div className="lpbanner-form mx-3 mx-sm-0">
                            <h3 className="lpbanner-form-title">Get a Website Quote</h3>
                            <p>Get response from us within 24 hours</p>
                            {/* <form method="POST" onSubmit={handleSubmit} id="bannerForm">
                                <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} className="lpbanner-input" required />
                                <input type="tel" placeholder="Enter your number" name="phone"  pattern="^\+?\d{10,15}$" title="Phone number should be between 10 and 15 digits, with an optional '+' at the start." value={formData.phone} onChange={handleChange} className="lpbanner-input" required />
                                <input type="email" placeholder="Enter your email" name="email" value={formData.email} onChange={handleChange} className="lpbanner-input" required />
                                <textarea placeholder="Message" name="message" className="lpbanner-input lpbanner-textarea"  value={formData.message} onChange={handleChange} required ></textarea>
                                <button type="submit" className="btn btn-dark lpbanner-submit-btn" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                            <span role="status">Submitting...</span>
                                        </>
                                    ) : 'Send Your Query'}
                                </button>
                            </form> */}


                            {/* <input
  type="text"
  placeholder="Enter your name*"
  name="name"
  value={formData.name}
  onChange={handleChange}
  className="lpbanner-input"
  required
  pattern="^[a-zA-Z0-9 ]{1,50}$"
  maxLength="50"
  title="Please enter a valid name (letters, numbers, and spaces only, up to 50 characters)."
/>
{formData.name && !/^[a-zA-Z0-9 ]{1,50}$/.test(formData.name) && (
  <div className="error-message">Please enter a valid name (letters, numbers, and spaces only, up to 50 characters).</div>
)} */}

                            <form method="POST" onSubmit={handleSubmit} id="bannerForm" noValidate>


                                <input
                                    type="text"
                                    placeholder="Enter your name*"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="lpbanner-input"
                                    required
                                    pattern="^[a-zA-Z][a-zA-Z ]{0,50}$"
                                    maxLength="52"
                                    title="Please enter a valid name"
                                />
                                {formData.name && !/^[a-zA-Z][a-zA-Z ]{0,50}$/.test(formData.name) && (
                                    <div className="error-message">Not allowed more than 50 characters and it must be in alphabet</div>
                                )}


                                <input
                                    type="tel"
                                    placeholder="Enter your number*"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="lpbanner-input"
                                    required
                                    pattern="^\+?\d{10,15}$"
                                    title="Please enter a valid phone number"
                                    maxLength="16" // 15 digits + optional '+' sign
                                />
                                {formData.phone && !/^\+?\d{10,15}$/.test(formData.phone) && (
                                    <div className="error-message">Please enter a valid phone number (between 10 and 15 digits, with an optional '+').</div>
                                )}


                                <input
                                    type="email"
                                    placeholder="Enter your email*"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="lpbanner-input"
                                    required
                                    title="Please enter a valid email address."
                                />
                                {formData.email && !/^[^\s][^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                                    <div className="error-message">Please enter a valid email address.</div>
                                )}


                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    className="lpbanner-input lpbanner-textarea"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    maxLength="2002"
                                    title="Message should not exceed 2000 characters."
                                ></textarea>
                                {formData.message && formData.message.length > 2000 && (
                                    <div className="error-message">Message should not exceed 2000 characters.</div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-dark lpbanner-submit-btn"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                            <span role="status">Submitting...</span>
                                        </>
                                    ) : (
                                        'Send Your Query'
                                    )}
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
