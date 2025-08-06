// Import Swiper styles and necessary modules
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Correct modules path

import 'swiper/css'; // Import core Swiper styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/pagination'; // Pagination styles
import React from 'react';
import { FaStar } from 'react-icons/fa';
import '../Testimonial.css'; // Custom styles

const TestimonialSection = ({ updatePopupTitle }) => {
    const testimonials = [
        {
            quote: "Web Design Mania did an outstanding job designing our app from scratch. They took the time to understand our goals and turned them into a high-quality, functional design that's been a hit with users. Their ability to balance creativity with functionality is unmatched, and their communication was top-notch throughout the project.",
            name: 'Gladys Burgess',
            position: 'Assistant',
        },
        {
            quote: "We saw immediate results after partnering with Web Design Mania for our SEO efforts. They conducted a thorough audit, optimized our website, and implemented a strategic link-building plan. The boost in organic traffic and leads has been impressive. Their team is responsive and truly understands SEO best practices!",
            name: 'Lucy Kaur',
            position: 'Bussiness Owner',
        },
        {
            quote: "I've worked with several web design companies, but none have been as reliable and innovative as Web Design Mania. Our site is performing better than ever! Also thinking about hiring for SEO services!",
            name: 'Harry Bariston',
            position: 'Manager',
        },
        {
            quote: "The design is sleek, and the functionality is spot-on. Our customers now enjoy a seamless shopping experience, and the back-end is easy for us to manage. They also optimized the site for faster loading times, which has improved customer retention. Overall, they delivered a high-quality product that's helped us grow our online business.",
            name: 'Janet Hodgson',
            position: 'Ecommerce Manager',
        },
        {
            quote: "Web Design Mania did an incredible job redesigning our eCommerce website. It's mobile-responsive, user-friendly, and perfectly aligned with our brand identity.",
            name: 'Darren Jordan',
            position: 'Brand Ambasador',
        },
    ];

    return (
        <section className="testimonial-section py-5">
            <div className="container">
                <div className="row">
                    {/* Heading and Text */}
                    <div className="col-12 text-center">
                        <h2>Trusted by Professionals</h2>
                        With a proven track record of success, our skilled logo designers and web developer bring years of experience to every logo design & web project. Let’s build your project with collaborative creativity!

                      
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
                        <button className="package-btn" data-bs-toggle='modal' data-bs-target='#popupForm' onClick={() => updatePopupTitle('Basic Package - $199')}>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
