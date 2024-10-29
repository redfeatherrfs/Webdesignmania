import './AllInOneSection.css'
import allInOneBannerImage from '../../images/all-in-one-banner.png'

const AllInOneCombo = () => {
    return (
        <section className="all-in-one-combo-section py-5">
            <div className="container">
                <div className='row align-items-center'>
                    <div className='col-xl-6'>
                        <h3 className="sub-title">Ultimate Value for Start-ups and Businesses</h3>
                        <h1 className='title'>All-In-One Combo</h1>
                        <h1 className='title'>$157</h1>
                        <p>Our all-in-one combo package offers comprehensive solutions: custom logo design, engaging web design, and professional stationery design. Let Creative Logo Design ensure your brand presents a cohesive and standout image across all platforms and materials.</p>

                        <div className='row'>
                            <div className='col-6'>
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

                                <div className='d-flex gap-3 mt-5'>
                                    <button className='btn btn-primary order-btn'>Order Now</button>
                                    <button className='btn btn-outline-primary call-btn'>Call Now</button>
                                </div>
                            </div>
                            <div className='col-6'>
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
