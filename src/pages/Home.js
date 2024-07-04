import React from 'react';
// import images
import AdrianImg from '../img/home/Adrian_Headshot.jpg';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// cursor context
// import { CursorContext } from '../context/CursorContext';
  
const Home = () => {  
    // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition= {transition1}
            className='section'
            >
            <div className='container mx-auto h-full relative'>
                {/* text & img wrapper */}
                <div className='flex flex-col xs:justify-center pt-2 lg:pt-[200px]'> 
                    {/* text */}
                    <motion.div 
                        initial={{ opacity: 0, y: '-50%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, x: '-50%' }}
                        transition= {transition1}
                        // onMouseEnter={mouseEnterHandler }
                        // onMouseLeave={mouseLeaveHandler} 
                        className='w-full xs:pt-32 pb-8 lg:pt-32 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start lg:pl-32'>
                        <h1 className='h1 xs:pb-2 lg:w-[400px]'>
                            G Lux Photo 
                        </h1>  
                        {/* <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Chicago, IL</p> */}
                        <Link to ={'/portfolio'} className='btn'>
                            View My Work
                        </Link> 
                    </motion.div>
                    {/* image */} 
                    <div className='flex flex-1 justify-center xs:max-h- xs:max-h-[350px] lg:h-full lg:max-h-[600px] '>
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition= {transition1} 
                            className='relative lg:-right-72 overflow-hidden'>
                            <motion.img
                                // className='xs:h-auto'
                                whileHover={{ scale: 1.1 }}
                                transition={transition1}
                                src={AdrianImg} alt='' 
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section> 
    );
};

export default Home;  