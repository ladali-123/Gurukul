import React from "react";

const WholeEducation = () => {
  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
          className="w-full h-full object-cover opacity-60"
          alt="Whole Education"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            Whole Education
          </h1>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">
          A Holistic Approach to Education
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          At Gurukul Vidyapeeth, we believe in providing a complete education that 
          nurtures every aspect of a child's development. Our Whole Education approach 
          goes beyond academics to include physical fitness, emotional intelligence, 
          social skills, creative arts, and moral values.
        </p>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto mt-4">
          We prepare students not just for examinations but for life itself, ensuring 
          they become well-rounded individuals ready to face the challenges of the 
          modern world with confidence and character.
        </p>
      </section>

      {/* PILLARS OF WHOLE EDUCATION */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Pillars of Whole Education
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Academic Excellence
              </h3>
              <p className="text-gray-300">
                Rigorous academic programs that challenge and inspire students to 
                achieve their full potential in all subjects.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Physical Development
              </h3>
              <p className="text-gray-300">
                Comprehensive sports and fitness programs that build strong bodies 
                and teach valuable lessons in teamwork and discipline.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Emotional Intelligence
              </h3>
              <p className="text-gray-300">
                Programs that help students understand and manage their emotions, 
                develop empathy, and build healthy relationships.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Creative Expression
              </h3>
              <p className="text-gray-300">
                Opportunities in art, music, drama, and dance that unleash creativity 
                and help students discover their unique talents.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Social Skills
              </h3>
              <p className="text-gray-300">
                Collaborative learning experiences that develop communication skills, 
                leadership abilities, and the capacity to work effectively with others.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Moral Values
              </h3>
              <p className="text-gray-300">
                Character education that instills integrity, honesty, compassion, 
                and respect for others and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          Our Educational Approach
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Learning Beyond Classroom
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Project-based learning</li>
              <li>• Field trips and excursions</li>
              <li>• Community service projects</li>
              <li>• Science fairs and exhibitions</li>
              <li>• Debates and quizzes</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Student Support
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Personal counseling</li>
              <li>• Academic mentoring</li>
              <li>• Career guidance</li>
              <li>• Special needs support</li>
              <li>• Parent-teacher interactions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Experience Whole Education
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Enroll your child at Gurukul Vidyapeeth and give them the gift of a 
          complete education that prepares them for life.
        </p>
        <a
          href="/enquiry-form"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Apply Now
        </a>
      </section>
    </div>
  );
};

export default WholeEducation;

