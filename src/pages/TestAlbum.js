import React from 'react';
// import images
import Image1 from '../img/testalbum/ACG_0025.jpg';
import Image2 from '../img/testalbum/ACG_0032.jpg';
import Image3 from '../img/testalbum/ACG_0080.jpg';
// import Image4 from '../img/testalbum/The_Rookery.jpg';
// import Image5 from '../img/testalbum/Navy_Pier2.JPG';
// import Image6 from '../img/testalbum/Navy_Pier1.JPG';
// import Image7 from '../img/testalbum/image-1.jpg';
// import Image8 from '../img/testalbum/image-2.jpg';
// import Image9 from '../img/testalbum/image-3.jpg';
// import Image10 from '../img/testalbum/image-4.jpg';
// import Image11 from '../img/testalbum/image-5.jpg';
// import Image12 from '../img/testalbum/image-6.jpg';
// import Image13 from '../img/testalbum/image-7.jpg';
// import Image14 from '../img/testalbum/image-8.jpg';

// ------ importing lightbox -------
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import  Link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';

export default function App() {
const [open, setOpen] = React.useState(false);

// TestAlbum =() => {

    return (
        <>
            <button type="button" onClick={() => setOpen(true)}>
                Open Lightbox
            </button>



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
                        <h1 className='h1'>Test Album</h1>
                        <p className='mb-12 max-w-sm'></p>
                        <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Let's Work Together</Link>
                    </motion.div>

                        <div 
                            className='grid grid-cols-1 grid-row-start-4 lg:gap-2'
                        >

                        </div>
                    <Lightbox
                                open={open}
                                close={() => setOpen(false)}
                                slides={[
                                    { src:{Image1} },
                                    { src:{Image2} },
                                    { src:{Image3} },

                                ]}
                    />
                </div>
            </div>

        </motion.section>   
        </> 
    );
}
                             
                           