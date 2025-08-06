import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import '../../LandingPage.css';

const LpLogoSlider = ({ logos }) => {
    return (
        <section className="lp-logo-slider py-5">
            <div className="container-fluid position-relative">
                {/* Heading */}
                <div className="row text-center mb-4">
                    <div className="col-12">
                        <h2>Award-Winning Web Design Company</h2>
                    </div>
                </div>

                {/* Swiper with Custom Navigation Buttons */}
                <div className="row position-relative align-items-center">
                    {/* Custom Previous Button */}
                    <div className="col-2 text-start">
                        <button
                            className="custom-carousel-control btn btn-primary mb-3 mr-1 custom-carousel-control-prev"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('.swiper-button-prev').click();
                            }}
                        >
                            <i className="fa fa-arrow-left"></i>
                        </button>
                    </div>

                    {/* Swiper for Logos */}
                    <div className="col-8">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            navigation={{
                                prevEl: '.custom-carousel-control-prev',
                                nextEl: '.custom-carousel-control-next',
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={30}
                            slidesPerView={5}
                            breakpoints={{
                                320: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                992: { slidesPerView: 4 },
                                1200: { slidesPerView: 5 },
                            }}
                        >
                            {logos.map((logo, index) => (
                                <SwiperSlide key={index}>
                                    <div className='d-flex h-100 align-items-center justify-content-center'>
                                        <div>
                                            <img src={logo.src} alt={logo.alt} className="logo-image img-fluid" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Custom Next Button */}
                    <div className="col-2 text-end">
                        <button
                            className="custom-carousel-control btn btn-primary mb-3 custom-carousel-control-next"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('.swiper-button-next').click();
                            }}
                        >
                            <i className="fa fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LpLogoSlider;
