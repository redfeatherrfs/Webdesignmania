import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import About from './pages/AboutUs';
import AppPage from './pages/AppPage';
import ContactUs from './pages/ContactUs';
import LogoDesign from './pages/LogoDesign';
import Services from './pages/Services';
import SMM from './pages/Smm';
import Seo from './pages/Seo';
import Stationary from './pages/Stationary';
import Lp from './pages/LandingPage/Lp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LpPrivacyPolicy from './pages/LpPrivacyPolicy';
import LpTermsCondition from './pages/LpTermsCondition';
import TermsCondition from './pages/TermsCondition';
import ThankYouPage from './pages/ThankYou';
import Countdown from './pages/Countdown';
import BlogPage from './pages/Blog';
import BlogsPage from './pages/Blogs';
// <!-- Bootstrap JS -->


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-...your-integrity-hash..." crossorigin="anonymous"></script>
const App = () => {
    return (
        <HelmetProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/mobile-app-design-services" element={<AppPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/professional-logo-design-services" element={<LogoDesign />} />
                <Route path="/social-media-marketing-services" element={<SMM />} />
                <Route path="/search-engine-optimization-services" element={<Seo />} />
                <Route path="/affordable-stationery-design-services" element={<Stationary />} />
                <Route path="/lp" element={<Lp/>} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/lp/privacy-policy" element={<LpPrivacyPolicy />} />
                <Route path="/terms-conditions" element={<TermsCondition />} />
                <Route path="/lp/terms-condition" element={<LpTermsCondition />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/black-friday" element={<Countdown />} />
                <Route path="/:slug" element={<BlogPage />} />
                <Route path="/blogs" element={<BlogsPage />} />
                
            </Routes>
        </Router>
        </HelmetProvider>
    );
};
export default App;