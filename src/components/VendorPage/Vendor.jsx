import React from 'react'
import img19 from "../../Images/img19.jpg"
import BackgroundImg from '../BackgroundImg';
import WhyPartner from './WhyPartners';
import VendorPartnership from './VendorPartnership';
import Benefits from './Benefits';

const Vendor = () => {
  const heading = "Sendo Logistics Comprehensive Solutions for Our Vendors.";
  const text = "Partner with Sendo Logistics to unlock all-in-one solutions and exclusive benefits, including higher earnings, professional training, insurance, digitization, medical checkups, and peace of mind—empowering you every step of the way.";
  return (
    <div>
      <BackgroundImg img={img19} heading={heading} text={text} scrollTo="benefits" />
      <WhyPartner/>
      <div id='benefits'>
        <Benefits/> 
      </div>
      <VendorPartnership/>
    </div>
  )
}

export default Vendor