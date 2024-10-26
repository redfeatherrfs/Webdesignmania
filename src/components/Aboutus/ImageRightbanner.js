import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../ImageRightbanner.css';

const ImageRightBanner = ({ heading, subHeading, description, imageSrc, imageHeight, imageWidth, objectfit, borderRadius }) => {
    return (
        <section className="image-right-banner">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Text */}
                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                        <h2 className="sub-heading">{subHeading}</h2>
                        <h2 className="about-heading">
                            {heading} 
                        </h2>
                        <p className="design-process-description">
                            {description}
                        </p>
                        <div>
                            <button className="btn btn-custom">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Image with Animation */}
                    <div className="col-12 col-md-6 text-center" style={{ minHeight: imageHeight }}>
                        <img
                            src={imageSrc}
                            alt="Ghostwriting"
                            className="img-fluid img-animate"  // Add animation class here
                            style={{
                                objectFit: objectfit,
                                height: imageHeight,
                                width: imageWidth,
                                borderRadius: borderRadius,
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageRightBanner;
