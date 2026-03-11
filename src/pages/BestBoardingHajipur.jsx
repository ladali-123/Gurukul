import React, { useState } from "react";
import { Link } from "react-router-dom";
import boardingImg from "../assets/boarding.jpg";

const boardingDropdownItems = [
  { name: "Best Boarding School in Hajipur", path: "/boarding/best-boarding-hajipur" },
  { name: "Boarding Schedule", path: "/boarding/schedule" },
  { name: "Boarding Gallery", path: "/boarding/gallery" },
];

const faqs = [
  {
    q: "What makes a boarding school one of the best in Hajipur?",
    a: "A great boarding school provides a safe residential environment, structured routines, strong academics, extracurricular opportunities, and emotional support systems."
  },
  {
    q: "How are students supported emotionally in boarding?",
    a: "Full-time counsellors and house parents guide students through academic pressure, social adjustments, and personal development."
  },
  {
    q: "Is medical care available on campus?",
    a: "Yes. Boarding students are supported by an on-campus medical team and residential doctor to ensure prompt care and health monitoring."
  }
];

const BestBoardingHajipur = () => {

  const [open, setOpen] = useState(null);

  const toggle = (i) => {
    setOpen(open === i ? null : i);
  };

  return (
    <div className="bg-black text-white pt-[90px]">

      {/* HERO */}
      <section className="relative h-[320px] w-full">
        <img
          src={boardingImg}
          alt="Boarding"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center md:justify-start">
          <div className="bg-red-600/50 px-6 md:px-10 py-4 md:py-6 md:ml-10 rounded">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left">
              Best Boarding School in Hajipur
            </h1>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-gray-400">
        Home &gt; Boarding &gt; Best Boarding School in Hajipur
      </div>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <div className="md:col-span-1">
          <div className="border border-gray-800">

            {boardingDropdownItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`block px-6 py-4 border-b border-gray-800 ${item.name === "Best Boarding School in Hajipur"
                    ? "bg-red-600"
                    : "hover:bg-red-600"
                  }`}
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>

        {/* CONTENT */}
        <div className="md:col-span-3 space-y-10">

          {/* SECTION 1 */}
          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Daily Routine and Academic Support in Boarding
            </h2>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="w-full h-52 object-cover rounded mb-4"
            />

            <p className="text-gray-300 text-justify">
              A well-structured daily routine is fundamental to effective boarding
              education. Learning continues beyond classroom hours through strong
              after-school academic support that helps students consolidate
              classroom learning, manage coursework, and develop disciplined
              study habits.
            </p>
          </div>

          {/* SECTION 2 */}
          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Physical, Social, and Emotional Wellbeing
            </h2>

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              className="w-full h-52 object-cover rounded mb-4"
            />

            <p className="text-gray-300 text-justify">
              Counsellors are available to support students with academic stress,
              social adjustment, and emotional wellbeing. A balanced routine of
              study, recreation, and rest supports healthy development and
              long-term success.
            </p>
          </div>

          {/* SECTION 3 */}
          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Learning Beyond the Classroom
            </h2>

            <img
              src="https://images.unsplash.com/photo-1517164850305-99a3e65bb47e"
              className="w-full h-52 object-cover rounded mb-4"
            />

            <p className="text-gray-300 text-justify">
              Students participate in music, dance, drama, sports, and creative
              activities that encourage teamwork, creativity, and leadership.
              Weekend enrichment activities such as cookery and arts help
              students develop practical life skills.
            </p>
          </div>

          {/* SECTION 4 */}
          <div>
            <h2 className="text-2xl font-bold text-red-500 mb-4">
              Communication With Parents
            </h2>

            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
              className="w-full h-52 object-cover rounded mb-4"
            />

            <p className="text-gray-300 text-justify">
              Continuous communication with parents ensures transparency and
              reassurance. Parents stay informed about their child’s progress,
              activities, and wellbeing throughout the boarding journey.
            </p>
          </div>

          {/* FAQ */}
          <div>

            <h2 className="text-2xl font-bold text-red-500 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-3">

              {faqs.map((f, i) => (

                <div key={i} className="border border-gray-700">

                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex justify-between px-6 py-4 bg-gray-900 hover:bg-gray-800"
                  >
                    {f.q}
                    <span>{open === i ? "▲" : "▼"}</span>
                  </button>

                  {open === i && (
                    <div className="px-6 py-4 text-gray-300 bg-black border-t border-gray-700">
                      {f.a}
                    </div>
                  )}

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default BestBoardingHajipur;