import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import AppPage from './pages/AppPage';
import ContactUs from './pages/ContactUs';
import LogoDesign from './pages/LogoDesign';
import Services from './pages/Services';
import SMM from './pages/Smm';
// <!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-...your-integrity-hash..." crossorigin="anonymous"></script>






const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/app-design" element={<AppPage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/logo-design" element={<LogoDesign />} />
                <Route path="/smm" element={<SMM />} />
                <Route path="/services" element={<Services />} />

            </Routes>
        </Router>
    );
};

export default App;
