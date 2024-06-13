import React, {useContext, useRef } from 'react';
// import photo
import EclipseImg from '../img/contact/SolarEclipse.jpg';
// import motion
import { motion } from 'framer-motion';
// import transitions
import { transition1 } from '../transitions'; 
// import cursor context
import { CursorContext } from '../context/CursorContext';
// import emailjs service
import emailjs from '@emailjs/browser';

const Contact =() => {
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
        // form.current.value = "";

        emailjs.sendForm(
            process.env.React_App_Service_ID, 
            process.env.React_App_Email_Template,
            form.current,
            process.env.React_App_Public_Key) 
                .then((result) => {
                    console.log(result.text);
                    form.current.reset();
                    }, 
                    (error) => {
                        console.log(error.text);
            },
        );
    };

    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    // onMouseEnter={mouseEnterHandler}
    // onMouseLeave={mouseLeaveHandler}
    return (
        <motion.section 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: '100%' }}
            transition= {transition1} 
            className='section bg-white'
        >
            <div className='container mx-auto h-full'>
                <div className='flex flex-col lg:flex-row h-full item-center justify-start pt-36 gap-x-8 text-center lg:text-left'>
                    {/* bg */}
                    <motion.div 
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition= {transition1} 
                        className='hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10'
                    >   
                    </motion.div>
                    {/* text & form */}
                    <div 
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        className='lg:flex-1 lg:pt-32 px-4'
                    >
                        <h1 className='h1'>Contact Me</h1>
                        <p className='mb-12'>I would love to talk about your project</p>
                        {/* form  */}
                        <form className='flex flex-col gap-y-4'
                              ref={form} 
                              onSubmit={sendEmail}
                            //   id='contact-form'
                        >
                            <input type="hidden" name="contact_number" value=""></input>
                            <div className='flex gap-x-10'>
                                <input
                                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                                type='text'
                                name='user_name'
                                placeholder='Your name'
                            />
                                <input
                                    className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                                    type='email'
                                    name='user_email'
                                    placeholder='Your email address'
                                />
                                </div>
                                <textarea 
                                    name='message'
                                    className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                                    type='text'
                                    placeholder='Your message'
                                /> 
                                {/* <input type="submit"
                                    value="Send"
                                    className='btn mb-[30px] mx-auto lg:mx-0 self-start' /> */}
                            <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send</button>
                        </form> 
                    </div>
                    {/* image */}
                    <motion.div 
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                        initial={{ opacity: 0, y: '100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '100%' }}
                        transition= {transition1} 
                        className='lg:flex-1'
                    >
                        <img src={EclipseImg} alt='' />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );

};


export default Contact;