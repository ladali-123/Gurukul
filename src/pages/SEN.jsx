import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const SENESL = () => {
  return (
    <div className="bg-black text-white pt-20">
      {/* HERO SECTION */}
      <div className="relative h-[380px]">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070"
          alt="SEN & ESL - Special Educational Needs & English as Second Language"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            SEN & ESL
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
          Special Educational Needs & English as Second Language
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          We provide comprehensive support for students with Special Educational Needs (SEN) 
          and English as Second Language (ESL) learners. Our inclusive programs ensure 
          every student receives the personalized attention they need to succeed.
        </p>
      </section>

      {/* SEN SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
          Special Educational Needs (SEN)
        </h2>
        
        {/* Section 1: Early Years SEN */}
        <section className="grid md:grid-cols-2 gap-12 items-center border-t border-gray-800 py-16">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070"
            className="rounded-lg"
            alt="Early Years SEN"
          />
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4">
              Age: 3-6 Years
            </div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Early Years - Learning Support
            </h3>
            <p className="text-gray-300 leading-8">
              Our Early Years SEN program provides specialized support for young children 
              with developmental delays or learning difficulties. We offer sensory integration 
              therapy, speech and language support, occupational therapy, and individualized 
              learning plans.
            </p>
          </div>
        </section>

        {/* Section 2: Primary Years SEN */}
        <section className="grid md:grid-cols-2 gap-12 items-center border-t border-gray-800 py-16">
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4">
              Age: 6-12 Years
            </div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Primary School - Learning Support
            </h3>
            <p className="text-gray-300 leading-8">
              Primary students with SEN receive individualized education plans (IEPs) 
              tailored to their specific needs. Our program includes specialized teaching 
              methods, assistive technology, reading and writing support, and social skills training.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2070"
            className="rounded-lg"
            alt="Primary School SEN"
          />
        </section>

        {/* Section 3: Middle School SEN */}
        <section className="grid md:grid-cols-2 gap-12 items-center border-t border-gray-800 py-16">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
            className="rounded-lg"
            alt="Middle School SEN"
          />
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4">
              Age: 12-15 Years
            </div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Middle School - Learning Support
            </h3>
            <p className="text-gray-300 leading-8">
              Middle School SEN program focuses on building academic skills alongside 
              self-advocacy and independence. Students receive support in organization, 
              study skills, exam strategies, and social-emotional learning.
            </p>
          </div>
        </section>

        {/* Section 4: Senior School SEN */}
        <section className="grid md:grid-cols-2 gap-12 items-center border-t border-gray-800 py-16">
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4">
              Age: 15-18 Years
            </div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Senior School - Learning Support
            </h3>
            <p className="text-gray-300 leading-8">
              Our Senior School SEN program prepares students for higher education and 
              career pathways. We provide guidance on disability accommodations, 
              university applications, vocational training, and life skills development.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070"
            className="rounded-lg"
            alt="Senior School SEN"
          />
        </section>
      </section>

      {/* ESL SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-10 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-red-500 mb-8 text-center">
          English as Second Language (ESL)
        </h2>
        
        {/* Section 1: Early Years ESL */}
        <section className="grid md:grid-cols-2 gap-12 items-center border-t border-gray-800 py-16">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070"
            className="rounded-lg"
            alt="Early Years ESL"
          />
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4">
              Age: 3-6 Years
            </div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Early Years - English Foundation
            </h3>
            <p className="text-gray-300 leading-8">
              Our Early Years ESL program introduces young learners to English through 
              songs, rhymes, stories, and interactive games. Children develop basic 
              vocabulary, pronunciation, and listening skills in a fun, supportive environment.
            </p>
          </div>
        </section>

        {/* Section 2: Primary Years ESL */}
        <section className="grid md:grid-cols-2 gap-12 items-center border-t border-gray-800 py-16">
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4">
              Age: 6-12 Years
            </div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Primary School - English Development
            </h3>
            <p className="text-gray-300 leading-8">
              Primary ESL students build on their foundation to develop reading, 
              writing, and conversational skills. Our curriculum includes guided 
              reading, vocabulary building, basic grammar structures, and interactive speaking activities.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2070"
            className="rounded-lg"
            alt="Primary School ESL"
          />
        </section>

        {/* Section 3: Middle School ESL */}
        <section className="grid md:grid-cols-2 gap-12 items-center border-t border-gray-800 py-16">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
            className="rounded-lg"
            alt="Middle School ESL"
          />
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4">
              Age: 12-15 Years
            </div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Middle School - English Proficiency
            </h3>
            <p className="text-gray-300 leading-8">
              Middle School ESL focuses on developing advanced language skills for 
              academic success. Students work on essay writing, presentations, 
              critical reading, and debate. The program prepares students for IELTS and TOEFL foundations.
            </p>
          </div>
        </section>

        {/* Section 4: Senior School ESL */}
        <section className="grid md:grid-cols-2 gap-12 items-center border-t border-gray-800 py-16">
          <div>
            <div className="inline-block bg-red-600 text-white px-4 py-1 rounded-full mb-4">
              Age: 15-18 Years
            </div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">
              Senior School - English Excellence
            </h3>
            <p className="text-gray-300 leading-8">
              Senior School ESL prepares students for global opportunities through 
              advanced English proficiency. The program includes academic writing, 
              professional communication, interview skills, and preparation for international tests.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070"
            className="rounded-lg"
            alt="Senior School ESL"
          />
        </section>
      </section>

      {/* SERVICES OFFERED */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-red-500 mb-4">
              Speech & Language Therapy
            </h3>
            <p className="text-gray-400">
              Professional speech and language intervention for students with communication difficulties.
            </p>
          </div>
          <div className="border border-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-red-500 mb-4">
              Occupational Therapy
            </h3>
            <p className="text-gray-400">
              Sensory integration therapy and motor skills development for students with physical and sensory needs.
            </p>
          </div>
          <div className="border border-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-red-500 mb-4">
              Learning Support
            </h3>
            <p className="text-gray-400">
              Individualized academic support and specialized teaching methods for diverse learning needs.
            </p>
          </div>
          <div className="border border-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-red-500 mb-4">
              ESL Classes
            </h3>
            <p className="text-gray-400">
              English language learning with immersive teaching methods and practical communication exercises.
            </p>
          </div>
          <div className="border border-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-red-500 mb-4">
              Test Preparation
            </h3>
            <p className="text-gray-400">
              Preparation for IELTS, TOEFL, and other English proficiency tests.
            </p>
          </div>
          <div className="border border-gray-800 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-red-500 mb-4">
              Counseling Services
            </h3>
            <p className="text-gray-400">
              Social-emotional support and mental health counseling for students and families.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold text-red-500 mb-6">
          Learn More About SEN & ESL Programs
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          We are committed to inclusive education and language learning. 
          Contact us to learn how we can support your child's unique needs.
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

export default SENESL;

