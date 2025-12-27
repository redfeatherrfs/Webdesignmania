import './AllInOneSection.css'
import allInOneBannerImage from '../../images/all-in-one-banner.png'
const AllInOneCombo = ({ updatePopupTitle }) => {

     return (
        <section className="all-in-one-combo-section py-5">
            <div className="container">
                <div className='row align-items-center'>
                    <div className='col-xl-6'>
                        <h3 className="sub-title">Ultimate Value for Start-Ups & Businesses

                        </h3>
                        <h1 className='title'>All-In-One Combo</h1>
                        <h1 className='title'>£1199</h1>
                        <p>Our website development company gives you a one-pack offer with endless possibilities. With this package, you have the power to explore multiple aspects in one deal. You can infuse energy with a bespoke logo design, create engaging web designs, and develop professional stationery that impresses with innovative creativity. Experience creative logo design paired with effective marketing solutions that resonate with your audience.</p>

                        <div className='row'>
                            <div className='col-md-6'>
                                <h4>Logo Design</h4>
                                <ul>
                                    <li>Unlimited Logo Design Concepts</li>
                                    <li>Unlimited Revisions</li>
                                    <li>Icon Design</li>
                                    <li>All Final File Formats</li>
                                </ul>

                                <h4>Website Design</h4>
                                <ul>
                                    <li>UNLIMITED Pages Website</li>
                                    <li>Content Management System (CMS)</li>
                                    <li>Complete Deployment</li>
                                    <li>5 Stock Photos + 3 Banner Designs</li>
                                    <li>Any 3 Social Media Platforms</li>
                                    <li>Complete W3C Certified HTML</li>
                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <h4>Stationary Design</h4>
                                <ul>
                                    <li>Business Card, Letterhead, Envelope</li>
                                    <li>MS Word Letterhead</li>
                                </ul>

                                <h4>Value Added Services</h4>
                                <ul>
                                    <li>Dedicated Account Manager</li>
                                    <li>Customizable</li>
                                    <li>Complete Deployment</li>
                                </ul>
                            </div>
                            <div className='col-12'>
                                <div className='d-flex gap-3 mt-3'>
                                    <button className='btn btn-primary order-btn' data-bs-toggle="modal" data-bs-target="#popupForm" onClick={() => updatePopupTitle('Custom Website Starter Package - £199')}>Order Now</button>
                                    <a href="tel:+02045112009"><button className='btn btn-outline-primary call-btn'>Call Now</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-6'>
                        <img src={allInOneBannerImage} alt='All-in-one combo banner' className='banner-img' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllInOneCombo
