import React from "react";
import { GoPackage } from "react-icons/go";
import ServicePackage from "./ServicePackage";

const Packages = () => {
  return (
    <div className="min-h-screen w-full pt-28 px-6 sm:px-10 md:px-16 lg:px-20 text-center font-basic">
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600 mx-auto">
        <GoPackage className="text-xs" />
        Packages
      </div>

      {/* Headings */}
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-6 leading-tight">
        Tailored packages
      </h1>
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight mb-4">
        for <span className="text-[#3d4b42]">every pet</span>
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base max-w-2xl mx-auto mb-10">
        Whether your pet needs a quick refresh or a full spa <br className="hidden sm:block" />
        day, we’ve got the perfect package to suit their needs.
      </p>

      {/* Package Cards */}
      <ServicePackage />
    </div>
  );
};

export default Packages;
