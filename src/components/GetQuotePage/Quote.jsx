import React from 'react'
import ContactForm from './ContactForm'
import BackgroundImg from '../BackgroundImg';
import img16 from "../../Images/img13.jpg"

const Quote = () => {
    const heading = "";
    const text = "Getting a quote for logistics services is the first step in planning an efficient and cost-effective shipment. Whether you’re a business shipping bulk orders or an individual sending a package, a quick and accurate quote helps you estimate costs and timelines."
  return (
    <div>
        <BackgroundImg img={img16} heading={heading} text={text} />
        <ContactForm/>
    </div>
  )
}

export default Quote;