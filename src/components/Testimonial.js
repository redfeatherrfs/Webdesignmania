// Import Swiper styles and necessary modules
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Correct modules path

import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles
import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../Testimonial.css'; // Custom styles

const TestimonialSection = ({ updateTitle }) => {
    const testimonials = [
        {
            quote: "Let's create a symphony of code that'll leave everyone amazed. Dare to be different.",
            name: 'Samuel Wills',
            position: 'Assistant',
        },
        {
            quote: "Let's create a symphony of code that'll leave everyone amazed. Dare to be different.",
            name: 'Samuel Wills',
            position: 'Assistant',
        },
        {
            quote: "Coding with precision and creativity leads to perfection.",
            name: 'Jane Doe',
            position: 'Developer',
        },
        {
            quote: "Coding with precision and creativity leads to perfection.",
            name: 'Jane Doe',
            position: 'Developer',
        },
        {
            quote: "Coding with precision and creativity leads to perfection.",
            name: 'Jane Doe',
            position: 'Developer',
        },
    ];

    return (
        <section className="testimonial-section py-5">
            <div className="container">
                <div className="row">
                    {/* Heading and Text */}
                    <div className="col-12 text-center">
                        <h2>Trusted by Professionals</h2>
                        <p>Let's create a symphony of pixels and code that'll leave everyone amazed. Dare to be different –
                            <br /> let's embark on this wild ride of creativity together!</p>
                    </div>
                </div>

                <div className="row">
                    {/* Swiper Testimonials */}
                    <Swiper
                        spaceBetween={30}
                        loop={true}
                        pagination={{ clickable: true }} // Enable pagination with dots
                        modules={[Navigation, Pagination, Autoplay]} // Use Pagination module
                        autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay
                        breakpoints={{
                            // Set the number of slides based on screen width
                            320: { slidesPerView: 1 },   // Mobile view: 1 slide
                            768: { slidesPerView: 2 },   // Tablet view: 2 slides
                            1024: { slidesPerView: 3 },  // Laptop and desktop: 3 slides
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-card p-4">
                                    <div className="stars mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} color="#FFBB01" />
                                        ))}
                                    </div>
                                    <p className="quote">{testimonial.quote}</p>
                                    <h5 className="name mt-2">{testimonial.name}</h5>
                                    <p className="position">{testimonial.position}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="text-center">
                        <button className="package-btn" data-bs-toggle='modal' data-bs-target='#popupForm' onClick={() => updateTitle('Basic Package - $199')}>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
