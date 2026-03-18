import React from "react";

// Import all your images
import pic2 from "../assets/pic2.jpg";
import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
import pic8 from "../assets/pic8.jpg";
import pic9 from "../assets/pic9.jpg";
import pic10 from "../assets/pic10.jpg";
import pic11 from "../assets/pic11.jpg";
import pic12 from "../assets/pic12.jpg";
import pic13 from "../assets/pic13.jpg";
import pic14 from "../assets/pic14.jpg";
import pic15 from "../assets/pic15.jpg";
import pic16 from "../assets/pic16.jpg";
import pic17 from "../assets/pic17.jpg";
import pic18 from "../assets/pic18.jpg";
import pic19 from "../assets/pic19.jpg";
import pic20 from "../assets/pic20.jpg";
import pic21 from "../assets/pic21.jpg";
import pic22 from "../assets/pic22.jpg";
import pic23 from "../assets/pic23.jpg";
import pic24 from "../assets/pic24.jpg";
import pic25 from "../assets/pic25.jpg";

// Create an array of all gallery images
const galleryImages = [
  pic4, pic5, pic6, pic7, pic8, pic9, pic10,
  pic11, pic12, pic13, pic14, pic15, pic16,
  pic17, pic18, pic19, pic20, pic21, pic22,
  pic23, pic24, pic25
];

const Gallery = () => {
  return (
    <div className="bg-black text-white">
      {/* HERO */}
    <section className="w-full h-[250px] md:h-[400px] relative">
  <img
    src={pic2}
    alt="Activity"
    className="w-full h-full object-cover"
    style={{ objectPosition: "center 50%" }}
  />

  <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
    <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-[700px]">
      
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
        Activity 
      </h1>

      

    </div>
  </div>
</section>

      {/* GALLERY */}
      <section className="max-w-8xl mx-auto px-24 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {galleryImages.map((imgSrc, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-gray-800 hover:border-red-600 transition"
            >
              <img
                src={imgSrc}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[300px] object-cover hover:scale-110 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;