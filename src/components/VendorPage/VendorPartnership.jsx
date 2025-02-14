import React from "react";
import img9 from "../../Images/img9.jpg"
import img10 from "../../Images/img10.jpg"
import img11 from "../../Images/img11.jpg"
import img12 from "../../Images/img12.jpg"
import img13 from "../../Images/img13.jpg"
import img14 from "../../Images/img14.jpg"
import img15 from "../../Images/img15.jpg"
 
const requirements = [
  {
    image: img9, // Replace with actual image URL
    text: "The vendor must possess self-owned or company-owned commercial vehicles."
  },
  {
    image: img10, // Replace with actual image URL
    text: "The vendor should demonstrate flexibility in scaling up operations based on our needs."
  },
  {
    image: img11, // Replace with actual image URL
    text: "The vendor should maintain a robust geographical presence with a substantial fleet of vehicles in their designated area."
  },
  {
    image: img12, // Replace with actual image URL
    text: "The vendor should be a registered and licensed transporter, operating under a proprietorship structure."
  },
  {
    image: img13, // Replace with actual image URL
    text: "The vendor should have access to well-maintained logistics infrastructure."
  },
  {
    image: img14, // Replace with actual image URL
    text: "The vendor must adhere to compliance and regulatory requirements."
  }
];
 
const VendorPartnership = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-3xl text-black
         font-bold text-center mb-8">Vendor Partnership Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((item, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={item.image} alt="Requirement" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <p className="text-gray-700 text-center">{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
 
export default VendorPartnership;