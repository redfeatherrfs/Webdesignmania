import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GetStartedSection = () => {
    // Form state to capture user input

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('start');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [service, setService] = useState('');

    const [submitted, setSubmitted] = useState(false); // State to track form submission
    const [loading, setLoading] = useState(false); // Loading state

    const navigate = useNavigate();
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when form submission starts
        const formData = {
            name,
            email,
            phone,
            service,
            subject,
            message
        };

        try {
            const response = await fetch('http://study.loc/PHPMailer/index.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);

                if (data.status === 'success') {
                    console.log('Form submitted successfully');
                    setSubmitted(true);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setSubject('');
                    setMessage('');
                } else {
                    console.error('Error:', data.message);
                }
            } else {
                console.error('Error submitting form');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Set loading to false when form submission completes
        }
    };

    if (submitted) {
        navigate('/thank-you');
    }

    return (
        <section className="get-started-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card p-5 shadow-sm">
                        <div className="text-center mb-4">
                            <small className="text-uppercase">We Take Pride</small>
                            <h2 className="fw-bold">Let's Get Started</h2>
                            <p>Please enter your email and phone number on our contact form and we will be happy to assist you.</p>
                        </div>

                        {submitted ? (

                            <h3>Thank you! Your message has been sent.</h3>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6 col-lg-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="fullName"
                                            placeholder="Full Name*"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <input
                                            type="text"
                                            className="form-control"

                                            placeholder="Contact Number*"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="emailAddress"
                                            placeholder="Email Address*"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-3">
                                        <input
                                            type="text"
                                            className="form-control"

                                            placeholder="Select Services*"
                                            value={service}
                                            onChange={(e) => setService(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    {loading ? (
                                        <button type="button" className="btn btn-primary btn-lg" disabled>
                                            Submitting...
                                        </button>
                                    ) : (
                                        <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                    )}
                                </div>
                            </form>

                        )}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetStartedSection;
