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
import WhatsAppButton from './components/WhatsAppButton';

// <!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-...your-integrity-hash..." crossorigin="anonymous"></script>

const App = () => {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                 
                    <Route path="/lp" element={<Lp />} />
                    <Route path="/lp/thank-you" element={<ThankYouPage />} />
                    <Route path="/lp/privacy" element={<PrivacyPolicy />} />
                    <Route path="/lp/terms" element={<TermsCondition />} />
                     
                </Routes>
                  <WhatsAppButton/>
            </Router>
        </HelmetProvider>
    );
};

export default App;
