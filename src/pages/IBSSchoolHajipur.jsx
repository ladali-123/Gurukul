import React from "react";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/about.jpg";
import heroImg from "../assets/admission.jpg";
import { Link } from "react-router-dom";

const curriculumDropdownItems = [
  { name: "IBS School Hajipur", path: "/curriculum/ibs-hajipur" },
  { name: "School Hajipur", path: "/curriculum/school-hajipur" },
  { name: "SEN & ESL", path: "/curriculum/sen-esl" },
  { name: "Age Criteria", path: "/age-criteria" },
];

const IBSHajipur = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-black text-white min-h-screen">

        {/* HERO IMAGE */}
        <div className="relative w-full h-[450px]">
          <img src={aboutImg} alt="about" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-16 -translate-y-1/2">
            <div className="bg-red-700/80 px-6 py-4 rounded">
              <h1 className="text-4xl md:text-5xl font-bold">IBS School Hajipur</h1>
            </div>
          </div>
        </div>

        {/* MAIN SECTION */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

            {/* LEFT SIDEBAR */}
            <div className="md:col-span-1">
              <div className="border border-gray-800 rounded-lg overflow-hidden mt-4">
                {curriculumDropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block px-5 py-4 border-b border-gray-800 transition ${
                      item.name === "IBS School Hajipur"
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

              {/* BULLET POINT CONTENT WITH HEADINGS */}
              <div className="flex flex-col gap-6">
                <h2 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">
                  Why Choose IBS School Hajipur
                </h2>
                <ul className="list-disc list-inside text-gray-300 text-base leading-relaxed space-y-4">
                  <li>
                    <strong>Globally Benchmarked Curriculum:</strong> The IB curriculum encourages
                    inquiry-led, concept-driven learning, nurturing critical thinking, creativity, and
                    global awareness in every student.
                  </li>
                  <li>
                    <strong>Modern Learning Spaces:</strong> Classrooms and collaborative zones are
                    designed to foster interactive learning, problem-solving, and group discussions.
                  </li>
                  <li>
                    <strong>Arts, Sports & Extracurriculars:</strong> Comprehensive facilities ensure
                    students excel not just academically, but also in creative, physical, and social arenas.
                  </li>
                  <li>
                    <strong>Personalized Attention:</strong> Small class sizes and focused mentorship
                    help every student achieve their academic and personal potential.
                  </li>
                  <li>
                    <strong>Leadership & Innovation Programs:</strong> Activities and projects develop
                    leadership skills, innovation, and confidence for global challenges.
                  </li>
                  <li>
                    <strong>Counseling & Career Guidance:</strong> Dedicated support prepares students
                    for higher education worldwide and helps with career planning.
                  </li>
                  <li>
                    <strong>Safe & Nurturing Environment:</strong> Boarding and day school options
                    provide a secure and caring environment for holistic growth.
                  </li>
                  <li>
                    <strong>Character Development:</strong> Emphasis on values, ethics, and social
                    responsibility ensures well-rounded, global citizens.
                  </li>
                </ul>
              </div>

              {/* BOTTOM IMAGE */}
              <div className="w-full mt-6">
                <img
                  src={heroImg}
                  alt="IBS School Hajipur Facilities"
                  className="w-full h-[400px] md:h-[450px] object-cover rounded-2xl"
                />
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default IBSHajipur;