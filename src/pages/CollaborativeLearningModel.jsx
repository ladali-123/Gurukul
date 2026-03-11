import React from "react";

const CollaborativeLearningModel = () => {
  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
          className="w-full h-full object-cover opacity-60"
          alt="Collaborative Learning Model"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            Collaborative Learning Model
          </h1>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">
          Learning Together, Growing Together
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          Our Collaborative Learning Model at Gurukul Vidyapeeth is designed to 
          foster teamwork, critical thinking, and mutual respect among students. 
          We believe that learning is most effective when students work together 
          to solve problems, share ideas, and learn from each other's perspectives.
        </p>
      </section>

      {/* KEY PRINCIPLES */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Key Principles
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Student-Centered Learning
              </h3>
              <p className="text-gray-300">
                Students take ownership of their learning through active participation 
                in group activities, discussions, and peer teaching.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Peer Learning
              </h3>
              <p className="text-gray-300">
                Students learn from each other through structured peer tutoring, 
                group projects, and collaborative problem-solving sessions.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Critical Thinking
              </h3>
              <p className="text-gray-300">
                Our model encourages students to question, analyze, and evaluate 
                information to develop well-reasoned conclusions.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Communication Skills
              </h3>
              <p className="text-gray-300">
                Students develop strong verbal and written communication skills 
                through presentations, debates, and group discussions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COLLABORATIVE ACTIVITIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          Collaborative Activities
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">📚</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Group Projects</h3>
            <p className="text-gray-400">
              Students work in teams on real-world projects that develop 
              problem-solving and project management skills.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">💬</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Discussion Forums</h3>
            <p className="text-gray-400">
              Regular classroom discussions and debates help students 
              articulate their thoughts and respect diverse viewpoints.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">🔬</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Lab Sessions</h3>
            <p className="text-gray-400">
              Collaborative science experiments and hands-on activities 
              foster curiosity and scientific thinking.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">🎨</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Creative Workshops</h3>
            <p className="text-gray-400">
              Art, music, and drama workshops encourage creative expression 
              and collaborative creativity.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">🏆</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Team Competitions</h3>
            <p className="text-gray-400">
              Sports and academic competitions build teamwork, sportsmanship, 
              and healthy rivalry.
            </p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg text-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">🤝</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Service</h3>
            <p className="text-gray-400">
              Group volunteering activities teach compassion, social responsibility, 
              and the value of giving back.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Benefits of Collaborative Learning
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg">
              <h3 className="text-2xl text-red-400 mb-4 font-semibold">For Students</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Improved understanding through teaching others</li>
                <li>• Development of leadership skills</li>
                <li>• Enhanced communication abilities</li>
                <li>• Better retention of knowledge</li>
                <li>• Increased motivation and engagement</li>
                <li>• Stronger peer relationships</li>
              </ul>
            </div>
            <div className="bg-black p-8 rounded-lg">
              <h3 className="text-2xl text-red-400 mb-4 font-semibold">For Teachers</h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Better insight into student understanding</li>
                <li>• More engaging classroom environment</li>
                <li>• Opportunities for differentiated instruction</li>
                <li>• Stronger student-teacher relationships</li>
                <li>• Enhanced teaching methodologies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Join Our Collaborative Learning Environment
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Experience the power of collaborative learning at Gurukul Vidyapeeth.
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

export default CollaborativeLearningModel;

