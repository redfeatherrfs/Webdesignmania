import Lpbanner from "../../components/LandingPage/BannerLP"
import LanguageLogos from "../../components/LandingPage/languagelogos"
import LpPricingSection from "../../components/LandingPage/LpPricingSection"
import LpthirdSection from "../../components/LandingPage/LpThirdSection"
import LpCta1 from "../../components/LandingPage/LPCtaSection"
import TopHead from "../../components/LandingPage/TopBar"
import ImageRightBanner from "../../components/Aboutus/ImageRightbanner"
import lpImage from "../../images/lpimageleft.png"
import LpServiceIconBox from "../../components/LandingPage/LpServiceIconBox"
import serviceiconbox1 from "../../images/lpicon1.png"
import serviceiconbox2 from "../../images/inc500.png"
import serviceiconbox3 from "../../images/lpicon3.png"
import TestimonialSection from "../../components/Testimonial"
import ContactForm from "../../components/ContactForm"
import LpPortfolio from "../../components/LandingPage/LpPortfolio"
import LpImgSec from "../../components/LandingPage/LpImgSec"
import LpImgSec1 from "../../images/googlepartner.webp"
import LpImgSec2 from "../../images/inc500.webp"
import LpImgSec3 from "../../images/forbes.webp"
import whyservice1 from '../../images/Custom Web.webp';
import whyservice2 from '../../images/Mobile App Developement.webp';
import whyservice3 from '../../images/Ecommerce Solution.webp';
import whyservice4 from '../../images/Responsive Web Design.webp';
import whyservice5 from '../../images/Content Management System.webp';
import whyservice6 from '../../images/Web Application and Development.webp';
import whyservice7 from '../../images/SEO BOX.webp';
import whyservice8 from '../../images/UI-UX.webp';
import whyservice9 from '../../images/CLoud.webp';


import LpLogoSlider from "../../components/LandingPage/LpLogoSlider"
import LpLogoSlider1 from "../../images/lplogoslider1.webp"
import LpLogoSlider2 from "../../images/lplogoslider2.webp"
import LpLogoSlider3 from "../../images/lplogoslider3.webp"
import LpLogoSlider4 from "../../images/lplogoslider4.webp"
import LpLogoSlider5 from "../../images/lplogoslider5.webp"
import OurWorkProcess from "../../components/LandingPage/OurWorkProcess"
import AllInOneCombo from "../../components/LandingPage/AllInOneSection"
import LpCtaSec2 from "../../components/LandingPage/LpCtaSec2"
import LpContactSec from "../../components/LandingPage/LpContactSec"
import LpFooterSec from "../../components/LandingPage/LpFooterSection"
import { useState } from "react"
import PopupForm from "../../components/common/PopupForm"

import { Helmet } from 'react-helmet-async';
import WhyChooseService from "../../components/LandingPage/lpservices"
import AllInOne from "../../components/LandingPage/Allinonenew"
import CustomSection from "../../components/LandingPage/CustomSectionScrol"
import LeftImageSec from "../../components/LandingPage/LeftImageSec"





const heading = {
    title: (
        <>
           Interested in our services?
        </>
    ),
    // highlight:"Animation Video",
    // title2: "Production Company in the USA"
};
const description = "Drop us a message, and our experts will reach out soon!";
const steps = [
    {
        image: whyservice1,
        alt: "Custom Web Development",
        title: "Custom Web Development",
        width: 250,
        heigth: 50,
        description: "We specialise in building custom websites designed to meet and fulfill the unique requirements of your business. Each website is meticulously crafted to align with your goals, ensuring a seamless online presence."
    },
    {
        image: whyservice2,
        alt: "Mobile App Development",
        title: "Mobile App Development",
        description: "Apps are developed using React Native, Flutter, & Swift, utilising Figma, Adobe XD, & Sketch for prototyping and UI/UX design to ensure optimised performance & seamless user experiences."
    },
    {
        image: whyservice3,
        alt: "E-Commerce Solutions",
        title: "E-Commerce Solutions",
        description: "Building online stores with secure payment systems and inventory management."
    },
    {
        image: whyservice4,
        alt: "Responsive Web Design",
        title: "Responsive Web Design",
        description: "Designing websites that provide optimal viewing experiences across all devices."
    },
    {
        image: whyservice5,
        alt: "Content Management Systems",
        title: "Content Management Systems",
        description: "Creating and integrating platforms like WordPress, Joomla, and Drupal for easy content management."
    },
    {
        image: whyservice6,
        alt: "Web Application Development",
        title: "Web Application Development",
        description: "Building dynamic, interactive web apps for various business functions."
    },
    {
        image: whyservice7,
        alt: "SEO & Digital Marketing",
        title: "SEO & Digital Marketing",
        description: "Optimising websites for search engines and driving online traffic through digital marketing strategies."
    },
    {
        image: whyservice8,
        alt: "UI/UX Design",
        title: "UI/UX Design",
        description: "Designing intuitive user interfaces and experiences to enhance usability and engagement."
    },
    {
        image: whyservice9,
        alt: "Cloud Solutions",
        title: "Cloud Solutions",
        description: " Implementing scalable cloud infrastructure for hosting, storage, and collaboration."
    },
 
];


const iconBoxesData = [
    {
        image: serviceiconbox1,
        heading: '5+ Years’ Experience ',
        text: 'For over five years, we have been transforming marketing with innovative strategies. During this time, we have effectively addressed the diverse marketing needs of international clients, achieving remarkable success and widespread recognition.',
    },
    {
        image: serviceiconbox2,
        heading: '900+ Successful Clients',
        text: 'We have served over 900 customers from various fields and always ensured their satisfaction. Our professional website designers’ success stems from the dedication, motivation, passion, loyalty, and expertise of our incredible team.',
    },
    {
        image: serviceiconbox3,
        heading: '800+ Custom Features',
        text: 'Our company is a leading website development firm, specializing in e-commerce web development. Over the years, we have enhanced many brands\' presence and appeal.',
    },

];

const imagesData = [
    { src: LpImgSec1, alt: 'Description 1' },
    { src: LpImgSec2, alt: 'Description 2' },
    { src: LpImgSec3, alt: 'Description 3' },
];


const logosData = [
    { src: LpLogoSlider1, alt: 'Logo 1' },
    { src: LpLogoSlider2, alt: 'Logo 2' },
    { src: LpLogoSlider3, alt: 'Logo 3' },
    { src: LpLogoSlider4, alt: 'Logo 4' },
    { src: LpLogoSlider5, alt: 'Logo 5' },
    { src: LpLogoSlider1, alt: 'Logo 6' },
    { src: LpLogoSlider2, alt: 'Logo 7' },
];

const LpPage = () => {

    const [title, setTitle] = useState('')

    const handleTitleChange = newTitle => setTitle(newTitle)

    return (
        <>
            <Helmet>
                <title>Web Design Service Starts from £199 - Creative Logo Design</title>
                <meta name="description" content="Get custom web design and development services from UK #1 design company specializes in website design and marketing. Best bespoke web designers and developers team." />
                <link rel="canonical" href="https://creativelogodesign.co.uk/lp/" />
            </Helmet>
            {/* <!--  ClickCease.com tracking--> */}
      <script type='text/javascript'>var script = document.createElement('script');
      script.async = true; script.type = 'text/javascript';
      var target = 'https://www.clickcease.com/monitor/stat.js';
      script.src = target;var elem = document.head;elem.appendChild(script);
      </script>
      <noscript>
      <a href='https://www.clickcease.com' rel='nofollow'><img src='https://monitor.clickcease.com' alt='ClickCease'/></a>
      </noscript>
      {/* <!--  ClickCease.com tracking--> */}
          
            <TopHead updatePopupTitle={handleTitleChange} />
            <Lpbanner updatePopupTitle={handleTitleChange} />
            <LanguageLogos />
            <LpPricingSection updatePopupTitle={handleTitleChange} />
            <WhyChooseService
                heading={heading}
                 description={description}
                steps={steps}
            />

<div>
                <LpImgSec
                    backgroundColor="#f0f0f0" // Example background color
                    images={imagesData}
                />
            </div>
            {/* <LpthirdSection /> */}
            {/* <LpCta1 /> */}
            {/* <div className="py-4 py-md-5">
                <ImageRightBanner
                    // subHeading="ABOUT US"
                    heading="Customized Web Development Services That Talk To Your Audience"
                    description={
                        <>
                            Enhance your brand's intelligence in the market with our innovative custom website design. To Stay ahead of the competition one needs a marvelous website developer. Therefore, by utilizing the world's most popular Content Management System. Our website redesign services can transform your brand from bland to standout, ensuring you are the coolest brand in the market.                        </>
                    }
                    imageSrc={lpImage}
                    objectfit="contain"
                    imageHeight="500px"  // Set height here
                    imageWidth="100%"     // Set width here
                    borderRadius="30px"
                    reverseOrder={true}
                    updatePopupTitle={handleTitleChange}
                />
            </div> */}
            {/* <LpServiceIconBox
                backgroundColor="#f9f9f9" // Example background color
                servicesTitle="We Specialize In Coding High Performance Websites"
                // message="Drop us a message, and our experts will get back to you shortly."
                iconBoxes={iconBoxesData}
            />
           
            <OurWorkProcess />
            <AllInOne updatePopupTitle={handleTitleChange} />
     
          
       
            /> */}
            {/* <div> */}
                {/* <LpImgSec
                    backgroundColor="#f0f0f0" // Example background color
                    images={imagesData}
                />
            </div> */}
            {/* <OurWorkProcess /> */}
            {/* <AllInOneCombo updatePopupTitle={handleTitleChange} />
            <div style={{ padding: '100px 0px 50px 0px' }}>
                <LpPortfolio updatePopupTitle={handleTitleChange} />
            </div> */}
            {/* <div style={{ padding: '100px 0px 50px 0px' }}>
            </div> */}

       <AllInOne updatePopupTitle={handleTitleChange} />

            <CustomSection/>
            <LeftImageSec/>
            
            <LpLogoSlider logos={logosData} />
            <LpCtaSec2 />

            <TestimonialSection updatePopupTitle={handleTitleChange} />
            <ContactForm />
            <LpContactSec />
            {/* <LpFooterSec /> */}
            <PopupForm title={title} />
        </>
    )
}

export default LpPage
