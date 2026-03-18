import React from "react";
import Navbar from "../components/Navbar";
import pic23 from "../assets/pic23.jpg";
import { Link } from "react-router-dom";

const beyondAcademicsDropdownItems = [
  { name: "Whole Education", path: "/beyond-academics/whole-education" },
  { name: "Collaborative Learning Model", path: "/beyond-academics/collaborative-learning" },
  { name: "Startup You", path: "/beyond-academics/startup-you" },
  { name: "Gurukul School of Leadership", path: "/beyond-academics/leadership" },
  { name: "Hajipur Training & Research Institute", path: "/beyond-academics/training-research" },
  { name: "Gurukul Community School", path: "/beyond-academics/community-school" },
];

const StartupYou = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-black text-white min-h-screen">

        {/* HERO IMAGE */}
        <div className="w-full h-[250px] md:h-[400px] relative">
  <img
    src={pic23}
    alt="Startup You Program"
    className="w-full h-full object-cover"
    style={{ objectPosition: "center 35%" }}
  />

  <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
    <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
        Startup You
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
                    className={`block px-5 py-4 border-b border-gray-800 transition ${item.name === "Startup You"
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

              {/* INTRO TEXT */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-red-500">
                  Startup You – Nurturing Young Innovators
                </h2>
                <p className="leading-relaxed text-justify">
                  The Startup You program at School Hajipur empowers students to think like entrepreneurs,
                  develop innovative solutions, and take ownership of projects from concept to execution.
                  It bridges classroom learning with real-world problem-solving, preparing students for future
                  careers in technology, business, and social enterprise.
                </p>
                <p className="leading-relaxed text-justify">
                  Through hands-on projects, mentorship, and exposure to industry practices, students cultivate
                  creativity, leadership, critical thinking, and resilience. The program encourages them to
                  explore opportunities, test ideas, and learn from both success and failure.
                </p>
                <p className="leading-relaxed text-justify">
                  Startup You emphasizes collaboration, teamwork, and effective communication, ensuring that
                  students gain experience in pitching ideas, working in diverse groups, and managing projects
                  end-to-end. The program instills confidence and equips students with a practical understanding
                  of entrepreneurship.
                </p>

              </div>

              {/* STARTUP IMAGE */}
              <div>
                <img
                  src="https://i.pinimg.com/736x/fd/22/36/fd2236aec416534f02d9a6d362155bd1.jpg"
                  alt="Students working on startup projects"
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

export default StartupYou;