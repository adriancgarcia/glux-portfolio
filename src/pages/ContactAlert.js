import { Alert } from "react-bootstrap";

const ContactAlert = ({alertContent, setShowAlert}) => {

    return (<Alert>
        <Alert.Heading>{alertContent.heading}</Alert.Heading>
        <p>
          {alertContent.message}
        </p>
        <hr />
        <div>
          <button onClick={() => setShowAlert(false)}>
            Return to Contact Form
          </button>
        </div>
      </Alert>)
  
  }

  export default ContactAlert;