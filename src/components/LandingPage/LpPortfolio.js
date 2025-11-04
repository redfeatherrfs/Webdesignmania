import React, { useState } from 'react';
import '../../LogoDesign.css';
import Portfolio1 from '../../images/noweco.webp';
import Portfolio2 from '../../images/webportfolioimg8.webp';
import Portfolio3 from '../../images/webportfolioimg4.webp';
import Portfolio4 from '../../images/webportfolioimg12.webp';
import Portfolio5 from '../../images/webportfolioimg101.webp';
import Portfolio6 from '../../images/webportfolioimg111.webp';
import Portfolio7 from '../../images/webportfolioimg6.webp';
import Portfolio8 from '../../images/webportfolioimg7.webp';
import Portfolio9 from '../../images/webportfolioimg9.webp';

const LpPortfolio = ({ updatePopupTitle }) => {
    const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });

    const openLightbox = (image) => {
        setLightbox({ isOpen: true, image });
    };

    const closeLightbox = () => {
        setLightbox({ isOpen: false, image: '' });
    };

    return (
        <div className="logo-designs-portfolio">
            <div className="container">
                <h2 className="portfolio-heading">Transforming Brands With <br />Stunning Websites</h2>

                <div className="row gallery">
                    <hr className="custom-divider-ca" />
                    {[Portfolio1, Portfolio2, Portfolio3, Portfolio4, Portfolio5, Portfolio6, Portfolio7, Portfolio8, Portfolio9].map((img, index) => (
                        <div className="col-lg-4 col-md-6 p-1" key={index}>
                            <img src={img} alt={`Portfolio ${index + 1}`} onClick={() => openLightbox(img)} className="portfolio-img" />
                        </div>
                    ))}
                </div>

                <div className='text-center mt-4'>
                    <button className='btn btn-lg btn-primary rounded-pill' data-bs-toggle="modal" data-bs-target="#popupForm" onClick={() => updatePopupTitle('Website Starter Package - $149')}>Get Started</button>
                </div>
            </div>

            {lightbox.isOpen && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={lightbox.image} alt="Lightbox" className="lightbox-img" />
                    </div>
                </div>
            )}

        </div>
    );
};

export default LpPortfolio;
