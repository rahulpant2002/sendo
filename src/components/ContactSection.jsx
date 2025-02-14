import React from 'react'
import img6 from "../Images/img6.jpg"
import BackgroundImg from './BackgroundImg'
import ContactForm from './ContactPage/ContactForm';

const ContactSection = () => {
    const heading = "Get in touch with us";
    const text = "Get in touch with us Ready to enhance your logistics and supply chain? Get in touch with us today!"
  return (
    <div className='my-32 bg-black relative'>
        <BackgroundImg img={img6} heading={heading} text={text}/>
        {/* <div className='absolute top-1/2 right-1/4 shadow-lg "'>
            <ContactForm/>
        </div> */}
    </div>
  )
}

export default ContactSection