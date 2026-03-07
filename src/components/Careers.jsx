import React from "react";

const Careers = () => {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[350px]">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
          alt="careers"
          className="w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">Careers</h1>
        </div>
      </div>


      {/* ACADEMIC ROLES */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-red-500 mb-8 text-center">
          Academic Positions
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-gray-300">

          <ul className="space-y-3">
            <li>• Sciences: Physics, Chemistry & Biology</li>
            <li>• Mathematics</li>
            <li>• Computer Science & Design Technology</li>
            <li>• Humanities: Psychology, History, Geography, ESS</li>
            <li>• Economics & Business Management</li>
          </ul>

          <ul className="space-y-3">
            <li>• Languages: English, ESL, French, Spanish, German</li>
            <li>• Robotics / AI / Coding / Data Science</li>
            <li>• Behavioral Counselors</li>
            <li>• Performing Arts (Western Music / Drama / Dance)</li>
            <li>• Learning Designers</li>
          </ul>

        </div>

      </section>



      {/* EARLY YEARS */}

      <section className="bg-gray-900 py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-red-500 mb-6">
            Teachers for Early Years & Primary Years
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto leading-8">
            We are looking for passionate educators who can inspire young
            learners and create engaging classroom environments. Teachers
            should demonstrate strong communication skills, creativity,
            and dedication to student development.
          </p>

        </div>

      </section>



      {/* NON ACADEMIC */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-red-500 mb-8 text-center">
          Non-Academic Positions
        </h2>

        <div className="text-gray-300 text-center max-w-3xl mx-auto leading-8">

          <p>
           Guidance & College Placement Counselors (experience in placing students in Indian universities and professional institutes), House Parent, Receptionist, Secretary, Lab Technicians, and other administrative support roles.
          </p>

        </div>

      </section>



      {/* QUALIFICATIONS */}

      <section className="bg-gray-900 py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl text-red-500 font-bold text-center mb-10">
            Qualifications & Experience Required
          </h2>

          <ul className="space-y-4 text-gray-300">

            <li>
              • Minimum requirement for all teaching roles is Masters’/PG and
              a professional teaching qualification.
            </li>

            <li>
              • Minimum 2+ years of relevant teaching experience in an
              international school.
            </li>

            <li>
              • Experience working in multicultural environments.
            </li>

          </ul>

        </div>

      </section>



      {/* APPLY SECTION */}

      <section className="max-w-5xl mx-auto px-6 py-20 text-center">

        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Apply Now
        </h2>

        <p className="text-gray-300 leading-8 mb-6">
          To apply, please email your resume, cover letter and recent
          photograph to the relevant email ID below. Please mention the
          post applied for in the subject column.
        </p>

        <p className="text-lg mb-2">
          Email: <span className="text-red-400">recruitment@hajipurschool.com</span>
        </p>

        <p className="mb-2">Location: Sarjapura, Hajipur</p>

        <p className="mb-8">
          Contact: +91 80 22895900 Ext 997
        </p>


        <a
          href="mailto:recruitment@indusschool.com"
          className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded font-semibold"
        >
          Apply Now
        </a>

      </section>

    </div>
  );
};

export default Careers;