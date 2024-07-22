import React, { useState } from 'react';

// ------ importing lightbox -------
import Lightbox from "yet-another-react-lightbox"; 
import "yet-another-react-lightbox/styles.css";
import { maternityImages } from '../data/maternityImages';
import { Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// import  Link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';

import Images from '../images';

const Maternity = () => {
    // const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1);

    return (
        <>
        <motion.section 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition= {transition1} 
            className='section'
        >
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col xs: pt-40 xs:text-center lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left lg:pt-[800px] pb-8'>
                    {/* text */}
                    <motion.div 
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
                        className='grid grid-cols-1 grid-row-start-4xs: pt-[40px] xs:gap-6 lg:gap-2 cursor-pointer'
                    >
                    {/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}

                    <Images 
                        data={maternityImages} 
                        onClick={(currentIndex) => setIndex(currentIndex)} 
                    />

                    <Lightbox 
                        plugins={[Fullscreen, Thumbnails]}
                        // open={open} 
                        // close={() => setOpen(false)}

                        index={index}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                        slides={maternityImages}
                    />

                    </div>
                </div>
            </div>
        </motion.section> 
    </> 
    ); 
};

export default Maternity;