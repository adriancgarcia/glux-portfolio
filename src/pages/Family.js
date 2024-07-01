import React from 'react';
// import images
import Image1 from '../img/family/Candies_MaternityShoot_Morgan_0322.jpg';
import Image2 from '../img/family/Candies_MaternityShoot_Morgan_0345.jpg';
import Image3 from '../img/family/Candies_MaternityShoot_Morgan_0124.jpg';
import Image4 from '../img/family/_ADR0236.jpg';
import Image5 from '../img/family/_ADR0366.jpg';
import Image6 from '../img/family/_ACG7477.jpg';
import Image7 from '../img/family/_ACG7582.jpg';
import Image8 from '../img/family/_ACG7697.jpg';
import Image9 from '../img/family/_ACG7173.jpg';
import Image10 from '../img/family/_ACG6997.jpg';
import Image11 from '../img/family/_ACG6978.jpg';
import Image12 from '../img/family/_ACG6528.jpg';
import Image13 from '../img/family/_ACG6707.jpg';
import Image14 from '../img/family/_ACG6573.jpg';
// import  Link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// cursor context
// import { CursorContext } from '../context/CursorContext';

const Family =() => {
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
                <div className='flex flex-col xs:justify-start lg:flex-row h-full items-center gap-x-24 text-center lg:text-left pt-36 lg:pt-36 pb-8'>
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
                        <h1 className='h1'>Family Portraits</h1>
                        <p className='mb-12 max-w-sm'></p>
                        <Link to={'/contact'} className='btn mx-auto lg:mx-0'>Let's Work Together</Link>
                    </motion.div>
                    {/* image grid */}
                    <div 
                        // onMouseEnter={mouseEnterHandler}
                        // onMouseLeave={mouseLeaveHandler} 
                        className='grid grid-cols-3 grid-row-start-4 lg:gap-2 mt-4'
                    >
                        {/* image */}
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden mt-1000'>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hiddenmt-1000'>
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

export default Family;