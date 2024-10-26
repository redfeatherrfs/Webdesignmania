import BannerSection from "../components/banner"
import EngagingUiCarouselSection from "../components/EngagingUiCarouselSection"
import EngagingUISection from "../components/EngagingUiSection"
import GetStartedSection from "../components/Formsection"
import HeaderSection from "../components/Header"
import LogoSection from "../components/logos"
import UniqueUIDesignsSection from "../components/UniqueUIDesigns"
import bannerImage from '../images/app-page-banner.jpg'
import serviceImage1 from '../images/Mask group.png'
import serviceImage2 from '../images/Mask group-1.png'
import serviceImage3 from '../images/Mask group-2.png'
import serviceImage4 from '../images/Mask group-3.png'
import serviceImage5 from '../images/Mask group-4.png'
import FooterSection from "../components/Footer"
import ContactForm from "../components/ContactForm"
import TestimonialSection from "../components/Testimonial"
import PricingSection from "../components/PricingSection"
import AppDevelopmentProcessSection from "../components/AppDevelopmentProcessSection"

const AppPage = () => {

    const services = [
        { id: '01', title: 'Android App Development', description: 'Our content writing conveys message directly', imgSrc: serviceImage1, alt: 'Android App Development' },
        { id: '02', title: 'iOS App Development', description: 'Our content writing conveys message directly', imgSrc: serviceImage2, alt: 'iOS App Development' },
        { id: '03', title: 'React Native App Development', description: 'Our content writing conveys message directly', imgSrc: serviceImage3, alt: 'React Native App Development' },
        { id: '04', title: 'Flutter App Development', description: 'Our content writing conveys message directly', imgSrc: serviceImage4, alt: 'Flutter App Development' },
        { id: '05', title: 'Swift App Development', description: 'Our content writing conveys message directly', imgSrc: serviceImage5, alt: 'Swift App Development' },
    ];

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
            <EngagingUiCarouselSection />
            <UniqueUIDesignsSection services={services} page='app'/>
            <AppDevelopmentProcessSection />
            <PricingSection/>
            <TestimonialSection/>
            <ContactForm/>
            <FooterSection />
        </>
    )
}

export default AppPage
