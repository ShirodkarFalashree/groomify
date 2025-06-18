import React from "react";
import bgimage from "../assets/images/asset 6.jpeg";
import { MdOutlineOndemandVideo } from "react-icons/md";
import dogVideo from "../assets/images/dogVideo.mp4"
const HowWeWork = () => {
  return (
    <div
      className="relative min-h-screen text-center w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/80 z-10"></div>
      <div className="relative z-20 p-40 ">
         <div className="inline-flex items-center gap-2 bg-white50 px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600">
                    <MdOutlineOndemandVideo className="text-xs" />
                    How we work
                  </div> <br />
        <h1 className="text-6xl">See the </h1>
        <h1 className="text-6xl">
          love <span className="text-[#3d4b42]">in action</span>{" "}
        </h1>
        <p className="text-lg font-light mt-2">Watch our groomers work their magic! From gentle brushing to precision cuts, <br /> every moment is filled with care and expertise. Your pet’s happiness is our priority.</p>
<div className="p-10">
    <video className="mt-3 shadow border-white border-4 rounded-3xl " src={dogVideo} autoPlay loop muted playsInline></video>
</div>
</div>
    </div>
  );
};

export default HowWeWork;
