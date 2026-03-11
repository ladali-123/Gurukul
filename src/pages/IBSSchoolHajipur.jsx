import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const IBSSchoolHajipur = () => {
  return (
    <div className="bg-black text-white pt-20">
      {/* HERO SECTION */}
      <div className="relative h-[380px]">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070"
          alt="IBS School Hajipur"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            IBS School Hajipur
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
          International Balanced Curriculum (IBS)
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          The IBS Hajipur campus offers a comprehensive international curriculum that blends 
          global best practices with local cultural values. Our program is designed to 
          develop well-rounded individuals who excel academically while maintaining a 
          strong connection to their heritage.
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
            Our Early Years programme focuses on holistic development through play-based 
            learning. Children explore foundational literacy, numeracy, and social skills 
            through interactive activities, storytelling, and creative play. The curriculum 
            emphasizes motor skills development, language enrichment, and emotional growth 
            in a nurturing environment.
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
            The Primary Years curriculum builds a strong academic foundation in core 
            subjects including language arts, mathematics, science, and social studies. 
            Students engage in project-based learning, collaborative activities, and 
            hands-on experiments that foster critical thinking and creativity. We maintain 
            a balance between international standards and cultural enrichment.
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
            Middle School emphasizes analytical thinking and deeper understanding of 
            academic subjects. Students explore interdisciplinary projects, research 
            activities, and technology-based learning. The curriculum prepares students 
            for international examinations while maintaining strong roots in cultural 
            values and community engagement.
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
            The Senior School prepares students for global higher education opportunities. 
            Students specialize in chosen subjects, develop research skills, and gain 
            real-world experience through internships and leadership programs. Our 
            comprehensive approach ensures students are well-prepared for university 
            and future careers.
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
          Join IBS School Hajipur
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Give your child a world-class education with strong cultural roots. 
          Contact us today to learn more about our IBS curriculum.
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

export default IBSSchoolHajipur;

