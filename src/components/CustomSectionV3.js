import React from 'react';
import '../LogoDesign.css'; // Import the CSS file
import MaskGroupImage from '../images/Mask group (1).png';

const CustomSectionV3 = () => {
    return (
        <div className="container custom-section-v3">
            <div className="row align-items-center justify-content-center text-center">
                <div className="col-lg-6 custom-image-v3" style={{ paddingRight: '50px' }}>
                    <img src={MaskGroupImage} alt="Affordable Logo Design" className="img-fluid" />
                </div>
                <div className="col-lg-6 custom-content-v3">
                    <h2>We Craft Affordable Logo Designs To Boost Creativity</h2>
                    <p style={{ textAlign: 'justify' }}>
                        Allow us to create logo designs with top-notch quality! We offer affordable, professional logos
                        perfect for startups and small businesses. Get the same expert design style without the hefty
                        price tag, thanks to our global team of skilled logo designers.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CustomSectionV3;
