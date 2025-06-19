import React, { useState } from "react";
import { FaPlus, FaMinus, FaPhoneAlt } from "react-icons/fa";
import dogImage from "../assets/images/asset 19.jpeg"; // Replace with your actual path
import { IoDocumentOutline } from "react-icons/io5";

const faqs = [
  {
    question: "How long does a grooming session take?",
    answer: "Typically between 1 to 2 hours depending on your pet's size and coat.",
  },
  {
    question: "Do you groom cats as well as dogs?",
    answer: "Yes! We provide grooming services for both cats and dogs.",
  },
  {
    question: "What if my pet is nervous or anxious?",
    answer: "We use calming techniques and breaks to make your pet feel safe.",
  },
  {
    question: "Can I stay with my pet during grooming?",
    answer: "Absolutely! You're welcome to stay nearby and check in any time.",
  },
  {
    question: "How often should I groom my pet?",
    answer: "It depends on the breed, but generally every 4-6 weeks is ideal.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white px-6 md:px-20 py-16">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        {/* Left: Dog Image */}
        <div className="relative w-full md:w-1/2 rounded-3xl overflow-hidden">
          <img
            src={dogImage}
            alt="Cute dog"
            className="w-full h-full object-cover rounded-3xl border-white border-4 shadow-2xl"
          />
         
        </div>

        {/* Right: FAQs */}
        <div className="w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 bg-white/50 px-4 py-1 rounded-full w-fit text-sm shadow-sm text-gray-600">
                    <IoDocumentOutline  className="text-xs" />
                    FAQs
                  </div>
          
          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            Frequently asked <span className="text-[#3d4b42]">questions</span>
          </h2>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h4 className="text-base md:text-lg font-medium text-left">
                    {faq.question}
                  </h4>
                  <div className="text-gray-500">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-sm text-gray-600 text-left">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
