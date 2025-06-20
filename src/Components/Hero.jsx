import React from "react";
import picture from '../assets/images/asset 0.png';

const Hero = () => {
  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white overflow-x-hidden pt-[72px] font-basic">
      
      {/* Left Text Section */}
      <div className="px-6 md:pl-20 md:pr-8 py-16 md:py-36 tracking-tight flex flex-col justify-center">
        <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] xl:text-[85px] leading-tight">
          Treat your pet to a luxurious
        </h1>
        <h1 className="text-[42px] sm:text-[56px] lg:text-[72px] xl:text-[85px] leading-tight text-[#55625C]">
          grooming experience
        </h1>
        
        <p className="font-light text-base sm:text-lg mt-6">
          Luxury pet grooming tailored to pamper your <br className="hidden sm:block" />
          furry companion with care, style, and comfort.
        </p>
        
        <button className="mt-8 bg-[#55625C] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#475148] transition w-fit">
          Book Appointment
        </button>
      </div>

      {/* Right Image Section */}
      <div className="px-6 md:pr-20 py-10 md:py-20 flex justify-center items-center">
        <img
          className="rounded-3xl w-full max-w-[500px] object-cover"
          src={picture}
          alt="Pet Grooming"
        />
      </div>
    </div>
  );
};

export default Hero;
