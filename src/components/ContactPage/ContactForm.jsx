// import { useState } from "react";
// import { Truck, Package2, Building2 } from "lucide-react";

// function ContactForm() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     mobileNo: "",
//     from: "",
//     to: "",
//     type: "",
//     company: "",
//     weight: "",
//     email: ""
//   });


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
 
//       const result = await response.json();
//       // alert(result.message);
//       // Reset form after submission
//       setFormData({
//         fullName: "",
//         mobileNo: "",
//         from: "",
//         to: "",
//         type: "",
//         company: "",
//         weight: "",
//         email: ""
//       });
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("Failed to submit form");
//     }
// };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className="min-h-screen  p-4 flex justify-center items-center">
//       <div className="bg-black rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-4xl">
//         <div className="flex items-center gap-3 mb-6">
//           <Truck className="w-8 h-8 text-indigo-600" />
//           <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">Shipping Details</h1>
//         </div>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name*" required className="input bg-white text-black border-black border-2" />
//           <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} placeholder="Mobile No*" required className="input  bg-white text-black border-black border-2" />
//           <input type="text" name="from" value={formData.from} onChange={handleChange} placeholder="From*" required className="input  bg-white text-black border-black border-2" />
//           <input type="text" name="to" value={formData.to} onChange={handleChange} placeholder="To*" required className="input  bg-white text-black border-black border-2" />

//           <select name="type" value={formData.type} onChange={handleChange} required className="input  bg-white text-black border-black border-2">
//             <option value="">Select type</option>
//             <option value="document">Document</option>
//             <option value="parcel">Parcel</option>
//             <option value="package">Package</option>
//           </select>

//           <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight (in Kg)*" required min="0" step="1" className="input  bg-white text-black border-black border-2" />

//           <select name="company" value={formData.company} onChange={handleChange} required className="input  bg-white text-black border-black border-2">
//             <option value="">Select Company</option>
//             <option value="fedex">FedEx</option>
//             <option value="dhl">DHL</option>
//             <option value="ups">UPS</option>
//           </select>

//           <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" required className="input  bg-white text-black border-black border-2" />

//           <button type="submit" className="w-full md:col-span-2 bg-yellow-500 text-white font-semibold py-2 rounded-lg cursor-pointer">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ContactForm;

// // Tailwind Input Styling
// const inputStyle = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition";
// const Input = ({ ...props }) => <input className={inputStyle} {...props} />;
// const Select = ({ children, ...props }) => <select className={inputStyle} {...props}>{children}</select>;


import { useState } from "react";
import { Truck } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    from: "",
    to: "",
    type: "",
    company: "",
    weight: "",
    email: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Successfully Submitted! 🎉");
        setFormData({
          fullName: "",
          mobileNo: "",
          from: "",
          to: "",
          type: "",
          company: "",
          weight: "",
          email: ""
        });
      } else {
        toast.error(result.message || "Submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen p-4 flex justify-center items-center">
      <div className="bg-black rounded-2xl shadow-xl p-6 md:p-8 w-full max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <Truck className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl md:text-3xl font-bold text-yellow-500">Shipping Details</h1>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name*" required className="input bg-white text-black border-black border-2" />
          <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange} placeholder="Mobile No*" required className="input  bg-white text-black border-black border-2" />
          <input type="text" name="from" value={formData.from} onChange={handleChange} placeholder="From*" required className="input  bg-white text-black border-black border-2" />
          <input type="text" name="to" value={formData.to} onChange={handleChange} placeholder="To*" required className="input  bg-white text-black border-black border-2" />

          <select name="type" value={formData.type} onChange={handleChange} required className="input  bg-white text-black border-black border-2">
            <option value="">Select type</option>
            <option value="ftl">FTL</option>
            <option value="ptl">PTL</option>
            <option value="parcel">Parcel</option>
            <option value="package">Package</option>
          </select>

          <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight (in Kg)*" required min="0" step="1" className="input  bg-white text-black border-black border-2" />

          <select name="company" value={formData.company} onChange={handleChange} required className="input  bg-white text-black border-black border-2">
            <option value="">Select Company</option>
            <option value="d2c">D2C</option>
            <option value="b2b">B2B</option>
            <option value="b2c">B2C</option>
          </select>

          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" required className="input  bg-white text-black border-black border-2" />

          <button type="submit" className="w-[20%] md:col-span-2 bg-yellow-500 text-white font-semibold py-2 rounded-lg cursor-pointer">
            Submit
          </button>

        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default ContactForm;
