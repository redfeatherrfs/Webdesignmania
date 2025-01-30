import PrivacyPolicySection from "../components/PrivacyPolicySection"
import FooterSection from "../components/Footer"
import Header from "../components/Header"
import TopHead from "../components/LandingPage/TopBar"
import { useState } from "react"
import PopupForm from "../components/common/PopupForm"
import SupportSection from "../components/LandingPage/LpContactSec"
import { Link, useLocation } from 'react-router-dom';



const AppPage = () => {
const [title, setTitle] = useState('')

    const handleTitleChange = newTitle => setTitle(newTitle)
     const location = useLocation();
    return (
        <>
            <TopHead updatePopupTitle={handleTitleChange} />

            <PrivacyPolicySection />
                <div className="container simple-section">
                    <div className="row align-items-center justify-content-center text-center">
                        <div className="col-lg-12 mb-5 custom-content-v3">
                          
                                <Link className='btn btn-primary' to='/lp' style={{ backgroundColor: '#160A48', border: 'none' }}>Back to Homepage</Link>
                        
                        </div>
                    </div>
                </div>
        
           <SupportSection/>
            <PopupForm title={title} />
         

        
        </>

    )
}

export default AppPage