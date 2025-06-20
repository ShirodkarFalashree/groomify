import React from "react";
import bgimage from "../assets/images/asset 6.jpeg";
import { MdOutlineOndemandVideo } from "react-icons/md";
import dogVideo from "../assets/images/dogVideo.mp4";

const HowWeWork = () => {
  return (
    <div
      className="relative min-h-screen text-center w-full bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/80 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-6 sm:px-10 md:px-20 lg:px-40 py-20 flex flex-col items-center justify-center font-basic">
        
        {/* Tagline */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600 mb-4">
          <MdOutlineOndemandVideo className="text-xs" />
          How we work
        </div>

        {/* Headings */}
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold">See the</h1>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4">
          love <span className="text-[#3d4b42]">in action</span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg font-light max-w-3xl">
          Watch our groomers work their magic! From gentle brushing to precision cuts, <br className="hidden sm:block" />
          every moment is filled with care and expertise. Your pet’s happiness is our priority.
        </p>

        {/* Video */}
        <div className="mt-10 w-full flex justify-center">
          <video
            className="shadow border-white border-4 rounded-3xl w-full max-w-3xl h-auto"
            src={dogVideo}
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
