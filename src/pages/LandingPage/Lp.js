import Lpbanner from "../../components/LandingPage/BannerLP"
import LanguageLogos from "../../components/LandingPage/languagelogos"
import LpPricingSection from "../../components/LandingPage/LpPricingSection"
import LpthirdSection from "../../components/LandingPage/LpThirdSection"
import LpCta1 from "../../components/LandingPage/LPCtaSection"
import TopHead from "../../components/LandingPage/TopBar"
import OurWorkProcess from "../../components/LandingPage/OurWorkProcess"
import AllInOneCombo from "../../components/LandingPage/AllInOneSection"



const LpPage = () => {



    return (
        <>
            <TopHead />
            <Lpbanner />
            <LanguageLogos />
            <LpPricingSection />
            <LpthirdSection />
            <LpCta1 />
            <OurWorkProcess />
            <AllInOneCombo />
        </>
    )
}

export default LpPage
