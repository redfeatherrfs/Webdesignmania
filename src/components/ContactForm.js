import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../ContactForm.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { isAlphanumeric, isAlphabetic, fieldLengthValidator } from '../utils/validationHelpers'

const ContactForm = () => {
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
            // phoneRegex = /^(\+44\s?|0)\d{3}\s?\d{3}\s?\d{3,4}$/         
        // phoneRegex = /^(\+1)?\d{10,14}$/
        // phoneRegex = /^\+?\d{1,4}\s?\d{3,4}(\s?\d{3}){2,3}$|^\d{10,15}$/
        phoneRegex = /^[+]?[0-9]{1,4}[\s\(\)-]?[0-9]{1,4}[\s\(\)-]?[0-9]{1,4}[\s\(\)-]?[0-9]{1,4}$/



        if (!emailRegex.test(formData.email))
            document.querySelector('#contactForm input[name=email]').classList.add('is-invalid')
        else
            document.querySelector('#contactForm input[name=email]').classList.remove('is-invalid')

        if (!phoneRegex.test(formData.phone))
            document.querySelector('#contactForm input[name=phone]').classList.add('is-invalid');
        else
            document.querySelector('#contactForm input[name=phone]').classList.remove('is-invalid');

        return phoneRegex.test(formData.phone) && emailRegex.test(formData.email)
    }

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
        e.preventDefault()

        // Email & phone validation
        if (!validateEmailAndPhone())
            return

        // Name & message fields validations
        if (!validateFormFields())
            return

        setLoading(true)

        await fetch(/*'http://localhost:9090'*//*"https://webdesignmania.co.uk/php/index.php"*/"https://webdesignmania.co.uk/lp/php_mailer/index.php", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(({ success, message }) => {
                setLoading(false)
                if (success)
                    navigate('/lp/thank-you')
                else
                    Swal.fire('Error', message, 'error')
            })
    }

    return (
        <section className="ebook-contact-form container">
            <div className="row">
            <div className="col-md-5 left-column">
                <h3>Contact Us</h3>
                <h2>Let's Build Your <br /> Digital Future</h2>
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
                        <a href="https://maps.app.goo.gl/hzEmaUB6sqde6kH28" target="_blank">497 Sunleigh Rd, Wembley HA0 4LY, UK</a>
                    </li>
                </ul>
            </div>


                <div className="col-md-7">
                    <div className='text-center'>
                        {/* <h2>Let's Start Your Project <br />
                            <br /></h2> */}
                    </div>
                    <form onSubmit={handleSubmit} method='POST' id='contactForm'>
    <div className="row mb-3">
        <div className="col">
            <input
                type="text"
                className={`form-control ${formData.name && !/^[a-zA-Z][a-zA-Z ]{0,50}$/.test(formData.name) ? 'is-invalid' : ''}`}
                placeholder="Your full name*"
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                pattern="^[a-zA-Z][a-zA-Z ]{0,50}$"
                title="Please enter a valid name (only alphabets and spaces allowed, no special characters, and max 50 characters)."
            />
            {formData.name && !/^[a-zA-Z][a-zA-Z ]{0,50}$/.test(formData.name) && (
                <div className="invalid-feedback">
                    Name must only contain alphabets and spaces, and cannot exceed 50 characters.
                </div>
            )}
        </div>
        <div className="col">
            <input
                type="email"
                className={`form-control ${formData.email && !/^[^\s][^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) ? 'is-invalid' : ''}`}
                placeholder="E-mail address*"
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                title="Please enter a valid email address."
            />
            {formData.email && !/^[^\s][^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                <div className="invalid-feedback">
                    Invalid email address (no spaces at the beginning).
                </div>
            )}
        </div>
    </div>
    <div className="mb-3">
        <input
            type="tel"
            className={`form-control ${formData.phone && !/^\+?\d{10,15}$/.test(formData.phone) ? 'is-invalid' : ''}`}
            placeholder="Phone Number*"
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="^\+?\d{10,15}$"
            title="Phone number format: 02071234564"
        />
        {formData.phone && !/^\+?\d{10,15}$/.test(formData.phone) && (
            <div className="invalid-feedback">
                Invalid phone number. Example: 02071234564
            </div>
        )}
    </div>
    <div className="mb-3">
        <textarea
            className={`form-control ${formData.message && formData.message.length > 2000 ? 'is-invalid' : ''}`}
            rows="5"
            placeholder="Your message*"
            name='message'
            value={formData.message}
            onChange={handleChange}
            required
            maxLength="2002"
            title="Message should not exceed 2000 characters."
        />
        {formData.message && formData.message.length > 2000 && (
            <div className="invalid-feedback">
                Message must not exceed 2000 characters.
            </div>
        )}
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
