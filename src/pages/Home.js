import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

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

    const packages = [
        {
            default: true,
            category: 'Custom Website',
            items: [
                {
                    title: "LOGO SPECIAL PACKAGE",
                    subtitle: "Professional & Unique Designs!",
                    price: "Let's talk!",
                    features: [
                        "Custom Logo Design",
                        "3 Initial Concepts",
                        "Unlimited Revisions",
                        "4 Original Logo Concepts",
                        "4 Dedicated Logo Designers",
                        "4 Revisions",
                        "With Grey Scale Format",
                        "Free Icon Design",
                        "24 – 48 Hours Turnaround Time",
                        "100% Satisfaction",
                        "100% Ownership Rights",
                        "Money Back Guarantee*",
                        "Dedicated Account Manager"
                    ],
                },
                {
                    title: "Professional",
                    subtitle: "Professional & Unique Designs!",
                    price: "Let's talk!",
                    mostPopular: true,
                    features: [
                        "Custom Logo Design",
                        "3 Initial Concepts",
                        "Unlimited Revisions",
                        "4 Original Logo Concepts",
                        "4 Dedicated Logo Designers",
                        "4 Revisions",
                        "With Grey Scale Format",
                        "Free Icon Design",
                        "24 – 48 Hours Turnaround Time",
                        "100% Satisfaction",
                        "100% Ownership Rights",
                        "Money Back Guarantee*",
                        "Dedicated Account Manager"
                    ],
                },
                {
                    title: "LOGO INFINITE PACKAGE",
                    subtitle: "Professional & Unique Designs!",
                    price: "Let's talk!",
                    features: [
                        "Custom Logo Design",
                        "3 Initial Concepts",
                        "Unlimited Revisions",
                        "4 Original Logo Concepts",
                        "4 Dedicated Logo Designers",
                        "4 Revisions",
                        "With Grey Scale Format",
                        "Free Icon Design",
                        "24 – 48 Hours Turnaround Time",
                        "100% Satisfaction",
                        "100% Ownership Rights",
                        "Money Back Guarantee*",
                        "Dedicated Account Manager"
                    ],
                },
            ],
        },
        {
            category: 'E-commerce Website',
            items: [
                {
                    title: "Basic Website Package",
                    subtitle: "Best Value for Money Guaranteed!",
                    price: "$199",
                    originalPrice: "$665", // This is correct
                    features: ["3 Page Website", "5 Revisions", "2 Stock Images"],
                },
                {
                    title: "Standard Website Package",
                    subtitle: "Perfect for Small Businesses!",
                    price: "$499",
                    originalPrice: "$899", // This is correct
                    features: ["5 Page Website", "10 Revisions", "SEO Ready"],
                },
                {
                    title: "Premium Website Package",
                    subtitle: "Advanced Features Included!",
                    price: "$999",
                    originalPrice: "$1499", // This is correct
                    features: ["10 Page Website", "Unlimited Revisions", "E-commerce Ready"],
                },
            ],
        },
        {
            category: 'Logo Design',
            items: [
                {
                    title: "Basic E-Commerce Package",
                    subtitle: "Get Your Store Online!",
                    price: "$399",
                    originalPrice: "$999", // This is correct
                    features: ["10 Products Setup", "Payment Gateway Integration", "Basic SEO Setup"],
                },
                {
                    title: "Standard E-Commerce Package",
                    subtitle: "Launch Your Business!",
                    price: "$699",
                    originalPrice: "$1299", // This is correct
                    features: ["50 Products Setup", "Payment Gateway Integration", "Advanced SEO Setup"],
                },
                {
                    title: "Premium E-Commerce Package",
                    subtitle: "All-in-One Solution!",
                    price: "$1299",
                    originalPrice: "$1999", // This is correct
                    features: ["Unlimited Products", "Custom Features", "Marketing Tools"],
                },
            ],
        },
        {
            category: 'Stationery Design',
            items: [
                {
                    title: "Stationery Design Package",
                    subtitle: "Complete Branding Solution!",
                    price: "$150",
                    originalPrice: "$450", // This is correct
                    features: ["Business Card Design", "Letterhead Design", "Envelope Design"],
                },
                {
                    title: "Business Branding Package",
                    subtitle: "All Your Needs Covered!",
                    price: "$350",
                    originalPrice: "$750", // This is correct
                    features: ["Business Cards", "Letterhead", "Email Signature"],
                },
                {
                    title: "Custom Stationery Package",
                    subtitle: "Tailored for You!",
                    price: "$250",
                    originalPrice: "$550", // This is correct
                    features: ["Custom Designs", "Unlimited Revisions", "Source Files"],
                },
            ],
        },
        {
            category: 'SEO',
            items: [
                {
                    title: "Stationery Design Package",
                    subtitle: "Complete Branding Solution!",
                    price: "$150",
                    originalPrice: "$450", // This is correct
                    features: ["Business Card Design", "Letterhead Design", "Envelope Design"],
                },
                {
                    title: "Business Branding Package",
                    subtitle: "All Your Needs Covered!",
                    price: "$350",
                    originalPrice: "$750", // This is correct
                    features: ["Business Cards", "Letterhead", "Email Signature"],
                },
                {
                    title: "Custom Stationery Package",
                    subtitle: "Tailored for You!",
                    price: "$250",
                    originalPrice: "$550", // This is correct
                    features: ["Custom Designs", "Unlimited Revisions", "Source Files"],
                },
            ],
        },
        {
            category: 'SMM',
            items: [
                {
                    title: "Stationery Design Package",
                    subtitle: "Complete Branding Solution!",
                    price: "$150",
                    originalPrice: "$450", // This is correct
                    features: ["Business Card Design", "Letterhead Design", "Envelope Design"],
                },
                {
                    title: "Business Branding Package",
                    subtitle: "All Your Needs Covered!",
                    price: "$350",
                    originalPrice: "$750", // This is correct
                    features: ["Business Cards", "Letterhead", "Email Signature"],
                },
                {
                    title: "Custom Stationery Package",
                    subtitle: "Tailored for You!",
                    price: "$250",
                    originalPrice: "$550", // This is correct
                    features: ["Custom Designs", "Unlimited Revisions", "Source Files"],
                },
            ],
        },

    ]

    return (
        <>
            <Helmet>
                <title>Full-Service Digital Marketing Agency - Web Design Mania</title>
                <meta name="description" content="Web Design Mania is a full-service digital marketing agency offering expert web design, SEO, branding, and development services to boost your business worldwide." />
                <link rel="canonical" href="https://webdesignmania.co.uk" />
            </Helmet>           
            
            <HeaderSection />
            <BannerSection title="We create awesome\ntailor-made websites" image={bannerImage} /> {/* Include the BannerSection component here */}
            <LogoSection />
            <GetStartedSection />
            <OurMissionSection />
            <StatisticsSection />
            <OurWork />
            {/* <CustomCarousel/> */}
            <UniqueUIDesignsSection services={services} page='home' />
            <HomeGallery />
            <Pricing packages={packages} />
            <AllInOnePkgs />

            <TestimonialSection />
            <ContactForm />

            <FooterSection />


            {/* <div>
                <h1>Home Page</h1>
                <p>Welcome to our website!</p>
                <Link to="/about">Go to About Us</Link>
            </div> */}
        </>
    );
};

export default Home;
