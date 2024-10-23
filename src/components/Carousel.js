import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded
import 'font-awesome/css/font-awesome.min.css'; // Ensure Font Awesome is loaded
import carouselImg from '../images/Mask group-7.png'; // Example import for images

const CustomCarousel = () => {
  return (
    <section className="custom-carousel-section pt-5 pb-5">
      <div className="custom-carousel-container">
        <div className="row">
          {/* Left Side: Title */}
          <div className="col-6">
            <h3 className="custom-carousel-title mb-3">UI Designs At Web Design Mania</h3>
          </div>
          {/* Right Side: Carousel Controls */}
          <div className="col-6 text-right">
            <a
              className="custom-carousel-control btn btn-primary mb-3 mr-1"
              href="#customCarouselIndicators"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left"></i>
            </a>
            <a
              className="custom-carousel-control btn btn-primary mb-3"
              href="#customCarouselIndicators"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right"></i>
            </a>
          </div>
          {/* Carousel */}
          <div className="col-12">
            <div
              id="customCarouselIndicators"
              className="carousel slide custom-carousel-slide"
              data-ride="carousel"
              data-interval="3000"
            >
              <div className="carousel-inner custom-carousel-inner">
                {/* Carousel Item Group 1 */}
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="custom-carousel-card card">
                        <img
                          className="custom-carousel-img img-fluid"
                          alt="Fashion"
                          src={carouselImg}
                        />
                        <div className="custom-carousel-card-body card-body">
                          <h4 className="custom-carousel-card-title card-title">Fashion</h4>
                          <p className="custom-carousel-card-text card-text">Kate Spade</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="custom-carousel-card card">
                        <img
                          className="custom-carousel-img img-fluid"
                          alt="Digital Marketing"
                          src={carouselImg}
                        />
                        <div className="custom-carousel-card-body card-body">
                          <h4 className="custom-carousel-card-title card-title">Digital Marketing Agency</h4>
                          <p className="custom-carousel-card-text card-text">Food & Beverages</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="custom-carousel-card card">
                        <img
                          className="custom-carousel-img img-fluid"
                          alt="Isuzu"
                          src={carouselImg}
                        />
                        <div className="custom-carousel-card-body card-body">
                          <h4 className="custom-carousel-card-title card-title">Isuzu</h4>
                          <p className="custom-carousel-card-text card-text">Vehicles</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Carousel Item Group 2 */}
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="custom-carousel-card card">
                        <img
                          className="custom-carousel-img img-fluid"
                          alt="Box 4"
                          src={carouselImg}
                        />
                        <div className="custom-carousel-card-body card-body">
                          <h4 className="custom-carousel-card-title card-title">Box 4</h4>
                          <p className="custom-carousel-card-text card-text">Details</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="custom-carousel-card card">
                        <img
                          className="custom-carousel-img img-fluid"
                          alt="Box 5"
                          src={carouselImg}
                        />
                        <div className="custom-carousel-card-body card-body">
                          <h4 className="custom-carousel-card-title card-title">Box 5</h4>
                          <p className="custom-carousel-card-text card-text">Details</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="custom-carousel-card card">
                        <img
                          className="custom-carousel-img img-fluid"
                          alt="Box 6"
                          src={carouselImg}
                        />
                        <div className="custom-carousel-card-body card-body">
                          <h4 className="custom-carousel-card-title card-title">Box 6</h4>
                          <p className="custom-carousel-card-text card-text">Details</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Add more carousel items if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomCarousel;
