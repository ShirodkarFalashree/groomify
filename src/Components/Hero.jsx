import React from "react";
import picture from '../assets/images/asset 0.png'
const Hero = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white overflow-x-hidden pt-[72px] font-basic">
      <div className=" pl-40 pr-8 py-36  tracking-tighter "> 
        <h1 className="text-[85px] leading-24 ">Treat your pet to a luxurious</h1>
        <h1 className="text-[85px] leading-24  text-[#55625C]"> grooming experience</h1><br />
        <p className="font-light">Luxury pet grooming tailored to pamper your <br /> furry companion with care, style, and comfort.</p><br />
         <button className="bg-[#55625C] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#475148] transition">
        Book Appointment
      </button>
      </div>

      <div className=" pr-40 py-20">
        <img className="rounded-3xl" src={picture} alt="" />
      </div>
    </div>
  );
};

export default Hero;
