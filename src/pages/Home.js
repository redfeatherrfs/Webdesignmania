import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to our website!</p>
            <Link to="/about">Go to About Us</Link>
        </div>
    );
};

export default Home;
