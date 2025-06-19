import React from "react";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import bgimage from "../assets/images/asset 6.jpeg";
import { IoMdCall } from "react-icons/io";
  
const Contact = () => {
  return (
     <div
          className="relative min-h-screen text-center w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <div className="absolute inset-0 bg-white/80 z-10"></div>

          <div className=" relative z-10 min-h-screen  px-6 md:px-40 py-16">
      {/* Header */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2  px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600">
                 <IoMdCall className="text-xs" />
                  Contact
               </div>
        <h1 className="text-4xl md:text-6xl mt-6 font-light leading-tight">
          How to <span className="text-[#3d4b42] ">get in touch</span> with us
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Have a question? We're always here to help.
        </p>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Google Map */}
        <div className="w-full h-80 rounded-2xl overflow-hidden shadow-md">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.897898448484!2d-73.9847765!3d40.748817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18b8b457%3A0x4d7c5e8e0bb9a6bb!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1687111111111"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Grooming Salon Location"
          ></iframe>
        </div>

        {/* Contact Options */}
        <div className="flex flex-col gap-6">
          {/* Book Online */}
          <div className="bg-white p-6 rounded-2xl text-left shadow-md border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 text-[#3d4b42] p-3 rounded-full">
                <FaCalendarAlt />
              </div>
              <div>
                <h3 className="text-xl  font-semibold">Book online</h3>
                <p className="text-gray-600 mt-1">
                  Choose your date and book online now.
                </p>
                <button className="mt-3 bg-[#3d4b42] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#2e3934] transition">
                  ↳ Book Now
                </button>
              </div>
            </div>
          </div>

          {/* Call Us */}
          <div className="bg-white p-6 rounded-2xl text-left shadow-md border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 text-[#3d4b42] p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Call us</h3>
                <p className="text-gray-600 mt-1">
                  Speak to us over the phone.
                </p>
                <button className="mt-3 bg-[#3d4b42] text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-[#2e3934] transition">
                  ↳ Call Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
          </div>
  );
};

export default Contact;
