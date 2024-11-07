import React from 'react';
import '../App.css'; // assuming you have external styles

const BannerSection = ({ title, image, updatePopupTitle, buttontext, description }) => {
    return (
        <section className="banner-section">
            <img src={image} alt="Background" className="banner-image" />
            <div className="wrapper">
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-md-8 col-lg-8 banner-content">
                            <h1>
                                {title}
                                {/* {title.split('\\n').map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))} */}
                            </h1>
                            <p>{description}</p>
                            <button className="cta-button" data-bs-toggle='modal' data-bs-target='#popupForm' onClick={() => updatePopupTitle('Basic Package - $199')}>{buttontext}</button>
                        </div>
                    </div>
                </div>
                {/* <div className="banner-images">
                    Add banner images if needed
                    <img src={image} alt="Extra Image 1" className="banner-image" />
                    <img src={image} alt="Extra Image 2" className="banner-image" />
                </div> */}
            </div>
        </section>
    );
};

export default BannerSection;
