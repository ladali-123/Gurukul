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

const CollaborativeLearningModel = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-black text-white min-h-screen">

        {/* HERO IMAGE */}
        <div className="relative w-full h-[450px]">
          <img
            src={aboutImg}
            alt="Collaborative Learning Model"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-16 -translate-y-1/2">
            <div className="bg-red-700/80 px-6 py-4 rounded">
              <h1 className="text-4xl md:text-5xl font-bold">
                Collaborative Learning Model
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
                      item.name === "Collaborative Learning Model"
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

              {/* HUMANOID LAB INTRO */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-red-500">
                  Indus Humanoid Lab at School Hajipur
                </h2>
                <p className="leading-relaxed">
                  School Hajipur integrates advanced AI into classroom learning through the Indus Humanoid Lab and its Collaborative Learning Model. This approach represents a shift from exam-centric education to preparing students for lifelong learning, adaptability, and real-world relevance.
                </p>
                <p className="leading-relaxed">
                  At the core of the model is the integration of Human Intelligence, Collective Intelligence, and Artificial Intelligence, working together to create Innovative Intelligence. The goal is not just knowledge acquisition, but the transformation of knowledge into wisdom.
                </p>
              </div>

              {/* COLLABORATIVE LEARNING MODEL */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-red-400">
                  Collaborative Learning Model
                </h3>
                <p className="leading-relaxed">
                  In this learning ecosystem, teachers, students, and AI companions work together in clearly defined roles. Educators act as mentors and facilitators, guiding inquiry, reflection, and higher-order thinking rather than just delivering facts. Classrooms become environments where students collaborate with each other and leverage technology to deepen understanding.
                </p>
                <p className="leading-relaxed">
                  A key innovation is the use of AI-enabled assistants — including interactive humanoid and robotics platforms — that support content delivery, personalized feedback, adaptive practice, and student engagement analysis. This allows teachers more time to mentor and coach each learner’s growth.
                </p>
                <p className="leading-relaxed">
                  Peer-to-peer learning is central to the model, enabling students to learn through discussions, project-based activities, and problem-solving sessions. This approach builds academic skills as well as teamwork, communication, and creativity.
                </p>
                <p className="leading-relaxed">
                  Overall, the Collaborative Learning Model reflects a shift toward a learner-centric approach — combining human intelligence with advanced tools and collaborative methods to create an environment where students thrive academically and personally.
                </p>
              </div>

              {/* ROBOTICS IMAGE */}
              <div>
                <img
                  src="https://i.pinimg.com/736x/dc/49/99/dc49994177fc7b29bd4ee8f45faa4938.jpg"
                  alt="Students working with robotics"
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

export default CollaborativeLearningModel;