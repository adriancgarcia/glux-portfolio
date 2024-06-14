import React from 'react';
// import images
import AdrianImg from '../img/about/Adrian_Headshot.jpg'
// import Link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// cursorContext 
// import { CursorContext } from '../context/CursorContext';

const About =() => {
    // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext)
    return (
        <motion.section
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition= {transition1} 
            className='section'
        >
        <div 
            // onMouseEnter={mouseEnterHandler}
            // onMouseLeave={mouseLeaveHandler}
            className='container mx-auto h-full relative'
        >
            {/* text & image wrapper*/}
            <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
                {/* image */}
                <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
                    <img src={AdrianImg} alt='' />
                </div>
                {/* text */}
                <motion.div
                    initial={{ opacity: 0, y: '-80%' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-80%' }}
                    transition= {transition1} 
                    className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lh:items-start'>
                    <h1 className='h1'>About Me</h1>
                    <p className='mb-12 max-w-sm'>
                        Adrian Garcia has over 10 years experience capturing memories a nd telling stories with his camera. He approaches every assignment with photographic intention. 
                    </p>
                    <p className='mb-12 max-w-sm'>
                        His passion is to collaborate with individuals, groups, and communities to document and help tell their story. Whatever your project may be he provides his full expertise from beginning to end.
                    </p>
                    <br />
                    <Link to={'/portfolio'} className='btn'>View My Work</Link>
                </motion.div>
            </div>
        </div>
    </motion.section>
    );
};

export default About;