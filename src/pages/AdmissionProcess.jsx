
import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic23 from "../assets/pic23.jpg";

const admissionsDropdownItems = [
  { name: "Admission Process", path: "/admission-process" },
  { name: "Enquiry Form", path: "/enquiry-form" },
  { name: "FAQs", path: "/faqs" },
  { name: "Testimonials", path: "/testimonials" },
];

const AdmissionProcess = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-black text-white pt-[90px]">

      {/* HERO SECTION */}
      <section className="w-full h-[250px] md:h-[400px] relative">
    <img
      src={pic23}
      alt="Admission"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 35%" }}
    />

    <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
      <div className="bg-red-500/40 px-4 py-3 md:px-10 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Admission Process
        </h1>
      </div>
    </div>
  </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* SIDEBAR MENU */}
        <div className="md:col-span-1">
          <div className="border border-gray-800">
            {admissionsDropdownItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="block px-6 py-4 border-b border-gray-800 hover:bg-red-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:col-span-3 space-y-10">

          {/* Admission Process */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-500">
              Admission Process
            </h2>

            <p className="text-gray-300 leading-relaxed border-l-4 border-red-600 pl-4 text-justify">
              Our institution welcomes students based on merit and seat
              availability. Applicants must have scored above 70% in the
              previous academic year and may be required to attend an
              admission test depending on the grade level.
            </p>
          </div>

          {/* Admissions */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-500">
              Admissions
            </h2>

            <p className="text-gray-300 leading-relaxed border-l-4 border-red-600 pl-4 text-justify">
              We believe in nurturing future leaders by preparing students
              for a rapidly changing world. While most admissions occur at
              the beginning of the academic year, applications are accepted
              throughout the year based on seat availability.
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-red-500">
              Eligibility
            </h2>

            <p className="text-gray-300 leading-relaxed border-l-4 border-red-600 pl-4 text-justify">
              The school does not discriminate based on race, religion,
              gender or nationality. Admissions are granted based on seat
              availability and the ability to provide appropriate learning
              support to each student.
            </p>
          </div>

          {/* HOW TO APPLY */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-red-500">
              How To Apply
            </h2>

            {/* 1. ENQUIRY (Always Open) */}
            <div className="border border-gray-400 mb-4">

              <div className="bg-gray-900 text-white px-6 py-4 font-semibold text-lg">
                1. Enquiry
              </div>

              <div className="bg-black px-10 py-8 text-white">

                <h3 className="text-xl font-semibold text-white mb-6">
                  To make an enquiry or schedule an appointment:
                </h3>

                <ul className="space-y-6 mb-8">

                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                    <span>
                      <strong>Email:</strong> admissions@indusschool.com
                    </span>
                  </li>

                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                    <span>
                      <strong>Telephone:</strong> +91-80-22895913
                    </span>
                  </li>

                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-white rounded-full mr-4"></span>
                    <span>
                      <strong>Telephone:</strong> +91-9886268567
                    </span>
                  </li>

                </ul>

                <Link
                  to="/enquiry-form"
                  className="bg-white rounded-xl text-black px-8 py-3 font-semibold hover:bg-gray-500 transition"
                >
                  Click for Enquiry Form
                </Link>

              </div>
            </div>

            {/* 2. ADMISSIONS APPROVAL PROCESS (Dropdown) */}
            <div className="border border-gray-500">

              <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center px-6 py-4 bg-black text-white font-semibold"
              >
                <span>2. Admissions Approval Process</span>
                <span>{open ? "▲" : "▼"}</span>
              </button>

              {open && (
                <div className="px-10 py-6 bg-black text-white text-justify">
                  Once your enquiry is submitted, our admission team will
                  review your details and contact you for counseling and
                  further admission procedures including assessment if
                  required.
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default AdmissionProcess;

