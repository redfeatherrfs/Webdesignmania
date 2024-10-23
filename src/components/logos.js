import React from 'react';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import logo4 from '../images/logo4.png';
import logo5 from '../images/logo5.png';
import logo6 from '../images/trustpilot.png';

const LogoSection = () => {
  return (
    <section className="logo-section">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-6 col-md-2 logo-wrapper">
        <img src={logo1} alt="Kate Spade Logo"/>
      </div>
      <div className="col-6 col-md-2 logo-wrapper">
        <img src={logo2} alt="Aeropostale Logo"/>
      </div>
      <div className="col-6 col-md-2 logo-wrapper">
        <img src={logo3} alt="Cole Haan Logo"/>
      </div>
      <div className="col-6 col-md-2 logo-wrapper">
      <img src={logo4} alt="Pulse Logo" />  
      </div>
      <div className="col-6 col-md-2 logo-wrapper">
        <img src={logo5} alt="Faster Logo"/>
      </div>
      <div className="col-6 col-md-2 logo-wrapper">
        <img src={logo6} alt="Isuzu Logo"/>
      </div>
    </div>
  </div>
</section>
  );
};

export default LogoSection;
