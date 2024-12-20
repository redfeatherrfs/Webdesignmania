import { FaPhone, FaComment } from 'react-icons/fa';
import '../../LandingPage.css';


const TopHead = ({ updatePopupTitle }) => {
    const title = "Get Free Consultancy"

    return (
        <div className="top-head">
            <div className="container">
                <div className="row">
                    <div className="top-left col-md-7">
                        <h5>Limited Time Offer - Activate Your 70% off Coupon!
                            <button
                                title={title}
                                className="avail-discount-btn custom-btn common-popup mb-3 mb-md-0"
                                data-bs-toggle="modal" data-bs-target="#popupForm"
                                onClick={() => updatePopupTitle(title)}
                            >
                                Get free consultancy
                            </button>
                        </h5>
                    </div>
                    <div className="top-right col-md-5">
                        <ul style={{ listStyleType: 'none', marginTop: '14px', textAlign: 'center' }}>
                            <li style={{ display: 'inline-block', marginRight: '20px' }}>
                                <a
                                    className="toll_icon"
                                    href="tel:+02045112009"
                                    style={{ color: 'white', display: 'flex', alignItems: 'center' }}
                                >
                                    <FaPhone style={{ marginRight: '8px' }} />
                                    0204 511 2009
                                </a>
                            </li>
                            <li style={{ display: 'inline-block' }}>
                                <a
                                    href="https://wa.me/+447380100492"
                                    className="chat_icon chat"
                                    style={{ color: 'white', display: 'flex', alignItems: 'center' }}
                                >
                                    <FaComment style={{ marginRight: '8px' }} />
                                    Live Chat with Expert
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHead;


