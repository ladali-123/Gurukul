import React from "react";
import Navbar from "../components/Navbar";
import pic2 from "../assets/pic2.jpg";
import { Link } from "react-router-dom";

const aboutDropdownItems = [
  { name: "The School", path: "/mission" },
  { name: "Mission Vision", path: "/vision" },
  { name: "Fact Sheet", path: "/fact-sheet" },
  { name: "Hajipur Campus", path: "/hajipur-campus" },
  { name: "Parent Advisory Committee", path: "/parent-advisory" },
];

const Mission = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-black text-white min-h-screen">

        {/* HERO IMAGE */}
      <div className="w-full h-[250px] md:h-[400px] relative">
  <img
    src={pic2}
    alt="about"
    className="w-full h-full object-cover"
    style={{ objectPosition: "center 50%" }}
  />

  <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
    <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
        The School
      </h1>
    </div>
  </div>
</div>
        {/* MAIN SECTION */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 ">

            {/* LEFT SIDEBAR MENU */}
            <div className="md:col-span-1">
              <div className="border border-gray-800 rounded-lg overflow-hidden mt-4">
                {aboutDropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block px-5 py-4 border-b border-gray-800 transition ${item.name === "Vision"
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

              <h2 className="text-3xl font-bold mb-6 text-red-500">
                Gurukul School Hajipur
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed mb-4 text-justify">
                Gurukul School was established with the vision of providing quality education and
                building strong character in students. It aims to nurture young minds with strong values, discipline,
                and knowledge so that they can become responsible and successful individuals in society.
              </p>



              {/* IMAGE */}
              <img
                src={pic2}
                alt="school"
                className="relative w-full h-[220px] md:h-[450px] rounded-2xl"
              />
            </div>

          </div>
        </section>

        {/* GET IN TOUCH */}


      </div>
    </>
  );
};

export default Mission;