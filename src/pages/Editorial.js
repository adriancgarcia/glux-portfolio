import React, { useState } from 'react';

// ------ importing lightbox -------
import Lightbox from "yet-another-react-lightbox"; 
import "yet-another-react-lightbox/styles.css";
import { editorialImages } from '../data/editorialImages';
import { Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// import  Link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';

import Images from '../images';

// cursor context
// import { CursorContext } from '../context/CursorContext';

const Editorial =() => {
    // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    const [index, setIndex] = useState(-1);

    return (
        <motion.section 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition= {transition1} 
            className='section'
        >
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col xs: pt-36 xs:text-center lg:flex-row h-full items-center justify-start gap-x-24 lg:text-left lg:pt-[800px] pb-8'>
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
                        <h1 className='h1'>Editorial Images</h1>
                        <p className='mb-12 max-w-sm'></p>
                        <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Let's Work Together</Link>
                    </motion.div>
                    
                    {/* image grid */}
                    <div 
                        // onMouseEnter={mouseEnterHandler}
                        // onMouseLeave={mouseLeaveHandler} 
                        className='grid grid-cols-1 grid-row-start-4 lg:gap-2 cursor-pointer'
                    >

                    <Images 
                        data={editorialImages} 
                        onClick={(currentIndex) => setIndex(currentIndex)} 
                    />

                    <Lightbox 
                        plugins={[Fullscreen, Thumbnails]}
                        // open={open} 
                        // close={() => setOpen(false)}

                        index={index}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                        slides={editorialImages}
                    />


                        {/* image */}
                        {/* <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden mt-1000'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden mt-1000'>
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
                        </div>*/}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Editorial;