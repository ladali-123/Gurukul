import React from "react";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/about.jpg";
import { Link } from "react-router-dom";

const curriculumDropdownItems = [
  { name: "IBS School Hajipur", path: "/curriculum/ibs-hajipur" },
  { name: "School Hajipur", path: "/curriculum/school-hajipur" },
  { name: "SEN & ESL", path: "/curriculum/sen-esl" },
  { name: "Age Criteria", path: "/age-criteria" },
];

const SenEslHajipur = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-black text-white min-h-screen">

        {/* HERO IMAGE */}
        <div className="relative w-full h-[450px]">
          <img
            src={aboutImg}
            alt="SEN & ESL"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 md:left-16 -translate-x-1/2 md:translate-x-0 -translate-y-1/2">
            <div className="bg-red-700/80 px-4 md:px-6 py-3 md:py-4 rounded">
              <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
                SEN & ESL Support
              </h1>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

            {/* LEFT SIDEBAR */}
            <div className="md:col-span-1">
              <div className="border border-gray-800 rounded-lg overflow-hidden mt-4">
                {curriculumDropdownItems.map((item) => (
                  <Link
                    key={item.name}  // ✅ Use item.name instead of index
                    to={item.path}
                    className={`block px-5 py-4 border-b border-gray-800 transition ${item.name === "SEN & ESL"
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
            <div className="md:col-span-3 flex flex-col gap-6 text-gray-300">

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-red-500">
                  Special Education Needs (SEN)
                </h2>
                <p className="leading-relaxed text-justify">
                  School Hajipur provides personalised support to students with diverse learning needs.
                  Each child receives tailored assistance to help them achieve their full potential.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-red-500">
                  English as a Second Language (ESL)
                </h2>
                <p className="leading-relaxed text-justify">
                  Students with limited English proficiency benefit from structured ESL support.
                  The programme helps them develop confidence and academic English skills to fully participate in the curriculum.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-red-500">
                  Inclusive Education
                </h2>
                <p className="leading-relaxed text-justify">
                  Our inclusive approach ensures all students feel supported, engaged, and empowered
                  to succeed in a diverse learning environment.
                </p>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default SenEslHajipur;