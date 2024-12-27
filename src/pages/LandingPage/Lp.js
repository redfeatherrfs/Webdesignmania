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
import serviceiconbox2 from "../../images/lpicon2.png"
import serviceiconbox3 from "../../images/lpicon3.png"
import TestimonialSection from "../../components/Testimonial"
import ContactForm from "../../components/ContactForm"
import LpPortfolio from "../../components/LandingPage/LpPortfolio"
import LpImgSec from "../../components/LandingPage/LpImgSec"
import LpImgSec1 from "../../images/googlepartner.png"
import LpImgSec2 from "../../images/inc500.png"
import LpImgSec3 from "../../images/forbes.png"
import LpLogoSlider from "../../components/LandingPage/LpLogoSlider"
import LpLogoSlider1 from "../../images/lplogoslider1.png"
import LpLogoSlider2 from "../../images/lplogoslider2.png"
import LpLogoSlider3 from "../../images/lplogoslider3.png"
import LpLogoSlider4 from "../../images/lplogoslider4.png"
import LpLogoSlider5 from "../../images/lplogoslider5.png"
import OurWorkProcess from "../../components/LandingPage/OurWorkProcess"
import AllInOneCombo from "../../components/LandingPage/AllInOneSection"
import LpCtaSec2 from "../../components/LandingPage/LpCtaSec2"
import LpContactSec from "../../components/LandingPage/LpContactSec"
import LpFooterSec from "../../components/LandingPage/LpFooterSection"
import { useState } from "react"
import PopupForm from "../../components/common/PopupForm"

import { Helmet } from 'react-helmet-async';




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
            <title>Custom Web Design Service Starts from £199 - Web Design Mania</title>
            <meta name="description" content="Get custom web design and development services from UK #1 design company specializes in website design and marketing. Best bespoke web designers and developers team." />
            <link rel="canonical" href="https://webdesignmania.co.uk/lp/"/>
        </Helmet>
        
            <TopHead updatePopupTitle={handleTitleChange} />
            <Lpbanner updatePopupTitle={handleTitleChange} />
            <LanguageLogos />
            <LpPricingSection updatePopupTitle={handleTitleChange} />
            <LpthirdSection />
            <LpCta1 />
            <div style={{ padding: '100px 0px 0px 0px' }}>
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
            </div>
            <LpServiceIconBox
                backgroundColor="#f9f9f9" // Example background color
                servicesTitle="We Specialize In Coding High Performance Websites"
                // message="Drop us a message, and our experts will get back to you shortly."
                iconBoxes={iconBoxesData}
            />
            <div>
                <LpImgSec
                    backgroundColor="#f0f0f0" // Example background color
                    images={imagesData}
                />
            </div>
            <OurWorkProcess />
            <AllInOneCombo    updatePopupTitle={handleTitleChange} />
            <div style={{ padding: '100px 0px 50px 0px' }}>
                <LpPortfolio />
            </div>
            <div style={{ padding: '100px 0px 50px 0px' }}>
                <LpLogoSlider logos={logosData} />
            </div>
            <LpCtaSec2 />
            <TestimonialSection updatePopupTitle={handleTitleChange} />
            <ContactForm />
            <LpContactSec />
            <LpFooterSec />
            <PopupForm title={title} />
        </>
    )
}

export default LpPage
