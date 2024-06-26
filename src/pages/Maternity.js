import React from 'react';
// import images
import Image1 from '../img/maternity/ACG_0025.jpg';
import Image2 from '../img/maternity/ACG_0032.jpg';
import Image3 from '../img/maternity/ACG_0080.jpg';
import Image4 from '../img/maternity/The_Rookery.jpg';
import Image5 from '../img/maternity/Navy_Pier2.JPG';
import Image6 from '../img/maternity/Navy_Pier1.JPG';
import Image7 from '../img/maternity/image-1.jpg';
import Image8 from '../img/maternity/image-2.jpg';
import Image9 from '../img/maternity/image-3.jpg';
import Image10 from '../img/maternity/image-4.jpg';
import Image11 from '../img/maternity/image-5.jpg';
import Image12 from '../img/maternity/image-6.jpg';
import Image13 from '../img/maternity/image-7.jpg';
import Image14 from '../img/maternity/image-8.jpg';
// import  Link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// cursor context
// import { CursorContext } from '../context/CursorContext';

const Maternity =() => {
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
                <div className='flex flex-col xs: pt-36 xs:text-center lg:flex-row h-full items-center justify-start gap-x-24 lg:text-left lg:pt-[600px] pb-8'>
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
                        <h1 className='h1'>Maternity</h1>
                        <p className='mb-12 max-w-sm'></p>
                        <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Let's Work Together</Link>
                    </motion.div>
                    {/* image grid */}
                    <div 
                        // onMouseEnter={mouseEnterHandler}
                        // onMouseLeave={mouseLeaveHandler} 
                        className='grid grid-cols-3 grid-row-start-4 lg:gap-2'
                    >
                        {/* image */}
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image2} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image3} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image5} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image6} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image7} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image8} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image9} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image10} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image11} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image12} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image13} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image14} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Maternity;