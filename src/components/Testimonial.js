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
            quote: "The level of care and creativity they put into our project was unmatched. We're thrilled with the outcome! The sales agent was so polite and professional.",
            name: 'Duncan Gilbert',
            position: 'Assistant',
        },
        {
            quote: "We chose Web Design Mania for our eCommerce redesign, and it was the best decision we made. Their team was extremely professional, guiding us through every step of the design process. The end result is a stunning website that has improved our user engagement and boosted our online sales. The site is responsive, easy to navigate, and optimized for all devices. Web Design Mania truly understands how to create a high-converting eCommerce platform!",
            name: 'Charles Parks',
        },
        {
            quote: "Web Design Mania transformed our outdated website into a sleek, modern design. The user experience has greatly improved. Mr. Adil and the team delivered a stunning site that exceeded our expectations in both design and functionality.",
            name: 'Rodney Grant',
            position: 'Bussiness Owner',
        },
        {
            quote: "We needed a fully functional e-commerce platform, and Web Design Mania delivered a flawless experience for both us and our customers. The entire process was smooth, and their communication, especially from Mr. Adil, was clear and consistent throughout.",
            name: 'Brandon',
        },
        {
            quote: "We were blown away by the design concepts Web Design Mania brought to the table. Our site looks fantastic and works seamlessly.",
            name: 'Cynthia Burns',
            position: 'Manager',
        },
        {
            quote: "Working with Web Design Mania was a great decision. Their team delivered a high-quality site that is both visually appealing and functional.",
            name: 'Alan Harvey',
        },
        {
            quote: "Web Design Mania built a site that truly reflects our brand. The functionality and design are perfect for our needs. Thank you for everything from start to end.",
            name: 'Lewis Watkins',
            position: 'Ecommerce Manager',
        },
        {
            quote: "We couldn't be more pleased with the app design provided by Web Design Mania. The interface is intuitive, the design is clean and modern, and the user experience has been dramatically improved. Adil and the team were professional, easy to work with, and consistently delivered on every milestone. Our app now stands out in a competitive market!",
            name: 'R. Simmons',
        },
    ];

    return (
        <section className="testimonial-section py-5">
            <div className="container">
                <div className="row">
                    {/* Heading and Text */}
                    <div className="col-12 text-center">
                        <h2>Valued by Experts</h2>
                        Let's weave a tapestry of innovation and imagination that dazzles. Ready to break boundaries? Let's do this together!


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
                                    {testimonial.position && (
                                        <p className="position">{testimonial.position}</p>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* <div className="text-center">
                        <button className="package-btn" data-bs-toggle='modal' data-bs-target='#popupForm' onClick={() => updatePopupTitle('Basic Package - £199')}>Get Started</button>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
