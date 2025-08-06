import BannerSection from "../components/banner"

import HeaderSection from "../components/Header"
import LogoSection from "../components/logos"

import bannerImage from '../images/app-page-banner.jpg'

import FooterSection from "../components/Footer"
import ContactForm from "../components/ContactForm"
import ContactUsform from "../components/ContactUsform"


const AppPage = () => {

 

    return (
        <>
            <HeaderSection />
            <BannerSection
                title='Mobile Application\nDesign & Development'
                image={bannerImage}
            />
            <LogoSection />
          
          
            <ContactUsform/>
            <FooterSection />
        </>
    )
}

export default AppPage;
