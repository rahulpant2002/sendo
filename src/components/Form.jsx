import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", mobileNo: "", email: "", location: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here, you can add logic to send form data to backend
  };

  return (
    <div className="flex justify-center items-center my-10 bg-white">
      <div className="w-full max-w-md my-5 bg-white  p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-black mb-6">Contact Us</h2>

        {submitted ? (
          <p className="text-yellow-400 text-center">Thank you for contacting us!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 my-5 text-white">
            {/* Name Input */}
            <div className="flex flex-col">
              <label className="text-white">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name"
                className="w-full p-2 rounded bg-white text-black border border-black focus:outline-none focus:border-yellow-400" 
                required
              />
            </div>

            {/* Mobile No */}
            <div className="flex flex-col">
              <label className="text-white">Mobile No</label>
              <input 
                type="tel" 
                name="mobileNo" 
                value={formData.mobileNo} 
                onChange={handleChange} 
                placeholder="Mobile No"
                className="w-full p-2 rounded bg-white text-black border border-black focus:outline-none focus:border-yellow-400" 
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label className="text-white">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email"
                className="w-full p-2 rounded bg-white text-black border border-black focus:outline-none focus:border-yellow-400" 
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white">Service Location</label>
              <input 
                type="text" 
                name="location" 
                value={formData.location} 
                onChange={handleChange} 
                placeholder="Location"
                className="w-full p-2 rounded bg-white text-black border border-black focus:outline-none focus:border-yellow-400" 
                required
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label className="text-white">Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Message"
                className="w-full p-2 rounded bg-white text-black border border-black focus:outline-none focus:border-yellow-400" 
                rows="2" 
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-[50%] bg-yellow-400 text-black cursor-pointer font-bold py-2 rounded hover:bg-yellow-600">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
