import BannerSection from "../components/banner"
import GetStartedSection from "../components/Formsection"
import HeaderSection from "../components/Header"
import LogoSection from "../components/logos"
import bannerImage from '../images/About.webp'
import aboutuslaptop from '../images/aboutuslaptop.webp'
import FooterSection from "../components/Footer"
import ContactForm from "../components/ContactForm"
import TestimonialSection from "../components/Testimonial"
import ImageRightBanner from '../components/Aboutus/ImageRightbanner';
import ImageIconBox from "../components/Aboutus/ImageIconBox"
import OurMission from "../components/Aboutus/OurMission"
import ourMissionImage from '../images/ourmission.png';
import ourVisionImage from '../images/ourvission.png';
import { Helmet } from 'react-helmet-async';
import { useState } from "react"
import PopupForm from "../components/common/PopupForm"


const AppPage = () => {
    const [title, setTitle] = useState('')

    const handleTitleChange = newTitle => setTitle(newTitle)


    return (
        <>
        <Helmet>
    <title>About Us | Web Design Mania</title>
    <meta name="description" content="Get to know us! We’re passionate about designing beautiful, user-friendly websites and helping businesses succeed online with creative, effective solutions." />
    <link rel="canonical" href="https://webdesignmania.com/about-us" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="About Us | Web Design Mania" />
    <meta property="og:description" content="Get to know us! We’re passionate about designing beautiful, user-friendly websites and helping businesses succeed online with creative, effective solutions." />
    <meta property="og:url" content="https://webdesignmania.com/about-us" />
    <meta property="og:site_name" content="WebDesignMania" />
    <meta property="article:publisher" content="https://www.facebook.com/webdesignmaniaUS" />
    <meta property="article:modified_time" content="2024-08-20T07:34:29+00:00" />

    
  </Helmet>

            <HeaderSection />
            <BannerSection
                title='About Us'
                description="Your Professional Designer & Developer That Combines Aesthetics With Business Success"
                updatePopupTitle={handleTitleChange}
                buttontext="Start a Project"
                image={bannerImage}
            />
            <LogoSection />





            <GetStartedSection />

            <div style={{ padding: '50px 0px 0px 0px' }}>
                <ImageRightBanner
                    subHeading="ABOUT US"
                    heading="Your Digital Partner In Exceling Your Brand "

                    description={
                        <>
                            Let creativity meet strategy! We turn your online vision into reality! With a focus on innovative strategies and cutting-edge technologies, our passionate team is committed to driving results and ensuring your success in the ever-evolving digital landscape.

                        </>
                    }
                    imageSrc={aboutuslaptop}
                    objectfit="contain"
                    imageHeight="500px"  // Set height here
                    imageWidth="100%"     // Set width here
                    borderRadius="30px"
                    reverseOrder={false}
                    updatePopupTitle={handleTitleChange}
                // buttonUrl="https://www.facebook.com/" 
                />
            </div>

            <ImageIconBox />

            <div>
                <OurMission
                    ourmissionImg={ourMissionImage}
                    ourvissionImg={ourVisionImage}
                    heading="Grow Your Community With Web Design Mania "
                    subHeading="WHO WE ARE"
                    content1={{

                        text: "Empowering businesses by delivering innovative marketing solutions that enhance brand visibility, foster engagement, and drive measurable results. We aim to be a trusted partner in our clients' growth journeys."
                    }}
                    content2={{

                        text: "Be the number one website development agency ecognized for transforming brands and shaping their success in the digital world. By staying at the forefront of industry trends and technologies, we aim to empower our clients businesses in the competitive industry."
                    }}

                />
            </div>


            <TestimonialSection updatePopupTitle={handleTitleChange} />
            <ContactForm />
            <FooterSection />
            <PopupForm title={title} />
        </>
    )
}

export default AppPage
