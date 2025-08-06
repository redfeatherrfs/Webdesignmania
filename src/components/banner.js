import React from 'react';
import '../App.css'; // assuming you have external styles

const BannerSection = ({ title, image }) => {
    return (
        <section className="banner-section">
            <img src={image} alt="Background" className="banner-image" />
            <div className="wrapper">
                <div className="container">
                    <div className="row justify-content-start align-items-center">
                        <div className="col-md-8 col-lg-6 banner-content">
                            <h1>
                                {title.split('\\n').map((line, index) => (
                                    <span key={index}>
                                        {line}
                                        <br />
                                    </span>
                                ))}
                            </h1>
                            <p>Welcome to Web Design Mania</p>
                            <a href="#" className="cta-button">Start a project</a>
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
