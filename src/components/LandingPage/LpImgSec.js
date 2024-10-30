import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../LandingPage.css'; // Ensure the path is correct

const LpImgSec = ({ backgroundColor, images }) => {
    return (
        <section className="lp-img-sec" style={{ backgroundColor }}>
            <div className="container">
                <div className="row text-center">
                    {images.map((image, index) => (
                        <div className="col-12 col-md-4 mb-4" key={index}>
                            <img src={image.src} alt={image.alt} className="img-fluid" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LpImgSec;
