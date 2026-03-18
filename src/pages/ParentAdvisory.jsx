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

const members = [
  {
    name: "Mrs. Priya Sharma",
    role: "Chair",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Mrs. Anjali Mehta",
    role: "Co - Chair",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
];

const ParentAdvisory = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[90px] bg-black text-white min-h-screen">

  {/* HERO IMAGE */}
  <div className="w-full h-[250px] md:h-[400px] relative">
    <img
      src={pic2}
      alt="Parents Advisory Committee"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 50%" }}
    />

    <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
      <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Parents Advisory Committee
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
                {aboutDropdownItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block px-5 py-4 border-b border-gray-800 transition ${
                      item.name === "Parent Advisory Committee"
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
            <div className="md:col-span-3 flex flex-col gap-8">

              <h2 className="text-3xl font-bold text-red-500">Parents Advisory Committee</h2>

              {/* Paragraphs */}
              <div className="flex flex-col gap-5 text-gray-300 text-base leading-relaxed text-justify">
                <p>
                  PAC (Parents Advisory Committee) of Gurukul International School was formed to enable
                  continuous dialogue between parents and school management. It consists of a core group of
                  parent volunteers who dedicate time to interact with parents and share constructive feedback
                  with the school regarding common concerns that parents may have.
                </p>
                <p>
                  The PAC meets with the Principal, Vice Principal and Heads of School at least 3 times in the
                  academic year. They also have regular meetings with the school representatives whenever an
                  issue/concern by parents is brought to their notice. It is their endeavour to share all feedback
                  with the school regarding various curricular or co-curricular programs and the school appreciates
                  ongoing dialogue.
                </p>
                <p>
                  There are parent volunteers as Grade Reps for each grade as a parent's first point of contact with
                  the PAC. Grade reps work closely with their PAC team leads. They feel free to discuss any issue
                  with the grade reps and the PAC. The strength of PAC depends on an interactive parent body and
                  constructive feedback given by parents, while supporting confidentiality.
                </p>
                <p>
                  Parents may volunteer as Grade Representative for the current or upcoming academic year.
                </p>
                <p>
                  Also, find the link to the annual PAC magazine, "imPACt" 2024-25, an interesting read,
                  highlighting major events, conversations, and views of various teacher teams, with a glimpse into
                  the next academic year.
                </p>
                <p>
                  Looking forward to yet another exciting and interactive year at Gurukul and welcoming you all to
                  participate actively in your children's life at school!
                </p>
              </div>

              {/* PAC Magazine Button */}
              <div className="flex justify-center">
                <a
                  href="#"
                  className="bg-red-600 hover:bg-red-700 transition text-white font-semibold px-8 py-3 rounded"
                >
                  PAC Magazine
                </a>
              </div>

              {/* Member Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-4">
                {members.map((member, i) => (
                  <div key={i} className="flex flex-col items-center gap-3">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-48 h-56 object-cover rounded-md"
                    />
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-gray-400 text-sm">({member.role})</p>
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

export default ParentAdvisory;