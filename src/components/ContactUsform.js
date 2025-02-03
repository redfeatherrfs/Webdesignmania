import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactusbg from '../images/contactpgbg.png';
import '../ContactUspg.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ContactUsform = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // Loading state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    // State to store error messages
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    // Handle input change and trigger validation
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Trigger validation on each input change
        if (name === 'firstName') validateName(value, 'firstName');
        if (name === 'lastName') validateName(value, 'lastName');
        if (name === 'email') validateEmail(value);
        if (name === 'phone') validatePhone(value);
        if (name === 'message') validateMessage(value);
    };

    // Name validation (only alphabets, max length 50)
    const validateName = (value, field) => {
        const nameRegex = /^[A-Za-z\s]+$/;  // Allow only alphabets and spaces
        if (!value.trim()) {
            setErrors(prev => ({ ...prev, [field]: 'This field is required.' }));
        } else if (value.length > 50) {
            setErrors(prev => ({ ...prev, [field]: 'Not allowed more than 50 characters and it must be in alphabet' }));
        } else if (!nameRegex.test(value)) {
            setErrors(prev => ({ ...prev, [field]: 'Not allowed more than 50 characters and it must be in alphabet.' }));
        } else {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    // Email validation
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors(prev => ({ ...prev, email: 'Please enter a valid email address.' }));
        } else {
            setErrors(prev => ({ ...prev, email: '' }));
        }
    };

    // Phone validation (10-15 digits with optional + or - signs)
    const validatePhone = (phone) => {
        const phoneRegex = /^[\+\-]?\d{10,15}$/;  // + and - are optional, 10-15 digits
        if (!phone) {
            setErrors(prev => ({ ...prev, phone: 'Phone number is required.' }));
        } else if (phone.length > 16) {
            setErrors(prev => ({ ...prev, phone: 'Phone number cannot exceed 16 characters.' }));
        } else if (!phoneRegex.test(phone)) {
            setErrors(prev => ({ ...prev, phone: 'Phone number must be between 10 to 15 digits and can include "+" or "-" symbols.' }));
        } else {
            setErrors(prev => ({ ...prev, phone: '' }));
        }
    };

    // Message validation (max 2000 characters)
    const validateMessage = (message) => {
        if (!message.trim()) {
            setErrors(prev => ({ ...prev, message: 'Message is required.' }));
        } else if (message.length > 2000) {
            setErrors(prev => ({ ...prev, message: 'Message cannot exceed 2000 characters.' }));
        } else {
            setErrors(prev => ({ ...prev, message: '' }));
        }
    };

    // Submit form
    const handleSubmit = async e => {
        e.preventDefault();

        // Validate all fields before submission
        if (Object.values(errors).some(error => error)) {
            Swal.fire('Validation Error', 'Please fix the errors in the form.', 'error');
            return;
        }

        setLoading(true);

        await fetch("https://webdesignmania.com/php_mailer/contact.php", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(({ success, message }) => {
                setLoading(false);
                if (success)
                    navigate('/thank-you');
                else
                    Swal.fire('Error', message, 'error');
            });
    };

    return (
        <section className="contactuspg-section py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center py-5">
                        <h2 className="contactuspg-heading-row">Want a Guide Contact Us today</h2>
                        <p className="contactuspg-subtext">A place where talent and ambition can soar. Unleash your creativity and let your talents take center stage.</p>
                    </div>
                </div>

                <div className="contactuspg-bg py-5">
                    <div className="contactuspg-heading-row text-center mb-4">
                        <h2 className="contactuspg-heading">Contact Us</h2>
                        <p className="contactuspg-subtext">Any question or remarks? Just write us a message!</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-5 contactuspg-info mb-4">
                            <div className="contactuspg-info-box p-4" style={{
                                backgroundImage: `url(${contactusbg})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                borderRadius: '10px',
                                color: '#fff',
                            }}>
                                <h3>Contact Information</h3>
                                <p>Say something to start a live chat</p>
                                <a href="https://www.google.com/maps/search/?api=1&query=41+Winthrop+Rd,+Edison,+NJ+08817" target="_blank" className="contactuspg-link">
                                    <FaMapMarkerAlt /> 41 Winthrop Rd, Edison, NJ 08817<br />
                               </a>
                                <a href="tel:+15515543283" className="contactuspg-link"><FaPhoneAlt /> +15515543283</a><br />
                                <a href="mailto:info@webdesignmania.com" className="contactuspg-link"><FaEnvelope /> info@webdesignmania.com</a>

                                <div className="contactuspg-social-icons d-flex">
                                    <a href="https://www.facebook.com/webdesignmaniaUS" target="_blank" className="contactuspg-icon"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/webdesignmania_us/" target="_blank" className="contactuspg-icon"><FaInstagram /></a>
                               
                                    <a href="https://www.linkedin.com/company/web-design-mania-us/" target="_blank" className="contactuspg-icon"><FaLinkedin /></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7 contactuspg-form bg-light p-4">
                            <form method='POST' onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className={`form-control contactuspg-input ${errors.firstName ? 'is-invalid' : ''}`}
                                            onChange={handleChange}
                                            value={formData.firstName}
                                            name='firstName'
                                            maxLength="51"
                                            placeholder="First Name*"
                                            required
                                        />
                                        {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="text"
                                            className={`form-control contactuspg-input ${errors.lastName ? 'is-invalid' : ''}`}
                                            onChange={handleChange}
                                            value={formData.lastName}
                                             maxLength="51"
                                            name='lastName'
                                            placeholder="Last Name*"
                                            required
                                        />
                                        {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="email"
                                            className={`form-control contactuspg-input ${errors.email ? 'is-invalid' : ''}`}
                                            onChange={handleChange}
                                            value={formData.email}
                                            name='email'
                                            placeholder="Email*"
                                            required
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input
                                            type="tel"
                                            className={`form-control contactuspg-input ${errors.phone ? 'is-invalid' : ''}`}
                                            onChange={handleChange}
                                            value={formData.phone}
                                            name='phone'
                                             maxLength="16"
                                            placeholder="Phone Number*"
                                            required
                                        />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className={`form-control contactuspg-input ${errors.subject ? 'is-invalid' : ''}`}
                                        onChange={handleChange}
                                        value={formData.subject}
                                        name='subject'
                                        placeholder="Subject"
                                    />
                                    {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className={`form-control contactuspg-input ${errors.message ? 'is-invalid' : ''}`}
                                        rows="5"
                                        onChange={handleChange}
                                        value={formData.message}
                                        name='message'
                                        placeholder="Message"
                                    />
                                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="btn-submit" disabled={loading}>
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
