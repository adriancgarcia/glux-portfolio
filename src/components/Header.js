import React from 'react';
// import components
import Socials from './Socials';
import Logo from '../img/header/camera-svgrepo.svg';
import MobileNav from './MobileNav';
// import Link
import { Link } from 'react-router-dom';

const Header =() => {
    return (
        <header className='fixed w-full px-[30px] lg:px-[100] z-30 h-[110px] lg:h-[140px] flex items-center bg-white'>
            <div className="flex flex-col xs:pt-4 xs:items-center lg:pl-20 lg:flex-row lg:items-center w-full justify-between">
                {/* logo */}
                <Link 
                    to={'/'}
            >
                <div className="flex flex-row justify-around max-w-[90px]">
                    <img src={Logo} alt='' />
                    <h1 className="h1 pl-5 pt-5 text-3xl">G Lux Photography</h1>  
                </div>   
                </Link>
                
               
                {/* nav - initially hidden - show on desktop mode */}
                <nav 
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