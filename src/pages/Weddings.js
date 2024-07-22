import React, { useState } from 'react';
// import images
// import Image1 from '../img/events/ACG_0025.jpg';
// import Image2 from '../img/events/ACG_0032.jpg';
// import Image3 from '../img/events/ACG_0080.jpg';
// import Image4 from '../img/events/The_Rookery.jpg';
// import Image5 from '../img/events/Navy_Pier2.JPG';
// import Image6 from '../img/events/Navy_Pier1.JPG';
// import Image7 from '../img/events/image-1.jpg';
// import Image8 from '../img/events/image-2.jpg';
// import Image9 from '../img/events/image-3.jpg';
// import Image10 from '../img/events/image-4.jpg';
// import Image11 from '../img/events/image-5.jpg';
// import Image12 from '../img/events/image-6.jpg';
// import Image13 from '../img/events/image-7.jpg';
// import Image14 from '../img/events/image-8.jpg';

// ------ importing lightbox -------
import Lightbox from "yet-another-react-lightbox"; 
import "yet-another-react-lightbox/styles.css";
import { weddingImages } from '../data/weddingImages';
import { Fullscreen, Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";

// import  Link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';

import Images from '../images';

const Weddings = () => {
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
                <div className='flex flex-col xs: pt-36 xs:text-center lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left lg:pt-[500px] pb-8'>
                    {/* text */}
                    <motion.div 
                        initial={{ opacity: 0, y: '80%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '80%' }}
                        transition= {transition1} 
                        className='flex flex-col lg:items-start'
                    >
                        <h1 className='h1'>Weddings</h1>
                        <p className='mb-12 max-w-sm'></p>
                        <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Let's Work Together</Link>
                    </motion.div>

                    {/* image grid */}
                    <div 
                        className='grid grid-cols-1 grid-row-start-4 lg:gap-2 cursor-pointer'
                    >
                    {/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}

                    <Images 
                        data={weddingImages} 
                        onClick={(currentIndex) => setIndex(currentIndex)} 
                    />

                    <Lightbox 
                        plugins={[Fullscreen, Thumbnails]}
                        // open={open} 
                        // close={() => setOpen(false)}

                        index={index}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                        slides={weddingImages}
                    />

                    </div>
                </div>
            </div>
        </motion.section> 
    </> 
    ); 
};

export default Weddings;