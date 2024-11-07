import React, { useState } from 'react';
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
import PopupForm from '../components/common/PopupForm';




const Home = () => {
    const [title, setTitle] = useState('')

    const handleTitleChange = newTitle => setTitle(newTitle)

    const services = [
        { id: '01', title: 'Website Design', description: 'Craft a virtual home for your brand that captivates and engages users.', imgSrc: serviceImage1, alt: 'Website Design' },
        { id: '02', title: 'App Design', description: 'Focused on Creating Engaging and Successful Mobile Apps', imgSrc: serviceImage2, alt: 'App Design' },
        { id: '03', title: 'SEO', description: 'Turn your website into a traffic magnet and get your ticket to grow your business.', imgSrc: serviceImage3, alt: 'SEO' },
        { id: '04', title: 'Stationery Design', description: 'Turn your everyday material into an artful extension of your brands personality.', imgSrc: serviceImage4, alt: 'Stationery Design' },
        { id: '05', title: 'Logo Design', description: 'Professional Custom Logo Design Services', imgSrc: serviceImage5, alt: 'Logo Design' },
        { id: '06', title: 'SMM', description: 'Turn social platforms into powerful tools that spark conversations and drive results.', imgSrc: serviceImage6, alt: 'SMM' },
    ];

    // const packages = [
    //     {
    //         default: true,
    //         category: 'Custom Website',
    //         items: [
    //             {
    //                 title: "LOGO SPECIAL PACKAGE",
    //                 subtitle: "Professional & Unique Designs!",
    //                 price: "Let's talk!",
    //                 features: [
    //                     "Custom Logo Design",
    //                     "3 Initial Concepts",
    //                     "Unlimited Revisions",
    //                     "4 Original Logo Concepts",
    //                     "4 Dedicated Logo Designers",
    //                     "4 Revisions",
    //                     "With Grey Scale Format",
    //                     "Free Icon Design",
    //                     "24 – 48 Hours Turnaround Time",
    //                     "100% Satisfaction",
    //                     "100% Ownership Rights",
    //                     "Money Back Guarantee*",
    //                     "Dedicated Account Manager"
    //                 ],
    //             },
    //             {
    //                 title: "Professional",
    //                 subtitle: "Professional & Unique Designs!",
    //                 price: "Let's talk!",
    //                 mostPopular: true,
    //                 features: [
    //                     "Custom Logo Design",
    //                     "3 Initial Concepts",
    //                     "Unlimited Revisions",
    //                     "4 Original Logo Concepts",
    //                     "4 Dedicated Logo Designers",
    //                     "4 Revisions",
    //                     "With Grey Scale Format",
    //                     "Free Icon Design",
    //                     "24 – 48 Hours Turnaround Time",
    //                     "100% Satisfaction",
    //                     "100% Ownership Rights",
    //                     "Money Back Guarantee*",
    //                     "Dedicated Account Manager"
    //                 ],
    //             },
    //             {
    //                 title: "LOGO INFINITE PACKAGE",
    //                 subtitle: "Professional & Unique Designs!",
    //                 price: "Let's talk!",
    //                 features: [
    //                     "Custom Logo Design",
    //                     "3 Initial Concepts",
    //                     "Unlimited Revisions",
    //                     "4 Original Logo Concepts",
    //                     "4 Dedicated Logo Designers",
    //                     "4 Revisions",
    //                     "With Grey Scale Format",
    //                     "Free Icon Design",
    //                     "24 – 48 Hours Turnaround Time",
    //                     "100% Satisfaction",
    //                     "100% Ownership Rights",
    //                     "Money Back Guarantee*",
    //                     "Dedicated Account Manager"
    //                 ],
    //             },
    //         ],
    //     },
    //     {
    //         category: 'E-commerce Website',
    //         items: [
    //             {
    //                 title: "Basic Website Package",
    //                 subtitle: "Best Value for Money Guaranteed!",
    //                 price: "$199",
    //                 originalPrice: "$665", // This is correct
    //                 features: ["3 Page Website", "5 Revisions", "2 Stock Images"],
    //             },
    //             {
    //                 title: "Standard Website Package",
    //                 subtitle: "Perfect for Small Businesses!",
    //                 price: "$499",
    //                 originalPrice: "$899", // This is correct
    //                 features: ["5 Page Website", "10 Revisions", "SEO Ready"],
    //             },
    //             {
    //                 title: "Premium Website Package",
    //                 subtitle: "Advanced Features Included!",
    //                 price: "$999",
    //                 originalPrice: "$1499", // This is correct
    //                 features: ["10 Page Website", "Unlimited Revisions", "E-commerce Ready"],
    //             },
    //         ],
    //     },
    //     {
    //         category: 'Logo Design',
    //         items: [
    //             {
    //                 title: "Basic E-Commerce Package",
    //                 subtitle: "Get Your Store Online!",
    //                 price: "$399",
    //                 originalPrice: "$999", // This is correct
    //                 features: ["10 Products Setup", "Payment Gateway Integration", "Basic SEO Setup"],
    //             },
    //             {
    //                 title: "Standard E-Commerce Package",
    //                 subtitle: "Launch Your Business!",
    //                 price: "$699",
    //                 originalPrice: "$1299", // This is correct
    //                 features: ["50 Products Setup", "Payment Gateway Integration", "Advanced SEO Setup"],
    //             },
    //             {
    //                 title: "Premium E-Commerce Package",
    //                 subtitle: "All-in-One Solution!",
    //                 price: "$1299",
    //                 originalPrice: "$1999", // This is correct
    //                 features: ["Unlimited Products", "Custom Features", "Marketing Tools"],
    //             },
    //         ],
    //     },
    //     {
    //         category: 'Stationery Design',
    //         items: [
    //             {
    //                 title: "Stationery Design Package",
    //                 subtitle: "Complete Branding Solution!",
    //                 price: "$150",
    //                 originalPrice: "$450", // This is correct
    //                 features: ["Business Card Design", "Letterhead Design", "Envelope Design"],
    //             },
    //             {
    //                 title: "Business Branding Package",
    //                 subtitle: "All Your Needs Covered!",
    //                 price: "$350",
    //                 originalPrice: "$750", // This is correct
    //                 features: ["Business Cards", "Letterhead", "Email Signature"],
    //             },
    //             {
    //                 title: "Custom Stationery Package",
    //                 subtitle: "Tailored for You!",
    //                 price: "$250",
    //                 originalPrice: "$550", // This is correct
    //                 features: ["Custom Designs", "Unlimited Revisions", "Source Files"],
    //             },
    //         ],
    //     },
    //     {
    //         category: 'SEO',
    //         items: [
    //             {
    //                 title: "Stationery Design Package",
    //                 subtitle: "Complete Branding Solution!",
    //                 price: "$150",
    //                 originalPrice: "$450", // This is correct
    //                 features: ["Business Card Design", "Letterhead Design", "Envelope Design"],
    //             },
    //             {
    //                 title: "Business Branding Package",
    //                 subtitle: "All Your Needs Covered!",
    //                 price: "$350",
    //                 originalPrice: "$750", // This is correct
    //                 features: ["Business Cards", "Letterhead", "Email Signature"],
    //             },
    //             {
    //                 title: "Custom Stationery Package",
    //                 subtitle: "Tailored for You!",
    //                 price: "$250",
    //                 originalPrice: "$550", // This is correct
    //                 features: ["Custom Designs", "Unlimited Revisions", "Source Files"],
    //             },
    //         ],
    //     },
    //     {
    //         category: 'SMM',
    //         items: [
    //             {
    //                 title: "Stationery Design Package",
    //                 subtitle: "Complete Branding Solution!",
    //                 price: "$150",
    //                 originalPrice: "$450", // This is correct
    //                 features: ["Business Card Design", "Letterhead Design", "Envelope Design"],
    //             },
    //             {
    //                 title: "Business Branding Package",
    //                 subtitle: "All Your Needs Covered!",
    //                 price: "$350",
    //                 originalPrice: "$750", // This is correct
    //                 features: ["Business Cards", "Letterhead", "Email Signature"],
    //             },
    //             {
    //                 title: "Custom Stationery Package",
    //                 subtitle: "Tailored for You!",
    //                 price: "$250",
    //                 originalPrice: "$550", // This is correct
    //                 features: ["Custom Designs", "Unlimited Revisions", "Source Files"],
    //             },
    //         ],
    //     },

    // ]
    const packages = [
        {
            default: true,
            category: 'Custom Website Packages',
            items: [
                {
                    title: "Custom Website Starter Package",
                    subtitle: "Professional & Unique Designs!",
                    price: "$199",
                    features: [
                        "Design Up to 3 Pages",
                        "5 Visual Images",
                        "1 jQuery Slider Banner",
                        "2 CTAs & Lead forms",
                        "Facebook Page Design",
                        "X (Twitter) Page Design",
                        "YouTube Page Design",
                        "48 to 72 hours TAT",
                        "Complete Deployment",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee*",
                    ],
                    VAS: [
                        "Cross-Browser Compatibility",
                        "SEO Friendly Coding",
                        "Experienced Account Manager",
                    ],
                },
                {
                    title: "Custom Website Essential Package",
                    subtitle: "Professional & Unique Designs!",
                    price: "$399",
                    mostPopular: true,
                    features: [
                        "Design Up to 6 Pages",
                        "8 Visual Images",
                        "3 jQuery Slider Banner",
                        "4 CTAs & Lead forms",
                        "Mobile Responsive Design",
                        "Facebook Page Design",
                        "X (Twitter) Page Design",
                        "Instagram Page Creation",
                        "YouTube Page Design",
                        "Regular Security Plugins",
                        "XML Sitemap",
                        "URL Submission in SE's",
                        "On-Page SEO",
                        "Google Analytics Tracking",
                        "Google Search Console Tracking",
                        "48 to 72 hours TAT",
                        "Complete Deployment",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee*",
                    ],
                    VAS: [
                        "Cross-Browser Compatibility",
                        "SEO Friendly Coding",
                        "Experienced Account Manager",
                        "One Month On-going Support",
                    ],
                },
                {
                    title: "Custom Website Business Package",
                    subtitle: "Professional & Unique Designs!",
                    price: "Let's talk!",
                    features: [
                        "Design Up to 10 Pages",
                        "Logo Design",
                        "Professional Custom Design",
                        "12 Visual Images",
                        "4 jQuery Slider Banner",
                        "6 CTAs & Lead Capturing Forms",
                        "Mobile Responsive Design",
                        "Facebook Page Design",
                        "X (Twitter) Page Design",
                        "YouTube Page Design",
                        "Instagram Page Creation",
                        "Standard Security Plugins",
                        "XML Sitemap",
                        "Robots File",
                        "URL Submission in SE's",
                        "On-Page SEO",
                        "Google Analytics Tracking",
                        "Google Search Console Tracking",
                        "Google Business Profile Creation",
                        "Complete Deployment",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee*",
                    ],
                    VAS: [
                        "Cross-Browser Compatibility",
                        "SEO Friendly Coding",
                        "Experienced Account Manager",
                        "3 Month On-going Support & Maintenance",
                    ],
                },
            ],
        },
        {
            category: 'E-commerce Website Packages',
            items: [
                {
                    title: "E-commerce Website Starter Package",
                    subtitle: "Best Value for Money Guaranteed!",
                    price: "$1199",
                    features: [
                        "eCommerce Integration",
                        "Design Up to 20 Pages",
                        "Graphic Design",
                        "Logo Design",
                        "Professional Web Design",
                        "Mobile Responsive Design",
                        "Chatbot/Livechat Setup",
                        "Reputation Management Setup",
                        "Newsletter Integration",
                        "Social Media Integration",
                        "Event Calendar Integration",
                        "Schema Optimization",
                        "Image Optimization",
                        "Search Engine Optimized",
                        "Formidable Pro Forms",
                        "Keyword Research",
                        "Market & Competitor Analysis",
                        "Google Analytics Setup",
                        "Submission to Search Engines",
                        "Google Search Console Setup",
                        "Google My Business Optimization",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee*",
                    ],
                    VAS: [
                        "Cross-Browser Compatibility",
                        "SEO Friendly Coding",
                        "Experienced Account Manager",
                        "2 Month On-going Support & Maintenance",
                    ],
                },
                {
                    title: "E-commerce Website Business Package",
                    subtitle: "Perfect for Small Businesses!",
                    price: "Let's talk!",
                    features: [
                        "eCommerce Integration",
                        "Design Up to 100 Pages",
                        "Graphic Design",
                        "Logo Design",
                        "Professional Web Design",
                        "Mobile Responsive Design",
                        "Chatbot/Livechat Setup",
                        "Reputation Management Setup",
                        "Newsletter Integration",
                        "Social Media Integration",
                        "Event Calendar Integration",
                        "Schema Optimization",
                        "Image Optimization",
                        "Search Engine Optimized",
                        "Formidable Pro Forms",
                        "Keyword Research",
                        "Market & Competitor Analysis",
                        "Google Analytics Setup",
                        "Submission to Search Engines",
                        "Google Search Console Setup",
                        "Google My Business Optimization",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee*",
                    ],
                    VAS: [
                        "Cross-Browser Compatibility",
                        "SEO Friendly Coding",
                        "Experienced Account Manager",
                        "3 Month On-going Support & Maintenance",
                    ],
                },
                {
                    title: "E-commerce Website Enterprise Package",
                    subtitle: "Advanced Features Included!",
                    price: "Let's talk!",
                    features: [
                        "eCommerce Integration",
                        "Advanced Order Management",
                        "Design Up to 100 to 1000 Pages",
                        "Product reviews and rating",
                        "Website Content Writing",
                        "Graphic Design",
                        "Logo Design",
                        "Professional Web Design",
                        "Mobile Responsive Design",
                        "Knowledgebase Setup",
                        "Chatbot/Livechat Setup",
                        "Reputation Management Setup",
                        "Newsletter Integration",
                        "Social Media Integration",
                        "Event Calendar Integration",
                        "Schema Optimization",
                        "Image Optimization",
                        "Search Engine Optimized",
                        "Formidable Pro Forms",
                        "Keyword Research",
                        "Market & Competitor Analysis",
                        "Google Analytics Setup",
                        "Submission to Search Engines",
                        "Google Search Console Setup",
                        "Google My Business Optimization",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee*",
                    ],
                    VAS: [
                        "Cross-Browser Compatibility",
                        "SEO Friendly Coding",
                        "Experienced Account Manager",
                        "6 Month On-going Support & Maintenance",
                    ],
                },
            ],
        },
        {
            category: 'Logo Design Packages',
            items: [
                {
                    title: "Basic Logo Package",
                    subtitle: "Get Your Store Online!",
                    price: "$45",
                    features: [
                        "2 Logo Design Concepts",
                        "4 Free Revisions",
                        "Dedicated Project Manager",
                        "24 - 48 Hours Delivery",
                    ],
                    whatYouWillGet: [
                        "1 Finalized Logo",
                        "2 File Formats (PNG, JPG)",
                    ],
                },
                {
                    title: "Professional Logo Package",
                    subtitle: "Get Your Store Online!",
                    price: "Let's Talk",
                    features: [
                        "4 Logo Design Concepts",
                        "8 Free Revisions",
                        "Dedicated Project Manager",
                        "24 - 48 Hours Delivery",
                    ],
                    whatYouWillGet: [
                        "1 Finalized Logo",
                        "3 File Formats (JPG, PNG, PDF)",
                    ],
                },
                {
                    title: "Infinite Logo Package",
                    subtitle: "Get Your Store Online!",
                    price: "Let's Talk",
                    features: [
                        "6 Logo Design Concepts",
                        "Unlimited Revisions",
                        "Dedicated Project Manager",
                        "24 - 48 Hours Delivery",
                    ],
                    whatYouWillGet: [
                        "1 Finalized Logo",
                        "All File Formats (Ai, PSD, EPS, PNG, JPG, PDF)",
                    ],
                },
            ],
        },
        {
            category: 'Stationery Design Packages',
            items: [
                {
                    title: "Stationery Basic Package",
                    subtitle: "Complete Branding Solution!",
                    price: "$129",
                    features: [
                        "Business Card Design",
                        "Letterhead Design",
                        "Envelope Design",
                        "MS Word Letterhead",
                        "Email Signature Design",
                        "Invoice Design",
                        "Facebook Banner Design",
                        "YouTube Banner Design",
                        "Twitter Banner Design",
                        "LinkedIn Banner Design",
                        "Logo Watermark",
                    ],
                },
                {
                    title: "Stationery Startup Package",
                    subtitle: "Complete Branding Solution!",
                    price: "Let's Talk",
                    features: [
                        "Business Card Design",
                        "Letterhead Design",
                        "Envelope Design",
                        "MS Word Letterhead",
                        "Email Signature Design",
                        "Invoice Design",
                        "Facebook Banner Design",
                        "YouTube Banner Design",
                        "Twitter Banner Design",
                        "LinkedIn Banner Design",
                        "Logo Watermark",
                        "Favicon Design",
                        "Polo/T-Shirt Design",
                        "Cap/Hat Design",
                    ],
                },
                {
                    title: "Stationery Infinite Package",
                    subtitle: "Complete Branding Solution!",
                    price: "Let's Talk",
                    features: [
                        "Business Card Design",
                        "Letterhead Design",
                        "Envelope Design",
                        "MS Word Letterhead",
                        "Email Signature Design",
                        "Invoice Design",
                        "Facebook Banner Design",
                        "YouTube Banner Design",
                        "Twitter Banner Design",
                        "LinkedIn Banner Design",
                        "Logo Watermark",
                        "Favicon Design",
                        "Polo/T-Shirt Design",
                        "Cap/Hat Design",
                        "Bag Design",
                        "Signage Design",
                        "Flyer Design",
                    ],
                },
            ],
        },
        {
            category: 'SEO Packages',
            items: [
                {
                    title: "Basic SEO Package",
                    subtitle: "Complete Branding Solution!",
                    price: "$250",
                    features: [
                        "Prior Analysis",
                        "Business Analysis",
                        "Consumer Analysis",
                        "Competitor Analysis",
                        "15 Selected Keywords Targeting",
                        "15 Pages Keyword Targeted",
                        "Web Page Optimization",
                        "Meta Tags Creation",
                        "Keyword Optimization",
                        "Image Optimization",
                        "Inclusion of anchors",
                        "Tracking & Analysis",
                        "Google Analytics Installation",
                        "Google Webmaster Installation",
                        "Call To Action Plan",
                        "Creation of Sitemaps",
                        "Reporting",
                        "Monthly Reporting",
                        "Recommendation",
                        "Email Support",
                        "Phone Support",
                        "Off-Page Optimization",
                        "Social Bookmarking",
                        "Slideshare Marketing",
                        "Forums/FAQ's",
                        "Link Building",
                        "Directory Submission",
                        "Local Business Listings",
                        "100% Ownership Rights",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee *",
                    ],
                },
                {
                    title: "Premium SEO Package",
                    subtitle: "Complete Branding Solution!",
                    price: "Let's Talk",
                    features: [
                        "Prior Analysis",
                        "Business Analysis",
                        "Consumer Analysis",
                        "Competitor Analysis",
                        "30 Selected Keywords Targeting",
                        "30 Pages Keyword Targeted",
                        "Web Page Optimization",
                        "Meta Tags Creation",
                        "Keyword Optimization",
                        "Image Optimization",
                        "Inclusion of anchors",
                        "Tracking & Analysis",
                        "Google Analytics Installation",
                        "Google Webmaster Installation",
                        "Call To Action Plan",
                        "Creation of Sitemaps",
                        "Reporting",
                        "Monthly Reporting",
                        "Recommendation",
                        "Email Support",
                        "Phone Support",
                        "Off-Page Optimization",
                        "Social Bookmarking",
                        "Slideshare Marketing",
                        "Forums/FAQ's",
                        "Link Building",
                        "Directory Submission",
                        "Local Business Listings",
                        "100% Ownership Rights",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee *",
                    ],
                },
                {
                    title: "Platinum SEO Package",
                    subtitle: "Complete Branding Solution!",
                    price: "Let's Talk",
                    features: [
                        "Prior Analysis",
                        "Business Analysis",
                        "Consumer Analysis",
                        "Competitor Analysis",
                        "30 Selected Keywords Targeting",
                        "30 Pages Keyword Targeted",
                        "Web Page Optimization",
                        "Meta Tags Creation",
                        "Keyword Optimization",
                        "Image Optimization",
                        "Inclusion of anchor tags",
                        "Tracking & Analysis",
                        "Google Analytics Installation",
                        "Google Webmaster Installation",
                        "Call To Action Plan",
                        "Creation of Sitemaps",
                        "Reporting",
                        "Monthly Reporting",
                        "Recommendation",
                        "Email Support",
                        "Phone Support",
                        "Off-Page Optimization",
                        "Social Bookmarking",
                        "Slideshare Marketing",
                        "Forums/FAQ's",
                        "Link Building",
                        "Directory Submission",
                        "Local Business Listings",
                        "Blog Content Creation",
                        "Local SEO",
                        "100% Ownership Rights",
                        "100% Satisfaction Guarantee",
                        "100% Unique Design Guarantee",
                        "100% Money Back Guarantee *",
                    ],
                },
            ],
        },
        {
            category: 'SMM Packages',
            items: [
                {
                    title: "Starter Package",
                    subtitle: "Complete Branding Solution!",
                    price: "$199",
                    features: [
                        "3 postings per week (per network) Facebook + Twitter + Instagram",
                        "Content Creation",
                        "Business Page Optimization",
                        "Social Media Strategy (Overview)",
                        "Facebook Likes Campaign",
                        "Monthly Progress report",
                        "Copywriting",
                    ],
                },
                {
                    title: "Scaling Package",
                    subtitle: "Complete Branding Solution!",
                    price: "Let's Talk",
                    features: [
                        "Prior Analysis",
                        "Business Analysis",
                        "Consumer Analysis",
                        "Competitor Analysis",
                        "30 Selected Keywords Targeting",
                        "30 Pages Keyword Targeted",
                        "Web Page Optimization",
                        "Meta Tags Creation",
                        "Keyword Optimization",
                        "Image Optimization",
                        "Inclusion of anchors",
                        "Tracking & Analysis",
                        "Google Places Inclusions",
                        "Google Analytics Installation",
                        "Google Webmaster Installation",
                        "Call To Action Plan",
                        "Creation of Sitemaps",
                        "Reporting",
                        "Monthly Reporting",
                        "Recommendation",
                        "Email Support",
                        "Phone Support",
                        "Off-Page Optimization",
                        "Social Bookmarking",
                        "Slideshare Marketing",
                        "Forums/FAQ's",
                        "Link Building",
                        "Directory Submission",
                        "Local Business Listings",
                    ],
                },
                {
                    title: "Venture Package",
                    subtitle: "Complete Branding Solution!",
                    price: "Let's Talk",
                    features: [
                        "Copywriting and visual designs",
                        "Business Page Optimization",
                        "Ad Campaign Management",
                        "Spam monitoring",
                        "6 postings per week Facebook + Twitter + Instagram + Google+",
                        "Reputation Management",
                        "Social Account Setup",
                        "Content Creation",
                        "Social Media Hearing",
                        "Query and comments reply",
                    ],
                },
            ],
        },
    ];

    return (
        <>
            <Helmet>
                <title>Full-Service Digital Marketing Agency - Web Design Mania</title>
                <meta name="description" content="Web Design Mania is a full-service digital marketing agency offering expert web design, SEO, branding, and development services to boost your business worldwide." />
                <link rel="canonical" href="https://webdesignmania.co.uk" />
            </Helmet>

            <HeaderSection />
            <BannerSection
                title='Your Professional Website Designer That Combines Aesthetics With Performance'
                description="Were you looking for custom web design services tailored to meet a seamless user experience and increase conversions?"
                buttontext="Start a Project"
                image={bannerImage}
                updatePopupTitle={handleTitleChange}
            />


            <LogoSection />
            <GetStartedSection />
            <OurMissionSection />
            <StatisticsSection />
            <OurWork />
            {/* <CustomCarousel/> */}
            <UniqueUIDesignsSection services={services} page='home' />
            <HomeGallery />
            <Pricing packages={packages} updatePopupTitle={handleTitleChange} />
            <AllInOnePkgs updatePopupTitle={handleTitleChange} />

            <TestimonialSection updatePopupTitle={handleTitleChange} />
            <ContactForm />

            <FooterSection />
            <PopupForm title={title} />


            {/* <div>
                <h1>Home Page</h1>
                <p>Welcome to our website!</p>
                <Link to="/about">Go to About Us</Link>
            </div> */}
        </>
    );
};

export default Home;
