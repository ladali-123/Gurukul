import React from "react";

const GurukulSchoolOfLeadership = () => {
  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070"
          className="w-full h-full object-cover opacity-60"
          alt="Gurukul School of Leadership"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            Gurukul School of Leadership
          </h1>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">
          Developing Leaders of Tomorrow
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          The Gurukul School of Leadership is dedicated to nurturing young minds 
          into confident, ethical, and effective leaders. Our comprehensive 
          leadership program develops the skills, character, and vision needed 
          to lead in the 21st century.
        </p>
      </section>

      {/* LEADERSHIP PILLARS */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Pillars of Leadership
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🧠</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Vision</h3>
              <p className="text-gray-400 text-sm">
                Developing the ability to see beyond the present and inspire others toward a better future.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">💪</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Integrity</h3>
              <p className="text-gray-400 text-sm">
                Building character based on honesty, ethics, and strong moral values.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-400 text-sm">
                Learning to work effectively with diverse teams and build consensus.
              </p>
            </div>
            <div className="bg-black p-6 rounded-lg border border-gray-800 text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">⚡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Action</h3>
              <p className="text-gray-400 text-sm">
                Developing the courage and能力 to take initiative and drive results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          Leadership Programs
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Student Council
            </h3>
            <p className="text-gray-300 mb-4">
              Our student council provides students with hands-on experience in 
              democratic leadership, decision-making, and representing their peers.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Class representatives</li>
              <li>• House captains</li>
              <li>• Club presidents</li>
              <li>• Event coordinators</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Leadership Workshops
            </h3>
            <p className="text-gray-300 mb-4">
              Regular workshops conducted by industry leaders, motivational speakers, 
              and experienced educators to develop leadership skills.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Public speaking</li>
              <li>• Team building</li>
              <li>• Problem solving</li>
              <li>• Conflict resolution</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Mentorship Program
            </h3>
            <p className="text-gray-300 mb-4">
              Senior students mentor juniors, fostering a culture of guidance, 
              support, and continuous learning.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Peer tutoring</li>
              <li>• Career guidance</li>
              <li>• Life skills coaching</li>
              <li>• Academic support</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Community Leadership
            </h3>
            <p className="text-gray-300 mb-4">
              Students lead community service initiatives, developing empathy 
              and social responsibility.
            </p>
            <ul className="text-gray-400 space-y-2">
              <li>• Social projects</li>
              <li>• Environmental initiatives</li>
              <li>• Charity drives</li>
              <li>• Awareness campaigns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LEADERSHIP EXCELLENCE */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Leadership Excellence
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-3xl text-red-500 font-bold mb-2">500+</h3>
              <p className="text-gray-300">Student Leaders Trained</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-3xl text-red-500 font-bold mb-2">50+</h3>
              <p className="text-gray-300">Leadership Workshops Yearly</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-3xl text-red-500 font-bold mb-2">100%</h3>
              <p className="text-gray-300">Students Hold Leadership Roles</p>
            </div>
          </div>
        </div>
      </section>

      {/* OUTCOME */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          What Our Leaders Achieve
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              In School
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Organize and lead school events</li>
              <li>• Represent student body</li>
              <li>• Manage clubs and activities</li>
              <li>• Mentor younger students</li>
              <li>• Lead by example</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Beyond School
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Admissions to top universities</li>
              <li>• Leadership scholarships</li>
              <li>• Successful careers in various fields</li>
              <li>• Social entrepreneurship</li>
              <li>• Community impact</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Become a Leader at Gurukul
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the Gurukul School of Leadership and develop the skills to lead 
          with confidence, integrity, and vision.
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

export default GurukulSchoolOfLeadership;

