import React from 'react'
import BackgroundImg from '../BackgroundImg';
import WhyPartner from './WhyPartners';
import VendorPartnership from './VendorPartnership';
import Benefits from './Benefits';
import ContactSection from '../ContactSection';
import ScrollToTopButton from '../ScrollToTopButton';

const Vendor = () => {
  const heading = "Sendo Logistics Solutions for Our Vendors.";
  const text = "Partner with Sendo Logistics to unlock all-in-one solutions and exclusive benefits, including higher earnings, professional training, insurance, digitization, medical checkups, and peace of mind—empowering you every step of the way.";

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <BackgroundImg img='/Images/img14.jpg' heading={heading} text={text} scrollTo="benefits" />
      <WhyPartner/>
      <div id='benefits'>
        <Benefits/> 
      </div>
      <VendorPartnership/>
      <ContactSection/>
      <ScrollToTopButton/>
    </div>
  )
}

export default Vendor