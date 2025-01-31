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
    <title>Contact Us | Web Design Mania</title>
    <meta name="description" content="Got questions or need help with your website? We’d love to hear from you! Reach out to us today, and let’s create something amazing together." />
    <link rel="canonical" href="https://webdesignmania.com/contact-us" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Contact Us | Web Design Mania" />
    <meta property="og:description" content="Got questions or need help with your website? We’d love to hear from you! Reach out to us today, and let’s create something amazing together." />
    <meta property="og:url" content="https://webdesignmania.com/contact-us" />
    <meta property="og:site_name" content="WebDesignMania" />
    <meta property="article:publisher" content="https://www.facebook.com/webdesignmaniaUS" />
    <meta property="article:modified_time" content="2024-08-20T07:33:16+00:00" />
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
