import React from 'react';
import { FaPaw } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full h-[72px] flex z-99 items-center justify-between fixed px-6 md:px-40 backdrop-blur-sm bg-white/20 shadow-sm">
      
      {/* Left Side - Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-[#55625C] text-white p-2 rounded-full">
          <FaPaw size={18} />
        </div>
        <a href='#hero' className="text-xl font-medium text-gray-800">Groomify</a>
      </div>

      {/* Middle Nav Links */}
     <div className="hidden md:flex items-center gap-8 text-gray-900 text-sm">
  <a href="#about" className="hover:text-black transition">About</a>
  <a href="#packages" className="hover:text-black transition">Services</a>
  <a href="#transformations" className="hover:text-black transition">Gallery</a>
  <a href="#faqs" className="hover:text-black transition">FAQs</a>
</div>


      {/* Right Side - CTA Button */}
      <button className="bg-[#55625C] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#475148] transition">
        Book Appointment
      </button>
    </nav>
  );
};

export default Navbar;
