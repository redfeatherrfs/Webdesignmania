import React from 'react';
import '../App.css'; // assuming you have external styles
import icon1 from '../images/trustpilotnew.png';
import icon2 from '../images/lplogoslider1.png';


const BannerSection = ({ 
    title, 
    image, 
    updatePopupTitle, 
    buttontext, 
    description,  
    icon1Link = "https://www.trustpilot.com/review/webdesignmania.com", 
    icon2Link = "https://www.designrush.com/agency/website-design-development/new-jersey" 
}) => {
    return (
        <section className="banner-section">
            <img src={image} alt="Background" className="banner-image" />
            <div className="wrapper">
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-md-8 col-lg-8 banner-content">
                            <h1>{title}</h1>
                            <p>{description}</p>
                            
                            {/* Images in a single row with links */}
                            <div className="icon-row py-3">
                            <a href={icon2Link} target="_blank" rel="noopener noreferrer">
                                    <img src={icon2} alt="Icon 2" className="icon-image" />
                                </a>
                                <a href={icon1Link} target="_blank" rel="noopener noreferrer">
                                    <img src={icon1} alt="Icon 1" className="icon-image" />
                                </a>
                                
                            </div>

                            <button 
                                className="cta-button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#popupForm" 
                                onClick={() => updatePopupTitle('Basic Package - $149')}
                            >
                                {buttontext}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;
