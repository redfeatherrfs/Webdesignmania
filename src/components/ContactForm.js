import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import '../ContactForm.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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
            phoneRegex = /^(\+1)?\d{10,14}$/

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

    const handleSubmit = async e => {
        e.preventDefault()

        // Email & phone validation
        if (!validateEmailAndPhone())
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
                    navigate('/thank-you')
                else
                    Swal.fire('Error', message, 'error')
            })
    }

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
                            <span>497 Sunleigh Rd, Wembley HA0 4LY, UK</span>
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
                                    placeholder="Your full name"
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="E-mail address"
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
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
                                placeholder="Phone Number"
                                name='phone'
                                value={formData.phone}
                                onChange={handleChange}
                                required title="Phone number format: +3334445555"
                            />
                            <div className="invalid-feedback">
                                Invalid Phone number. Example: +19876543210
                            </div>
                        </div>
                        <div className="mb-3">
                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Your message"
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
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
