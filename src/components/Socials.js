import React from 'react';
// import icons
import {
    ImFacebook,
    ImInstagram,
} from 'react-icons/im';
// import cursor context
// import { CursorContext } from '../context/CursorContext';

const Socials =() => {
    // const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    
    return ( 
    
        <div 
            // onMouseEnter={mouseEnterHandler}
            // onMouseLeave={mouseLeaveHandler}
            className='hidden xl:flex ml-10'
        >
            <ul className='flex gap-x-4'>
                <li><a href='https://www.facebook.com/GLuxPhoto' target='_blank' rel='noreferrer'><ImFacebook /></a>
                </li>
                <li><a href='https://www.instagram.com/gluxphoto' target='_blank' rel='noreferrer'><ImInstagram /></a>
                </li>
            </ul>
        </div>
    );
};

export default Socials;