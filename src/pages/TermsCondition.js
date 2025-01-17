import HeaderSection from "../components/Header"
import FooterSection from "../components/Footer"
import TermsCondition from "../components/TermsCondition"
import TopHead from "../components/LandingPage/TopBar"
import { useState } from "react"
import PopupForm from "../components/common/PopupForm"
import SupportSection from "../components/LandingPage/LpContactSec"


const AppPage = () => {
    const [title, setTitle] = useState('')
    
        const handleTitleChange = newTitle => setTitle(newTitle)


    return (
        <> 
          <TopHead updatePopupTitle={handleTitleChange} />
            <TermsCondition />

            <SupportSection/>
            <PopupForm title={title} />
        </>

    )
}

export default AppPage