import listImage from "../images/list-item.png"
import iphonesImage from "../images/iphones.png"

const EngagingUISection = ({updatePopupTitle}) => {
    return (
        <section className="my-5 py-5 engaging-ui-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="sub-heading">App Design</h2>
                        <h2 className="about-heading">Make Your Mobile Apps UI Stand Out In The App Store</h2>

                        <div className="mb-5">
                            <div className="d-flex align-items-center mb-3">
                                <img src={listImage} className="me-3" />
                                <div>Improved UX</div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <img src={listImage} className="me-3" />
                                <div>Higher Conversion Rates</div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <img src={listImage} className="me-3" />
                                <div>Increased User Engagement</div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <img src={listImage} className="me-3" />
                                <div>Reduced Development Costs</div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <img src={listImage} className="me-3" />
                                <div>Positive Reviews and Ratings</div>
                            </div>
                        </div>

                        <div>
                            <button className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#popupForm" onClick={() => updatePopupTitle('Basic Package - £199')}>
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={iphonesImage} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EngagingUISection
