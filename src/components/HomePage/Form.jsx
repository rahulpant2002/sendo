import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
    <div className="flex justify-center items-center my-10 bg-black">
      <div className="w-full max-w-md my-5 bg-white text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-black mb-6">Contact Us</h2>

        {submitted ? (
          <p className="text-green-400 text-center">Thank you for contacting us!</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 my-5">
            {/* Name Input */}
            <div className="flex flex-col">
              <label className="text-black">Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full p-2 rounded bg-black border border-black focus:outline-none focus:border-yellow-500" 
                required
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label className="text-black">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full p-2 rounded bg-black border border-black focus:outline-none focus:border-yellow-500" 
                required
              />
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label className="text-black">Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                className="w-full p-2 rounded bg-black border border-black focus:outline-none focus:border-yellow-500" 
                rows="2" 
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-[50%] bg-yellow-500 text-black cursor-pointer font-bold py-2 rounded hover:bg-yellow-600">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
