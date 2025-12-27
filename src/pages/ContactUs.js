import BannerSection from "../components/banner"

import HeaderSection from "../components/Header"
import LogoSection from "../components/logos"

import bannerImage from '../images/ContactUs.webp'

import FooterSection from "../components/Footer"
import ContactForm from "../components/ContactForm"
import ContactUsform from "../components/ContactUsform"
import { Helmet } from 'react-helmet-async';
import { useState } from "react"
import PopupForm from "../components/common/PopupForm"


const AppPage = () => {

    const [title, setTitle] = useState('')

    const handleTitleChange = newTitle => setTitle(newTitle)

    return (
        <>
            <Helmet>
                <title>Contact Us  - Red Feather Solutions</title>
                <meta name="description" content="Get in touch with Red Feather Solutions today! Whether you have questions about our services or need a custom quote, our friendly team is here to help." />
                <link rel="canonical" href="https://webdesignmania.co.uk/lp/contact-us"/>
            </Helmet>     
            <HeaderSection />
            <BannerSection
                title='Contact Us'
                description="Let’s Build Your Brand with Purpose & Precision"
                buttonlink='/'
                buttontext="Start a Project"
                image={bannerImage}
                updatePopupTitle={handleTitleChange}
            />
            <LogoSection />
          
          
            <ContactUsform/>
            <FooterSection />
            <PopupForm title={title} />
        </>
    )
}

export default AppPage;
