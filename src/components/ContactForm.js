import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../ContactForm.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { isAlphanumeric, isAlphabetic, fieldLengthValidator } from '../utils/validationHelpers'

const ContactForm = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // Loading state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z\s]{1,50}$/; // Only alphabets, max 50 characters
        const nameField = document.querySelector('#contactForm input[name=name]');
        if (!nameRegex.test(name)) {
            nameField.classList.add('is-invalid');
        } else {
            nameField.classList.remove('is-invalid');
        }
        return nameRegex.test(name);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?[\d\s]{10,15}$/; // Updated regex for flexible phone format
        const phoneField = document.querySelector('#contactForm input[name=phone]');
        
        if (!phoneRegex.test(phone)) {
            phoneField.classList.add('is-invalid');
        } else {
            phoneField.classList.remove('is-invalid');
        }
    
        return phoneRegex.test(phone);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateMessage = (message) => {
        return message.trim().length > 0; // Check if message is not empty
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const isNameValid = validateName(formData.name);
        const isPhoneValid = validatePhone(formData.phone);
        const isEmailValid = validateEmail(formData.email);
        const isMessageValid = validateMessage(formData.message);

        return isNameValid && isPhoneValid && isEmailValid && isMessageValid;
    };

    const validateFormFields = () => {
        let isValid = true

        // Name validation
        if (!isAlphabetic(formData.name) || !isAlphanumeric(formData.name) || !fieldLengthValidator(formData.name, 50)) {
            document.querySelector('#contactForm input[name=name]').classList.add('is-invalid')
            isValid = false
        }
        else
            document.querySelector('#contactForm input[name=name]').classList.remove('is-invalid')

        // Message validation
        if (!fieldLengthValidator(formData.message, 200)) {
            document.querySelector('#contactForm textarea').classList.add('is-invalid')
            isValid = false
        }
        else
            document.querySelector('#contactForm textarea').classList.remove('is-invalid')

        return isValid
    }



    const handleSubmit = async e => {
        e.preventDefault();

        if (!validateForm()) {
            Swal.fire('Validation Error', 'Please fix the errors in the form.', 'error');
            return;
        }

        setLoading(true);

        await fetch(/*'http://localhost:9090'*//*"https://webdesignmania.co.uk/php/index.php"*/"https://webdesignmania.co.uk/lp/php_mailer/index.php", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(({ success, message }) => {
                setLoading(false);
                if (success)
                    navigate('/lp/thank-you')
                else
                    Swal.fire('Error', message, 'error');
            });
    };

    return (
        <section className="ebook-contact-form container">
            <div className="row">
                <div className="col-md-5 left-column">
                    <h2>Let's Connect <br />
                        <br /></h2>

                    <ul className="contact-info">
                        <li>
                            <FaPhoneAlt className="contact-icon" />
                            <a href="tel:+02045112009">0204 511 2009</a>
                        </li>
                        <li>
                            <FaEnvelope className="contact-icon" />
                            <a href="mailto:info@webdesignmania.co.uk">info@webdesignmania.co.uk</a>
                        </li>
                        <li>
                            <FaMapMarkerAlt className="contact-icon" />
                            <a href='https://maps.app.goo.gl/hzEmaUB6sqde6kH28' target='_blank'>497 Sunleigh Rd, Wembley HA0 4LY, UK</a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-7">
                    <div className='text-center'>
                        <h2>Let's Start Your Project <br />
                            <br /></h2>
                    </div>
                    <form onSubmit={handleSubmit} method='POST' id='contactForm'>
                        <div className="row mb-3">
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your full name*"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    onInput={() => validateName(formData.name)}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Name must be alphabets only and less than 50 characters.
                                </div>
                            </div>
                            <div className="col">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="E-mail address*"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    onInput={() => validateEmail(formData.email)}
                                    required
                                />
                                <div className="invalid-feedback">
                                    Invalid Email address
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="Phone Number*"
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                onInput={() => validatePhone(formData.phone)}
                                required
                            />
                           <div className="invalid-feedback">
                                Please enter a valid phone number (10-15 digits, optional '+').
                            </div>

                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Your message*"
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                onInput={() => validateMessage(formData.message)}
                                required
                            />
                            <div className="invalid-feedback">
                                Message must not be greater than 200 characters.
                            </div>
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
