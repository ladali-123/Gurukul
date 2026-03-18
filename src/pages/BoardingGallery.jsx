import React from "react";
import { Link } from "react-router-dom";
import pic23 from "../assets/pic23.jpg";

const boardingDropdownItems = [
  { name: "Best Boarding School in Hajipur", path: "/boarding/best-boarding-hajipur" },
  { name: "Boarding Schedule", path: "/boarding/schedule" },
  { name: "Boarding Gallery", path: "/boarding/gallery" },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
  "https://images.unsplash.com/photo-1588072432836-e10032774350",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  "https://images.unsplash.com/photo-1498079022511-d15614cb1c02",
  "https://images.unsplash.com/photo-1532012197267-da84d127e765",
  "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
  "https://images.unsplash.com/photo-1511629091441-ee46146481b6",
  "https://images.unsplash.com/photo-1529390079861-591de354faf5",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
  "https://images.unsplash.com/photo-1519452575417-564c1401ecc0",
];

const BoardingGallery = () => {
  return (
    <div className="bg-black text-white pt-[90px]">

      {/* HERO */}
     <section className="w-full h-[250px] md:h-[400px] relative">
  <img
    src={pic23}
    alt="Boarding Gallery"
    className="w-full h-full object-cover"
    style={{ objectPosition: "center 35%" }}
  />

  <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
    <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
        Boarding Gallery
      </h1>
    </div>
  </div>
</section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-gray-400">
        Home &gt; Boarding &gt; Boarding Gallery
      </div>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <div className="md:col-span-1">
          <div className="border border-gray-800">

            {boardingDropdownItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`block px-6 py-4 border-b border-gray-800 ${item.name === "Boarding Gallery"
                    ? "bg-red-600"
                    : "hover:bg-red-600"
                  }`}
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>

        {/* GALLERY */}
        <div className="md:col-span-3">

          <h2 className="text-3xl font-bold text-red-500 mb-8">
            Boarding Life Gallery
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

            {galleryImages.map((img, index) => (

              <div
                key={index}
                className="overflow-hidden rounded-lg border border-gray-800 hover:border-red-600 transition"
              >
                <img
                  src={img}
                  alt="Boarding"
                  className="w-full h-40 object-cover hover:scale-110 transition duration-300"
                />
              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default BoardingGallery;