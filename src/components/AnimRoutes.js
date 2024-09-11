import React from 'react';
// import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Weddings from '../pages/Weddings';
import Maternity from '../pages/Maternity';
import Events from '../pages/Events';
import Headshots from '../pages/Headshots';
import Family from '../pages/Family';
// import TestAlbum from '../pages/TestAlbum';
import ContactPage from '../pages/ContactPage';

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
                     <Route path='/contactpage' element={<ContactPage />} />
                     <Route path='/weddings' element={<Weddings />} />
                     <Route path='/maternity' element={<Maternity />} /> 
                     <Route path='/family' element={<Family />} />
                     <Route path='/events' element={<Events />} /> 
                     <Route path='/headshots' element={<Headshots />} />
                     {/* <Route path='/testalbum' element={<TestAlbum />} />   */}
                </Routes>
            </AnimatePresence>
    );
};

export default AnimRoutes; 