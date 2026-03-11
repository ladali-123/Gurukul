import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/admission.jpg";
import { Link } from "react-router-dom";

const aboutDropdownItems = [
  { name: "The School", path: "/mission" },
  { name: "Mission Vision", path: "/vision" },
  { name: "Fact Sheet", path: "/fact-sheet" },
  { name: "Hajipur Campus", path: "/hajipur-campus" },
  { name: "Parent Advisory Committee", path: "/parent-advisory" },
];

const Vision = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-black text-white min-h-screen">

        {/* HERO IMAGE */}
        <div className="relative w-full h-[220px] md:h-[350px]">
          <img
            src={heroImg}
            alt="school"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-1/2 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0 -translate-y-1/2">
            <div className="bg-red-700/80 px-6 md:px-10 py-3 md:py-4 rounded">
              <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
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
                {aboutDropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block px-5 py-4 border-b border-gray-800 transition ${item.name === " Mission"
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
                “To create life entrepreneurs through holistic education and
                lifelong learning.”
              </p>

              {/* VISION */}
              <h2 className="text-3xl font-bold text-red-500 mb-4">
                Vision
              </h2>

              <p className="border-l-4 border-red-600 pl-6 text-gray-300 text-lg">
                "To create global citizens and leaders of tomorrow through
                traditional values of Love, Empathy, Discipline and Respect –
                21st century citizens who think globally and act locally."
              </p>

            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default Vision;