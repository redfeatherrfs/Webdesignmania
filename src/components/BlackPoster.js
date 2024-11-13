import React from 'react';
import blackImage from '../images/Cover3-01.jpg';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css';

const BlackPoster = () => {
    return (
        <div className="unique-container-fluid text-center">
            <img src={blackImage} alt="Full Width Black Friday Poster" className="unique-full-width-image" />
            
            {/* Button centered below the image */}
            <Link to="/black-friday">
                <button className="unique-button mt-3">Explore Now!</button>
            </Link>
        </div>
    );
};

export default BlackPoster;
