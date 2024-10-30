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
import Lp from './pages/LandingPage/Lp';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsCondition';
import ThankYouPage from './pages/ThankYou';

// <!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-...your-integrity-hash..." crossorigin="anonymous"></script>

const App = () => {
    return (
        <HelmetProvider>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/app-design" element={<AppPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/logo-design" element={<LogoDesign />} />
                <Route path="/smm" element={<SMM />} />
                <Route path="/services" element={<Services />} />
                <Route path="/lp" element={<Lp/>} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-condition" element={<TermsCondition />} />
                <Route path="/thank-you" element={<ThankYouPage />} />

            </Routes>
        </Router>
        </HelmetProvider>
    );
};

export default App;
