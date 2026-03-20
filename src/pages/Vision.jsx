import React from "react";
import Navbar from "../components/Navbar";
import pic2 from "../assets/pic2.jpg";
import { Link } from "react-router-dom";

const aboutDropdownItems = [
  { name: "The School", path: "/mission" },
  { name: "Mission Vision", path: "/vision" },
  { name: "Fact Sheet", path: "/fact-sheet" },
  { name: "Hajipur Campus", path: "/hajipur-campus" },
];

const filteredAboutDropdownItems = aboutDropdownItems.filter(item => item.name !== "Parent Advisory Committee");

const Vision = () => {
  return (
    <>
      <Navbar />

    <div className="pt-[90px] bg-black text-white min-h-screen">

  {/* HERO IMAGE */}
  <div className="w-full h-[250px] md:h-[400px] relative">
    <img
      src={pic2}
      alt="school"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 50%" }}
    />

    <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
      <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Mission Vision
        </h1>
      </div>
    </div>
  </div>



        {/* MAIN SECTION */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

            {/* LEFT SIDEBAR */}
            <div className="md:col-span-1">
              <div className="border border-gray-800 rounded-lg overflow-hidden">
                {filteredAboutDropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block px-5 py-4 border-b border-gray-800 transition ${item.name === "Mission Vision"
                        ? "bg-red-600 text-white font-semibold"
                        : "hover:bg-red-600"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="md:col-span-3">

              {/* MISSION */}
              <h2 className="text-3xl font-bold text-red-500 mb-4">
                Mission
              </h2>

              <p className="border-l-4 border-red-600 pl-6 text-gray-300 text-lg mb-10">
                “To nurture independent individuals through holistic education and lifelong learning.”
              </p>

              {/* VISION */}
              <h2 className="text-3xl font-bold text-red-500 mb-4">
                Vision
              </h2>

              <p className="border-l-4 border-red-600 pl-6 text-gray-300 text-lg">
                "To develop responsible global citizens and future leaders through values of love, empathy, 
                discipline, and respect—individuals who think globally and act responsibly in their communities."
              </p>

            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default Vision;