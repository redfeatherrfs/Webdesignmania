import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactusbg from '../images/contactpgbg.png'
import '../ContactUspg.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ContactUsform = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false); // Loading state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateEmailAndPhone = () => {
        console.log(document.querySelector('.contactuspg-form input[name=email]'));
        console.log(document.querySelector('.contactuspg-form input[name=phone]'));

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phoneRegex = /^\+1\d{10}$/

        if (!emailRegex.test(formData.email))
            document.querySelector('.contactuspg-form input[name=email]').classList.add('is-invalid')
        else
            document.querySelector('.contactuspg-form input[name=email]').classList.remove('is-invalid')

        if (!phoneRegex.test(formData.phone))
            document.querySelector('.contactuspg-form input[name=phone]').classList.add('is-invalid');
        else
            document.querySelector('.contactuspg-form input[name=phone]').classList.remove('is-invalid');

        return phoneRegex.test(formData.phone) && emailRegex.test(formData.email)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        // Email & phone validation
        if (!validateEmailAndPhone())
            return

        setLoading(true)

        await fetch(/*'http://localhost:9090'*//*"https://webdesignmania.co.uk/php/index.php"*/"https://webdesignmania.co.uk/lp/php_mailer/contact.php", {
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
        <section className="contactuspg-section py-5">
            <div className="container">
                <div className="row justify-content-center">
                    {/* Heading and Text */}
                    <div className="col-12 text-center py-5">
                        <h2 className="contactuspg-heading-row">Want a Guide Contact Us today</h2>
                        <p className="contactuspg-subtext">A place where talent and ambition can soar. Unleash your creativity and let your talents take center stage.  <br />When you work with us, you step into a world where your passion meets our purpose.</p>
                    </div>
                </div>
                {/* First Row - Heading and Subtext */}

                <div className="contactuspg-bg py-5">
                    <div className="contactuspg-heading-row text-center mb-4">
                        <h2 className="contactuspg-heading">Contact Us</h2>
                        <p className="contactuspg-subtext">Any question or remarks? Just write us a message!</p>
                    </div>

                    {/* Second Row - 2 Columns */}
                    <div className="row">
                        {/* First Column - Contact Information */}
                        <div className="col-lg-5 contactuspg-info mb-4">

                            <div
                                className="contactuspg-info-box p-4"
                                style={{
                                    backgroundImage: `url(${contactusbg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '10px',

                                    color: '#fff',
                                }}
                            >

                                <h3>Contact Information</h3>
                                <p>Say something to start a live chat</p>
                                <address>
                                    <FaMapMarkerAlt /> 497 Sunleigh Rd, Wembley HA0 4LY, UK<br />
                                </address>
                                <a href="tel:02045112009" className="contactuspg-link">
                                    <FaPhoneAlt /> 0204 511 2009
                                </a><br />
                                <a href="mailto:info@redfeathersolutions.com" className="contactuspg-link">
                                    <FaEnvelope /> info@redfeathersolutions.com
                                </a>

                                {/* Social Icons */}
                                <div className="contactuspg-social-icons d-flex">
                                    <a href="#" className="contactuspg-icon"><FaFacebookF /></a>
                                    <a href="#" className="contactuspg-icon"><FaInstagram /></a>
                                    <a href="#" className="contactuspg-icon"><FaTwitter /></a>
                                    <a href="#" className="contactuspg-icon"><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>

                        {/* Second Column - Form */}
                        <div className="col-lg-7 contactuspg-form bg-light p-4">
                            <form method='POST' onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input type="text" className="form-control contactuspg-input" onChange={handleChange} value={formData.firstName} name='firstName' placeholder="First Name" required />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input type="text" className="form-control contactuspg-input" onChange={handleChange} value={formData.lastName} name='lastName' placeholder="Last Name" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input type="email" className="form-control contactuspg-input" onChange={handleChange} value={formData.email} name='email' placeholder="Email" required />
                                        <div className="invalid-feedback">
                                            Invalid Email address
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input type="tel" className="form-control contactuspg-input" onChange={handleChange} value={formData.phone} name='phone' placeholder="Phone Number" required />
                                        <div className="invalid-feedback">
                                            Invalid Phone number. Example: +19876543210
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control contactuspg-input" onChange={handleChange} value={formData.subject} name='subject' placeholder="Subject" required />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control contactuspg-input" rows="5" onChange={handleChange} value={formData.message} name='message' placeholder="Message" required></textarea>
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-submit" disabled={loading}>
                                        {loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                                <span role="status">Submitting...</span>
                                            </>
                                        ) : 'Submit Now'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsform;
