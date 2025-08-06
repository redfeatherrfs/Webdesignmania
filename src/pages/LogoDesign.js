import React from 'react';
import '../LogoDesign.css'; // Import the CSS file
import BannerSection from "../components/banner"
import HeaderSection from "../components/Header"
import bannerImage from '../images/app-page-banner.jpg'
import LogoSection from "../components/logos"
import GetStartedSection from '../components/Formsection';
import CustomContainer from '../components/CustomContainerV3';







const LogoDesign = () => {

    return (
        <>
         <HeaderSection />
            <BannerSection
                title='We create awesome\ntailor-made websites'
                image={bannerImage}
            />
            <LogoSection />
            <GetStartedSection />
            <CustomContainer/>

        </>
    )
}

export default LogoDesign
