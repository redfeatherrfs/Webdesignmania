import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const GetStartedSection = () => {
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

        if (!emailRegex.test(formData.email))
            document.querySelector('.get-started-section input[name=email]').classList.add('is-invalid')
        else
            document.querySelector('.get-started-section input[name=email]').classList.remove('is-invalid')

        if (!phoneRegex.test(formData.phone))
            document.querySelector('.get-started-section input[name=phone]').classList.add('is-invalid');
        else
            document.querySelector('.get-started-section input[name=phone]').classList.remove('is-invalid');

        return phoneRegex.test(formData.phone) && emailRegex.test(formData.email)
    }

    const handleSubmit = async e => {
        e.preventDefault()

        // Email & phone validation
        if (!validateEmailAndPhone())
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
        <section className="get-started-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card p-5 shadow-sm">
                        <div className="text-center mb-4">
                            <small className="text-uppercase">We Take Pride in What We Do
                            </small>
                            <h2 className="fw-bold">Let's Get Started</h2>
                            <p>Please enter your email and phone number on our contact form and we will be happy to assist you.</p>
                        </div>
                        <form onSubmit={handleSubmit} method='POST'>
                            <div className="row g-3">
                                <div className="col-md-6 col-lg-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Full Name*"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Contact Number*"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Invalid Phone number. Example: +19876543210
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
                                    <div className="invalid-feedback">
                                        Invalid Email address
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                <select
    className="form-control"
    name="service"
    value={formData.services || "Select Service"} // Default value
    onChange={handleChange}
    required
>
    <option value="" >Select Service*</option>
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
                                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                            <span role="status">Submitting...</span>
                                        </>
                                    ) : 'Submit'}
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
