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

const references = [
  "ITARI official page: https://bangalore.indusschool.com/beyond-academics/itari/"
];

const HajipurTrainingResearch = () => {
  return (
    <>
      <Navbar />
     <div className="pt-[90px] bg-black text-white min-h-screen">

  {/* HERO IMAGE */}
  <div className="w-full h-[250px] md:h-[400px] relative">
    <img
      src={pic23}
      alt="Hajipur Training & Research Institute"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 35%" }}
    />

    <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
      <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Hajipur Training & Research Institute
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
                    className={`block px-5 py-4 border-b border-gray-800 transition ${item.name === "Hajipur Training & Research Institute"
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
              {/* CONTENT SECTIONS */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-red-500">
                  Empowering Educators. Shaping the Future
                </h2>

                <p className="leading-relaxed text-justify">
                  The Indus Training and Research Institute (ITARI) prepares exceptional educators who can lead, innovate, and inspire in today’s educational landscape. As a centre of excellence, ITARI nurtures reflective practitioners, design thinkers, and ethical leaders.
                </p>

                <h3 className="text-xl font-semibold text-red-400">Mission and Core Purpose</h3>
                <p className="leading-relaxed text-justify">
                  At ITARI, every teacher is a leader and every child is a self-entrepreneur. The mission is to develop educators with pedagogical insight, socio-emotional intelligence, and a global outlook, shaping future-ready learning ecosystems with courage, creativity, and compassion.
                </p>

                <h3 className="text-xl font-semibold text-red-400">Academic Programmes</h3>
                <p className="leading-relaxed text-justify">
                  ITARI offers globally benchmarked teacher education and certification programmes including PGDE–IBEC, M.A.Ed.–IBEC, CIDTL, PGD in Early Childhood Education, and IBEC with the University of Windsor. All embed inquiry-based pedagogies, reflective practice, AI-assisted learning, and international professional standards.
                </p>

                <h3 className="text-xl font-semibold text-red-400">Signature Learning Model</h3>
                <p className="leading-relaxed text-justify">
                  ITARI uses the 10–20–70 model: 10% formal learning, 20% self-directed learning, 70% experiential and collaborative learning. Key activities include school-based placements, microteaching, interdisciplinary design labs, professional portfolios, and leadership workshops.
                </p>

                <h3 className="text-xl font-semibold text-red-400">Thought Leadership and Impact</h3>
                <p className="leading-relaxed text-justify">
                  ITARI is a catalyst for educational transformation, offering integrated UK + IB + Cambridge certification pathways, faculty-led innovation, and AI/SEL-integrated teacher preparation models.
                </p>

                <h3 className="text-xl font-semibold text-red-400">Strategic Vision</h3>
                <p className="leading-relaxed text-justify">
                  ITARI aims to become a pan-Asian leader in future-ready teacher education through transnational partnerships, AI-driven platforms, customised CPD, leadership programmes, and knowledge-sharing initiatives.
                </p>
              </div>

              {/* IMAGES */}
              <div className="grid md:grid-cols-2 gap-4">
                <img
                  src="https://i.pinimg.com/736x/a8/fb/23/a8fb23bae476879c5de320047d40fbfd.jpg"
                  alt="Teacher training"
                  className="w-full h-auto rounded-lg object-cover"
                />
                <img
                  src="https://i.pinimg.com/736x/67/1b/e7/671be7acee6f7c6b84d4f3d0f52cbe6c.jpg"
                  alt="Classroom training"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* REFERENCES */}
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

export default HajipurTrainingResearch;