import React from 'react';


const UniqueUIDesignsSection = ({ services, page, servicetittle, servicedesc }) => {
    // const services = [
    //     { id: '01', title: 'Website Design', description: 'Affordable Web Design & Development Services', imgSrc: "images/Mask group.png", alt: 'Website Design' },
    //     { id: '02', title: 'App Design', description: 'Focused on Creating Engaging and Successful Mobile Apps', imgSrc: 'images/Mask group-1.png', alt: 'App Design' },
    //     { id: '03', title: 'SEO', description: 'Professional Search Engine Optimization (SEO) Services', imgSrc: 'images/Mask group-4.png', alt: 'SEO' },
    //     { id: '04', title: 'Stationery Design', description: 'Professional Business Stationery Design Services', imgSrc: 'images/Mask group-3.png', alt: 'Stationery Design' },
    //     { id: '05', title: 'Logo Design', description: 'Professional Custom Logo Design Services', imgSrc: 'images/Mask group-5.png', alt: 'Logo Design' },
    //     { id: '06', title: 'SMM', description: 'Effective Social Media Marketing Strategies', imgSrc: 'images/Mask group-2.png', alt: 'SMM' },
    // ];

    return (
        <section className="unique-ui-designs-section">
            <div className="container">
                    <h6>{servicedesc}</h6>
                <h2 className='mb-5'>{servicetittle}
                </h2>

                {services.map(service => (
                    <div key={service.id} className=''>
                        {page === 'home' ? (
                            <div className="row align-items-center">
                                <div className="col-1">
                                    <span className="unique-number">{service.id}</span>
                                </div>
                                <div className="col-3">
                                    <h3 className='mb-0'>{service.title}</h3>
                                </div>
                                <div className="col-6 text-muted">
                                    <p>{service.description}</p>
                                </div>
                                <div className="col-2">
                                    <img src={service.imgSrc} className="img-fluid" alt={service.alt} />
                                </div>
                            </div>
                        ) : (page === 'app' ? (
                            <div className="row align-items-center">
                                <div className="col-1">
                                    <span className="unique-number">{service.id}</span>
                                </div>
                                <div className="col-5">
                                    <h3 className='mb-0'>{service.title}</h3>
                                </div>
                                <div className="col-4 text-muted">
                                    <p>{service.description}</p>
                                </div>
                                <div className="col-2">
                                    <img src={service.imgSrc} className="img-fluid" alt={service.alt} />
                                </div>
                            </div>
                        ) : '')}

                        <hr className="section-divider" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UniqueUIDesignsSection;
