import React from 'react'
import img8 from "../../Images/img8.jpg"
import BackgroundImg from '../BackgroundImg';
import WhyPartner from './WhyPartners';
import VendorPartnership from './VendorPartnership';
import Benefits from './Benefits';

const Vendor = () => {
  const heading = "Sendo Logistics Comprehensive Solutions for Our Vendors.";
  const text = "Partner with Sendo Logistics to unlock all-in-one solutions and exclusive benefits, including higher earnings, professional training, insurance, digitization, medical checkups, and peace of mind—empowering you every step of the way.";
  return (
    <div>
      <BackgroundImg img={img8} heading={heading} text={text} />
      <WhyPartner/>
      <Benefits/> 
      <VendorPartnership/>
    </div>
  )
}

export default Vendor