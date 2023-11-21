import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import JoinUs from './pages/JoinUs';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import UserGuidelines from './pages/UserGuideLines';
import Webinars from './pages/Webinars';
import Features from './pages/Features';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/join-us" element={<JoinUs />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/guidelines" element={<UserGuidelines />} />
            <Route path="/webinars" element={<Webinars />} />
            <Route path="/features" element={<Features />} />

        </Routes>
    );
}

export default AppRoutes;
