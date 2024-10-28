import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import AppPage from './pages/AppPage';
import ContactUs from './pages/ContactUs';
import LogoDesign from './pages/LogoDesign';
import SMM from './pages/Smm';





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
            </Routes>
        </Router>
    );
};

export default App;
