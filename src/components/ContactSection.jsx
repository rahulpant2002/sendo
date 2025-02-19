import React from 'react'
import BackgroundImg from './BackgroundImg'

const ContactSection = () => {
    const heading = "Get in touch with us";
    const text = "Get in touch with us Ready to enhance your logistics and supply chain? Get in touch with us today!"
  return (
    <div className='bg-black relative'>
        <BackgroundImg img="/Images/img16.jpg" heading={heading} text={text} navigateTo="/contact" />
    </div>
  )
}

export default ContactSection