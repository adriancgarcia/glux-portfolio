import React from 'react';
// import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
// import routes route and useLocation  hook
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const AnimRoutes = () => {
    const location = useLocation();
    return (
            <AnimatePresence inital={true} mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                     <Route path='/contact' element={<Contact />} /> 
                </Routes>
            </AnimatePresence>
    );
};

export default AnimRoutes; 