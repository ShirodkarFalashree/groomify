import React from "react";
import { IoSparklesOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import petimage from "../assets/images/asset 7.png";

const Featured = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white overflow-x-hidden pt-[72px] font-basic">
      
      {/* Image Section */}
      <div className="px-6 sm:px-10 md:pl-20 py-10 flex justify-center items-center">
        <img
          className="rounded-3xl border-white shadow-lg border-4 max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl"
          src={petimage}
          alt="Happy pet"
        />
      </div>

      {/* Testimonial Section */}
      <div className="flex flex-col justify-center items-start px-6 sm:px-10 md:pr-20 py-10">
        <div className="flex flex-col justify-center gap-4 max-w-xl">
          
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600">
            <IoSparklesOutline className="text-xs" />
            Featured Testimonials
          </div>

          <h2 className="font-light text-gray-900 text-lg sm:text-xl lg:text-2xl leading-relaxed">
            "Jackie used to hate grooming, but ever since we found your salon,
            she can’t wait for her spa days! The team is so patient and loving — 
            they’ve completely changed her experience. Now she struts out like a 
            little diva every time!"
          </h2>

          <div className="flex text-[#facc15]">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <h3 className="text-lg sm:text-xl font-semibold mt-2">Naila Porter</h3>
          <p className="text-sm font-light text-gray-600">Jackie’s Owner</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
