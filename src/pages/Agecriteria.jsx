import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Agecriteria = () => {
  return (
    <div className="bg-black text-white pt-20">
      {/* HERO SECTION */}
      <div className="relative h-[380px]">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070"
          alt="Age Criteria"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            Age Criteria
          </h1>
        </div>
      </div>mal ke andar hi chaiye Sen & esl ke neeche 

      {/* BACK LINK */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link to="/" className="flex items-center gap-2 text-red-500 hover:text-red-400">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Find the Right Program for Your Child
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          We offer educational programs tailored to different age groups. 
          Choose the age category below to explore our curriculum and programs available for your child.
        </p>
      </section>

      {/* AGE GROUPS */}
      
      {/* Age Group 1: 3-6 Years */}
      <section id="3-6" className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-800">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold mb-4">
            Age: 3-6 Years
          </span>
          <h2 className="text-4xl font-bold text-red-500">
            Early Years Programme
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* IBS School Hajipur */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              IBS School Hajipur
            </h3>
            <p className="text-gray-300 mb-6">
              Play-based learning focusing on foundational literacy, numeracy, and social skills through engaging activities.
            </p>
            <Link
              to="/curriculum/ibs-hajipur"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>

          {/* School Hajipur */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              School Hajipur
            </h3>
            <p className="text-gray-300 mb-6">
              Holistic development through creative activities, storytelling, and foundational skill development.
            </p>
            <Link
              to="/curriculum/school-hajipur"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>

          {/* SEN & ESL */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              SEN & ESL
            </h3>
            <p className="text-gray-300 mb-6">
              Specialized support for young learners with speech therapy, language development, and English foundation.
            </p>
            <Link
              to="/curriculum/sen-esl"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Age Group 2: 6-12 Years */}
      <section id="6-12" className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-800">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold mb-4">
            Age: 6-12 Years
          </span>
          <h2 className="text-4xl font-bold text-red-500">
            Primary School
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* IBS School Hajipur */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              IBS School Hajipur
            </h3>
            <p className="text-gray-300 mb-6">
              Strong academic foundation in core subjects with project-based learning and collaborative activities.
            </p>
            <Link
              to="/curriculum/ibs-hajipur"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>

          {/* School Hajipur */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              School Hajipur
            </h3>
            <p className="text-gray-300 mb-6">
              Academic excellence with emphasis on Hindi, English, Mathematics, and cultural values.
            </p>
            <Link
              to="/curriculum/school-hajipur"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>

          {/* SEN & ESL */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              SEN & ESL
            </h3>
            <p className="text-gray-300 mb-6">
              Individualized education plans, reading/writing support, and English language development.
            </p>
            <Link
              to="/curriculum/sen-esl"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Age Group 3: 12-15 Years */}
      <section id="12-15" className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-800">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold mb-4">
            Age: 12-15 Years
          </span>
          <h2 className="text-4xl font-bold text-red-500">
            Middle School
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* IBS School Hajipur */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              IBS School Hajipur
            </h3>
            <p className="text-gray-300 mb-6">
              Analytical thinking, interdisciplinary projects, and technology-based learning for academic excellence.
            </p>
            <Link
              to="/curriculum/ibs-hajipur"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>

          {/* School Hajipur */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              School Hajipur
            </h3>
            <p className="text-gray-300 mb-6">
              Rigorous academic preparation with character building activities and leadership development.
            </p>
            <Link
              to="/curriculum/school-hajipur"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>

          {/* SEN & ESL */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              SEN & ESL
            </h3>
            <p className="text-gray-300 mb-6">
              Study skills, exam strategies, social-emotional learning, and advanced English proficiency.
            </p>
            <Link
              to="/curriculum/sen-esl"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Age Group 4: 15-18 Years */}
      <section id="15-18" className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-800">
        <div className="text-center mb-12">
          <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-lg font-semibold mb-4">
            Age: 15-18 Years
          </span>
          <h2 className="text-4xl font-bold text-red-500">
            Senior School
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* IBS School Hajipur */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              IBS School Hajipur
            </h3>
            <p className="text-gray-300 mb-6">
              Subject specialization, research skills, and preparation for global higher education opportunities.
            </p>
            <Link
              to="/curriculum/ibs-hajipur"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>

          {/* School Hajipur */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              School Hajipur
            </h3>
            <p className="text-gray-300 mb-6">
              Board exam preparation, stream selection, and comprehensive guidance for higher education.
            </p>
            <Link
              to="/curriculum/school-hajipur"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>

          {/* SEN & ESL */}
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300">
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              SEN & ESL
            </h3>
            <p className="text-gray-300 mb-6">
              University guidance, disability accommodations, vocational training, and advanced English proficiency.
            </p>
            <Link
              to="/curriculum/sen-esl"
              className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold text-red-500 mb-6">
          Need Help Choosing the Right Program?
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Our admissions team is here to help you find the perfect educational program 
          for your child's needs and goals.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Agecriteria;

