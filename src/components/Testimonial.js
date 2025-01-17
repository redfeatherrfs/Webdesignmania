// Import Swiper styles and necessary modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import download from '../images/download.png'; // Replace with the actual image path

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { SiTrustpilot } from "react-icons/si";

import '../Testimonial.css'; // Custom styles

const TestimonialSection = ({ updatePopupTitle }) => {
    const testimonials = [
        {
            heading: "We couldn't be more pleased with the...",
            quote: "We couldn't be more pleased with the app design provided by Web Design Mania. The interface is intuitive, the design is clean and modern, and the user experience has been dramatically improved. Adil and the team were professional, easy to work with, and consistently delivered on every milestone. Our app now stands out in a competitive market!",
            name: 'R. Simmons',
            image: download,
        },
        {
            heading: "Web Design Mania did an amazing job...",
            quote: "Web Design Mania did an amazing job with our logo and stationery design. They created a cohesive and elegant brand package that perfectly aligns with our business vision. The designs were delivered quickly, and they exceeded our expectations in both creativity and quality. We've received so many compliments on our new branding!",
            name: 'Victor Watson',
            image: download,
        },
        {
            heading: "We chose Web Design Mania for our...",
            quote: "We chose Web Design Mania for our eCommerce redesign, and it was the best decision we made. Their team was extremely professional, guiding us through every step of the design process. The end result is a stunning website that has improved our user engagement and boosted our online sales. The site is responsive, easy to navigate, and optimized for all devices. Web Design Mania truly understands how to create a high-converting eCommerce platform!",
            name: 'Charles Parks',
            image: download,
        },
        // Add more testimonials with images...
    ];

    return (
        <section className="testimonial-section">
            <div className="container">
                <div className="row">
                    {/* Heading and Text */}
                    <div className="col-12 text-center">
                        <h2>Voices of Satisfaction</h2>
                        <p>See what our clients say about their experiences and the success we’ve<br/> achieved together, inspiring us to deliver excellence every day.</p>
                    </div>
                </div>

                <div className="row py-4">
                    {/* Swiper Testimonials */}
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        pagination={{ clickable: true }} // Enable pagination with dots
                        modules={[Navigation, Pagination, Autoplay]} // Use Pagination module
                        autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay
                        breakpoints={{
                            320: { slidesPerView: 1 },   // Mobile view: 1 slide
                            768: { slidesPerView: 2 },   // Tablet view: 2 slides
                            1024: { slidesPerView: 2 },  // Laptop and desktop: 3 slides
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-card p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        {/* Image */}
                                        {/* <img src={testimonial.image} alt={testimonial.name} className="testimonial-image rounded-circle me-3" /> */}
                                        <div className="testimonial-image rounded-circle me-3 d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', backgroundColor: '#ccc' }}>
  <span className="text-white" style={{ fontSize: '1rem' }}>{testimonial.name.charAt(0)}</span>
</div>

                                        {/* Name and Position */}
                                        <div>
                                            <h5 className="name">{testimonial.name}</h5>
                                            {testimonial.position && <p className="position">{testimonial.position}</p>}
                                        </div>
                                    </div>
                                    {/* Stars */}
                                    <div className="stars mb-3 ">
                                        {[...Array(5)].map((_, i) => (
                                            // <FaStar key={i} color="#FFBB01" />
                                            <SiTrustpilot key={i} color="#00B67A"  />
                                        ))}
                                    </div>
                                    {/* Dynamic Heading and Quote */}
                                    <h4 className="testimonial-heading mb-3">{testimonial.heading}</h4>
                                    <p className="quote ">{testimonial.quote}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;

