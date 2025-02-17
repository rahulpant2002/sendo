import React from 'react'
import img6 from "../Images/img6.jpg"
import BackgroundImg from './BackgroundImg'

const ContactSection = () => {
    const heading = "Get in touch with us";
    const text = "Get in touch with us Ready to enhance your logistics and supply chain? Get in touch with us today!"
  return (
    <div className='bg-black relative'>
        <BackgroundImg img={img6} heading={heading} text={text} navigateTo="/contact" />
    </div>
  )
}

export default ContactSection