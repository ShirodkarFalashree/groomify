import React from "react";
import img1 from "../assets/images/asset 1.jpeg";
import img2 from "../assets/images/asset 2.jpeg";
import img3 from "../assets/images/asset 4.jpeg";
import img4 from "../assets/images/asset 5.jpeg";
import img5 from "../assets/images/asset 8.jpeg";
import img6 from "../assets/images/asset 9.jpeg";
import img7 from "../assets/images/asset 10.jpeg";
import img8 from "../assets/images/asset 11.jpeg";
import img9 from "../assets/images/asset 12.jpeg";
import img10 from "../assets/images/asset 13.jpeg";
import img11 from "../assets/images/asset 14.jpeg";
import img12 from "../assets/images/asset 15.jpeg";
import img13 from "../assets/images/asset 16.jpeg";
import img14 from "../assets/images/asset 17.jpeg";
import img15 from "../assets/images/asset 18.jpeg";
import img16 from "../assets/images/asset 19.jpeg";
import img17 from "../assets/images/asset 21.jpeg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9,
  img10, img11, img12, img13, img14, img15, img16, img17
];

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="whitespace-nowrap animate-marquee">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`dog-${index}`}
            className="inline-block w-64 h-96 border-white border-4 object-cover rounded-2xl mx-2 shadow-sm"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
