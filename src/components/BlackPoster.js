import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css';

const BlackPoster = () => {
    return (
        <div className="container-fluid black-friday-banner">
          <div className="black-friday-banner-content">
            <h6 className="text-uppercase">End of Seasons</h6>
            <h1 className="display-4 font-weight-bold">BLACK FRIDAY</h1>
            <Link className="btn black-friday-banner-explore-btn" to='/black-friday'>Explore Now!</Link>
          </div>
        </div>
      );
    }

export default BlackPoster;
