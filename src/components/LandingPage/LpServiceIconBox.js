import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../LandingPage.css'; // Ensure the path is correct
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import Swiper components
// import 'swiper/swiper-bundle.min.css'; // Import Swiper styles

const LpServiceIconBox = ({ backgroundColor, servicesTitle, message, iconBoxes }) => {
    return (
        <section className="lp-service-icon-box" style={{ backgroundColor }}>
            <div className="container">
                {/* First Row */}
                <div className="row text-center">
                    <div className="col-12">
                        <h2>{servicesTitle}</h2>
                        <p>{message}</p>
                    </div>
                </div>

                {/* Second Row with Swiper for Icon Boxes */}
                <div className="row">
               
    <div className="col-12">
        <Swiper
            modules={[Navigation, Autoplay]} // Include Navigation and Autoplay modules
            navigation // Enable navigation
            autoplay={{ delay: 3000 }} // Autoplay settings (optional)
            spaceBetween={30} // Space between slides
            slidesPerView={3} // Default to show three slides
            breakpoints={{
                // Responsive breakpoints
                320: {
                    slidesPerView: 1, // 1 slide on very small screens (mobile)
                },
                576: {
                    slidesPerView: 1.5, // 1.5 slides on small screens
                },
                768: {
                    slidesPerView: 2, // 2 slides on medium screens (tablets)
                },
                992: {
                    slidesPerView: 2.5, // 2.5 slides on large tablets
                },
                1200: {
                    slidesPerView: 3, // 3 slides on laptops and desktops
                },
            }}
        >
            {iconBoxes.map((box, index) => (
                <SwiperSlide key={index}>
                    <div className="lp-icon-box">
                        <img src={box.image} alt={box.heading} className="lp-icon-image" />
                        <h4>{box.heading}</h4>
                        <p>{box.text}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
   
</div>

            </div>
        </section>
    );
};

export default LpServiceIconBox;
