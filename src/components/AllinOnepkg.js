import React from 'react';
import { FiChevronRight } from 'react-icons/fi'; // Importing arrow icon from React Icons
import '../AllInOnePkg.css'; // Importing the CSS file

const AllInOnePkg = () => {
  return (
    <section className="allinonepkg container-fluid">
      {/* Heading Section */}
      <div className="row text-center">
        <div className="col-12">
          {/* <p className="pricing-one">ABOUT US</p> */}
          <h2 className="pricing-heading-one">All In One Combo</h2>
        </div>
      </div>
      
      {/* Services Columns with Borders */}
      <div className="row mt-4 justify-content-center">
        {/* First Column */}
        <div className="col-md-2 col-12 service-column">
          <h3>Logo Design Services</h3>
          <ul>
            <li><FiChevronRight /> 5 Custom Logo Design Concepts</li>
            <li><FiChevronRight /> Dedicated Designer Team</li>
            <li><FiChevronRight /> Icon Design</li>
            <li><FiChevronRight /> File Formats (PSD, PDF, AI, JPEG, PNG)</li>
          </ul>
        </div>
        
        {/* Second Column */}
        <div className="col-md-2 col-12 service-column">
          <h3>Stationery Services</h3>
          <ul>
            <li><FiChevronRight /> MS Word Letterhead</li>
            <li><FiChevronRight /> Business Card</li>
            <li><FiChevronRight /> Letterhead</li>
            <li><FiChevronRight /> Envelope, Fax Template</li>
          </ul>
        </div>
        
        {/* Third Column */}
        <div className="col-md-2 col-12 service-column">
          <h3>Social Media Services</h3>
          <ul>
            <li><FiChevronRight /> Facebook Page Design</li>
            <li><FiChevronRight /> Twitter Page Design</li>
            <li><FiChevronRight /> YouTube Page Design</li>
            <li><FiChevronRight /> Instagram Page Design</li>
          </ul>
        </div>
        
        {/* Fourth Column */}
        <div className="col-md-2 col-12 service-column">
          <h3>Website Services</h3>
          <ul>
            <li><FiChevronRight /> 10 Pages Website Design</li>
            <li><FiChevronRight /> CMS / Admin Panel</li>
            <li><FiChevronRight /> Mobile Responsive</li>
            <li><FiChevronRight /> 5 Banner Design</li>
          </ul>
        </div>
        
        {/* Fifth Column */}
        <div className="col-md-2 col-12 service-column">
          <h3>Value Added Services</h3>
          <ul>
            <li><FiChevronRight /> All Final File Formats</li>
            <li><FiChevronRight /> Dedicated Account Manager</li>
            <li><FiChevronRight /> 100% Satisfaction Guarantee</li>
            <li><FiChevronRight /> 100% Money-Back Guarantee</li>
          </ul>
        </div>
      </div>
      
      {/* Button Section */}
      <div className="row text-center mt-4">
        <div className="col-12">
          <button className="package-btn">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default AllInOnePkg;
