import BannerSection from "../components/banner"
import GetStartedSection from "../components/Formsection"
import HeaderSection from "../components/Header"
import LogoSection from "../components/logos"

import bannerImage from '../images/app-page-banner.jpg'
import smm2 from '../images/smm2.png'

import FooterSection from "../components/Footer"
import ContactForm from "../components/ContactForm"
import TestimonialSection from "../components/Testimonial"
import ImageRightBanner from '../components/Aboutus/ImageRightbanner'
import IconTextBox from "../components/SMM/IconTextBox"
import OurMission from "../components/Aboutus/OurMission"
import SMMProcess from "../components/SMM/SMMProcess"
import PricingSection from "../components/PricingSection"
import ourMissionImage from '../images/smmicon1.png';
import ourVisionImage from '../images/smmicon2.png';
import socialMediaIcon from '../images/smmic1.png';
import seoIcon from '../images/smmic2.png';
import ppcIcon from '../images/smmic3.png';
import { useState } from "react"
import PopupForm from "../components/common/PopupForm"
import { Helmet } from 'react-helmet-async';



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
    const iconBoxesData = [
        {
          icon: socialMediaIcon,
          title: "Influencer Marketing",
          description: "This involves partnering with popular social media influencers to promote your brand, making their audience your customers."
        },
        {
          icon: seoIcon,
          title: "Content Marketing",
          description: "Creating engaging blog posts and eye-catching videos to convert engagement into purchasers. "
        },
        {
          icon: ppcIcon,
          title: "Social Media Management",
          description: "Actively managing your social media profiles, posting regularly, engaging with your followers, and analyzing your content performance. "
        }
    ];



    return (
        <>
            <Helmet>
                <title>Result Driven Social Media Marketing (SMM) Services</title>
                <meta name="description" content="At Web Design Mania, we believe in transforming your vision into reality. Our talented professionals work closely with clients to deliver digital solutions." />
            </Helmet>
            <HeaderSection />
            <BannerSection
                title='We Harness The Power Of Social Platforms And Make Your Brand Stay Relevant'
                description="Thinking about how to implement social media analytics to your brand and generate quality leads? Why not out-source your worries!
"
                updatePopupTitle={handleTitleChange}
                buttontext="Start a Project"
                image={bannerImage}
            />
            <LogoSection />
            <GetStartedSection />

            <div style={{ padding: '100px 0px 0px 0px' }}>
<ImageRightBanner
    subHeading="SMM"
    heading="Fueling Brand Engagement With Effective SMM "
    description={
        <>
Think of having Social Media Marketing (SMM) as a direct line to your customers. Imagine being able to connect with your audience in real-time, sharing your latest updates, products, or promotions while also hearing their feedback, SMM will do just that for you. This two-way communication turns casual followers into enthusiastic ambassadors. Let’s work to keep your brand on top-of-mind!

                        </>
                    }
                    imageSrc={smm2}
                    objectfit="contain"
                    imageHeight="500px"  // Set height here
                    imageWidth="100%"     // Set width here
                    borderRadius="30px"
                    reverseOrder={true}
                    updatePopupTitle={handleTitleChange}
                />
            </div>

<IconTextBox
      sectionHeading="Unlocking SMM To Highlight Your Brand’s Presence"
      subHeading="SMM"
      iconBoxes={iconBoxesData}
    />

<div>
      <OurMission
        ourmissionImg={ourMissionImage}
        ourvissionImg={ourVisionImage}
        heading="Innovative Solutions For An Innovative Brand"
        subHeading="SMM"
        content1={{
          heading: "Your One Stop Solution ",
          text: "Our mission is to empower businesses to grow through creativity and digital solutions."
        }}
        content2={{
          heading: "Desired Outcome",
          text: "you can expect increased brand awareness and lasting customer relationships that translate into higher traffic and conversions."
        }}
        borderStyle1={{
            
          top: 'none',
          right: 'none',
          bottom: '2px solid #5432E7',
          left: '2px solid #5432E7'
        }}
        borderStyle2={{
          top: '2px solid #5432E7',
          right: '2px solid #5432E7',
          bottom: 'none',
          left: 'none'
        }}
      />
    </div>
<SMMProcess/>
            
           
            <PricingSection packages={packages} updatePopupTitle={handleTitleChange} />



            <TestimonialSection updatePopupTitle={handleTitleChange} />
             <ContactForm/>
            <FooterSection />
            <PopupForm title={title} />
        </>
    )
}

export default AppPage
