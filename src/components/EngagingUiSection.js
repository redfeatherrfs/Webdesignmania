import listImage from "../images/list-item.png"
import iphonesImage from "../images/iphones.png"

const EngagingUISection = () => {
    return (
        <section className="my-5 py-5 engaging-ui-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="sub-heading">ABOUT US</h2>
                        <h2 className="about-heading">Creating Engaging & Successful Mobile Apps UI</h2>

                        <div className="mb-5">
                            <div className="d-flex align-items-center mb-3">
                                <img src={listImage} className="me-3" />
                                <div>Increased Engagement</div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <img src={listImage} className="me-3" />
                                <div>Cross-platform Development</div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <img src={listImage} className="me-3" />
                                <div>Native App Development</div>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <img src={listImage} className="me-3" />
                                <div>App Design and UX Optimization</div>
                            </div>
                        </div>

                        <div>
                            <button className="btn btn-custom">
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
