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
import ourMissionImage from '../images/ourmission.png';
import ourVisionImage from '../images/ourvission.png';
import socialMediaIcon from '../images/smmic1.png'; 
import seoIcon from '../images/smmic2.png'; 
import ppcIcon from '../images/smmic3.png'; 




const AppPage = () => {

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
          title: "Social Media Management",
          description: "We create bespoke brochure designs that embody your value propositions and goals."
        },
        {
          icon: seoIcon,
          title: "Search Engine Optimization",
          description: "We deliver initial design concepts in the lowest possible times."
        },
        {
          icon: ppcIcon,
          title: "PPC Management",
          description: "Fulfilling all your design needs under one roof."
        }
      ];

   

    return (
        <>
            <HeaderSection />
            <BannerSection
                title='Contact Us'
                description="Your Professional Designer & Developer That Combines Aesthetics With Business Success"
                buttonlink='/'
                buttontext="Start a Project"
                image={bannerImage}
            />
            <LogoSection />
            <GetStartedSection />

            <div style={{ padding: '100px 0px 0px 0px' }}>
<ImageRightBanner
    subHeading="ABOUT US"
    heading="User-Friendly Website Designs  "
    description={
        <>
Need some help turning heads? Wish to improve your marketing metrics? Our visual artists harness the power of brand values and eye-grabbing graphics to convey the right brand message to the audience with premium.

        </>
    }
    imageSrc={smm2}
    objectfit="contain"
    imageHeight="500px"  // Set height here
    imageWidth="100%"     // Set width here
    borderRadius="30px"
    reverseOrder={true}
/>
</div>

<IconTextBox
      sectionHeading="Marketing, Social Media Marketing"
      subHeading="ABOUT US"
      iconBoxes={iconBoxesData}
    />

<div>
      <OurMission
        ourmissionImg={ourMissionImage}
        ourvissionImg={ourVisionImage}
        heading="Leading the Way in Digital Innovation"
        subHeading="WHO WE ARE"
        content1={{
        //   heading: "Our Mission",
          text: "Our mission is to empower businesses to grow through creativity and digital solutions."
        }}
        content2={{
        //   heading: "Our Vision",
          text: "To be the most innovative and impactful digital agency in the world."
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
<PricingSection packages={packages} />
           
           
        
            <TestimonialSection/>
            <ContactForm/>
            <FooterSection />
        </>
    )
}

export default AppPage
