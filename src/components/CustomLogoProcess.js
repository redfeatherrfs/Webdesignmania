import React from 'react';
import '../LogoDesign.css'; // Import the CSS file
import Frame20 from '../images/Frame 20.png';
import Frame21 from '../images/Frame 21.png';
import Frame22 from '../images/Frame 22.png';

const CustomLogoProcess = () => {
    const steps = [
        {
            imgSrc: Frame20,
            number: "01",
            heading: "Discovery and Research",
            text: "First up, we dive into learning all about your brand, audience, and competitors. This helps us get a feel for what your logo should say and how it should stand out. We’ll brainstorm, survey, and check out what others in your space are doing.",
        },
        {
            imgSrc: Frame21,
            number: "02",
            heading: "Concept Refinement",
            text: "We begin by sketching ideas and exploring different styles through rough drafts and mood boards. Once the best concepts emerge, we refine them by finalizing colors, typography, and ensuring the logo works across all formats. Your feedback guides the final tweaks.",
        },
        {
            imgSrc: Frame22,
            number: "03",
            heading: "Finalization and Delivery",
            text: "Finally, we prepare your logo for action. We create various formats for different uses and make sure they look great everywhere. Plus, we might put together a style guide to keep everything consistent.",
        },
    ];

    return (
        <div>
            <section className="custom-logo-process">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2>Simple and Fast<br />Customizable Logo<br />Design Process</h2>
                        </div>
                        <div className="col-md-6">
                            <p style={{ textAlign: "justify" }}>
                                We understand the rush to launch your business startup, and that’s why customizable logos make sense. 
                                Getting a professional logo design from our advance studio isn’t hard, just follow these steps.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-5">
                <div className="row">
                    {steps.map((step, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                            <div className="box">
                                <img src={step.imgSrc} className="box-image" alt={`Step ${step.number}`} />
                                <div className="box-content">
                                    <span className="box-heading-number">{step.number}</span>
                                    <h3 className="box-heading" style={{ color: "white" }}>{step.heading}</h3>
                                    <p className="box-text">{step.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomLogoProcess;
