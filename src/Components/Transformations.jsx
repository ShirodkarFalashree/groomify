import React from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import Marquee from "./Marquee";

const Transformations = () => {
  return (
    <div className="min-h-screen w-full px-40 py-20 text-center">
      <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600">
        <FaWandMagicSparkles  className="text-xs" />
        Transformations
      </div><br /><br />
      <h1 className="text-6xl">Smiles, styles,</h1>
      <h1 className="text-6xl">and <span className="text-[#3d4b42]">happy tails</span></h1><br />
      <p>Take a peek at some of our recent transformations. From <br /> fluffy pups to sleek kitties, every pet leaves looking like a star.</p>
<br /><br />
      <Marquee/>
    </div>
  );
};

export default Transformations;
