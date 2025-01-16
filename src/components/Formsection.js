import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GetStartedSection = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); // Loading state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: '',
    });
    const validateName = (name) => {
        const nameRegex = /^[A-Za-z\s]{1,50}$/; // Only alphabets, max 50 characters
        const nameField = document.querySelector('.get-started-section input[name=name]');
        if (!nameRegex.test(name)) {
            nameField.classList.add('is-invalid');
        } else {
            nameField.classList.remove('is-invalid');
        }
        return nameRegex.test(name);
    };
    const validatePhone = (phone) => {
        const phoneRegex = /^\+?\d{10,15}$/; // 10-15 digits, optional '+'
        const phoneField = document.querySelector('.get-started-section input[name=phone]');
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Validation feedback
        // if (name === 'name') {
        //     const nameField = document.querySelector('.get-started-section input[name=name]');
        //     if (!validateName(value)) {
        //         nameField.classList.add('is-invalid');
        //     } else {
        //         nameField.classList.remove('is-invalid');
        //     }
        // }
        // if (name === 'phone') {
        //     const phoneField = document.querySelector('.get-started-section input[name=phone]');
        //     if (!validatePhone(value)) {
        //         phoneField.classList.add('is-invalid');
        //     } else {
        //         phoneField.classList.remove('is-invalid');
        //     }
        // }
        // if (name === 'email') {
        //     const emailField = document.querySelector('.get-started-section input[name=email]');
        //     if (!validateEmail(value)) {
        //         emailField.classList.add('is-invalid');
        //     } else {
        //         emailField.classList.remove('is-invalid');
        //     }
        // }

    };
    const validateForm = () => {
        const isNameValid = validateName(formData.name);
        const isPhoneValid = validatePhone(formData.phone);
        const isEmailValid = validateEmail(formData.email);

        return isNameValid && isPhoneValid && isEmailValid;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            Swal.fire('Validation Error', 'Please fix the errors in the form.', 'error');
            return;
        }

        setLoading(true);

        await fetch(
            /*'http://localhost:9090'*//*"https://webdesignmania.co.uk/php/index.php"*/ "https://webdesignmania.com/lp/php_mailer/index.php",
            {
                method: 'POST',
                body: JSON.stringify(formData),
            }
        )
            .then((r) => r.json())
            .then(({ success, message }) => {
                setLoading(false);
                if (success) navigate('/thank-you');
                else Swal.fire('Error', message, 'error');
            });
    };

    return (
        <section className="get-started-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card p-5 shadow-sm">
                        <div className="text-center mb-4">
                            <small className="text-uppercase">We Take Pride in What We Do</small>
                            <h2 className="fw-bold">Let's Get Started</h2>
                            <p>
                                Please enter your email and phone number on our contact form and we
                                will be happy to assist you.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} method="POST">
                            <div className="row g-3">
                                <div className="col-md-6 col-lg-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Full Name*"
                                        value={formData.name}
                                        onInput={() => {validateName(formData.name)}}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Name must be alphabets only and less than 50 characters.
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Contact Number*"
                                        name="phone"
                                        value={formData.phone}
                                        onInput={() => {validatePhone(formData.phone)}}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a valid phone number (10-15 digits, optional
                                        '+').
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email Address*"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">Invalid Email address</div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <select
                                        className="form-control"
                                        name="service"
                                        value={formData.service || ''} // Default value
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select Service*</option>
                                        <option value="Logo Design">Logo Design</option>
                                        <option value="Website Design">Website Design</option>
                                        <option value="App Design">App Design</option>
                                        <option value="Stationery">Stationery</option>
                                        <option value="SEO">SEO</option>
                                        <option value="SMM">SMM</option>
                                    </select>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <span
                                                className="spinner-border spinner-border-sm me-2"
                                                aria-hidden="true"
                                            ></span>
                                            <span role="status">Submitting...</span>
                                        </>
                                    ) : (
                                        'Submit'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStartedSection;
