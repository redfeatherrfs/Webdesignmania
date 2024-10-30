import BannerSection from "../components/banner"
import GetStartedSection from "../components/Formsection"
import HeaderSection from "../components/Header"
import LogoSection from "../components/logos"

import bannerImage from '../images/app-page-banner.jpg'
import aboutuslaptop from '../images/aboutuslaptop.png'

import FooterSection from "../components/Footer"
import ContactForm from "../components/ContactForm"
import TestimonialSection from "../components/Testimonial"
import ImageRightBanner from '../components/Aboutus/ImageRightbanner';
import ImageIconBox from "../components/Aboutus/ImageIconBox"
import OurMission from "../components/Aboutus/OurMission"



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
    heading="Creatively led.
Results digital agency  "

    description={
        <>
A place where talent and ambition can soar. Unleash your creativity and let your talents take center stage. When you work with us, you step into a world where your passion meets our purpose.
        </>
    }
    imageSrc={aboutuslaptop}
    objectfit="contain"
    imageHeight="500px"  // Set height here
    imageWidth="100%"     // Set width here
    borderRadius="30px"
    reverseOrder={false}
    // buttonUrl="https://www.facebook.com/" 
/>
</div>

            <ImageIconBox/>

            <OurMission/>
           
        
            <TestimonialSection/>
            <ContactForm/>
            <FooterSection />
        </>
    )
}

export default AppPage
