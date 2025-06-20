import React from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import Marquee from "./Marquee";

const Transformations = () => {
  return (
    <div className="min-h-screen w-full px-6 sm:px-10 md:px-16 lg:px-20 py-16 sm:py-20 text-center font-basic">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600 mx-auto">
        <FaWandMagicSparkles className="text-xs" />
        Transformations
      </div>

      {/* Headings */}
      <h1 className="text-3xl sm:text-5xl lg:text-6xl mt-6">Smiles, styles,</h1>
      <h1 className="text-3xl sm:text-5xl lg:text-6xl mb-6">
        and <span className="text-[#3d4b42]">happy tails</span>
      </h1>

      {/* Paragraph */}
      <p className="text-sm sm:text-base max-w-2xl mx-auto mb-12">
        Take a peek at some of our recent transformations. From <br className="hidden sm:block" />
        fluffy pups to sleek kitties, every pet leaves looking like a star.
      </p>

      {/* Marquee Gallery */}
      <Marquee />
    </div>
  );
};

export default Transformations;
