import React, { useState } from 'react';
import { FaPaw, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full h-[72px] flex z-50 items-center justify-between fixed px-6 md:px-40 backdrop-blur-sm bg-white/20 shadow-sm">
        
        {/* Left Side - Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-[#55625C] text-white p-2 rounded-full">
            <FaPaw size={18} />
          </div>
          <a href="#hero" className="text-xl font-medium text-gray-800">Groomify</a>
        </div>

        {/* Middle Nav Links - Hidden on small screens */}
        <div className="hidden md:flex items-center gap-8 text-gray-900 text-sm">
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#packages" className="hover:text-black transition">Services</a>
          <a href="#transformations" className="hover:text-black transition">Gallery</a>
          <a href="#faqs" className="hover:text-black transition">FAQs</a>
        </div>

        {/* Right Side - CTA Button & Hamburger */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-[#55625C] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#475148] transition">
            Book Appointment
          </button>
          <div className="md:hidden text-gray-800">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-white/80 backdrop-blur-sm flex flex-col items-center gap-6 py-6 z-40 shadow-md">
          <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 text-lg">About</a>
          <a href="#packages" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 text-lg">Services</a>
          <a href="#transformations" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 text-lg">Gallery</a>
          <a href="#faqs" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-900 text-lg">FAQs</a>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#55625C] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#475148] transition"
          >
            Book Appointment
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
