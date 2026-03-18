import React from "react";
import Navbar from "../components/Navbar";
import pic6 from "../assets/pic6.jpg";
import { Link } from "react-router-dom";

// Only one presentation-style image in the content
import ibDiagram1 from "../assets/ib_diagram1.jpg";

const curriculumDropdownItems = [
  { name: "IBS School Hajipur", path: "/curriculum/ibs-hajipur" },
  { name: "School Hajipur", path: "/curriculum/school-hajipur" },
  { name: "SEN & ESL", path: "/curriculum/sen-esl" },
  { name: "Age Criteria", path: "/age-criteria" },
];

const SchoolHajipur = () => {
  return (
    <>
      <Navbar />

     <div className="pt-[90px] bg-black text-white min-h-screen">

  {/* HERO IMAGE */}
  <div className="w-full h-[250px] md:h-[400px] relative">
    <img
      src={pic6}
      alt="School Hajipur"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 35%" }}
    />

    <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
      <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          School Hajipur
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
                    key={item.name}
                    to={item.path}
                    className={`block px-5 py-4 border-b border-gray-800 transition ${item.name === "School Hajipur"
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
            <div className="md:col-span-3 flex flex-col gap-8 text-gray-300">

              {/* Text Content */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-red-500">
                  International Baccalaureate at School Hajipur
                </h2>
                <p className="leading-relaxed text-justify">
                  School Hajipur provides a comprehensive IB curriculum that nurtures inquiry-based learning, critical thinking, and global awareness.
                  Students are encouraged to explore concepts deeply, ask meaningful questions, and connect knowledge across multiple subjects.
                </p>
                <p className="leading-relaxed text-justify">
                  The curriculum focuses on holistic development, combining academic rigour with creativity, leadership, and personal growth.
                  From early years to pre-university levels, students are guided to become independent, reflective, and socially responsible learners.
                </p>
                <p className="leading-relaxed text-justify">
                  Emphasis is placed on experiential learning, interdisciplinary projects, and real-world problem solving.
                  Our campus provides the environment, resources, and mentorship to foster curiosity, resilience, and innovation.
                </p>
                <p className="leading-relaxed text-justify">
                  Students develop essential life skills such as communication, collaboration, research, and self-management.
                  This ensures they are prepared for higher education and global challenges, equipped with both knowledge and character.
                </p>
              </div>

              {/* Presentation Image */}
              <div>
                <img
                  src={ibDiagram1}
                  alt="IB curriculum overview diagram"
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

export default SchoolHajipur;