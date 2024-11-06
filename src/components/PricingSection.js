// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { Tabs, Tab, Container, Row, Col } from 'react-bootstrap';
import '../PricingSection.css'; // Import the CSS file



const PricingSection = ({ packages }) => {
    // Form state to capture user input
    const [formData, setFormData] = useState({
        fullName: '',
        contactNumber: '',
        emailAddress: '',
        services: '',
    });

    // State to manage the price
    const [price, setPrice] = useState('$10'); // Default price

    // Function to fetch user's location and set price
    const fetchLocationAndSetPrice = async () => {
        try {
            const response = await axios.get('https://ipapi.co/json/');
            const { country } = response.data;

            if (country === 'GB') {
                setPrice('£10'); // Set price to £10 if from UK
            } else {
                setPrice('$10'); // Set price to $10 for everywhere else
            }
        } catch (error) {
            console.error('Error fetching location:', error);
        }
    };

    useEffect(() => {
        fetchLocationAndSetPrice(); // Fetch location on component mount
    }, []);

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
        <section className="pricing-section text-center py-5">
            <Container>
                <h2 className="mb-4">Pocket-Friendly Pricing Solutions </h2>
                {/* <h3 className="mt-3">Price: {price}</h3> Display price */}
                {/* React Bootstrap Tabs with Centered and No Underline */}
                <Tabs
                    defaultActiveKey={packages.find(p => p?.default)?.category}
                    id="pricing-tabs"
                    className="mb-3 justify-content-center" // Center the tabs
                    style={{ borderBottom: 'none' }} // Remove the underline
                >
                    {packages.map((pkg, i) => (
                        <Tab eventKey={pkg.category} title={pkg.category} key={i}>
                            <Row className="justify-content-center">
                                {/* Display items in rows of 3 */}
                                {pkg.items.map((item, index) => (
                                    <Col key={index} lg={4} md={6} sm={12} className="mb-3"> {/* Changed lg={3} to lg={4} */}
                                        <div className="package">
                                            <div className="package-header">
                                                <div className='d-flex justify-content-between align-items-center mb-3'>
                                                    <h5 className='mb-0'>{item.title}</h5>
                                                    {item?.mostPopular && (
                                                        <span className="badge rounded-pill most-popular">Most Popular</span>
                                                    )}

                                                </div>
                                                <h6>{item.subtitle}</h6>

                                                {/* Price section */}
                                                <div className="price">
                                                    <h2>{item.price}</h2>
                                                    <div>
                                                        <strike>{item.originalPrice}</strike> {/* Ensure originalPrice is used */}
                                                        {/* <span> Only</span> */}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Scrollable Div for Package Details */}
                                            <div className="scrollable-content">
                                                <ul className="package-list">
                                                    {item.features.map((feature, index) => (
                                                        <li key={index}>{feature}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Button */}
                                            <a href="#" className="package-btn">START PROJECT</a>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Tab>
                    ))}
                </Tabs>
            </Container>
        </section>
    );
};

export default PricingSection;
