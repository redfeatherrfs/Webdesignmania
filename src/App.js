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
import TermsCondition from './pages/TermsCondition';
import ThankYouPage from './pages/ThankYou';
import Countdown from './pages/Countdown';

// <!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-...your-integrity-hash..." crossorigin="anonymous"></script>

const App = () => {
    return (
        <HelmetProvider>
        <Router>
            <Routes>
                <Route path="/lp" element={<Lp />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsCondition />} />
                
                {/* <Route path="/about-us" element={<About />} />
                <Route path="/app-design" element={<AppPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/logo-design" element={<LogoDesign />} />
                <Route path="/smm" element={<SMM />} />
                <Route path="/seo" element={<Seo />} />
                <Route path="/stationery" element={<Stationary />} /> */}
                {/* <Route path="/lp" element={<Lp/>} /> */}
                {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-condition" element={<TermsCondition />} />
                <Route path="/black-friday" element={<Countdown />} /> */}

            </Routes>
        </Router>
        </HelmetProvider>
    );
};

export default App;
