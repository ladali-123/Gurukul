import React from "react";

const HajipurTrainingAndResearchInstitute = () => {
  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070"
          className="w-full h-full object-cover opacity-60"
          alt="Hajipur Training and Research Institute"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500 text-center">
            Hajipur Training &<br />Research Institute
          </h1>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">
          Excellence in Training & Research
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          The Hajipur Training and Research Institute (HTRI) is a center of excellence 
          dedicated to advancing knowledge through cutting-edge research and professional 
          training programs. We bridge the gap between academia and industry, preparing 
          students for the challenges of the modern workplace.
        </p>
      </section>

      {/* RESEARCH AREAS */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Research Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Education Research
              </h3>
              <p className="text-gray-300">
                Innovative teaching methodologies, educational technology, 
                curriculum development, and learning psychology.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Technology & Innovation
              </h3>
              <p className="text-gray-300">
                Artificial intelligence, data science, sustainable technology, 
                and industry 4.0 applications.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Social Sciences
              </h3>
              <p className="text-gray-300">
                Community development, urban planning, public policy, 
                and behavioral studies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRAINING PROGRAMS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          Professional Training Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Corporate Training
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Leadership Development</li>
              <li>• Management Skills</li>
              <li>• Communication Excellence</li>
              <li>• Team Building</li>
              <li>• Digital Transformation</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Skill Development
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>• IT & Software Training</li>
              <li>• Language Programs</li>
              <li>• Vocational Courses</li>
              <li>• Entrepreneurship Training</li>
              <li>• Research Methodology</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Research Facilities
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🔬</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Research Labs</h3>
              <p className="text-gray-400 text-sm">State-of-the-art laboratories for hands-on research</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">📚</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Library</h3>
              <p className="text-gray-400 text-sm">Extensive collection of books, journals, and digital resources</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">💻</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Computer Center</h3>
              <p className="text-gray-400 text-sm">Advanced computing facilities and software resources</p>
            </div>
            <div className="bg-black p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🎤</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Conference Hall</h3>
              <p className="text-gray-400 text-sm">Modern venue for seminars, workshops, and presentations</p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          Industry Collaborations
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Academic Partnerships
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>• National Universities</li>
              <li>• International Institutions</li>
              <li>• Research Organizations</li>
              <li>• Government Agencies</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Corporate Connections
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Fortune 500 Companies</li>
              <li>• Startups & Innovators</li>
              <li>• Industry Associations</li>
              <li>• NGOs & Social Enterprises</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Our Achievements
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black p-8 rounded-lg border border-gray-800 text-center">
              <h3 className="text-3xl text-red-500 font-bold mb-2">100+</h3>
              <p className="text-gray-300">Research Papers Published</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800 text-center">
              <h3 className="text-3xl text-red-500 font-bold mb-2">50+</h3>
              <p className="text-gray-300">Training Programs</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800 text-center">
              <h3 className="text-3xl text-red-500 font-bold mb-2">1000+</h3>
              <p className="text-gray-300">Professionals Trained</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800 text-center">
              <h3 className="text-3xl text-red-500 font-bold mb-2">25+</h3>
              <p className="text-gray-300">Industry Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Join Our Research Community
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Be part of innovative research and professional development at HTRI.
        </p>
        <a
          href="/enquiry-form"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
          >
          Enquire Now
        </a>
      </section>
    </div>
  );
};

export default HajipurTrainingAndResearchInstitute;

