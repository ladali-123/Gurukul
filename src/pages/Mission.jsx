import React from "react";
import Navbar from "../components/Navbar";
import heroImg from "../assets/admission.jpg";
import aboutImg from "../assets/about.jpg";
import { Link } from "react-router-dom";

const aboutDropdownItems = [
  { name: "The School", path: "/mission" },
  { name: "Mission Vision", path: "/vision" },
  { name: "Fact Sheet", path: "/fact-sheet" },
  { name: "Hajipur Campus", path: "/hajipur-campus" },
  { name: "Parent Advisory Committee", path: "/parent-advisory" },
];

const Mission = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-black text-white min-h-screen">

        {/* HERO IMAGE */}
        <div className="relative w-full h-[450px]">
          <img
            src={aboutImg}
            alt="about"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-1/2 left-1/2 md:left-16 -translate-x-1/2 md:translate-x-0 -translate-y-1/2">
            <div className="bg-red-700/80 px-4 md:px-6 py-3 md:py-4 rounded">
              <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
                The School
              </h1>
            </div>
          </div>
        </div>

        {/* MAIN SECTION */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 ">

            {/* LEFT SIDEBAR MENU */}
            <div className="md:col-span-1">
              <div className="border border-gray-800 rounded-lg overflow-hidden mt-4">
                {aboutDropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block px-5 py-4 border-b border-gray-800 transition ${item.name === "Vision"
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

              <h2 className="text-3xl font-bold mb-6 text-red-500">
                Gurukul School Hajipur
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-4 text-justify">
                Gurukul School was established with the vision of providing quality education and
                building strong character in students. It aims to nurture young minds with strong values, discipline,
                and knowledge so that they can become responsible and successful individuals in society.
              </p>



              {/* IMAGE */}
              <img
                src={heroImg}
                alt="school"
                className="relative w-full h-[220px] md:h-[450px] rounded-2xl"
              />
            </div>

          </div>
        </section>

        {/* GET IN TOUCH */}


      </div>
    </>
  );
};

export default Mission;