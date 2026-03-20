import React from "react";
import Navbar from "../components/Navbar";
import pic2 from "../assets/pic2.jpg";
import { Link } from "react-router-dom";
import {
  FaFlag,
  FaBuilding,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
  FaTrophy,
  FaDollarSign,
  FaStar,
  FaMedal,
} from "react-icons/fa";

const aboutDropdownItems = [
  { name: "The School", path: "/mission" },
  { name: "Mission Vision", path: "/vision" },
  { name: "Fact Sheet", path: "/fact-sheet" },
  { name: "Hajipur Campus", path: "/hajipur-campus" },
];

const filteredAboutDropdownItems = aboutDropdownItems.filter(item => item.name !== "Parent Advisory Committee");

const stats = [
  { icon: <FaFlag className="text-red-500 text-2xl" />, label: "Founded", value: "26Th Jan,2002" },
  { icon: <FaBuilding className="text-red-500 text-2xl" />, label: "Campus Size", value: "4+ Acre" },
  { icon: <FaUserGraduate className="text-red-500 text-2xl" />, label: "Student Strength", value: "4000+" },
  { icon: <FaChalkboardTeacher className="text-red-500 text-2xl" />, label: "Faculty Strength", value: "30+" },
  { icon: <FaUsers className="text-red-500 text-2xl" />, label: "Class Size", value: "25 students" },
];

const highlights = [
  "Curriculum – International Baccalaureate (IB)",
  "Grades – Reception to 12",
  "Day cum Boarding School",
  "Gurukul is an IB World School",
];

const achievements = [
 
  
 
 
 
  {
    icon: <FaTrophy className="text-red-500 text-xl mt-1 shrink-0" />,
    text: (
      <>
       Gurukul Vidyapeeth (GKVP) is a CBSE-affiliated school focused on holistic education, nurturing intellect, character,
        and responsible individuals under the vision “Sa Vidya Ya Vimuktaye.”
      </>
    ),
  },
];

const FactSheet = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-black text-white min-h-screen">

  {/* HERO IMAGE */}
  <div className="w-full h-[250px] md:h-[400px] relative">
    <img
      src={pic2}
      alt="Fact Sheet"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 50%" }}
    />

    <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
      <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Fact Sheet
        </h1>
      </div>
    </div>
  </div>



        {/* MAIN SECTION */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

            {/* LEFT SIDEBAR */}
            <div className="md:col-span-1">
              <div className="border border-gray-800 rounded-lg overflow-hidden mt-4">
                {filteredAboutDropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block px-5 py-4 border-b border-gray-800 transition ${item.name === "Fact Sheet"
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
              <h2 className="text-3xl font-bold mb-2 text-red-500">Fact Sheet</h2>

              <div className="border-l-4 border-gray-500 pl-4 mb-8 text-gray-300 text-base italic">
                To create life entrepreneurs through holistic education and lifelong learning.
              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-2 bg-gray-900 border border-gray-800 rounded-xl p-5">
                    {stat.icon}
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                    <p className="text-white font-bold text-lg">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* HIGHLIGHT BOXES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {highlights.map((item, i) => (
                  <div key={i} className="border border-red-600 rounded-lg px-6 py-4 text-center font-semibold text-white text-sm tracking-wide">
                    {item}
                  </div>
                ))}
              </div>

              {/* ACHIEVEMENTS */}
              <div className="flex flex-col gap-6">
                {achievements.map((a, i) => (
                  <div key={i} className="flex gap-4 items-start bg-gray-900 border border-gray-800 rounded-xl p-5 text-gray-300 text-sm leading-relaxed">
                    {a.icon}
                    <p>{a.text}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default FactSheet;