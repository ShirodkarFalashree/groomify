import React, { useState } from "react";
import { FaMagic, FaBath, FaCrown, FaStar } from "react-icons/fa";
import img1 from "../assets/images/asset 1.jpeg";
import img2 from "../assets/images/asset 2.jpeg";
import img3 from "../assets/images/asset 4.jpeg"; // Replace with actual paths

const services = [
  {
    title: "The Essential Elegance",
    icon: <FaMagic />,
    price: "$70",
    image: img1,
    features: [
      "Gentle bath with premium shampoo",
      "Nail trimming and ear cleaning",
      "Blow dry and light brushing",
    ],
  },
  {
    title: "The Signature Spa Day",
    icon: <FaBath />,
    price: "$110",
    image: img2,
    features: [
      "Everything in Essential Elegance",
      "Deep conditioning treatment",
      "Full-body brushing and fluff dry",
      "Scented finishing spray",
    ],
  },
  {
    title: "The Royal Retreat",
    icon: <FaCrown />,
    price: "$150",
    image: img3,
    features: [
      "Everything in the Signature Spa Day",
      "Blueberry facial to brighten and cleanse",
      "Luxury pawdicure with nail polish",
      "Hydrating fur mask for silky softness",
      "Hand-blown dry for a fluffy finish",
      "Custom accessory of your choice",
    ],
  },
];

const ServicePackage = () => {
  const [selected, setSelected] = useState(services[2]);

  return (
    <div className="p-6 md:p-14">
      {/* Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-10">
        {services.map((service) => (
          <button
            key={service.title}
            onClick={() => setSelected(service)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl shadow-sm border transition ${
              selected.title === service.title
                ? "bg-white border-[#d9dad7] shadow-md"
                : "bg-gray-50 border-transparent hover:shadow"
            }`}
          >
            <span className="text-[#3d4b42]">{service.icon}</span>
            <span className="text-[#3d4b42] font-medium">{service.title}</span>
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-10 items-center">
        {/* Left: Image */}
        <div className="rounded-2xl overflow-hidden shadow-md max-w-md w-full">
          <img
            src={selected.image}
            alt={selected.title}
            className="w-full h-[400px] object-cover object-center"
          />
        </div>

        {/* Right: Details */}
        <div className="bg-white rounded-2xl p-8 shadow-md w-full max-w-lg">
          <div className="text-sm bg-gray-100 inline-block px-3 py-1 rounded-full mb-3 text-gray-500 font-medium">
            {selected.price}
          </div>
          <h2 className="text-3xl font-bold text-[#3d4b42] mb-6">
            {selected.title}
          </h2>
          <ul className="space-y-3 text-gray-700">
            {selected.features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <FaStar className="text-[#3d4b42] mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-8 bg-[#3d4b42] text-white px-6 py-2 rounded-lg text-sm hover:bg-[#2f3e36] transition">
            ↳ Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicePackage;
