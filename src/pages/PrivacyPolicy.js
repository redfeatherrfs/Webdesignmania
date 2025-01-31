import PrivacyPolicySection from "../components/PrivacyPolicySection"
import FooterSection from "../components/Footer"
import Header from "../components/Header"
import TopHead from "../components/LandingPage/TopBar"
import { useState } from "react"
import PopupForm from "../components/common/PopupForm"
import SupportSection from "../components/LandingPage/LpContactSec"
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet"



const AppPage = () => {
const [title, setTitle] = useState('')

    const handleTitleChange = newTitle => setTitle(newTitle)
     const location = useLocation();
    return (
        
        <>
         <Helmet>
    <title>Privacy Policy | Web Design Mania</title>
    <meta name="description" content="We care about your privacy. Check out our Privacy Policy to see how we handle your data responsibly while delivering exceptional web design services." />
    <link rel="canonical" href="https://webdesignmania.com/privacy-policy" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Privacy Policy | Web Design Mania" />
    <meta property="og:description" content="We care about your privacy. Check out our Privacy Policy to see how we handle your data responsibly while delivering exceptional web design services." />
    <meta property="og:url" content="https://webdesignmania.com/privacy-policy" />
    <meta property="og:site_name" content="WebDesignMania" />
    <meta property="article:publisher" content="https://www.facebook.com/webdesignmaniaUS" />
    <meta property="article:modified_time" content="2024-08-20T07:58:47+00:00" />
  </Helmet>
        
            <TopHead updatePopupTitle={handleTitleChange} />

            <PrivacyPolicySection />
                <div className="container simple-section">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-lg-12 mb-5 custom-content-v3">
                          
                                <Link className='btn btn-primary' to='/' style={{ backgroundColor: '#160A48', border: 'none' }}>Back to Homepage</Link>
                        
                        </div>
                    </div>
                </div>
        
           <SupportSection/>
            <PopupForm title={title} />
         

        
        </>

    )
}

export default AppPage