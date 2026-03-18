import React from "react";
import Navbar from "../components/Navbar";
import pic6 from "../assets/pic6.jpg";
import { Link } from "react-router-dom";

const curriculumDropdownItems = [
  { name: "IBS School Hajipur", path: "/curriculum/ibs-hajipur" },
  { name: "School Hajipur", path: "/curriculum/school-hajipur" },
  { name: "SEN & ESL", path: "/curriculum/sen-esl" },
  { name: "Age Criteria", path: "/age-criteria" },
];

const AgeCriteriaHajipur = () => {
  return (
    <>
      <Navbar />

     <div className="pt-[90px] bg-black text-white min-h-screen">

  {/* HERO IMAGE */}
  <div className="w-full h-[250px] md:h-[400px] relative">
    <img
      src={pic6}
      alt="Age Criteria"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 35%" }}
    />

    <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
      <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Age Criteria for Admission
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
                    key={item.name}  // ✅ Use item.name instead of index
                    to={item.path}
                    className={`block px-5 py-4 border-b border-gray-800 transition ${item.name === "Age Criteria"
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
                  Age Criteria for IB Programmes
                </h2>
                <p className="leading-relaxed text-justify">
                  School Hajipur follows the International Baccalaureate framework, admitting students
                  across a wide age range to support continuous learning from early childhood through
                  pre-university levels.
                </p>

                <h3 className="text-xl font-bold text-red-400">
                  Primary Years Programme (PYP)
                </h3>
                <p className="leading-relaxed text-justify">
                  Typically for ages 3–12, the PYP focuses on inquiry, curiosity, and foundational skills.
                </p>

                <h3 className="text-xl font-bold text-red-400">
                  Middle Years Programme (MYP)
                </h3>
                <p className="leading-relaxed text-justify">
                  For ages 11–16, the MYP builds academic and personal foundations with critical thinking and global awareness.
                </p>

                <h3 className="text-xl font-bold text-red-400">
                  Diploma Programme (DP)
                </h3>
                <p className="leading-relaxed">
                  For ages 16–19, the DP prepares students for university and future careers.
                </p>

                <p className="leading-relaxed text-justify">
                  These age ranges are standard guidelines. Families should contact admissions for precise grade-to-age mapping at School Hajipur.
                </p>

              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AgeCriteriaHajipur;