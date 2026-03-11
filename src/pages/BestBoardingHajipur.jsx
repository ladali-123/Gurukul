import React from "react";

const BestBoardingHajipur = () => {
  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070"
          className="w-full h-full object-cover opacity-60"
          alt="Best Boarding School in Hajipur"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            Best Boarding School in Hajipur
          </h1>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">
          Excellence in Boarding Education
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          Gurukul Vidyapeeth is recognized as the best boarding school in Hajipur,
          offering a world-class residential education experience. Our campus provides
          a perfect blend of academic excellence, character building, and holistic
          development. With state-of-the-art infrastructure, experienced faculty,
          and a nurturing environment, we prepare students to become leaders of tomorrow.
        </p>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto mt-4">
          Located in the serene surroundings of Hajipur, our boarding facility offers
          students a safe, disciplined, and inspiring atmosphere where they can focus
          on their studies while developing essential life skills.
        </p>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Why We Are the Best in Hajipur
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Expert Faculty
              </h3>
              <p className="text-gray-300">
                Our experienced and qualified teachers provide personalized attention
                to each student, ensuring academic excellence.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Modern Infrastructure
              </h3>
              <p className="text-gray-300">
                Well-equipped classrooms, libraries, laboratories, and sports
                facilities provide the perfect learning environment.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Holistic Development
              </h3>
              <p className="text-gray-300">
                Focus on academics, sports, arts, and character building to
                develop well-rounded individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          Our Boarding Facilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Comfortable Accommodation
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Spacious and well-ventilated rooms</li>
              <li>• Separate accommodation for boys and girls</li>
              <li>• 24/7 security and supervision</li>
              <li>• Clean and hygienic living spaces</li>
              <li>• Housekeeping services</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl text-red-400 mb-4 font-semibold">
              Dining Facilities
            </h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Nutritious and balanced meals</li>
              <li>• Pure drinking water</li>
              <li>• Hygienic kitchen and dining area</li>
              <li>• Special dietary arrangements</li>
              <li>• Regular menu planning</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SAFETY & SECURITY */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Safety & Security
          </h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                24/7 Security
              </h3>
              <p className="text-gray-400">Round the clock security personnel</p>
            </div>
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                CCTV Surveillance
              </h3>
              <p className="text-gray-400">Complete campus monitoring</p>
            </div>
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                Medical Facility
              </h3>
              <p className="text-gray-400">On-campus medical care</p>
            </div>
            <div className="bg-black p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-red-400">
                Warden System
              </h3>
              <p className="text-gray-400">Trained wardens for supervision</p>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Enroll Your Child Today
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Give your child the best residential education experience at Gurukul Vidyapeeth,
          the premier boarding school in Hajipur.
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

export default BestBoardingHajipur;

