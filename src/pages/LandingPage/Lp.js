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
        heading: 'Web Design',
        text: 'A website design with elements that grabs attention; yet at the same time, reflects the brand\'s unique personality.',
    },
    {
        image: serviceiconbox2,
        heading: 'SEO Services',
        text: 'Optimize your website to rank higher in search engine results and drive organic traffic.',
    },
    {
        image: serviceiconbox3,
        heading: 'Marketing Strategy',
        text: 'Craft a strategy that aligns with your business goals and reaches your target audience effectively.',
    },
    {
        image: serviceiconbox1,
        heading: 'Marketing Strategy',
        text: 'Craft a strategy that aligns with your business goals and reaches your target audience effectively.',
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
            <TopHead updateTitle={handleTitleChange} />
            <Lpbanner updateTitle={handleTitleChange} />
            <LanguageLogos />
            <LpPricingSection updateTitle={handleTitleChange} />
            <LpthirdSection />
            <LpCta1 />
            <div style={{ padding: '100px 0px 0px 0px' }}>
                <ImageRightBanner
                    // subHeading="ABOUT US"
                    heading="Tired of Working with Website Builders Offering Limited Customization? "
                    description={
                        <>
                            Change the game with WordPress, the world’s most popular content management system (CMS). It's powerful, flexible, and easy to use with plenty of options to build a website that effectively converts.
                        </>
                    }
                    imageSrc={lpImage}
                    objectfit="contain"
                    imageHeight="500px"  // Set height here
                    imageWidth="100%"     // Set width here
                    borderRadius="30px"
                    reverseOrder={true}
                    updateTitle={handleTitleChange}
                />
            </div>
            <LpServiceIconBox
                backgroundColor="#f9f9f9" // Example background color
                servicesTitle="Services"
                message="Drop us a message, and our experts will get back to you shortly."
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
            <TestimonialSection updateTitle={handleTitleChange} />
            <ContactForm />
            <LpContactSec />
            <LpFooterSec />
            <PopupForm title={title} />
        </>
    )
}

export default LpPage
