import React from 'react';
import '../../ImageRightbanner.css';

const ImageRightBanner = ({ heading, subHeading, description, imageSrc, imageHeight, imageWidth, objectfit, borderRadius, reverseOrder, updatePopupTitle }) => {
    return (
        <section className="image-right-banner">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Column: Text or Image based on reverseOrder */}
                    <div className={`col-12 col-md-6 mb-4 mb-md-0 ${reverseOrder ? 'order-md-2' : ''}`}>
                        <h2 className="sub-heading">{subHeading}</h2>
                        <h2 className="about-heading">{heading}</h2>
                        <p className="design-process-description">{description}</p>
                        <div>
                            <button className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#popupForm" onClick={() => updatePopupTitle('Custom Website Starter Package - £199')}>Get Started</button>
                        </div>
                    </div>

                    {/* Right Column: Image or Text based on reverseOrder */}
                    <div className={`col-12 col-md-6 text-center ${reverseOrder ? 'order-md-1' : ''}`} style={{ minHeight: imageHeight }}>
                        <img
                            src={imageSrc}
                            alt="Ghostwriting"
                            className="img-fluid img-animate"
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
