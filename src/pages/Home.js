import React from 'react';
import { Link } from 'react-router-dom';
import HeaderSection from '../components/Header';
import BannerSection from '../components/banner'; // Adjust the path if needed
import LogoSection from '../components/logos';
import GetStartedSection from '../components/Formsection';
import OurMissionSection from '../components/MissionVision';
import StatisticsSection from '../components/Statistics';
import UniqueUIDesignsSection from '../components/UniqueUIDesigns';
import OurWork from '../components/OurWork';
import HomeGallery from '../components/HomeGallery';
import Pricing from '../components/PricingSection';
import FooterSection from '../components/Footer';
import ContactForm from '../components/ContactForm';
import TestimonialSection from '../components/Testimonial';
import AllInOnePkgs from '../components/AllinOnepkg';
import bannerImage from '../images/div.home_wrap.png'; // Ensure the image path is correct
import serviceImage1 from '../images/Mask group.png'
import serviceImage2 from '../images/Mask group-1.png'
import serviceImage3 from '../images/Mask group-2.png'
import serviceImage4 from '../images/Mask group-3.png'
import serviceImage5 from '../images/Mask group-4.png'
import serviceImage6 from '../images/Mask group-5.png'



 
const Home = () => {
    const services = [
        { id: '01', title: 'Website Design', description: 'Affordable Web Design & Development Services', imgSrc: serviceImage1, alt: 'Website Design' },
        { id: '02', title: 'App Design', description: 'Focused on Creating Engaging and Successful Mobile Apps', imgSrc: serviceImage2, alt: 'App Design' },
        { id: '03', title: 'SEO', description: 'Professional Search Engine Optimization (SEO) Services', imgSrc: serviceImage3, alt: 'SEO' },
        { id: '04', title: 'Stationery Design', description: 'Professional Business Stationery Design Services', imgSrc: serviceImage4, alt: 'Stationery Design' },
        { id: '05', title: 'Logo Design', description: 'Professional Custom Logo Design Services', imgSrc: serviceImage5, alt: 'Logo Design' },
        { id: '06', title: 'SMM', description: 'Effective Social Media Marketing Strategies', imgSrc: serviceImage6, alt: 'SMM' },
    ];
    return (
        <>
            <HeaderSection/>
            <BannerSection title="We create awesome\ntailor-made websites" image={bannerImage} /> {/* Include the BannerSection component here */}
            <LogoSection />
            <GetStartedSection/>
            <OurMissionSection/>
            <StatisticsSection/>
            <OurWork/>
            {/* <CustomCarousel/> */}
            <UniqueUIDesignsSection services={services} page='home'/>
            <HomeGallery/>
            <Pricing/>
            <AllInOnePkgs/>

            <TestimonialSection/>
            <ContactForm/>
            
            <FooterSection/>
            

            {/* <div>
                <h1>Home Page</h1>
                <p>Welcome to our website!</p>
                <Link to="/about">Go to About Us</Link>
            </div> */}
        </>
    );
};

export default Home;
