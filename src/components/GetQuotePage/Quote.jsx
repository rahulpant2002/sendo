import React from 'react'
import ContactForm from './ContactForm'
import BackgroundImg from '../BackgroundImg';
import ScrollToTopButton from '../ScrollToTopButton';

const Quote = () => {
    const heading = "Get a Quote with Sendo";
    const text = "Getting a quote for logistics services is the first step in planning an efficient and cost-effective shipment. Whether you’re a business shipping bulk orders or an individual sending a package, a quick and accurate quote helps you estimate costs and timelines."

    const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    };

  return (
    <div>
        <BackgroundImg img='/Images/img13.jpg' heading={heading} text={text} scrollTo="form" />
        <div id='form'>
            <ContactForm/>
        </div>
        <ScrollToTopButton/>
    </div>
  )
}

export default Quote;