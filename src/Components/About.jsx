import React from "react";
import { FaHome } from "react-icons/fa";
import bgimage from "../assets/images/asset 6.jpeg";

const About = () => {
  return (
    <div
      className="relative h-[547px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-full px-6 md:px-40 py-10 font-basic">
        {/* Left Column */}
        <div className="flex flex-col justify-center gap-4">
          <div className="inline-flex items-center gap-2 bg-white50 px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600">
            <FaHome className="text-xs" />
            About Us
          </div>
          <h2 className="text-4xl md:text-7xl font-light text-gray-900 leading-snug">
            <span className=" text-[#3d4b42]">Groomify</span> pet <br />
            grooming salon
          </h2>
          <p className="text-base text-gray-700 max-w-md">
            For over 12 years, we’ve been dedicated to making pets look fabulous and feel
            loved. Because to us, your pet isn’t just a client — they’re family.
          </p>
        </div>

        {/* Right Column – Stats */}
        <div className="grid grid-cols-2 gap-6 md:gap-2 pl-40 items-center justify-items-start mt-10 md:mt-0">
          <div>
            <h3 className="text-3xl md:text-5xl text-[#3d4b42]">12+</h3>
            <p className="text-sm text-gray-600 mt-1">Years experience</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl text-[#3d4b42]">456+</h3>
            <p className="text-sm text-gray-600 mt-1">Pampered pets</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl text-[#3d4b42]">100%</h3>
            <p className="text-sm text-gray-600 mt-1">Positive reviews</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl text-[#3d4b42]">1899L+</h3>
            <p className="text-sm text-gray-600 mt-1">Of shampoo used</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
