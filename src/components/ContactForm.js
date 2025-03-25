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
        if (!fieldLengthValidator(formData.message, 2000)) {
            document.querySelector('#contactForm textarea').classList.add('is-invalid')
            isValid = false
        }
        else
            document.querySelector('#contactForm textarea').classList.remove('is-invalid')

        return isValid
    }



    const handleSubmit = async e => {
        e.preventDefault()

        if (!validateEmailAndPhone())
            return

    
        if (!validateFormFields())
            return

        setLoading(true)

        await fetch("https://creativelogodesign.co.uk/lp/php_mailer/index.php", {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then(r => r.json())
            .then(({ success, message }) => {
                setLoading(false)
                if (success)
                    navigate('/thanks.php')
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
                        <a href="tel:+442045112054">0204-511-2054</a>
                    </li>
                    <li>
                        <FaEnvelope className="contact-icon" />
                        <a href="mailto:support@creativelogodesign.co.uk">support@creativelogodesign.co.uk</a>
                    </li>
                    <li>
                        <FaMapMarkerAlt className="contact-icon" />
                        <a href="https://maps.app.goo.gl/hzEmaUB6sqde6kH28" target="_blank">Continental House, 497 Sunleigh Road,
                        Wembley, England, HA0 4LY</a>
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
                className="form-control"
                placeholder="Your full name*"
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                pattern="^[a-zA-Z][a-zA-Z ]{0,55}$"
                maxLength="55"
                title="Please enter a valid name"
            />
               {formData.name && !/^[a-zA-Z][a-zA-Z ]{0,60}$/.test(formData.name) && (
                                    <div className="error-message">Not allowed more than 50 characters and it must be in alphabet</div>
                                )}
        </div>
        <div className="col">
            <input
                type="email"
              className="form-control"
                placeholder="E-mail address*"
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                title="Please enter a valid email address."
            />
          {formData.email && !/^[^\s][^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) && (
                                    <div className="error-message">Please enter a valid email address (no spaces at the beginning).</div>
                                )}
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
            required
            pattern="^\+?\d{10,15}$"
            title="Please enter a valid phone number"
            maxLength="16"
        />
      {formData.phone && !/^\+?\d{10,15}$/.test(formData.phone) && (
                                    <div className="error-message">Please enter a valid phone number (between 10 and 15 digits, with an optional '+').</div>
                                )}
    </div>
    <div className="mb-3">
        <textarea
           className="form-control"
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
                                    <div className="error-message">Message should not exceed 2000 characters.</div>
                                )}
    </div>
    {/* <button type="submit" className="btn btn-submit"  >
        {loading ? (
            <>
                <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                <span role="status">Submitting...</span>
            </>
        ) : 'Submit Now'}
    </button> */}
    
    <button type="submit" className="btn-submit" disabled={loading}>
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
