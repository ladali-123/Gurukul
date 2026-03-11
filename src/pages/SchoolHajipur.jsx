import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SchoolHajipur = () => {
  return (
    <div className="bg-black text-white pt-20">
      {/* HERO SECTION */}
      <div className="relative h-[380px]">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070"
          alt="School Hajipur"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            School Hajipur
          </h1>
        </div>
      </div>

      {/* BACK LINK */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link to="/curriculum" className="flex items-center gap-2 text-red-500 hover:text-red-400">
          <ArrowLeft size={20} /> Back to Curriculum
        </Link>
      </div>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-10 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Gurukul Vidyapeeth - School Hajipur
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          Our School Hajipur campus provides a holistic education that combines 
          traditional Indian values with modern pedagogical approaches. The curriculum 
          is designed to nurture intellectual, physical, and spiritual growth of every student.
        </p>
      </section>

      {/* AGE CRITERIA SECTIONS */}
      
      {/* Section 1: Early Years */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center border-t border-gray-800">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070"
          className="rounded-lg"
          alt="Early Years"
        />
        <div>
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4">
            Age: 3-6 Years
          </div>
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Early Years Programme
          </h2>
          <p className="text-gray-300 leading-8">
            The Early Years programme at School Hajipur focuses on the overall development 
            of young children through play-based learning, creative activities, and 
            foundational skill development. Children learn through stories, songs, arts & 
            crafts, and interactive sessions that build their confidence and curiosity.
          </p>
        </div>
      </section>

      {/* Section 2: Primary Years */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center border-t border-gray-800">
        <div>
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4">
            Age: 6-12 Years
          </div>
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Primary School
          </h2>
          <p className="text-gray-300 leading-8">
            The Primary School curriculum emphasizes strong academic foundations while 
            promoting Indian cultural values. Students study core subjects with emphasis 
            on Hindi, English, Mathematics, and Environmental Science. Co-curricular 
            activities including yoga, music, and arts complement academic learning.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2070"
          className="rounded-lg"
          alt="Primary School"
        />
      </section>

      {/* Section 3: Middle School */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center border-t border-gray-800">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
          className="rounded-lg"
          alt="Middle School"
        />
        <div>
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4">
            Age: 12-15 Years
          </div>
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Middle School
          </h2>
          <p className="text-gray-300 leading-8">
            Middle School students at Hajipur campus experience a balanced curriculum 
            that includes rigorous academic preparation along with character building 
            activities. Students engage in science projects, literary activities, sports, 
            and community service that develop leadership skills and social responsibility.
          </p>
        </div>
      </section>

      {/* Section 4: Senior School */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center border-t border-gray-800">
        <div>
          <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4">
            Age: 15-18 Years
          </div>
          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Senior School
          </h2>
          <p className="text-gray-300 leading-8">
            The Senior School prepares students for board examinations while developing 
            critical thinking and problem-solving skills. Students choose their stream 
            (Science, Commerce, or Arts) and receive comprehensive guidance for higher 
            education. Value education and life skills training are integral parts of 
            the curriculum.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070"
          className="rounded-lg"
          alt="Senior School"
        />
      </section>

      {/* CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold text-red-500 mb-6">
          Join School Hajipur
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the perfect blend of traditional values and modern education. 
          Enroll your child at School Hajipur today.
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

export default SchoolHajipur;

