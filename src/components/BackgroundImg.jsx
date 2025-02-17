import React from "react";
import { useNavigate } from "react-router-dom";

const BackgroundImg = ({ img, heading, text, scrollTo, navigateTo }) => {
  const navigate = useNavigate();

  const handleBtn = () => {
    if (navigateTo) {
      navigate(navigateTo);
    } else if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative w-full h-[80vh]">
      {/* Background Image */}
      <img
        src={img}
        alt="bgImg"
        className="w-full h-full object-cover opacity-65"
      />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="bg-gradient-to-r from-black/80 to-transparent p-4 rounded-lg max-w-lg">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
            {heading}
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
            {text}
          </p>
          <button
            onClick={handleBtn}
            className="mt-4 px-4 sm:px-6 py-2 text-sm sm:text-base bg-black text-white font-semibold rounded-lg transition-all duration-300 hover:scale-110"
          >
            Know More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImg;
