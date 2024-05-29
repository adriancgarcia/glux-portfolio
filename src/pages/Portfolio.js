import React from 'react';
// import images
import Image1 from '../img/portfolio/ACG_0025.jpg';
import Image2 from '../img/portfolio/ACG_0032.jpg';
import Image3 from '../img/portfolio/ACG_0080.jpg';
import Image4 from '../img/portfolio/The_Rookery.jpg';
import Image5 from '../img/portfolio/Navy_Pier2.JPG';
import Image6 from '../img/portfolio/Navy_Pier1.JPG';
import Image7 from '../img/portfolio/image-1.jpg';
import Image8 from '../img/portfolio/image-2.jpg';
import Image9 from '../img/portfolio/image-3.jpg';
import Image10 from '../img/portfolio/image-4.jpg';
import Image11 from '../img/portfolio/image-5.jpg';
import Image12 from '../img/portfolio/image-6.jpg';
import Image13 from '../img/portfolio/image-7.jpg';
import Image14 from '../img/portfolio/image-8.jpg';
// import  Link
import { Link } from 'react-router-dom';

const Portfolio =() => {
    return <section className='section'>
        <div className='container mx-auto h-full relative'>
            <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
                {/* text */}
                <div className='flex flex-col lg:items-start'>
                    <h1 className='h1'>Portfolio</h1>
                    <p className='mb-12 max-w-sm'></p>
                    <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0'>Let's Work Together</Link>
                </div>
                {/* image grid */}
                <div className='grid grid-cols-2 lg:gap-2'>
                    {/* image */}
                    <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
                        <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt=''/>
                    </div>
                    <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:[220px] bg-accent overflow-hidden'>
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
    </section>;
};

export default Portfolio;