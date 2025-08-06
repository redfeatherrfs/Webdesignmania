import BannerSection from "../components/banner"
import GetStartedSection from "../components/Formsection"
import HeaderSection from "../components/Header"
import LogoSection from "../components/logos"

import bannerImage from '../images/app-page-banner.jpg'
import smm2 from '../images/smm2.png'

import FooterSection from "../components/Footer"
import ContactForm from "../components/ContactForm"
import TestimonialSection from "../components/Testimonial"
import ImageRightBanner from '../components/Aboutus/ImageRightbanner';
import IconTextBox from "../components/SMM/IconTextBox"
import OurMission from "../components/Aboutus/OurMission"
import SMMProcess from "../components/SMM/SMMProcess"
import PricingSection from "../components/PricingSection"




const AppPage = () => {

   

    return (
        <>
            <HeaderSection />
            <BannerSection
                title='Mobile Application\nDesign & Development'
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

<IconTextBox/>
<OurMission/>
<SMMProcess/>
<PricingSection/>
           
           
        
            <TestimonialSection/>
            <ContactForm/>
            <FooterSection />
        </>
    )
}

export default AppPage
