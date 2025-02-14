import { useState, useEffect, useRef } from "react";
import { FaCogs, FaLeaf, FaTruck, FaTachometerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const slides = [
  { icon: <FaCogs size={40} />, title: "Customized Solutions" },
  { icon: <FaLeaf size={40} />, title: "Sustainability Initiatives" },
  { icon: <FaTruck size={40} />, title: "Logistics Service Cost Efficiency" },
  { icon: <FaTachometerAlt size={40} />, title: "Real-time Visibility and Transparency" },
];

export default function LogisticsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((curr) => (curr + 1) % slides.length);
    }, 3000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center w-full p-6 bg-black my-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">Logistics Solutions for Every Need</h2>

      <div ref={sliderRef} className="relative w-full max-w-4xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="min-w-full flex flex-col items-center justify-center shadow-lg rounded-lg p-6 mx-auto text-center bg-gray-800 text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-yellow-500 mb-4">{slide.icon}</div>
              <p className="text-lg font-medium text-center ">{slide.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-4 w-4 cursor-pointer rounded-full transition-colors duration-300 ${
              currentSlide === index ? "bg-yellow-500 scale-125" : "bg-gray-400"
            }`}
            onClick={() => {
              setCurrentSlide(index);
              resetTimer();
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
