
import React from "react";
import Navbar from "../components/Navbar";

const BangaloreCampus = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[90px] min-h-screen bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-900 to-red-700 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bangalore Campus
            </h1>
            <p className="text-white text-xl">
              Excellence in education at the Silicon Valley of India
            </p>
          </div>
        </section>

        {/* Campus Overview */}
        <section className="py-16 bg-black">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Welcome to Gurukul Vidyapeeth Bangalore
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Our Bangalore campus brings the legacy of Gurukul Vidyapeeth to
                  the tech hub of India. Situated in a prime location, this campus
                  offers a modern learning environment with cutting-edge facilities
                  and exposure to the best opportunities Bangalore has to offer.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  The campus is designed to provide holistic development with a focus
                  on academic excellence, innovation, and personality development.
                  Our students benefit from the vibrant educational ecosystem of Bangalore.
                </p>
              </div>
              <div className="bg-gray-900 rounded-2xl p-8 border border-red-600/30">
                <h3 className="text-2xl font-bold text-white mb-6">Campus Highlights</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">▸</span>
                    <span>5 Acre Modern Campus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">▸</span>
                    <span>Smart Classrooms with AV Technology</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">▸</span>
                    <span>Advanced Computer & Robotics Lab</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">▸</span>
                    <span>Innovation & Research Center</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">▸</span>
                    <span>Sports & Recreation Facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">▸</span>
                    <span>Transport & Hostel Facility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Bangalore */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose Bangalore Campus?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black rounded-xl p-6 border border-red-600/30">
                <h3 className="text-xl font-bold text-red-500 mb-3">Tech Exposure</h3>
                <p className="text-gray-300">
                  Access to India's top tech companies and startups for internships and exposure.
                </p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-red-600/30">
                <h3 className="text-xl font-bold text-red-500 mb-3">Innovation Hub</h3>
                <p className="text-gray-300">
                  Located in the innovation capital with opportunities for research and projects.
                </p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-red-600/30">
                <h3 className="text-xl font-bold text-red-500 mb-3">Expert Faculty</h3>
                <p className="text-gray-300">
                  Highly qualified teachers with experience from reputed institutions.
                </p>
              </div>
              <div className="bg-black rounded-xl p-6 border border-red-600/30">
                <h3 className="text-xl font-bold text-red-500 mb-3">Holistic Growth</h3>
                <p className="text-gray-300">
                  Focus on academics, sports, arts, and personality development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Visit Our Campus</h2>
            <div className="bg-gray-900 rounded-2xl p-8 border border-red-600/30">
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Address:</strong> Gurukul Vidyapeeth, Bangalore, Karnataka
              </p>
              <p className="text-gray-300 mb-2">
                <strong className="text-white">Phone:</strong> +91-XXX-XXX-XXXX
              </p>
              <p className="text-gray-300">
                <strong className="text-white">Email:</strong> bangalore@gurukulvidyapeeth.edu
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BangaloreCampus;

