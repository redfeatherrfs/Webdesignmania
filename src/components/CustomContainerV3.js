import React from 'react';
import '../LogoDesign.css'; // Import custom CSS styles
import customimages1 from '../images/Mask group55.png';



const CustomContainerV3 = () => {
    return (
        <div className="container custom-container-margin-v3">
            <div className="row align-items-center">
                <div className="col-lg-6 custom-text-section-v3">
                    <h2>Same Premium Logos, Now Faster!</h2>
                    <p>We have delivered top-notch designs to thousands of clients. With our free logo services,
                        get high-quality, customizable logos in minutes straight from our expert designers!
                    </p>
                    <p>We know you are eager to launch your business, so our simple and speedy customizable
                        logo design process is here to help. Below are a few simple steps we follow to produce
                        a professional logo worthy of your brand in no time at all.
                    </p>
                    <div className="custom-bold-text-v3">Let Us Create A Custom Logo With Ease!</div>
                </div>
                <div className="col-lg-6 custom-image-section-v3">
                    <img src= {customimages1} alt="Descriptive Image Text" />
                </div>
            </div>
        </div>
    );
};

export default CustomContainerV3;
