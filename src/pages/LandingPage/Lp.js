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





const iconBoxesData = [
    {
        image: serviceiconbox1,
        heading: '5+ Years’ Experience ',
        text: 'We have been revolutionizing your marketing with our cool strategies for more than 5 years. In this period, we have catered to the diverse business marketing needs of international clients with unbridled success and critical acclaim. ',
    },
    {
        image: serviceiconbox2,
        heading: '900+ Successful Clients',
        text: 'We have facilitated more than 1100 customers from every field of life and have always left them satisfied. Our success is down to the dedication, motivation, passion, loyalty, and expertise of our marvelous team.',
    },
    {
        image: serviceiconbox3,
        heading: '800+ Custom Features Developed',
        text: 'Our company has been the best website development company with a large focus on e-commerce web development. We have harmonized many brands’ rhyme and shine through the years.',
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
            <TopHead updatePopupTitle={handleTitleChange} />
            <Lpbanner updatePopupTitle={handleTitleChange} />
            <LanguageLogos />
            <LpPricingSection updatePopupTitle={handleTitleChange} />
            <LpthirdSection />
            <LpCta1 />
            <div style={{ padding: '100px 0px 0px 0px' }}>
                <ImageRightBanner
                    // subHeading="ABOUT US"
                    heading="Customized Web Development Services That Talk To Your Audience."
                    description={
                        <>
                           Make your brand the smartest on the market with our clever custom web design and development services. Stay ahead of the curve with the world’s most popular Content Management System. From dull to cool, our website redesign services make your brand the coolest on the market. We have professional team of web designers and developers.
                        </>
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
            <AllInOneCombo />
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
