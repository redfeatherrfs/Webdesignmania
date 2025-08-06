import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import Navigation and Autoplay modules
import 'swiper/css';
import 'swiper/css/navigation';
import image1 from '../images/engaging-banner-img-1.png'
import image2 from '../images/engaging-banner-img-2.png'
import image3 from '../images/engaging-banner-img-3.png'
import image4 from '../images/engaging-banner-img-4.png'
import image5 from '../images/engaging-banner-img-5.png'

const EngagingUiCarouselSection = () => {
    return (
        <section className="my-5 py-5 engaging-ui-carousel-section">
            <div className="container">
                <h2 className="sub-heading">App Design</h2>
                <div className="row justify-content-end align-items-start">
                    <div className="col-md-8">
                        <h2 className="about-heading">Take A Peek At Our Portfolio!                         </h2>
                    </div>
                    <div className="col-md-4">
                        <div className="text-end carousel-action-btns">
                            <button
                                className="me-2 " // Custom prev button
                                onClick={() => {
                                    document.querySelector('.swiper-button-prev').click(); // Trigger Swiper navigation
                                }}
                            >
                                <i className="fa fa-long-arrow-left"></i>
                            </button>
                            <button
                                className="" // Custom next button
                                onClick={() => {
                                    document.querySelector('.swiper-button-next').click(); // Trigger Swiper navigation
                                }}
                            >
                                <i className="fa fa-long-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="row position-relative">
                        <Swiper
                            spaceBetween={30}
                            navigation={true} // Enable default navigation
                            autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay settings
                            modules={[Navigation, Autoplay]} // Add Navigation and Autoplay to modules
                            breakpoints={{
                                1200: { slidesPerView: 3 }, // Show 3 slides on large screens
                                992: { slidesPerView: 2 },  // Show 2 slides on medium screens
                                576: { slidesPerView: 1 },  // Show 1 slide on small screens
                            }}
                        >
                            <SwiperSlide>
                                <div className="col-12 mb-4">
                                    <img src={image1} className="our-work-img img-fluid" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-12 mb-4">
                                    <img src={image2} className="our-work-img img-fluid" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-12 mb-4">
                                    <img src={image3} className="our-work-img img-fluid" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-12 mb-4">
                                    <img src={image4} className="our-work-img img-fluid" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="col-12 mb-4">
                                    <img src={image5} className="our-work-img img-fluid" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EngagingUiCarouselSection
