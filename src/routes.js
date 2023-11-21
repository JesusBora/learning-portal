import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Blog from './pages/Blog';
import Pricing from './pages/Pricing';
import JoinUs from './pages/JoinUs';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import AboutUs from './pages/AboutUs';

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
        </Routes>
    );
}

export default AppRoutes;
