import React from 'react';
import imgicon1 from '../../images/ImageIconBox (1).png';
import imgicon2 from '../../images/ImageIconBox (2).png';
import imgicon3 from '../../images/ImageIconBox (3).png';
import imgicon4 from '../../images/ImageIconBox (4).png';
import imgicon5 from '../../images/ImageIconBox (5).png';
import imgicon6 from '../../images/ImageIconBox (6).png';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../ImageIconBox.css'; // Create this CSS file for unique styling

const ImageIconBox = () => {
    return (
        <section className="imageiconbox-section py-5">
            <div className="container text-center">
                
                {/* First Row - Subheading and Heading */}
                <div className="row mb-5">
                    <div className="col-12">
                        <p className="sub-heading text-muted">OUR SERVICES</p>
                        <h2 className="main-heading">
                            Creatively led.<br /> Results digital agency
                        </h2>
                    </div>
                </div>
                
                {/* Second Row - First Set of Images */}
                <div className="row justify-content-center mb-4">
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <img src={imgicon1} alt="Service 1" className="img-fluid icon-img" />
                    </div>
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <img src={imgicon2} alt="Service 2" className="img-fluid icon-img" />
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={imgicon3} alt="Service 3" className="img-fluid icon-img" />
                    </div>
                </div>
                
                {/* Third Row - Second Set of Images */}
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <img src={imgicon4} alt="Service 4" className="img-fluid icon-img" />
                    </div>
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <img src={imgicon5} alt="Service 5" className="img-fluid icon-img" />
                    </div>
                    <div className="col-12 col-md-4">
                        <img src={imgicon6} alt="Service 6" className="img-fluid icon-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageIconBox;
