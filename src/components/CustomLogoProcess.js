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
            heading: "Brainstorming",
            text: "Tell us about your brand's mission, values, and target audience. Once we have a solid understanding, we'll start sketching initial ideas and concepts that reflect our conversations. We will work on competitor analysis and prepare to outshine your logo in the industry. ",
        },
        {
            imgSrc: Frame21,
            number: "02",
            heading: "Get Custom Designs",
            text: "We'll turn rough sketches into digital designs, experimenting with colors, fonts, and shapes. After creating a few options, we'll review them together, make adjustments, and fine-tune the design until the desired results are achieved. ",
        },
        {
            imgSrc: Frame22,
            number: "03",
            heading: "Wrap-Up And Launch",
            text: "We’ll make any last adjustments to the design and prepare it for use. We’ll create different file formats so your logo looks great everywhere—on websites, business cards, or signs. Then, we’ll share the finished logo with you including all necessary files and guidance for its implementation.",
        },
    ];

    return (
        <div>
            <section className="custom-logo-process">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                        
                            <h2>Logo Design<br />Made Easy<br />Our Framework</h2>
                        </div>
                        <div className="col-md-6">
                            <p style={{ textAlign: "justify" }}>
                            We know the hustle behind your brand, let’s not make it more complicated for you. Clients fall for a simple and easy process and we deliver just that. Introducing our three-part design strategy: 
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
