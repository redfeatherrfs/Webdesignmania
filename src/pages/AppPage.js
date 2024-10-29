import BannerSection from "../components/banner"
import EngagingUiCarouselSection from "../components/EngagingUiCarouselSection"
import EngagingUISection from "../components/EngagingUiSection"
import GetStartedSection from "../components/Formsection"
import HeaderSection from "../components/Header"
import LogoSection from "../components/logos"
import UniqueUIDesignsSection from "../components/UniqueUIDesigns"
import bannerImage from '../images/app-page-banner.jpg'
import serviceImage1 from '../images/Mask group.png'
import serviceImage2 from '../images/Mask group-1.png'
import serviceImage3 from '../images/Mask group-2.png'
import serviceImage4 from '../images/Mask group-3.png'
import serviceImage5 from '../images/Mask group-4.png'
import FooterSection from "../components/Footer"
import ContactForm from "../components/ContactForm"
import TestimonialSection from "../components/Testimonial"
import PricingSection from "../components/PricingSection"
import AppDevelopmentProcessSection from "../components/AppDevelopmentProcessSection"
import TechnologyStackSection from "../components/TechnologyStackSection"
import IndustriesSection from "../components/IndustriesSection"
import { Helmet } from 'react-helmet-async';

const AppPage = () => {

    const services = [
        { id: '01', title: 'Android App Development', description: 'Our content writing conveys message directly', imgSrc: serviceImage1, alt: 'Android App Development' },
        { id: '02', title: 'iOS App Development', description: 'Our content writing conveys message directly', imgSrc: serviceImage2, alt: 'iOS App Development' },
        { id: '03', title: 'React Native App Development', description: 'Our content writing conveys message directly', imgSrc: serviceImage3, alt: 'React Native App Development' },
        { id: '04', title: 'Flutter App Development', description: 'Our content writing conveys message directly', imgSrc: serviceImage4, alt: 'Flutter App Development' },
        { id: '05', title: 'Swift App Development', description: 'Our content writing conveys message directly', imgSrc: serviceImage5, alt: 'Swift App Development' },
    ];

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
                <title>App Design and Development Services by top App Designers</title>
                <meta name="description" content="Get top-notch app design and development services by leading app designers at Web Design Mania. We create user-friendly, innovative apps to your business needs." />
             </Helmet>     
            <HeaderSection />
            <BannerSection
                title='Mobile Application\nDesign & Development'
                image={bannerImage}
            />
            <LogoSection />
            <GetStartedSection />
            <EngagingUISection />
            <EngagingUiCarouselSection />
            <UniqueUIDesignsSection services={services} page='app' />
            <AppDevelopmentProcessSection />
            {/* <TechnologyStackSection />
            <IndustriesSection /> */}
            <PricingSection packages={packages} />
            <TestimonialSection />
            <ContactForm />
            <FooterSection />
        </>
    )
}

export default AppPage
