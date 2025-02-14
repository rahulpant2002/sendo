import React, { useState } from "react";
import {Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import logo from "../Images/Logo.png"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when clicking the active link
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false); // Close mobile menu when navigating
  }, [location.pathname]);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-white flex items-center h-40 w-40">
            <img src={logo} alt="" />
          </Link>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden text-black md:flex space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/services">Our Services</NavLink>
            <NavLink to="/vendor">Vendor</NavLink>
            <Link className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition" to="/contact">
              Contact Us
            </Link>
            {/* <NavLink to="/packers-movers">Packers and Movers</NavLink> */}
            {/* <NavLink to="/industries">Industries</NavLink> */}
            {/* <NavLink to="/resources">Resources</NavLink> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black opacity-95 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col text-center">
            <NavLinkMobile to="/" setIsOpen={setIsOpen}>Home</NavLinkMobile>
            <NavLinkMobile to="/about" setIsOpen={setIsOpen}>About Us</NavLinkMobile>
            <NavLinkMobile to="/services" setIsOpen={setIsOpen}>Our Services</NavLinkMobile>
            <NavLinkMobile to="/vendor" setIsOpen={setIsOpen}>Vendor</NavLinkMobile>
            <Link className="block bg-yellow-500 text-white px-4 py-2 rounded mx-4 my-2 hover:bg-yellow-600 transition" to="/contact">
              Contact Us
            </Link>
            {/* <NavLinkMobile to="/packers-movers" setIsOpen={setIsOpen}>Packers and Movers</NavLinkMobile> */}
            {/* <NavLinkMobile to="/industries" setIsOpen={setIsOpen}>Industries</NavLinkMobile> */}
            {/* <NavLinkMobile to="/resources" setIsOpen={setIsOpen}>Resources</NavLinkMobile> */}
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ to, children }) => (
  <Link className="hover:text-yellow-500 transition duration-200" to={to}>
    {children}
  </Link>
);

// Mobile Navigation Link Component
const NavLinkMobile = ({ to, children, setIsOpen }) => (
  <Link className="block px-4 py-3 border-b border-gray-200 hover:bg-gray-100 transition" to={to} onClick={() => setIsOpen(false)}>
    {children}
  </Link>
);

// Page Components
const Home = () => <Page title="Home" />;
const About = () => <Page title="About Us" />;
const Services = () => <Page title="Our Services" />;
const PackersMovers = () => <Page title="Packers and Movers" />;
const Industries = () => <Page title="Industries" />;
const Vendor = () => <Page title="Vendor" />;
const Resources = () => <Page title="Resources" />;
const Contact = () => <Page title="Contact Us" />;

// Reusable Page Layout
const Page = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center text-2xl font-semibold">
    {title}
  </div>
);

export default NavBar;

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="mt-16">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/packers-movers" element={<PackersMovers />} />
//           <Route path="/industries" element={<Industries />} />
//           <Route path="/vendor" element={<Vendor />} />
//           <Route path="/resources" element={<Resources />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
