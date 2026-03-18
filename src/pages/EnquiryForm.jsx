import React from "react";
import { Link } from "react-router-dom";
import pic23 from "../assets/pic23.jpg";

const admissionsDropdownItems = [
  { name: "Admission Process", path: "/admission-process" },
  { name: "Enquiry Form", path: "/enquiry-form" },
  { name: "Frequently Asked Questions", path: "/faqs" },
  { name: "Testimonials", path: "/testimonials" },
];

const inputStyle =
  "w-full p-3 rounded bg-black border border-gray-700 text-white placeholder-gray-400 focus:bg-black focus:text-white focus:border-red-500 outline-none";

const EnquiryForm = () => {
  return (
   <div className="bg-black text-white pt-[90px]">

  {/* HERO IMAGE */}
  <section className="w-full h-[250px] md:h-[400px] relative">
    <img
      src={pic23}
      alt="Enquiry"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 35%" }}
    />

    <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
      <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Enquiry Form
        </h1>
      </div>
    </div>
  </section>



      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-gray-400">
        Home &gt; Admissions &gt; Enquiry Form
      </div>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <div className="md:col-span-1">
          <div className="border border-gray-800">

            {admissionsDropdownItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`block px-6 py-4 border-b border-gray-800 transition ${item.name === "Enquiry Form"
                    ? "bg-red-600 text-white"
                    : "hover:bg-red-600"
                  }`}
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>

        {/* FORM */}
        <div className="md:col-span-3">

          <h2 className="text-3xl font-bold mb-8 text-red-500">
            Online Enquiry Form
          </h2>

          <form className="grid md:grid-cols-2 gap-6">

            {/* First Name */}
            <div>
              <label className="block mb-2 text-gray-300">
                Student's First Name *
              </label>
              <input
                type="text"
                placeholder="Student's First Name"
                className={inputStyle}
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-2 text-gray-300">
                Student's Last Name *
              </label>
              <input
                type="text"
                placeholder="Student's Last Name"
                className={inputStyle}
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block mb-2 text-gray-300">Gender *</label>

              <div className="w-full p-3 rounded bg-black border border-gray-700 flex gap-8">

                <label className="flex items-center gap-2 cursor-pointer text-white">
                  <input
                    type="radio"
                    name="gender"
                    className="accent-red-600"
                  />
                  Male
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-white">
                  <input
                    type="radio"
                    name="gender"
                    className="accent-red-600"
                  />
                  Female
                </label>

              </div>
            </div>

            {/* DOB */}
            <div>
              <label className="block mb-2 text-gray-300">
                Date of Birth *
              </label>

              <input
                type="date"
                className={inputStyle}
              />
            </div>

            {/* Academic Year */}
            <div>
              <label className="block mb-2 text-gray-300">
                Academic Year *
              </label>

              <select className={inputStyle}>
                <option>Please choose an option</option>
                <option>2024 - 2025</option>
                <option>2025 - 2026</option>
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="block mb-2 text-gray-300">
                Student Category *
              </label>

              <select className={inputStyle}>
                <option>Please choose an option</option>
                <option>Domestic</option>
                <option>International</option>
              </select>
            </div>

            {/* Grade */}
            <div>
              <label className="block mb-2 text-gray-300">
                Grade Applying For *
              </label>

              <select className={inputStyle}>
                <option>Please choose an option</option>
                <option>Grade 1</option>
                <option>Grade 2</option>
                <option>Grade 3</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-300">
                Email Address *
              </label>

              <input
                type="email"
                placeholder="Email Address"
                className={inputStyle}
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block mb-2 text-gray-300">
                Mobile Number *
              </label>

              <input
                type="text"
                placeholder="Enter Parent Mobile No"
                className={inputStyle}
              />
            </div>

            {/* Parent */}
            <div>
              <label className="block mb-2 text-gray-300">
                Parent's Name *
              </label>

              <input
                type="text"
                placeholder="Parent Name"
                className={inputStyle}
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block mb-2 text-gray-300">
                Message Box
              </label>

              <textarea
                rows="4"
                placeholder="Message"
                className={inputStyle}
              ></textarea>
            </div>

            {/* Button */}
            <div className="md:col-span-2">

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-8 py-3 font-semibold rounded"
              >
                Enquire Now
              </button>

            </div>

          </form>

        </div>

      </section>

    </div>
  );
};

export default EnquiryForm;