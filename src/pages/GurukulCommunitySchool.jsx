import React from "react";

const GurukulCommunitySchool = () => {
  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2070"
          className="w-full h-full object-cover opacity-60"
          alt="Gurukul Community School"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            Gurukul Community School
          </h1>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">
          Education for All
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          Gurukul Community School is our initiative to provide quality education to 
          underprivileged children in our community. We believe that every child 
          deserves access to excellent education regardless of their financial background. 
          Through this program, we aim to bridge the gap between privilege and opportunity.
        </p>
      </section>

      {/* MISSION */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Our Mission
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Accessibility
              </h3>
              <p className="text-gray-300">
                Providing free quality education to children from economically 
                weaker sections of society.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Excellence
              </h3>
              <p className="text-gray-300">
                Maintaining the same high standards of education as our 
                regular programs.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Empowerment
              </h3>
              <p className="text-gray-300">
                Breaking the cycle of poverty through education and 
                skills development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Free Education
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Full tuition fee waiver</li>
              <li>• Free study materials</li>
              <li>• Uniforms and books</li>
              <li>• Mid-day meals</li>
              <li>• Transportation facilities</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Support Services
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Academic mentoring</li>
              <li>• Counseling support</li>
              <li>• Health checkups</li>
              <li>• Parent awareness programs</li>
              <li>• After-school tutoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scholastic Achievements</h3>
              <p className="text-gray-400 mb-4">
                Our students have excelled in board examinations and secured 
                admissions to prestigious institutions.
              </p>
              <p className="text-red-500 font-semibold">95% Pass Rate</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Progress</h3>
              <p className="text-gray-400 mb-4">
                Many graduates have pursued higher education and established 
                successful careers.
              </p>
              <p className="text-red-500 font-semibold">200+ Graduates</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">F</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Family Impact</h3>
              <p className="text-gray-400 mb-4">
                Education has transformed entire families and created 
                sustainable change in communities.
              </p>
              <p className="text-red-500 font-semibold">500+ Families Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO HELP */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          How You Can Help
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">💰</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Donate</h3>
            <p className="text-gray-400 text-sm">
              Support a child's education through financial contributions
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">📚</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Volunteer</h3>
            <p className="text-gray-400 text-sm">
              Share your skills and time with our students
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">🎓</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Mentor</h3>
            <p className="text-gray-400 text-sm">
              Guide students in their academic and career journey
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">🤝</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Partner</h3>
            <p className="text-gray-400 text-sm">
              Corporate partnerships for CSR initiatives
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-black p-8 rounded-lg border border-gray-800 text-center">
              <h3 className="text-3xl text-red-500 font-bold mb-2">500+</h3>
              <p className="text-gray-300">Students Enrolled</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800 text-center">
              <h3 className="text-3xl text-red-500 font-bold mb-2">50+</h3>
              <p className="text-gray-300">Volunteers</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800 text-center">
              <h3 className="text-3xl text-red-500 font-bold mb-2">25+</h3>
              <p className="text-gray-300">Corporate Partners</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800 text-center">
              <h3 className="text-3xl text-red-500 font-bold mb-2">10+</h3>
              <p className="text-gray-300">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Join Our Mission
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Together, we can make quality education accessible to every child. 
          Your support can transform lives.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/enquiry-form"
            className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
          >
            Donate Now
          </a>
          <a
            href="/contact"
            className="inline-block border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition duration-300"
          >
            Volunteer
          </a>
        </div>
      </section>
    </div>
  );
};

export default GurukulCommunitySchool;

