import BannerSection from "../components/banner"
import GetStartedSection from "../components/Formsection"
import HeaderSection from "../components/Header"
import LogoSection from "../components/logos"

import bannerImage from '../images/SEO.webp'
import smm2 from '../images/smm2.webp'
import seo3 from '../images/seo3.png'
import seo2 from '../images/seo2.png'

import FooterSection from "../components/Footer"
import ContactForm from "../components/ContactForm"
import TestimonialSection from "../components/Testimonial"
import ImageRightBanner from '../components/Aboutus/ImageRightbanner';
import IconTextBox from "../components/SMM/IconTextBox"
import OurMission from "../components/Aboutus/OurMission"
import SMMProcess from "../components/SMM/SMMProcess"
import PricingSection from "../components/PricingSection"
import { useState } from "react"
import PopupForm from "../components/common/PopupForm"
import { Helmet } from "react-helmet"


const AppPage = () => {
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
    <title>SEO Services for Traffic & Revenue Generation</title>
    <meta name="description" content="Boost leads and sales with affordable search engine optimization services! Web Design Mania helps businesses grow with proven strategies. Get a quote now!" />
    <link rel="canonical" href="https://webdesignmania.com/search-engine-optimization-services" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="SEO Services for Traffic & Revenue Generation" />
    <meta property="og:description" content="Boost leads and sales with affordable search engine optimization services! Web Design Mania helps businesses grow with proven strategies. Get a quote now!" />
    <meta property="og:url" content="https://webdesignmania.com/search-engine-optimization-services" />
    <meta property="og:site_name" content="WebDesignMania" />
    <meta property="article:publisher" content="https://www.facebook.com/webdesignmaniaUS" />
    <meta property="article:modified_time" content="2024-08-20T07:36:14+00:00" />
  </Helmet>
            <HeaderSection />
            <BannerSection
                title='Rank Higher, Reach More People, And Grow Faster'
                description="Ready to boost website traffic with a powerful SEO strategy? You have reached the right destination!"
                updatePopupTitle={handleTitleChange}
                buttontext="Start a Project"
                image={bannerImage}
            />
            <LogoSection />


            <GetStartedSection />

            <div style={{ padding: '100px 0px 0px 0px' }}>
<ImageRightBanner
    subHeading="SEO"
    heading="Unlocking The Power Of Seo For Your Brand's Success"
    description={
        <>
Imagine your business being the go-to choice whenever someone searches for what you offer – that’s the power of SEO! Understanding your audience is SEO! When people can find you easily, they’re more likely to visit your site, learn about your services, and even make a purchase. Make this digital marketing investment today that keeps on giving!
        </>
    }
    imageSrc={smm2}
    objectfit="contain"
    imageHeight="500px"  // Set height here
    imageWidth="100%"     // Set width here
    borderRadius="30px"
    reverseOrder={false}
    updatePopupTitle={handleTitleChange}
/>
</div>

<div style={{ padding: '100px 0px 0px 0px' }}>
<ImageRightBanner
    subHeading="SEO"
    heading="Your Online Growth With Targeted SEO"
    description={
        <>
We create strategies that work uniquely for your business growth. We build a customized SEO plan that focuses on the keywords, content, and technical optimizations that matter most. We are aware of any latest SEO trends to boost your website’s ranking. Our mission is an SEO partnership that brings you steady growth, higher visibility, and results you can see.


        </>
    }
    imageSrc={seo2}
    objectfit="contain"
    imageHeight="500px"  // Set height here
    imageWidth="100%"     // Set width here
    borderRadius="30px"
    reverseOrder={true}
    updatePopupTitle={handleTitleChange}
/>
</div>

<div style={{ padding: '100px 0px 0px 0px' }}>
<ImageRightBanner
    subHeading="SEO"
    heading="Future-Proofing Your Business With Latest SEO Trends  "
    description={
        <>
Our developers stay alighned with the latest SEO techniques to keep your business ahead of your competitors. Whether it’s optimizing for voice search, enhancing mobile experiences, or focusing on AI-driven insights—we ensure your brand is always visible and relevant. We don’t just follow trends; we test, adapt, and implement strategies that will genuinely work for your conversion rates. We assure your business will grow long-term with our implementing style.

        </>
    }
    imageSrc={seo3}
    objectfit="contain"
    imageHeight="500px"  // Set height here
    imageWidth="100%"     // Set width here
    borderRadius="30px"
    reverseOrder={false}
    updatePopupTitle={handleTitleChange}
/>
</div>





            <PricingSection packages={packages} updatePopupTitle={handleTitleChange} />



            <TestimonialSection updatePopupTitle={handleTitleChange}  />
            <ContactForm />
            <FooterSection />
            <PopupForm title={title} />
        </>
    )
}

export default AppPage
