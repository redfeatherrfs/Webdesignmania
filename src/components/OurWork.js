import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules'; // Import Navigation and Autoplay modules
import 'swiper/css';
import 'swiper/css/navigation';
import ourworkimg1 from '../images/our-work1.png';
import ourworkimg2 from '../images/our-work2.png';
import ourworkimg3 from '../images/our-work3.png'; // Example import for images
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is loaded
import '../OurWork.css';

const OurWork = () => {
    const projects = [
        { category: 'Fashion', title: 'Kate Spade', image: ourworkimg1, link: '#' },
        { category: 'Food & Beverages', title: 'Dayfresh', image: ourworkimg2, link: '#' },
        { category: 'Vehicles', title: 'Isuzu', image: ourworkimg3, link: '#' },
        { category: 'Technology', title: 'Apple', image: ourworkimg1, link: '#' },
        { category: 'Technology', title: 'Apple', image: ourworkimg2, link: '#' },
        { category: 'Technology', title: 'Apple', image: ourworkimg3, link: '#' },
        { category: 'Technology', title: 'Apple', image: ourworkimg1, link: '#' },
        // Add more projects as needed
    ];

    return (
        <section className="our-work-section py-5">
            <div className="container">
                {/* First Row */}
                <div className="row align-items-center mb-4">
                    <div className="col-md-8 text-md-start text-center">
                        <p className="subheading">Our Work</p>
                        <h2 className="main-heading">UI Designs at Web Design Mania</h2>
                    </div>
                    <div className="col-md-4 text-md-end text-center">

                        <div className="col-6 text-right d-inline-block"> {/* Added d-inline-block for better alignment */}
                            <a
                                className="custom-carousel-control btn btn-primary mb-3 mr-1 custom-carousel-control-prev" // Custom prev button
                                role="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('.swiper-button-prev').click(); // Trigger Swiper navigation
                                }}
                            >
                                <i className="fa fa-arrow-left"></i>
                            </a>
                            <a
                                className="custom-carousel-control btn btn-primary mb-3 custom-carousel-control-next" // Custom next button
                                role="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('.swiper-button-next').click(); // Trigger Swiper navigation
                                }}
                            >
                                <i className="fa fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Second Row (Swiper Cards) */}
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
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <div className="col-12 mb-4">
                                    <a href={project.link} className="card-link text-decoration-none">
                                        <div className="our-work-card">
                                            <img src={project.image} alt={project.title} className="our-work-img img-fluid" />
                                            <div className="category-name mt-2">{project.category}</div>
                                            <div className="card-title mt-1">{project.title}</div>
                                        </div>
                                    </a>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default OurWork;
