import React from 'react';
import '../../AllInOneSectionnew.css';
import bg from "../../images/allinonebg.png";
import image1 from "../../images/websitedesign.png";
import image2 from "../../images/logodesign.png";
import image3 from "../../images/stationarydesign.png";
import image4 from "../../images/valueadded.png";
import saleprice from '../../images/allinprice.png';

// Importing the React Icons dot
import { GoDotFill } from "react-icons/go";

const AllInOne = ({ updatePopupTitle }) => {
  return (
    <section
      className="all-in-one-section"
      style={{
        background: `url(${bg}) no-repeat center center/cover`,
        color: "white",
        padding: "50px 20px"
      }}
    >

      {/* First Row */}
      <div className="container">
        <div className="subtext">Ultimate Value for Start-ups and Businesses</div>
        <div className="all-in-one-heading">
          ALL-IN-ONE COMBO <img className="priceall" src={saleprice} alt="Combo Icon" />
        </div>
      </div>

      {/* Second Row */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="service-card">
              <img src={image1} alt="Web Icon" />
              <h4>WEBSITE DESIGN</h4>
              <ul className="service-list">
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> Unlimited Pages Website</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> Content Management System</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> Complete Deployment</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> 5 Stock Photos + 3 Banner Designs</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> Any 3 Social Media Cover Design</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> Complete W3C Certified HTML</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-card">
              <img src={image2} alt="Logo Icon" />
              <h4>LOGO DESIGN</h4>
              <ul className="service-list">
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> Unlimited Logo Concepts</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> Unlimited Revisions</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> Favicon Design</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> High-Resolution Files</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> All Final File Formats</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-card">
              <img src={image3} alt="Stationary Icon" />
              <h4>STATIONARY DESIGN</h4>
              <ul className="service-list">
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> Business Card Design</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> Letterhead Design</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> Envelope Design</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> MS Word Letterhead Design</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="service-card">
              <img src={image4} alt="Services Icon" />
              <h4>VALUE ADDED SERVICES</h4>
              <ul className="service-list">
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> Dedicated Account Manager</li>
                <li><GoDotFill style={{ color: 'white', marginRight: '10px' }} /> 24/7 Chat Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row */}
      {/* <div className="container mt-4 action-buttons">
        <button className="btn-order">Order Now</button>
        <button className="btn-call">Call Now</button>
      </div> */}

<div className="container">
  <div className="button-container">
      <button className="letsdiscuss"  data-bs-toggle="modal" data-bs-target="#popupForm" onClick={() => updatePopupTitle('ALL-IN-ONE COMBO - £1199')} >Order Now</button>
    <a href="tel:+02045112009" >  <button className="live-chat" >Call Now</button></a>
    </div>
    </div>
    </section>
  );
};

export default AllInOne;
