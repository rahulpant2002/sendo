import React from "react";

const requirements = [
  {
    image: '/Images/img9.jpg', // Replace with actual image URL
    text: "The vendor must possess self-owned or company-owned commercial vehicles."
  },
  {
    image: '/Images/img10.jpg', // Replace with actual image URL
    text: "The vendor should demonstrate flexibility in scaling up operations based on our needs."
  },
  {
    image: '/Images/img11.jpg', // Replace with actual image URL
    text: "The vendor should maintain a robust geographical presence with a substantial fleet of vehicles in their designated area."
  },
  {
    image: '/Images/img12.jpg', // Replace with actual image URL
    text: "The vendor should be a registered and licensed transporter, operating under a proprietorship structure."
  },
  {
    image: '/Images/img13.jpg', // Replace with actual image URL
    text: "The vendor should have access to well-maintained logistics infrastructure."
  },
  {
    image: '/Images/img14.jpg', // Replace with actual image URL
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