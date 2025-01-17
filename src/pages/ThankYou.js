
import ThankYouSection from "../components/ThankYouSection";
import TopHead from "../components/LandingPage/TopBar";
import PopupForm from "../components/common/PopupForm";
import { useState } from "react"
import SupportSection from "../components/LandingPage/LpContactSec";

const ThankYouPage = () => {
      const [title, setTitle] = useState('')
    
        const handleTitleChange = newTitle => setTitle(newTitle)
    return (
        <>
            <TopHead updatePopupTitle={handleTitleChange} />
            <ThankYouSection />
            <PopupForm title={title} />
            <SupportSection/>
        </>
    );
};

export default ThankYouPage;
