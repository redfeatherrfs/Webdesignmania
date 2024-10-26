import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import AppPage from './pages/AppPage';
import LogoDesign from './pages/LogoDesign';




const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/app" element={<AppPage />} />
                <Route path="/logo-design" element={<LogoDesign />} />



            </Routes>
        </Router>
    );
};

export default App;
