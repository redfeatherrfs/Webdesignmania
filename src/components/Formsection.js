import React, { useState } from 'react';

const GetStartedSection = () => {
  // Form state to capture user input
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    emailAddress: '',
    services: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to backend or show a message
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

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
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-md-6 col-lg-3">
                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    placeholder="Full Name*"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 col-lg-3">
                  <input
                    type="text"
                    className="form-control"
                    name="contactNumber"
                    placeholder="Contact Number*"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 col-lg-3">
                  <input
                    type="email"
                    className="form-control"
                    name="emailAddress"
                    placeholder="Email Address*"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 col-lg-3">
                  <input
                    type="text"
                    className="form-control"
                    name="services"
                    placeholder="Select Services*"
                    value={formData.services}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="text-center mt-4">
                <button type="submit" className="btn-primary btn-lg">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
