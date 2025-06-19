import React from "react";
import bgimage from "../assets/images/asset 6.jpeg";
import { LuDog } from "react-icons/lu";
import {
  FaPumpSoap,
  FaScissors,
  FaTooth,
  FaBrush,
  FaSpa,
  FaEarListen,
} from "react-icons/fa6";

const services = [
  {
    title: "Blueberry Facial",
    price: "$15",
    description:
      "A gentle cleanse designed to brighten, soothe, and refresh your pet’s face, getting rid of tear stains.",
    icon: <FaPumpSoap className="text-2xl text-[#55625C]" />,
  },
  {
    title: "Pawdicure Plus",
    price: "$20",
    description:
      "A complete paw treatment with a nail trim, gentle filing, and a soothing paw massage for ultimate comfort.",
    icon: <FaScissors className="text-2xl text-[#55625C]" />,
  },
  {
    title: "Teeth Brushing",
    price: "$10",
    description:
      "Freshen up your pet’s breath and maintain oral health with a thorough minty clean and gentle brushing.",
    icon: <FaTooth className="text-2xl text-[#55625C]" />,
  },
  {
    title: "De-Shedding",
    price: "$25",
    description:
      "Minimize loose fur and reduce shedding with a deep brush-out and specialized de-shedding tools.",
    icon: <FaBrush className="text-2xl text-[#55625C]" />,
  },
  {
    title: "Fur Conditioning",
    price: "$18",
    description:
      "Hydrate, soften, and restore shine to your pet’s coat with a nourishing deep-conditioning treatment.",
    icon: <FaSpa className="text-2xl text-[#55625C]" />,
  },
  {
    title: "Ear Cleaning",
    price: "$12",
    description:
      "Gently and thoroughly remove dirt and wax buildup to keep your pet’s ears clean, fresh, and irritation-free.",
    icon: <FaEarListen className="text-2xl text-[#55625C]" />,
  },
];

const Customize = () => {
  return (
    <div
      className="relative min-h-screen text-center w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="absolute inset-0 bg-white/80 z-10"></div>

      <div className="relative z-20 p-10 md:p-40 text-gray-800">
        {/* Subtitle */}
        <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600">
          <LuDog className="text-xs" />
          À la Carte Services
        </div>

        {/* Headings */}
        <h1 className="text-4xl md:text-6xl mt-6 ">
          <span className="text-[#3d4b42]">Customize</span> your
        </h1>
        <h1 className="text-4xl md:text-6xl ">pet’s perfect day</h1>

        {/* Paragraph */}
        <p className="mt-6 text-base md:text-lg text-gray-700">
          Need something specific? Pick and choose from our à la carte
          <br className="hidden md:block" />
          services to create a grooming experience tailored just for your pet.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-10 mt-16 ">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center">
                {service.icon}
              </div>
              <div className="flex items-center gap-2 text-lg font-semibold">
                {service.title}
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-md font-normal">
                  {service.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <button className="bg-[#55625C] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#475148] transition">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
