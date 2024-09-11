import { useState } from 'react';
// import photo
import EclipseImg from '../img/contact/SolarEclipse.jpg';
// import motion
import { motion } from 'framer-motion';
// import transitions
import { transition1 } from '../transitions'; 

// import emailjs service
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
init('REACT_APP_EMAILJS_USER_ID');

const Contact2 =({setAlertContent, setShowAlert}) => {
    const [ formData, setFormData ] = useState( {email: '', name: '', message:''});

    const handleChange = (e) => setFormData ({...FormData, [e.target.id]: e.target.value})
    const sendEmail = (e) => {
        e.preventDefault();
        // form.current.value = "";

        emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID, 
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
          formData,
          process.env.REACT_APP_EMAILJS_USER_ID,
            process.env.React_App_Public_Key
        ) 
          .then((result) => {
              setFormData({email: '', name: '', message: ''})
              setAlertContent({heading: "Thank you for contacting me.", message: "I will respond to your message as soon as I can."})
              setShowAlert(true)
          }, (error) => {
            setAlertContent({heading: "Something went wrong.", message: error.text})
            setShowAlert(true)
      });
    };

    
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
                        
                        className='lg:flex-1 lg:pt-32 px-4'
                    >
                        <h1 className='h1'>Let's Talk!
                        </h1>
                        <p className='mb-12'>I would love to talk about your project</p>
                        
                        {/* form  */}
                        <form className='flex flex-col gap-y-4'
                              type="text" 
                              placeholder=""
                              value={formData.name}
                              onChange={handleChange}
                            //   id='contact-form'
                        >
                            <input type="hidden" name="contact_number"></input>
                            <div className='flex gap-x-10'>
                                <input
                                className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                                type="text" 
                                placeholder="Name"
                                onChange={handleChange}
                                value={formData.name}
                            />
                                <input
                                    className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                                    type="email" 
                                    placeholder="name@example.com" 
                                    onChange={handleChange}
                                    value={formData.email}
                                />
                                </div>
                                <textarea 
                                    name='message'
                                    className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]'
                                    as="textarea" 
                                    placeholder="your message" 
                                    onChange={handleChange}
                                    value={formData.message}
                                /> 
                                {/* <input type="submit"
                                    value="Send"
                                    className='btn mb-[30px] mx-auto lg:mx-0 self-start' /> */}
                            <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'
                                type="submit"
                                onClick={e => sendEmail(e)}
                                >
                                Send</button>
                        </form> 
                    </div>
                    {/* image */}
                    <motion.div 
                        
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


export default Contact2;