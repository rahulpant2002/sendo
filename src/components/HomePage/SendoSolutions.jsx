import React from "react";
import { useNavigate } from "react-router-dom";

const solutions = [
  {
    title: "D2C Brands",
    description: "We provide an integrated logistics solution built on Express Parcel, Warehousing, Freight, and more.",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/1828/1828959.png",
    alt: "D2C Icon",
  },
  {
    title: "B2C Customers",
    description: "India’s only online courier solution for personal shipping needs, with real-time tracking and free pickup.",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/2643/2643314.png",
    alt: "Courier Icon",
  },
  {
    title: "B2B Enterprises",
    description: "Custom logistics solutions for factories and retailers, improving reliability and reducing costs.",
    imgSrc: "https://cdn-icons-png.flaticon.com/512/2643/2643390.png",
    alt: "B2B Icon",
  },
];

const SendoSolutions = () => {
  const navigate = useNavigate();

  const handleBtn = ()=>{
    navigate('/contact');
  }

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-12 bg-white text-black mb-8">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        <span className="text-yellow-400">Sendo's</span> suite of solutions for
      </h2>

      {/* Features Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="p-6 bg-yellow-400 text-black rounded-lg shadow-lg text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <img src={solution.imgSrc} alt={solution.alt} className="w-12 h-12 text-black" />
            </div>
            <h3 className="text-xl font-bold">{solution.title}</h3>
            <p className="mt-2">{solution.description}</p>
            <button onClick={handleBtn} className="mt-4 inline-block bg-black rounded-md text-white p-2 font-semibold cursor-pointer">Know More →</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SendoSolutions;
