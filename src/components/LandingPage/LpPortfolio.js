import React from 'react';
import '../../LogoDesign.css'; // Import the CSS file
import Portfolio1 from '../../images/webportfolioimg0.webp';
import Portfolio2 from '../../images/webportfolioimg1.webp';
import Portfolio3 from '../../images/webportfolioimg12.png';
import Portfolio4 from '../../images/webportfolioimg3.webp';
import Portfolio5 from '../../images/webportfolioimg4.webp';
import Portfolio6 from '../../images/webportfolioimg9.webp';
import Portfolio7 from '../../images/webportfolioimg13.png';
import Portfolio8 from '../../images/webportfolioimg7.webp';
import Portfolio9 from '../../images/webportfolioimg11.png';


const LpPortfolio = () => {
  return (
    <div className="logo-designs-portfolio">
      <div className="container">
        {/* Heading for the Portfolio */}
        <h2 className="portfolio-heading">Transforming Brands With <br/>Stunning Websites</h2>

        <div className="row filter-button-group"></div>
        
        <div className="row gallery">
          <hr className="custom-divider-ca" />
          
          {/* Iconic Logos */}
          <div className="col-lg-4 col-md-6 p-1 filter all iconic">
            <img src= {Portfolio1} alt="Iconic Logo 1" />
          </div>
          <div className="col-lg-4 col-md-6 p-1 filter all illustrative">
            <img src= {Portfolio2} alt="Illustrative Logo 1" />
          </div>
          <div className="col-lg-4 col-md-6 p-1 filter all typography">
            <img src= {Portfolio3} alt="Typography Logo 2" />
          </div>

          {/* Typography Logos */}
          <div className="col-lg-4 col-md-6 p-1 filter all typography">
            <img src= {Portfolio4} alt="Typography Logo 1" />
          </div>
          <div className="col-lg-4 col-md-6 p-1 filter all iconic">
            <img src= {Portfolio5} alt="Iconic Logo 2" />
          </div>
          <div className="col-lg-4 col-md-6 p-1 filter all illustrative">
            <img src= {Portfolio6} alt="Illustrative Logo 1" />
          </div>

          {/* Illustrative Logos */}
          <div className="col-lg-4 col-md-6 p-1 filter all illustrative">
            <img src= {Portfolio7} alt="Illustrative Logo 1" />
          </div>
          <div className="col-lg-4 col-md-6 p-1 filter all typography">
            <img src= {Portfolio8} alt="Typography Logo 2" />
          </div>
          <div className="col-lg-4 col-md-6 p-1 filter all iconic">
            <img src= {Portfolio9} alt="Iconic Logo 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LpPortfolio;
