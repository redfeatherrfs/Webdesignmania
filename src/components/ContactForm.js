import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../ContactForm.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // Loading state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z\s]{1,50}$/; // Only alphabets, max 50 characters
        if (!nameRegex.test(name)) {
            setErrors((prevErrors) => ({ ...prevErrors, name: 'Not allowed more than 50 characters and it must be alphabetic.' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
        }
        return nameRegex.test(name);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?[\d\s]{10,15}$/; // Updated regex for flexible phone format
        if (!phoneRegex.test(phone)) {
            setErrors((prevErrors) => ({ ...prevErrors, phone: 'Please enter a valid phone number (between 10 and 15 digits, with an optional "+").' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
        }
        return phoneRegex.test(phone);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Please enter a valid email address.' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }
        return emailRegex.test(email);
    };

    const validateMessage = (message) => {
        if (message.trim().length === 0) {
            setErrors((prevErrors) => ({ ...prevErrors, message: 'Message cannot be empty.' }));
        } else if (message.length > 2000) {
            setErrors((prevErrors) => ({ ...prevErrors, message: 'Message should not exceed 2000 characters.' }));
        } else {
            setErrors((prevErrors) => ({ ...prevErrors, message: '' }));
        }
        return message.trim().length > 0 && message.length <= 2000;
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        // Trigger validation on each input change
        if (name === 'name') validateName(value);
        if (name === 'phone') validatePhone(value);
        if (name === 'email') validateEmail(value);
        if (name === 'message') validateMessage(value);
    };

    const validateForm = () => {
        const isNameValid = validateName(formData.name);
        const isPhoneValid = validatePhone(formData.phone);
        const isEmailValid = validateEmail(formData.email);
        const isMessageValid = validateMessage(formData.message);

        return isNameValid && isPhoneValid && isEmailValid && isMessageValid;
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (!validateForm()) {
            Swal.fire('Validation Error', 'Please fix the errors in the form.', 'error');
            return;
        }

        setLoading(true);

        await fetch("https://webdesignmania.com/php_mailer/index.php", {
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
        <section className="ebook-contact-form container">
            <div className="row">
                <div className="col-md-5 left-column">
                    <h2>Let's Succeed Together! <br />
                        <br /></h2>
                    <ul className="contact-info">
                        <li>
                            <FaPhoneAlt className="contact-icon" />
                            <a href="tel:+15515543283">+1 (551) 554-3283</a>
                        </li>
                        <li>
                            <FaEnvelope className="contact-icon" />
                            <a href="mailto:info@webdesignmania.com">info@webdesignmania.com</a>
                        </li>
                        <li>
                            <FaMapMarkerAlt className="contact-icon" />
                            <span>43 3rd Ave 2nd Floor, Edison, NJ 08837</span>
                        </li>
                    </ul>
                </div>

                <div className="col-md-7">
                    <form onSubmit={handleSubmit} method='POST' id='contactForm'>
                        <div className="row mb-3">
                            <div className="col">
                                <input
                                    type="text"
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    placeholder="Your full name*"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    maxLength="52"
                                />
                                {errors.name && <div className="error-message">{errors.name}</div>}
                            </div>
                            <div className="col">
                                <input
                                    type="email"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    placeholder="E-mail address*"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className="error-message">{errors.email}</div>}
                            </div>
                        </div>
                        <div className="mb-3">
                            <input
                                type="tel"
                                className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                placeholder="Phone Number*"
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                maxLength="15"
                            />
                            {errors.phone && <div className="error-message">{errors.phone}</div>}
                        </div>
                        <div className="mb-3">
                            <textarea
                                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                rows="5"
                                placeholder="Your message*"
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                maxLength="2002"
                                required
                            />
                            {errors.message && <div className="error-message">{errors.message}</div>}
                        </div>
                        <button type="submit" className="btn btn-submit" disabled={loading}>
                            {loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                    <span role="status">Submitting...</span>
                                </>
                            ) : 'Submit Now'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
