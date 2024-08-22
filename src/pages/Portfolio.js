import React from 'react';
// import images
import Image1 from '../img/portfolio/wedding1.jpg';
import Image2 from '../img/portfolio/_ACG1319.jpg';
import Image3 from '../img/portfolio/Candies_MaternityShoot_Morgan_0322.jpg';
import Image4 from '../img/portfolio/Navy_Pier1.JPG';
// import Image4 from '../img/portfolio/Navy_Pier1.JPG';
// import Image4 from '../img/portfolio/Navy_Pier1.JPG';



// import  Link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// cursor context
// import { CursorContext } from '../context/CursorContext';

const Portfolio =() => {
    // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <motion.section 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition= {transition1} 
            className='section'
        >
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-36 lg:pt-36 pb-8'>
                    {/* text */} 
                    <motion.div 
                        // onMouseEnter={mouseEnterHandler}
                        // onMouseLeave={mouseLeaveHandler}
                        initial={{ opacity: 0, y: '80%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '80%' }}
                        transition= {transition1} 
                         className='flex flex-col lg:items-start'
                    >
                        <h1 className='h1'>My Work</h1>
                        <p className='mb-6 max-w-sm'></p>
                        <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Schedule An Appointment</Link>
                    </motion.div>
                    {/* image grid */}
                    <div 
                        // onMouseEnter={mouseEnterHandler}
                        // onMouseLeave={mouseLeaveHandler} 
                        className='grid grid-cols-2 sm:gap-1 lg:gap-2'
                    >
                        {/* image */}
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <Link to={'/weddings'}>
                                <h2>Weddings</h2>
                                <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt=''/>
                            </Link>
                        </div>

                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <Link to={'/maternity'}>
                                    <h2>Maternity</h2>
                                <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image2} alt=''/>
                            </Link >
                        </div>

                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <Link to={'/family'}>
                                    <h2>Family Portraits</h2>
                                <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt=''/>
                            </Link >    
                        </div>

                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <Link to={'/events'}>
                                    <h2>Events</h2>
                                <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt=''/>
                            </Link >    
                        </div>

                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <Link to={'/headshots'}>
                                    <h2>Headshots</h2>
                                <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt=''/>
                            </Link >    
                        </div>
                        {/* <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <Link to={'/testalbum'}>
                                    <h2>Test Album</h2>
                                <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt=''/>
                            </Link >    
                        </div> */}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Portfolio;