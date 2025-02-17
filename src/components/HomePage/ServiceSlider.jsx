import { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Order Fulfillment",
    description:
      "Experience seamless order fulfillment with our advanced systems and efficient processes.",
  },
  {
    title: "Heavy Haul Logistics",
    description:
      "Our cutting-edge technology and cost-effective processes can help you transport heavy haul shipments of any complexity more seamlessly than ever.",
  },
  {
    title: "Courier & Express Delivery Services",
    description:
      "Now deliver packages while ensuring timeliness, security, seamlessness, ease, and cost-effectiveness, all in one place, with our revolutionary delivery services.",
  },
];

export default function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const timerRef = useRef(null);

  const handleBtn = ()=>{
    navigate('/services');
  }

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    resetTimer(); 
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    resetTimer(); 
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className="flex flex-col items-center w-full p-6 my-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-black">Our Services</h2>
      <p className="text-gray-600 text-center mb-6 max-w-2xl">
 From seamless transportation to smart warehousing, distribution, and order fulfillment, Sendo Logistics provides tailored solutions designed for maximum efficiency and innovation. </p>
      <button onClick={handleBtn} className="bg-black text-white font-semibold px-4 py-2 rounded-lg mb-6 hover:bg-yellow-600 cursor-pointer">
        Know More →
      </button>

      <div className="relative w-full max-w-5xl flex overflow-hidden">
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full shadow-lg cursor-pointer" onClick={prevSlide}>
          <FaArrowLeft />
        </button>

        <motion.div
          key={currentSlide}
          className="flex w-full justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
            <h3 className="text-lg font-semibold mb-2">{slides[currentSlide].title}</h3>
            <p className="text-sm">{slides[currentSlide].description}</p>
          </div>
        </motion.div>

        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black text-white p-2 rounded-full shadow-lg cursor-pointer" onClick={nextSlide}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
