import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Mr. Sunil Sahare",
    text: "I am highly impressed with the professionalism and passion of people in this warehouse. I am also equally impressed with the \"5S\" principles followed in material storage. I am proud of you all. Keep it up.",
  },
  {
    name: "Ms. Aruna Kovvuri",
    text: "Very well organized operations, modern warehouses are very neat & clean. My heartiest congratulation to OM Team.",
  },
  {
    name: "Mr. Ashish Kumar Sahu",
    text: "Very nice process and monitoring. Tracking of goods movement & OPS is commendable.",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-black bg-yellow-400 rounded-md my-5">
      <h2 className="text-center text-2xl font-bold mb-6">Testimonials</h2>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={index}
            className="p-6 bg-white rounded-lg text-center"
          >
            <p className="text-lg italic">"{testimonial.text}"</p>
            <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
