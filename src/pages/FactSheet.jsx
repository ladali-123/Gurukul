import React from "react";
import Navbar from "../components/Navbar";
import aboutImg from "../assets/about.jpg";
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
  { name: "Parent Advisory Committee", path: "/parent-advisory" },
];

const stats = [
  { icon: <FaFlag className="text-red-500 text-2xl" />, label: "Founded", value: "July 14th, 2003" },
  { icon: <FaBuilding className="text-red-500 text-2xl" />, label: "Campus Size", value: "40+ acres" },
  { icon: <FaUserGraduate className="text-red-500 text-2xl" />, label: "Student Strength", value: "1100+" },
  { icon: <FaChalkboardTeacher className="text-red-500 text-2xl" />, label: "Faculty Strength", value: "160+" },
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
    icon: <FaMedal className="text-red-500 text-xl mt-1 shrink-0" />,
    text: (
      <>
        Lt. General Arjun Ray <strong>has been awarded with Lifetime Achievement Award (2024-25)</strong> by Education World for his preeminent contribution in the field of education. He is an exemplary learner, teacher and leader with a vision and strategies to bring innovation in education.
      </>
    ),
  },
  {
    icon: <FaStar className="text-red-500 text-xl mt-1 shrink-0" />,
    text: (
      <>
        Dr. Sarojini Rao has been selected as "Leaders-The Pillars in Education" in 2018 by Education World for her exemplary display of sincerity, dedication & hard work in the field of education and <strong>has been conferred the Cfore Lifetime Achievement Award 2025.</strong>
      </>
    ),
  },
  {
    icon: <FaTrophy className="text-red-500 text-xl mt-1 shrink-0" />,
    text: (
      <>
        Gurukul International School Hajipur has been ranked <strong>No. 1</strong> in International schools in India for 14 consecutive years (Cfore Rankings: In 2012 – under the <strong>'Most admired International Schools'</strong> category; In 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014 and 2013 under the 'Best Day-cum-boarding International Schools' category).
      </>
    ),
  },
  {
    icon: <FaMedal className="text-red-500 text-xl mt-1 shrink-0" />,
    text: (
      <>
        Gurukul International School Hajipur has been ranked <strong>No. 1</strong> India's Best School, by <strong>Education Today</strong> in 2017 under the category of International Jury's Choice Award.
      </>
    ),
  },
  {
    icon: <FaStar className="text-red-500 text-xl mt-1 shrink-0" />,
    text: (
      <>
        Gurukul International School Hajipur has been awarded the <strong>NDTV-Educomp South Zone Education</strong> awards 2016 in Academics, Pedagogy, Faculty Training, Inclusive Education, Instructional Leadership and Teacher Category for English.
      </>
    ),
  },
  {
    icon: <FaDollarSign className="text-red-500 text-xl mt-1 shrink-0" />,
    text: (
      <>
        In 2023-24 the highest scholarship amount received by a student was <strong>USD 393,000.</strong> The overall scholarship amount combined was over <strong>7.8 Million (7,800,000) USD.</strong>
      </>
    ),
  },
  {
    icon: <FaTrophy className="text-red-500 text-xl mt-1 shrink-0" />,
    text: (
      <>
        Gurukul International School has been awarded the <strong>White Swan Education Award</strong> for India's most influential brand in education 2015-16.
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
        <div className="relative w-full h-[450px]">
          <img src={aboutImg} alt="about" className="w-full h-full object-cover" />
          <div className="absolute top-1/2 left-16 -translate-y-1/2">
            <div className="bg-red-700/80 px-6 py-4 rounded">
              <h1 className="text-4xl md:text-5xl font-bold">Fact Sheet</h1>
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
                      item.name === "Fact Sheet"
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