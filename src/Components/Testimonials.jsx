import React from "react";
import bgimage from "../assets/images/asset 6.jpeg";
import { CiHeart } from "react-icons/ci";

// Sample testimonials
const testimonials = [
  {
    message:
      "Max has been going to Groomify Salon for years, and they always make him feel special. He comes home smelling amazing and looking like a superstar. We wouldn’t go anywhere else!",
    name: "Laura, Max’s Owner",
    image: "https://i.imgur.com/3GvwNBf.jpg",
  },
  {
    message:
      "Groomify Salon is amazing! Buddy came out wagging his tail like never before. So much love and patience—thank you!",
    name: "Megan, Buddy’s Owner",
    image: "https://i.imgur.com/dzYqXv2.jpg",
  },
  {
    message:
      "Milo’s first grooming was perfect! The team was so sweet, and he came out looking adorable. Highly recommend Groomify Salon!",
    name: "Sophia, Milo’s Owner",
    image: "https://i.imgur.com/fHyEMsl.jpg",
  },
  {
    message:
      "Daisy has arthritis, and the groomers at Groomify Salon are so gentle with her. They even take breaks to let her rest. I’m so grateful for their care.",
    name: "Chris, Daisy’s Owner",
    image: "https://i.imgur.com/TzWcihb.jpg",
  },
  {
    message:
      "Snowball looked like a fluffy cloud of perfection after her grooming. The team treated her like royalty. I’m so happy I found Groomify Salon!",
    name: "Daniel, Snowball’s Owner",
    image: "https://i.imgur.com/6uHf7Az.jpg",
  },
  {
    message:
      "Whiskers is usually a nightmare at the groomer, but Groomify Salon worked miracles. He came out looking handsome and wasn’t stressed at all. Thank you for making my grumpy boy so happy!",
    name: "Ethan, Whiskers’ Owner",
    image: "https://i.imgur.com/N0fjH8g.jpg",
  },
];

const Testimonials = () => {
  return (
    <div
      className="relative min-h-screen text-center w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div className="absolute inset-0 bg-white/80 z-10"></div>

      <div className="relative z-20 px-5 md:px-40 py-20 text-gray-800">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600 mb-6">
          <CiHeart className="text-md" />
          Testimonials
        </div>
        <h1 className="text-4xl md:text-6xl">Some of our</h1>
        <h1 className="text-4xl md:text-6xl text-[#3d4b42] mb-14">
          Customers love
        </h1>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left"
            >
              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                "{item.message}"
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="font-medium text-sm">— {item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
