import React from 'react';
import { Link } from 'react-router-dom';
import BannerSection from '../components/banner'; // Adjust the path if needed
import LogoSection from '../components/logos';
import GetStartedSection from '../components/Formsection';
import OurMissionSection from '../components/MissionVision';
import StatisticsSection from '../components/Statistics';
import CustomCarousel from '../components/Carousel';
import UniqueUIDesignsSection from '../components/UniqueUIDesigns';
import OurWork from '../components/OurWork';
import HomeGallery from '../components/HomeGallery';


 

 
 
 
const Home = () => {
    return (
        <>
            <BannerSection /> {/* Include the BannerSection component here */}
            <LogoSection />
            <GetStartedSection/>
            <OurMissionSection/>
            <StatisticsSection/>
            <OurWork/>
            {/* <CustomCarousel/> */}
            <UniqueUIDesignsSection/>
            <HomeGallery/>
            

            {/* <div>
                <h1>Home Page</h1>
                <p>Welcome to our website!</p>
                <Link to="/about">Go to About Us</Link>
            </div> */}
        </>
    );
};

export default Home;
