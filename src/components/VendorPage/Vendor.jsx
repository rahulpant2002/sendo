import React from 'react'
import img14 from "../../Images/img14.jpg"
import BackgroundImg from '../BackgroundImg';
import WhyPartner from './WhyPartners';
import VendorPartnership from './VendorPartnership';
import Benefits from './Benefits';
import ContactSection from '../ContactSection';

const Vendor = () => {
  const heading = "Sendo Logistics Comprehensive Solutions for Our Vendors.";
  const text = "Partner with Sendo Logistics to unlock all-in-one solutions and exclusive benefits, including higher earnings, professional training, insurance, digitization, medical checkups, and peace of mind—empowering you every step of the way.";
  return (
    <div>
      <BackgroundImg img={img14} heading={heading} text={text} scrollTo="benefits" />
      <WhyPartner/>
      <div id='benefits'>
        <Benefits/> 
      </div>
      <VendorPartnership/>
      <ContactSection/>
    </div>
  )
}

export default Vendor