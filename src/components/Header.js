import React, { useContext } from 'react';
// import components
import Socials from './Socials';
import Logo from '../img/header/camera-svgrepo.svg';
import MobileNav from './MobileNav';
// import Link
import { Link } from 'react-router-dom';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Header =() => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <header className='fixed w-full px-[30px] lg:px-[100] z-30 h-[100px] lg:h-[140px] flex items-center'>
            <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
                {/* logo */}
                <Link 
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    to={'/'} 
                    className='max-w-[150px]' 
                >
                    <img src={Logo} alt='' />
                </Link>
                {/* <h1>G Lux Photo</h1> */}

                {/* nav - initially hidden - show on desktop mode */}
                <nav 
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    className='hidden lg:flex gap-12 font-semibold'
                >
                    <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>Home</Link>
                    <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>About</Link>
                    <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
                    <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
                </nav>
            </div>
                {/* socials */}
                <Socials />
                {/* MobileNav  */}
                <MobileNav />
        </header>
    ); 
};
 
export default Header;