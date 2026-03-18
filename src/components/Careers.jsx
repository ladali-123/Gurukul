import React from "react";
import pic2 from "../assets/pic2.jpg";
const Careers = () => {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION (UNCHANGED) */}
     <div className="w-full h-[250px] md:h-[400px] relative">
  <img
    src={pic2}
    alt="careers"
    className="w-full h-full object-cover"
    style={{ objectPosition: "center 50%" }}
  />

  <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
    <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
        Careers
      </h1>
    </div>
  </div>
</div>
      {/* MAIN CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-gray-300 leading-8">

        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
       Gurukul Vidyapeeth School, Hajipur: Hiring for 2026-27
        </h2>

        <p className="mb-6 text-lg">
          Gurukul Vidyapeeth School is an IB Continuum School inviting applications
          for the upcoming term starting January 2026 / academic session July 2026,
          for the following posts:
        </p>

        {/* Academic Section */}
        <h3 className="text-2xl font-semibold text-white mb-4">
          1. Academic (Teachers for MYP & DP)
        </h3>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>Sciences: Physics, Chemistry & Biology</li>
          <li>Mathematics</li>
          <li>Computer Science & Design Technology</li>
          <li>Humanities: Psychology, History, Geography, ESS</li>
          <li>Economics & Business Management</li>
          <li>Languages: English, ESL, French, Spanish, German</li>
          <li>Robotics / AI / Coding / Data Science</li>
          <li>Behavioral Counselors</li>
          <li>Performing Arts (Western Music / Drama / Dance)</li>
          <li>Learning Designers</li>
        </ul>

        {/* Early Years */}
        <h3 className="text-2xl font-semibold text-white mb-4">
          2. Teachers for Early Years & Primary Years
        </h3>

        <p className="mb-8">
          Passionate educators who can inspire young learners and create engaging
          classroom environments.
        </p>

        {/* Non Academic */}
        <h3 className="text-2xl font-semibold text-white mb-4">
          Non-Academic
        </h3>

        <p className="mb-8">
          Guidance & College Placement Counselors (experience in placing students
          in US/UK/Canadian Universities), House Parent, Receptionist, Secretary,
          Lab Technicians, etc.
        </p>

        {/* Qualifications */}
        <h3 className="text-2xl font-semibold text-white mb-4">
          Qualifications & Experience Required (Teachers)
        </h3>

        <ul className="list-disc pl-6 space-y-2 mb-8">
          <li>
            Minimum requirement for all teaching roles is Masters’/PG and a
            professional teaching qualification
          </li>
          <li>
            2+ years of relevant teaching experience in an international school
          </li>
          <li>Experience in multicultural environments</li>
        </ul>

        {/* Apply Section */}
        <h3 className="text-2xl font-semibold text-white mb-4">
          Apply Now
        </h3>

        <p className="mb-4">
          To apply, please email your resume, cover letter and recent photograph
          to the relevant email ID. Please mention the post applied for in the
          subject column.
        </p>

        <p className="mb-2">
          Email:{" "}
          <span className="text-red-400">
            gurukulvidyapeethhaj@yahoo.in
          </span>
        </p>

        <p className="mb-2">
          Location: Hajipur 
        </p>

        <p className="mb-6">
          Contact: +91 89931602179, 7673076349
        </p>

       

      </section>
    </div>
  );
};

export default Careers;