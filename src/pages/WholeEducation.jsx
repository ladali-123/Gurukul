import React from "react";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/about.jpg";
import { Link } from "react-router-dom";

// Use your IB MYP/PYP/DP style diagram as middle image
import ibDiagram2 from "../assets/ib_diagram2.jpg";  // assuming diagram2 is mypImg

const beyondAcademicsDropdownItems = [
  { name: "Whole Education", path: "/beyond-academics/whole-education" },
  { name: "Collaborative Learning Model", path: "/beyond-academics/collaborative-learning" },
  { name: "Startup You", path: "/beyond-academics/startup-you" },
  { name: "Gurukul School of Leadership", path: "/beyond-academics/leadership" },
  { name: "Hajipur Training & Research Institute", path: "/beyond-academics/training-research" },
  { name: "Gurukul Community School", path: "/beyond-academics/community-school" },
];

const BeyondAcademicsWholeEducation = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-black text-white min-h-screen">

        {/* HERO IMAGE */}
        <div className="relative w-full h-[450px]">
          <img
            src={aboutImg}
            alt="Beyond Academics - Whole Education"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-16 -translate-y-1/2">
            <div className="bg-red-700/80 px-6 py-4 rounded">
              <h1 className="text-4xl md:text-5xl font-bold">
                Whole Education
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
                {beyondAcademicsDropdownItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-5 py-4 border-b border-gray-800 transition ${
                      item.name === "Whole Education"
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

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-red-500">
                  Whole Education at School Hajipur
                </h2>
                <p className="leading-relaxed">
                  At School Hajipur, we believe in nurturing every student holistically.
                  Beyond academics, our approach focuses on developing creativity, critical thinking,
                  emotional intelligence, and leadership qualities. Students are encouraged to
                  explore their passions, engage in experiential learning, and take ownership of
                  their personal growth.
                </p>
                <p className="leading-relaxed">
                  Our Whole Education philosophy integrates rigorous academic learning with
                  opportunities in arts, sports, service learning, and innovative projects.
                  This ensures students graduate not only with knowledge but with the skills,
                  character, and confidence to excel in a complex world.
                </p>
              </div>

              {/* Presentation Image */}
              <div>
                <img
                  src={ibDiagram2}
                  alt="Whole Education Diagram"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default BeyondAcademicsWholeEducation;