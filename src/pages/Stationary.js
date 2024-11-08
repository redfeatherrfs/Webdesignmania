import React from 'react';
import '../LogoDesign.css'; // Import the CSS file
import BannerSection from "../components/banner"
import HeaderSection from "../components/Header"
import LogoSection from "../components/logos"
import GetStartedSection from '../components/Formsection';
import LogoPortfolio from '../components/LogoDesignsPortfolio';
import LogoProcess from '../components/CustomLogoProcess';
import CustomSection from '../components/CustomSectionV3';
import FooterSection from '../components/Footer';
import ContactForm from '../components/ContactForm';
import TestimonialSection from '../components/Testimonial';
import { Helmet } from 'react-helmet-async';
import PricingSection from '../components/PricingSection';
import OurWork from '../components/OurWork';
import stationarybg from '../images/stationarybg.png'
import stationary1 from '../images/stationary1.png'
import ImageRightBanner from '../components/Aboutus/ImageRightbanner';
import IconTextBox from '../components/SMM/IconTextBox';
import socialMediaIcon from '../images/smmic1.png'; 
import seoIcon from '../images/smmic2.png'; 
import ppcIcon from '../images/smmic3.png'; 
import UniqueUIDesignsSection from '../components/UniqueUIDesigns';
import serviceImage1 from '../images/Mask group.png'
import serviceImage2 from '../images/Mask group-1.png'
import serviceImage3 from '../images/Mask group-2.png'
import serviceImage4 from '../images/Mask group-3.png'
import serviceImage5 from '../images/Mask group-4.png'
 

const Stationary = () => {


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
          title: "Personalized Designs",
          description: "Bringing your ideas to the table and experimenting skills of our designers, the result is bound to be one of a kind. This unique art creation will make your brand stand out among competitors. "
        },
        {
          icon: seoIcon,
          title: "Wrapped Up Timely",
          description: "From initial designs to final output, we always achieve our set deadlines. We highly believe in creating no hindrance in our clients launch plans and delivering timely. "
        },
        {
          icon: ppcIcon,
          title: "Satisfaction Guaranteed",
          description: "We highly appreciate our clients feedbacks on any stage of the entire process - the more, the better. We have a no-worry policy when it comes to last minute adjustments."
        }
      ];

      const services = [
        { id: '01', 
            title: 'Brand Visibility', 
            description: 'Managing to embose your brand in the minds of your audience is the real success', imgSrc: serviceImage1,
         alt: 'Android App Development' },

        { id: '02',
            title: 'Gain Trust',
            description: ' This will build client trust and set a reliable tone.',
            imgSrc: serviceImage2,
            alt: 'iOS App Development' },

        { id: '03',
             title: 'First Impression',
              description: 'The more unique the idea the more eyeballs it will catch',
               imgSrc: serviceImage3,
                alt: 'React Native App Development' },

        { id: '04',
         title: 'Brand Consistency',
         description: 'Building a cohesive look will create a unified brand identity.',
          imgSrc: serviceImage4,
           alt: 'Flutter App Development' },

   
    ];


    return (
        <>
        <Helmet>
            <title>Custom Stationery Design Service by Top Graphic Designers</title>
            <meta name="description" content="Web Design Mania offers custom stationery design by top graphic designers, creating unique, branded materials that leave a lasting impression on your audience." />
             
        
        </Helmet>     
         <HeaderSection />
         <BannerSection
                title='Set The Standard For Your Brand That Stands Out '
                description="Looking for new ways to capture the market? Showcase your brand’s personality through high-end designs curated with love."
                buttonlink='/'
                buttontext="Start a Project"
                image={stationarybg}
            />
            <LogoSection />
            <GetStartedSection />
            <div style={{ padding: '0px 0px 0px 0px' }}>
<ImageRightBanner
    subHeading="Stationary Design"
    heading="Your Digital Partner In Exceling Your Brand"
    description={
        <>
We do designing that is not just paperwork, we create memorable touchpoints that enhance your brand's image. From sleek business cards to custom letterheads and branded envelopes, each product will engage with your audience. Our unique designs are meant to turn heads towards your brand and bring significant growth. Connect with us, we will bring your ideas to execution.

        </>
    }
    imageSrc={stationary1}
    objectfit="contain"
    imageHeight="500px"  // Set height here
    imageWidth="100%"     // Set width here
    borderRadius="30px"
    reverseOrder={false}
    // buttonUrl="https://www.facebook.com/" 
/>
</div>
<UniqueUIDesignsSection
servicetittle ="Let Stationary Design Be A Game-Changer For Your Business"
// servicedesc =""
 services={services} page='app' />

            <OurWork/>
          
            <LogoPortfolio/>
            <IconTextBox
      sectionHeading="Perks Of Partnering With Us"
      subHeading="Stationary"
      iconBoxes={iconBoxesData}
    />
       
             
            <PricingSection packages={packages} />
            <TestimonialSection/>

            <ContactForm/>
            <FooterSection/>

            
        </>
    )
}

export default Stationary
