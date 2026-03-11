import React from "react";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/about.jpg";
import { Link } from "react-router-dom";

const beyondAcademicsDropdownItems = [
  { name: "Whole Education", path: "/beyond-academics/whole-education" },
  { name: "Collaborative Learning Model", path: "/beyond-academics/collaborative-learning" },
  { name: "Startup You", path: "/beyond-academics/startup-you" },
  { name: "Gurukul School of Leadership", path: "/beyond-academics/leadership" },
  { name: "Hajipur Training & Research Institute", path: "/beyond-academics/training-research" },
  { name: "Gurukul Community School", path: "/beyond-academics/community-school" },
];

const references = [
  "Reference 1: Source for leadership approach.",
  "Reference 2: Source for self-awareness and resilience.",
  "Reference 3: Source for experiential activities.",
  "Reference 4: Source for partnerships and workshops.",
];

const GurukulSchoolOfLeadership = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-black text-white min-h-screen">

        {/* HERO IMAGE */}
        <div className="relative w-full h-[450px]">
          <img
            src={aboutImg}
            alt="Gurukul School of Leadership"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-16 -translate-y-1/2">
            <div className="bg-red-700/80 px-6 py-4 rounded">
              <h1 className="text-4xl md:text-5xl font-bold">
                Gurukul School of Leadership
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
                      item.name === "Gurukul School of Leadership"
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

              {/* LEADERSHIP CONTENT */}
              <div className="space-y-6">

                <h2 className="text-2xl font-bold text-red-500">
                  Gurukul School of Leadership
                </h2>

                <p className="leading-relaxed">
                  At Gurukul School of Leadership, we focus on developing leaders who can inspire, 
                  innovate, and influence positive change. Our approach is grounded in experiential
                  learning — blending theory with real life application so students learn not just
                  to lead others, but first to lead themselves with confidence and clarity.
                  <sup>[1]</sup>
                </p>

                <p className="leading-relaxed">
                  Leadership development begins with self‑awareness, purpose, and resilience. Through guided reflection and hands‑on experiences, learners deepen their understanding of their strengths, values, and vision. The programme nurtures skills such as critical thinking, teamwork, effective communication, decision‑making, and ethical leadership — essential competencies for thriving in a complex world.
                  <sup>[2]</sup>
                </p>

                <p className="leading-relaxed">
                  We integrate experiential activities, mentorship sessions, and community‑focused projects to bridge classroom learning with real‑world leadership challenges. The aim is to cultivate leaders who are adaptable, empathetic, and grounded in purpose — ready to contribute meaningfully in diverse environments and inspire positive impact.
                  <sup>[3]</sup>
                </p>

                <p className="leading-relaxed">
                  Partnerships with organisations and industry practitioners enrich the learner journey, offering specialised workshops, assessments, and follow‑up development opportunities tailored to individual growth needs. This ensures that every participant walks away equipped with practical leadership tools and a roadmap for continuous personal and professional development.
                  <sup>[4]</sup>
                </p>

              </div>

              {/* LEADERSHIP IMAGE */}
              <div>
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGVhZGVyc2hpcCUyMGdyb3VwfGVufDB8fDB8fA%3D%3D&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Student leadership training"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* REFERENCES LIST */}
              <div className="text-gray-500 text-sm mt-4">
                <ol className="list-decimal list-inside space-y-1">
                  {references.map((ref, index) => (
                    <li key={index}>{ref}</li>
                  ))}
                </ol>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default GurukulSchoolOfLeadership;