import React from "react";
import { GoPackage } from "react-icons/go";
import ServicePackage from "./ServicePackage";

const Packages = () => {
  return (
    <div className="min-h-screen w-full pt-36 px-40 text-center">
      <div className="inline-flex items-center gap-2 bg-white50 px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600">
        <GoPackage className="text-xs" />
        Packages
      </div><br />
      <h1 className="text-7xl">Tailored packages</h1>
      <h1 className="text-7xl">for <span className=" text-[#3d4b42]">every pet</span></h1> <br />
      <p>Whether your pet needs a quick refresh or a full spa <br /> day, we’ve got the perfect package to suit their needs.</p>

      <ServicePackage/>
    </div>
  );
};

export default Packages;
