import React from "react";

const StartupYou = () => {
  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2070"
          className="w-full h-full object-cover opacity-60"
          alt="Startup You"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            Startup You
          </h1>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">
          Nurturing Young Entrepreneurs
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          Startup You is our flagship entrepreneurship program designed to inspire 
          and empower students to think like entrepreneurs, develop innovative ideas, 
          and turn their passions into successful ventures. We believe every student 
          has the potential to be an entrepreneur.
        </p>
      </section>

      {/* PROGRAM FEATURES */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Program Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Ideation Labs
              </h3>
              <p className="text-gray-300">
                Students learn to identify problems and create innovative solutions 
                through structured brainstorming and design thinking workshops.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Business Incubation
              </h3>
              <p className="text-gray-300">
                Our incubation center provides mentorship, resources, and guidance 
                to help students transform their ideas into viable businesses.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Funding Guidance
              </h3>
              <p className="text-gray-300">
                We connect promising student startups with investors and guide 
                them through the fundraising process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          What You'll Learn
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Entrepreneurship Skills
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Identifying business opportunities</li>
              <li>• Market research and analysis</li>
              <li>• Business model development</li>
              <li>• Financial planning and budgeting</li>
              <li>• Pitching and presentation skills</li>
              <li>• Building a startup team</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Innovation & Creativity
            </h3>
            <ul className="text-gray-300 space-y-3">
              <li>• Design thinking methodology</li>
              <li>• Problem-solving techniques</li>
              <li>• Rapid prototyping</li>
              <li>• Lean startup principles</li>
              <li>• Technology integration</li>
              <li>• Sustainable business practices</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Student Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">A</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tech Innovators</h3>
              <p className="text-gray-400 mb-4">
                A group of students developed an app that helps farmers 
                predict weather patterns and optimize crop yield.
              </p>
              <p className="text-red-500 font-semibold">Won National Innovation Award</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">B</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco Warriors</h3>
              <p className="text-gray-400 mb-4">
                Students created a sustainable packaging solution from 
                agricultural waste, now being used by local businesses.
              </p>
              <p className="text-red-500 font-semibold">Raised Seed Funding</p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Edu Learn</h3>
              <p className="text-gray-400 mb-4">
                An online tutoring platform created by students to help 
                underprivileged children access quality education.
              </p>
              <p className="text-red-500 font-semibold">10,000+ Students Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* MENTORS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          Learn from Industry Experts
        </h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Our Startup You program features workshops and mentoring sessions with 
          successful entrepreneurs, venture capitalists, and industry leaders.
        </p>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Business Leaders</h3>
            <p className="text-gray-400 text-sm">Learn from successful founders and CEOs</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Investors</h3>
            <p className="text-gray-400 text-sm">Get insights on fundraising and valuations</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Industry Experts</h3>
            <p className="text-gray-400 text-sm">Understand market trends and opportunities</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <h3 className="text-lg font-semibold mb-2">Alumni Mentors</h3>
            <p className="text-gray-400 text-sm">Connect with successful student entrepreneurs</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Start Your Entrepreneurial Journey
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Join Startup You and transform your ideas into reality. 
          The next big startup could be yours!
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

export default StartupYou;

