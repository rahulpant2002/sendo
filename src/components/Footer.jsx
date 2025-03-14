import { useNavigate } from "react-router-dom";
import LogoFooter from "./LogoFooter";

const Footer = () => {
  const navigate = useNavigate();

  const handleService = () => {
    navigate('/services');
  };

  const handleSolution = () => {
    navigate("/"); // Navigate to home first
    setTimeout(() => {
      const element = document.getElementById("solutions");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Timeout ensures the DOM is loaded before scrolling
  };

  const handlePartners = () => {
    navigate('/vendor');
  };

  const handleCompany = () => {
    navigate('/about');
  };

  const handlePolicies = () => {
    navigate('/contact');
    setTimeout(() => {
      const element = document.getElementById("form");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleTouch = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById("getInTouch");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div>
      <LogoFooter />
      <footer className="bg-white text-black py-10 px-6">
        <div className="max-w-6xl mx-auto text-center sm:text-left">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* SERVICES */}
            <div>
              <h2 onClick={handleService} className="font-semibold cursor-pointer">SERVICES</h2>
              <ul className="text-sm space-y-2 mt-2">
                <li>Express Parcel</li>
                <li>Warehousing</li>
                <li>Part Truckload</li>
                <li>Full Truckload</li>
                <li>Software Platform</li>
              </ul>
            </div>

            {/* SOLUTIONS */}
            <div>
              <h2 onClick={handleSolution} className="font-semibold cursor-pointer">SOLUTIONS</h2>
              <ul className="text-sm space-y-2 mt-2">
                <li>D2C Brands</li>
                <li>B2B Enterprises</li>
                <li>B2C Enterprises</li>
              </ul>
            </div>

            {/* PARTNERS */}
            <div>
              <h2 onClick={handlePartners} className="font-semibold cursor-pointer">PARTNERS</h2>
              <ul className="text-sm space-y-2 mt-2">
                <li>Delivery Partner</li>
                <li>Fleet Owner</li>
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h2 onClick={handleCompany} className="font-semibold cursor-pointer">COMPANY</h2>
              <ul className="text-sm space-y-2 mt-2">
                <li>About Us</li>
                <li>Governance</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* GET IN TOUCH */}
            <div>
              <h2 onClick={handleTouch} className="font-semibold cursor-pointer">GET IN TOUCH</h2>
              <ul className="text-sm space-y-2 mt-2">
                <li>Support</li>
                <li>Raise a Query</li>
                <li>Rate Calculator</li>
              </ul>
            </div>

            {/* POLICIES */}
            <div>
              <h2 onClick={handlePolicies} className="font-semibold cursor-pointer">POLICIES</h2>
              <ul className="text-sm space-y-2 mt-2">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Fraud Disclaimer</li>
              </ul>
            </div>
          </div>

          {/* Social Media   */}
          <div className="text-black">
            <h6 className="footer-title font-bold">Social</h6>
            <div className="flex flex-wrap justify-center sm:justify-start gap-5 mt-4">
              <a className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current cursor-pointer">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
              <a className="social-icon" href="https://www.linkedin.com" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </footer>

      <p className="text-center text-white p-4 bg-black">
        Copyright © {new Date().getFullYear()} - All rights reserved by Sendo
      </p>
    </div>
  );
};

export default Footer;




// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <div>
//       <footer className="footer text-white p-10 flex justify-around bg-black">
//         <nav>
//           <h6 className="footer-title">Services</h6>
//           <a className="link link-hover">Branding</a>
//           <a className="link link-hover">Design</a>
//           <a className="link link-hover">Marketing</a>
//           <a className="link link-hover">Advertisement</a>
//         </nav>

//         <nav>
//           <h6 className="footer-title">Company</h6>
//           <Link to="/about" className="link link-hover">About us</Link>
//           <Link to='/contact' className="link link-hover">Contact</Link>
//           <Link to="/services" className="link link-hover">Services</Link>
//           <Link to="/" className="link link-hover">Home</Link>
//         </nav>

        // <nav>
        //   <h6 className="footer-title">Social</h6>
        //   <div className="grid grid-flow-col gap-4">
        //     <a>
        //       <svg
        //         xmlns="http://www.w3.org/2000/svg"
        //         width="24"
        //         height="24"
        //         viewBox="0 0 24 24"
        //         className="fill-current cursor-pointer">
        //         <path
        //           d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        //       </svg>
        //     </a>
        //     <a>
        //       <svg
        //         xmlns="http://www.w3.org/2000/svg"
        //         width="24"
        //         height="24"
        //         viewBox="0 0 24 24"
        //         className="fill-current cursor-pointer">
        //         <path
        //           d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        //       </svg>
        //     </a>
        //     <a>
        //       <svg
        //         xmlns="http://www.w3.org/2000/svg"
        //         width="24"
        //         height="24"
        //         viewBox="0 0 24 24"
        //         className="fill-current cursor-pointer">
        //         <path
        //           d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        //       </svg>
        //     </a>
        //     <a href="https://www.linkedin.com" target='_blank'>
        //       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
        //         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        //       </svg>
        //     </a>

        //   </div>
        // </nav>

//       </footer>
//       {/* <p className='text-center text-black p-2 bg-white'>Copyright © {new Date().getFullYear()} - All right reserved by (P) Ltd</p> */}
//     </div>
//   )
// }

// export default Footer