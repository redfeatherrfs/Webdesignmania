import HeaderSection from "../components/Header"
import FooterSection from "../components/Footer"
import TermsCondition from "../components/TermsCondition"
import TopHead from "../components/LandingPage/TopBar"
import { useState } from "react"
import PopupForm from "../components/common/PopupForm"
import SupportSection from "../components/LandingPage/LpContactSec"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const AppPage = () => {
    const [title, setTitle] = useState('')
    
        const handleTitleChange = newTitle => setTitle(newTitle)


    return (
        <> 
                <Helmet>
               <title>Terms & Conditions | Web Design Mania</title>
    <meta name="description" content="Understand the terms that guide our services. Our Terms and Conditions ensure transparency and a smooth experience for all your web design needs." />
    <link rel="canonical" href="https://webdesignmania.com/terms-conditions" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Terms & Conditions | Web Design Mania" />
    <meta property="og:description" content="Understand the terms that guide our services. Our Terms and Conditions ensure transparency and a smooth experience for all your web design needs." />
    <meta property="og:url" content="https://webdesignmania.com/terms-conditions" />
    <meta property="og:site_name" content="WebDesignMania" />
    <meta property="article:publisher" content="https://www.facebook.com/webdesignmaniaUS" />
    <meta property="article:modified_time" content="2024-08-20T07:31:49+00:00" />
  </Helmet>
          <TopHead updatePopupTitle={handleTitleChange} />
            <TermsCondition />
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