import React from 'react';
import '../LogoDesign.css'; // Import the CSS file
import BannerSection from "../components/banner"
import HeaderSection from "../components/Header"
import bannerImage from '../images/app-page-banner.jpg'
import LogoSection from "../components/logos"
import GetStartedSection from '../components/Formsection';
import CustomContainer from '../components/CustomContainerV3';
import LogoPortfolio from '../components/LogoDesignsPortfolio';
import LogoProcess from '../components/CustomLogoProcess';
import CustomSection from '../components/CustomSectionV3';
import FooterSection from '../components/Footer';
import ContactForm from '../components/ContactForm';
import Pricing from '../components/PricingSection';
import TestimonialSection from '../components/Testimonial';
import { Helmet } from 'react-helmet-async';










const LogoDesign = () => {

    return (
        <>
        <Helmet>
            <title>Custom Logo Design Services by Expert Logo Designers</title>
            <meta name="description" content="Get unique branding with custom logo design services by expert designers at Web Design Mania. Stand out with a logo that truly represents your business." />
        </Helmet>     
         <HeaderSection />
            <BannerSection
                title='We create awesome\ntailor-made websites'
                image={bannerImage}
            />
            <LogoSection />
            <GetStartedSection />
            <CustomContainer/>
            <LogoPortfolio/>
            <LogoProcess/>
            <CustomSection/>
            <Pricing/>
            <TestimonialSection/>

            <ContactForm/>
            <FooterSection/>

            
        </>
    )
}

export default LogoDesign
