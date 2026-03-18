import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic23 from "../assets/pic23.jpg";

const admissionsDropdownItems = [
  { name: "Admission Process", path: "/admission-process" },
  { name: "Enquiry Form", path: "/enquiry-form" },
  { name: "Frequently Asked Questions", path: "/faqs" },
  { name: "Testimonials", path: "/testimonials" },
];

const testimonials = [
  {
    text: "We are extremely happy with the school environment and teaching approach. Our child has grown in confidence and enjoys learning every day.",
    name: "Prathewray & Shigee",
    role: "Parent of Akshaya, Reception",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
  },
  {
    text: "The teachers are very supportive and the curriculum encourages creativity and critical thinking.",
    name: "Rohan Mehta",
    role: "Parent of Aarav, Grade 3",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    text: "Our daughter loves going to school every day. The activities and learning environment are wonderful.",
    name: "Anita Sharma",
    role: "Parent of Diya, Grade 2",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  }
];

const Testimonials = () => {

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((index - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <div className="bg-black text-white pt-[90px]">

  {/* HERO */}
  <section className="w-full h-[250px] md:h-[400px] relative">
    <img
      src={pic23}
      alt="Testimonials"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 35%" }}
    />

    <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
      <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Testimonials
        </h1>
      </div>
    </div>
  </section>



      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-gray-400">
        Home &gt; Admissions &gt; Testimonials
      </div>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <div className="md:col-span-1">
          <div className="border border-gray-800">

            {admissionsDropdownItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`block px-6 py-4 border-b border-gray-800 transition ${item.name === "Testimonials"
                    ? "bg-red-600 text-white"
                    : "hover:bg-red-600"
                  }`}
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>

        {/* TESTIMONIAL CONTENT */}
        <div className="md:col-span-3 flex flex-col items-center">

          <div className="bg-gray-900 p-10 rounded-xl shadow-lg max-w-3xl text-center">

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              “{t.text}”
            </p>

            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-4 border-red-600"
            />

            <h3 className="text-xl font-semibold text-red-500">
              - {t.name}
            </h3>

            <p className="text-gray-400">
              ({t.role})
            </p>

          </div>

          {/* BUTTONS */}
          <div className="flex gap-6 mt-8">

            <button
              onClick={prev}
              className="bg-red-600 px-5 py-2 rounded hover:bg-red-700"
            >
              Prev
            </button>

            <button
              onClick={next}
              className="bg-red-600 px-5 py-2 rounded hover:bg-red-700"
            >
              Next
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Testimonials;