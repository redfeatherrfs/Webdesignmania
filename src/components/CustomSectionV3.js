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
                    <h2>Web Design Mania - You Are Making The Right Choice
                    </h2>
                    <p style={{ textAlign: 'justify' }}>
                    Having the right partner in your business makes all the difference. Whether you have a clear idea of what you want or need help brainstorming, we're here to support you every step of the way. We aim to make the design process enjoyable and stress-free. Our approachable designers and developers await to hear your creative side!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CustomSectionV3;
