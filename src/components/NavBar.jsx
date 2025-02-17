import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../Images/Logo.png";

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
      <div className="max-w-7xl pr-4 ">
        <div className="flex justify-between h-16 items-center ">
          {/* Logo */}
          <div className="ml-0 pl-0">
            <Link to="/" className="text-xl font-bold text-white flex items-center h-40 w-40">
              <img src={logo} alt="logo" />
            </Link>
          </div>

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
            <NavLink to="/quote">Get Quote</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black opacity-95 absolute w-full left-0 shadow-lg">
          <div className="flex flex-col text-center text-white">
            <NavLinkMobile to="/" setIsOpen={setIsOpen}>Home</NavLinkMobile>
            <NavLinkMobile to="/about" setIsOpen={setIsOpen}>About Us</NavLinkMobile>
            <NavLinkMobile to="/services" setIsOpen={setIsOpen}>Our Services</NavLinkMobile>
            <NavLinkMobile to="/vendor" setIsOpen={setIsOpen}>Vendor</NavLinkMobile>
            <NavLinkMobile to="/contact" setIsOpen={setIsOpen}>Contact Us</NavLinkMobile>
          </div>
        </div>
      )}
    </nav>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded transition duration-200 ${
        isActive ? "bg-yellow-400 text-white font-semibold" : "hover:text-yellow-400"
      }`}
    >
      {children}
    </Link>
  );
};

// Mobile Navigation Link Component
const NavLinkMobile = ({ to, children, setIsOpen }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={() => setIsOpen(false)}
      className={`block px-4 py-3 border-b border-gray-200 transition ${
        isActive ? "bg-yellow-400 text-white font-semibold" : "hover:bg-gray-100"
      }`}
    >
      {children}
    </Link>
  );
};

export default NavBar;