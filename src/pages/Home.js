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

import bannerImage from '../images/div.home_wrap.png'; // Ensure the image path is correct




 

 
 
 
const Home = () => {
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
            <UniqueUIDesignsSection/>
            <HomeGallery/>
            <Pricing/>

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
