import React, { useState } from 'react';
import '../LogoDesign.css'; // Import the CSS file
import BannerSection from "../components/banner"
import HeaderSection from "../components/Header"
import bannerImage from '../images/LogosPage.webp'
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
import PricingSection from '../components/PricingSection';
import PopupForm from '../components/common/PopupForm';

const LogoDesign = () => {
    const [title, setTitle] = useState('')

    const handleTitleChange = newTitle => setTitle(newTitle)

    const packages = [
        {
            category: 'Website',
            default: true,
            items: [
                {
                    title: "Start-up",
                    subtitle: "For solo entrepreneur",
                    price: "Let's talk!",
                    features: [
                        "1 design project per month",
                        "Basic design consultation",
                        "Limited revisions",
                        "Email support",
                    ],
                },
                {
                    title: "Professional",
                    mostPopular: true,
                    subtitle: "For growing businesses",
                    price: "Let's talk!",
                    features: [
                        "3 design projects per month",
                        "Detailed design consultation",
                        "Unlimited Revisions",
                        "Priority email and chat support",
                        "Access to design resources library",
                    ],
                },
                {
                    title: "Elite",
                    subtitle: "Tailored solutions for startups",
                    price: "Let's talk!",
                    features: [
                        "Customized design solutions",
                        "Dedicated design team",
                        "Unlimited design projects",
                        "24/7 support",
                        "Advanced collaboration tools",
                        "Unlimited revisions",
                    ],
                },
            ],
        },
        {
            category: 'E-commerce',
            items: [
                {
                    title: "Basic E-commerce Package",
                    subtitle: "Best Value for Money Guaranteed!",
                    price: "Let's talk!",
                    features: ["3 Page Website", "5 Revisions", "2 Stock Images"],
                },
                {
                    title: "Standard E-commerce Package",
                    subtitle: "Perfect for Small Businesses!",
                    price: "Let's talk!",
                    features: ["5 Page Website", "10 Revisions", "SEO Ready"],
                },
                {
                    title: "Premium E-commerce Package",
                    subtitle: "Advanced Features Included!",
                    price: "Let's talk!",
                    features: ["10 Page Website", "Unlimited Revisions", "E-commerce Ready"],
                },
            ],
        },
        {
            category: 'Stationery',
            items: [
                {
                    title: "Stationery Design Package",
                    subtitle: "Complete Branding Solution!",
                    price: "Let's Talk",
                    features: ["Business Card Design", "Letterhead Design", "Envelope Design"],
                },
                {
                    title: "Business Branding Package",
                    subtitle: "All Your Needs Covered!",
                    price: "Let's Talk",
                    features: ["Business Cards", "Letterhead", "Email Signature"],
                },
                {
                    title: "Custom Stationery Package",
                    subtitle: "Tailored for You!",
                    price: "Let's Talk",
                    features: ["Custom Designs", "Unlimited Revisions", "Source Files"],
                },
            ],
        },
        {
            category: 'SEO',
            items: [
                {
                    title: "SEO Package",
                    subtitle: "Complete Branding Solution!",
                    price: "Let's Talk",
                    features: ["Business Card Design", "Letterhead Design", "Envelope Design"],
                },
                {
                    title: "SEO Package",
                    subtitle: "All Your Needs Covered!",
                    price: "Let's Talk",
                    features: ["Business Cards", "Letterhead", "Email Signature"],
                },
                {
                    title: "SEO Package",
                    subtitle: "Tailored for You!",
                    price: "Let's Talk",
                    features: ["Custom Designs", "Unlimited Revisions", "Source Files"],
                },
            ],
        },
        {
            category: 'SMM',
            items: [
                {
                    title: "SMM Package",
                    subtitle: "Complete Branding Solution!",
                    price: "Let's Talk",
                    features: ["Business Card Design", "Letterhead Design", "Envelope Design"],
                },
                {
                    title: "SMM Package",
                    subtitle: "All Your Needs Covered!",
                    price: "Let's Talk",
                    features: ["Business Cards", "Letterhead", "Email Signature"],
                },
                {
                    title: "SMM Package",
                    subtitle: "Tailored for You!",
                    price: "Let's Talk",
                    features: ["Custom Designs", "Unlimited Revisions", "Source Files"],
                },
            ],
        },

    ]


    return (
        <>
  <Helmet>
    <title>Professional Logo Design Company in USA: Hire Logo Designer</title>
    <meta name="description" content="Our professional logo design company in the USA creates logos that capture hearts and drive results. Get custom logo design services at affordable prices." />
    <link rel="canonical" href="https://webdesignmania.com/professional-logo-design-services" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Professional Logo Design Company in USA: Hire Logo Designer" />
    <meta property="og:description" content="Our professional logo design company in the USA creates logos that capture hearts and drive results. Get custom logo design services at affordable prices." />
    <meta property="og:url" content="https://webdesignmania.com/professional-logo-design-services" />
    <meta property="og:site_name" content="WebDesignMania" />
    <meta property="article:publisher" content="https://www.facebook.com/webdesignmaniaUS" />
    <meta property="article:modified_time" content="2024-08-22T06:49:19+00:00" />
  </Helmet>   
         <HeaderSection />
         <BannerSection
                title='Precision-Crafted Logos That Speaks Volume'
                description="What if you could capture your brand’s essence into a lasting symbol? Contact our community creative professionals and give your vision a picture. "
                buttonlink='/'
                buttontext="Start a Project"
                image={bannerImage}
                updatePopupTitle={handleTitleChange}
            />
            <LogoSection />
            <GetStartedSection />
            <CustomContainer updatePopupTitle={handleTitleChange} />
            <LogoPortfolio />
            <LogoProcess />
            <CustomSection />
            <PricingSection packages={packages} updatePopupTitle={handleTitleChange} />
            <TestimonialSection updatePopupTitle={handleTitleChange} />

            <ContactForm />
            <FooterSection />
            <PopupForm title={title} />

        </>
    )
}

export default LogoDesign
