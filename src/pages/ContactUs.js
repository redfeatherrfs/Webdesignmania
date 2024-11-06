import BannerSection from "../components/banner"

import HeaderSection from "../components/Header"
import LogoSection from "../components/logos"

import bannerImage from '../images/app-page-banner.jpg'

import FooterSection from "../components/Footer"
import ContactForm from "../components/ContactForm"
import ContactUsform from "../components/ContactUsform"
import { Helmet } from 'react-helmet-async';


const AppPage = () => {

 

    return (
        <>
            <Helmet>
                <title>Contact Us  - Web Design Mania</title>
                <meta name="description" content="Get in touch with Web Design Mania today! Whether you have questions about our services or need a custom quote, our friendly team is here to help." />
                <link rel="canonical" href="https://webdesignmania.co.uk/contact-us" />
            </Helmet>     
            <HeaderSection />
            <BannerSection
                title='Contact Us'
                description="Your Professional Designer & Developer That Combines Aesthetics With Business Success"
                buttonlink='/'
                buttontext="Start a Project"
                image={bannerImage}
            />
            <LogoSection />
          
          
            <ContactUsform/>
            <FooterSection />
        </>
    )
}

export default AppPage;
