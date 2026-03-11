import React from "react";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/about.jpg";
import heroImg from "../assets/admission.jpg";
import { Link } from "react-router-dom";

const aboutDropdownItems = [
  { name: "The School", path: "/mission" },
  { name: "Mission Vision", path: "/vision" },
  { name: "Fact Sheet", path: "/fact-sheet" },
  { name: "Hajipur Campus", path: "/hajipur-campus" },
  { name: "Parent Advisory Committee", path: "/parent-advisory" },
];

const HajipurCampus = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-black text-white min-h-screen">

        {/* HERO IMAGE */}
        <div className="relative w-full h-[450px]">
          <img src={aboutImg} alt="about" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-16 -translate-y-1/2">
            <div className="bg-red-700/80 px-6 py-4 rounded">
              <h1 className="text-4xl md:text-5xl font-bold">Hajipur Campus</h1>
            </div>
          </div>
        </div>

        {/* MAIN SECTION */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

            {/* LEFT SIDEBAR */}
            <div className="md:col-span-1">
              <div className="border border-gray-800 rounded-lg overflow-hidden mt-4">
                {aboutDropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block px-5 py-4 border-b border-gray-800 transition ${
                      item.name === "Hajipur Campus"
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
            <div className="md:col-span-3 flex flex-col gap-8">

              {/* TOP: image left + text right */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left Image */}
                

                {/* Right Text */}
                <div className="flex flex-col justify-start">
                  <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
                    School Campus
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed">
                    Gurukul International School, Hajipur, is spread across a lush 40+ acre
                    campus designed to inspire learning and creativity in every student.
                    The campus features state-of-the-art classrooms, modern laboratories,
                    and spacious sports facilities that support holistic development.
                    Our boarding facilities provide a safe, nurturing environment for
                    students from across the country. Surrounded by greenery and designed
                    with purpose, the campus reflects our commitment to world-class education.
                    Every corner of Gurukul is crafted to spark curiosity and build character.
                  </p>
                </div>
              </div>

              {/* BOTTOM: hero image */}
              <div className="w-full">
                <img
                  src={heroImg}
                  alt="school"
                  className="w-full h-[300px] md:h-[450px] object-cover rounded-2xl"
                />
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default HajipurCampus;