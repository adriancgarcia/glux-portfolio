import React, { useState } from "react";
import Contact2 from "./Contact2";
import ContactAlert from './ContactAlert';
// import { Container } from 'react-bootstrap';

const ContactPage = () => {

  const [ showAlert, setShowAlert ] = useState(false)
  const [ alertContent, setAlertContent ] = useState({heading: '', message: ''})

  return (
    <div>
      {showAlert ? <ContactAlert
        alertContent={alertContent}  
        setShowAlert={setShowAlert}
      /> : <Contact2
        setAlertContent={setAlertContent} 
        setShowAlert={setShowAlert}
      />}
    </div>

  )
}

export default ContactPage;