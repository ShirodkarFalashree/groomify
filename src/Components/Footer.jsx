import React from "react";
import { FaPaw } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-[#3d4b42] px-6 md:px-20 py-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        {/* Left section */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="bg-[#3d4b42] text-white p-2 rounded-full">
              <FaPaw className="text-sm" />
            </div>
            <h1 className="text-lg font-semibold">Groomify</h1>
          </div>
          <p className="text-sm text-gray-600">
            Built in Framer by Justyna © 2025 All rights reserved.
          </p>
        </div>

        {/* Right section */}
        <div className="flex flex-col md:flex-row gap-10 w-full justify-between md:items-center">
          <div className="flex gap-6 text-sm text-gray-700">
            <a href="#" className="hover:text-black transition">
              About
            </a>
            <a href="#" className="hover:text-black transition">
              Services
            </a>
            <a href="#" className="hover:text-black transition">
              Gallery
            </a>
            <a href="#" className="hover:text-black transition">
              FAQs
            </a>
          </div>
          <div className="flex gap-6 text-sm text-gray-700">
            <a href="#" className="hover:text-black transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black transition">
              Salon Policies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
