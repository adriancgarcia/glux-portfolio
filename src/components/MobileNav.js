import React, { useState } from 'react';
// import icons
import { IoMdClose } from 'react-icons/io';
import { CgMenuRight } from 'react-icons/cg';
// import link
import { Link } from 'react-router-dom';
//import socials
import { ImFacebook, ImInstagram,} from 'react-icons/im';
// import motion
import { motion } from 'framer-motion';  

// menu variants  
const menuVariants = {
    hidden: {
        x: '100%'
    },
    show: {
        x: 0,
        transition: {
            ease: [0.6, 0.01, 0.05, 0.9],
        },
    },
};

const MobileNav =() => {
    const [openMenu, setOpenMenu] = useState(false);
    const closeMenu = () => setOpenMenu(false);
    return (  
        <nav className='text-primary xl:hidden'>
            {/* nav open button */}
            <div onClick={()=> setOpenMenu(true)} 
            className='text-3xl cursor-pointer'>
                <CgMenuRight /> 
            </div> 
            {/* menu */}
            <motion.div 
                variants={menuVariants}
                initial='hidden'
                animate={openMenu ? 'show' : ''}
                className='bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
                
                {/* icon */}
                <div 
                    onClick={()=> setOpenMenu(false)}  
                    className='text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer'>
                    <IoMdClose />
                </div>
                {/* menu list */}
                <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-bold text-3xl'>
                    <li>
                        <Link to='/' onClick={closeMenu}>Home</Link>
                    </li>
                    <li>
                        <Link to='/about' onClick={closeMenu}>About</Link>
                    </li>
                    <li>
                        <Link to='/portfolio' onClick={closeMenu}>Portfolio</Link>
                    </li>
                    <li>
                        <Link to='/contact' onClick={closeMenu}>Contact</Link>
                    </li>
                    <li>
                        <a href='https://www.facebook.com/GLuxPhoto' onClick={closeMenu} target='_blank' rel='noopener noreferrer'><ImFacebook /></a>
                    </li>
                    <li>
                        <a href='https://www.instagram.com/gluxphoto' onClick={closeMenu} target='_blank' rel='noopener noreferrer'><ImInstagram /></a>
                    </li>
                </ul>
            </motion.div>
        </nav>
    );
};

export default MobileNav;