import React from 'react';
import '../LogoDesign.css'; // Import custom CSS styles
import customimages1 from '../images/Mask group55.png';



const CustomContainerV3 = ({updatePopupTitle}) => {
    return (
        <div className="container custom-container-margin-v3">
            <div className="row align-items-center">
                <div className="col-lg-6 custom-text-section-v3">
                    <h2>A Powerful Logo Shapes <br/> A Powerful Brand </h2>
                    <p>A well-designed logo is more than just aesthetics—it’s a strategic tool that instantly communicates your brand to your audience. In a world filled with visual noise, a unique and powerful logo is essential to making a lasting impression. 
                    </p>
                    <p>Our collaborative design process allows you to have a hand in shaping the final product. Let’s establish your brand identity together! 

                    </p>
                    <button 
                                className="cta-button" 
                                data-bs-toggle="modal" 
                                data-bs-target="#popupForm" 
                                onClick={() => updatePopupTitle('Basic Package - $149')}
                            >
                               Get Started
                            </button>
                </div>
                <div className="col-lg-6 custom-image-section-v3">
                    <img src= {customimages1} alt="Descriptive Image Text" />
                </div>
            </div>
        </div>
    );
};

export default CustomContainerV3;
