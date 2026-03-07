import React from "react";

const Boarding = () => {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}

      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070"
          className="w-full h-full object-cover opacity-60"
          alt="boarding school"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            Boarding Life
          </h1>
        </div>
      </div>



      {/* ABOUT BOARDING */}

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Best Boarding School in Hajipur
        </h2>

        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          Our boarding school in Hajipur provides a safe, nurturing and inspiring
          environment where students grow academically and personally.
          We focus on discipline, leadership, and holistic development.
          Students live in a well-supervised campus with modern facilities,
          comfortable accommodation and engaging daily routines.
        </p>

        <p className="text-gray-300 leading-8 max-w-3xl mx-auto mt-4 ">
          The boarding experience encourages independence, responsibility and
          teamwork. From academic learning to sports, cultural activities and
          social engagement, every aspect of student life is carefully designed
          to support their overall growth.
        </p>

      </section>



      {/* DAILY SCHEDULE */}

      <section className="bg-gray-900 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Daily Schedule
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Morning Routine
              </h3>
              <p className="text-gray-300">
                Students start their day with morning exercise, meditation,
                and a healthy breakfast followed by academic classes.
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Study & Learning
              </h3>
              <p className="text-gray-300">
                Structured classroom learning with dedicated study hours
                and academic mentoring from experienced teachers.
              </p>
            </div>

            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl text-red-400 mb-3 font-semibold">
                Evening Activities
              </h3>
              <p className="text-gray-300">
                Sports, games, cultural programs and creative activities
                help students relax and develop new skills.
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* SPORTS */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          Sports & Activities
        </h2>

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Football</h3>
            <p className="text-gray-400">Team games and regular practice.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Cricket</h3>
            <p className="text-gray-400">Professional coaching and matches.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Basketball</h3>
            <p className="text-gray-400">Modern court and training sessions.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Yoga</h3>
            <p className="text-gray-400">Daily wellness and mindfulness.</p>
          </div>

        </div>

      </section>



      {/* STUDENT LIFE CAROUSEL */}

      <section className="bg-gray-900 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Life at Boarding
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2070"
              className="rounded-lg object-cover h-[250px] w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070"
              className="rounded-lg object-cover h-[250px] w-full"
            />

            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
              className="rounded-lg object-cover h-[250px] w-full"
            />

          </div>

        </div>

      </section>


    </div>
  );
};

export default Boarding;