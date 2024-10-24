import BannerSection from "../components/banner"
import EngagingUISection from "../components/EngagingUiSection"
import GetStartedSection from "../components/Formsection"
import HeaderSection from "../components/Header"
import LogoSection from "../components/logos"
import bannerImage from '../images/app-page-banner.jpg'

const AppPage = () => {
    return (
        <>
            <HeaderSection />
            <BannerSection 
                title='Mobile Application\nDesign & Development' 
                image={bannerImage} 
            />
            <LogoSection />
            <GetStartedSection />
            <EngagingUISection />
        </>
    )
}

export default AppPage
