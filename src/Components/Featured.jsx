import React from "react";
import { IoSparklesOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import petimage from "../assets/images/asset 7.png"
const Featured = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white overflow-x-hidden pt-[72px] font-basic">
      <div className=" pl-40 py-20">
        <img className="rounded-3xl  border-white shadow-lg border-4" src={petimage} alt="" />
      </div>

      <div className=" flex flex-col justify-center items-center pl-16 pr-28">
        <div className="flex flex-col justify-center gap-4">
          <div className="inline-flex items-center gap-2 bg-white50 px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600">
            <IoSparklesOutline className="text-xs" />
            Featured Testimonials
          </div>
          <h2 className=" font-light text-gray-900 leading-snug text-2xl">
            "Jackie used to hate grooming, but ever since we found your salon,
            she can’t wait for her spa days! The team is so patient and loving -
            they’ve completely changed her experience. Now she struts out like a
            little diva every time!"
          </h2>

          <div className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <h2 className="text-2xl mt-2">Naila Porter</h2>
          <p className="text-sm font-light">Jackie’s Owner</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
