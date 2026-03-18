import React from "react";
import Navbar from "../components/Navbar";
import pic23 from "../assets/pic23.jpg";// Top hero image
import { Link } from "react-router-dom";

const beyondAcademicsDropdownItems = [
  { name: "Whole Education", path: "/beyond-academics/whole-education" },
  { name: "Collaborative Learning Model", path: "/beyond-academics/collaborative-learning" },
  { name: "Startup You", path: "/beyond-academics/startup-you" },
  { name: "Gurukul School of Leadership", path: "/beyond-academics/leadership" },
  { name: "Hajipur Training & Research Institute", path: "/beyond-academics/training-research" },
  { name: "Gurukul Community School", path: "/beyond-academics/community-school" },
];

const GurukulCommunitySchool = () => {
  return (
    <>
      <Navbar />
     <div className="pt-[90px] bg-black text-white min-h-screen">

  {/* HERO IMAGE */}
  <div className="w-full h-[250px] md:h-[400px] relative">
    <img
      src={pic23}
      alt="Gurukul Community School"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 35%" }}
    />

    <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
      <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Gurukul Community School
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
                      item.name === "Gurukul Community School"
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
            <div className="md:col-span-3 flex flex-col gap-10 text-gray-300">

              {/* HEADLINE */}
              <h2 className="text-2xl font-bold text-red-500">
                Cultivating Social Equity
              </h2>

              {/* FIRST IMAGE */}
              <div>
                <img
                  src="https://i.pinimg.com/1200x/35/fd/da/35fdda39acb667e97ccf514832786b1f.jpg"
                  alt="Community students"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* TEXT BELOW IMAGE */}
              <p className="leading-relaxed text-justify">
                The Indus International Community School fosters meaningful interaction between students from diverse socio-economic backgrounds, promoting cross-cultural understanding, empathy, and reciprocal growth. Through structured learning experiences and inclusive pedagogies, students develop into socially conscious and globally aware individuals.
              </p>

              {/* SECOND IMAGE */}
              <div>
                <img
                  src="https://i.pinimg.com/1200x/97/66/6a/97666a922923abf28a38e866f180d662.jpg"
                  alt="Students collaborating"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* TEXT BELOW SECOND IMAGE */}
              <p className="leading-relaxed text-justify">
                Emphasis is placed on inclusive learning, project-based activities, and community engagement. Students gain practical skills, interpersonal awareness, and leadership competencies essential for thriving in diverse environments.
              </p>

            </div>

          </div>
        </section>

      </div>
    </>
  );
};

export default GurukulCommunitySchool;