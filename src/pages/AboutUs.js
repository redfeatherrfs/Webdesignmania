import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            <p>Learn more about our mission and values.</p>
            <Link to="/">Go to Home</Link>
        </div>
    );
};

export default About;
