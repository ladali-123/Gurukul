import React from "react";

const BeyondAcademics = () => {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}

      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070"
          className="w-full h-full object-cover opacity-50"
          alt="students learning"
        />

        <div className="absolute inset-0 flex items-center justify-center">
         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 text-center">
      Beyond Academics
    </h1>
        </div>
      </div>



      {/* INTRO */}

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h2 className="text-4xl text-red-500 font-bold mb-6">
          Learning Beyond the Classroom
        </h2>

        <p className="text-gray-300 max-w-3xl mx-auto leading-8">
          At our school we believe that true education goes beyond textbooks.
          Students participate in presentations, innovation projects,
          robotics programs, community engagement and creative activities
          that develop leadership, confidence and real-world problem solving.
        </p>

      </section>



      {/* PRESENTATIONS */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center border-t border-gray-800">

        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
          className="rounded-lg"
        />

        <div>
          <h2 className="text-3xl text-red-500 font-bold mb-4">
            Presentations & Case Studies
          </h2>

          <p className="text-gray-300 leading-8">
            Students regularly present projects, research ideas and
            real-life case studies. These activities help them develop
            public speaking skills, analytical thinking and confidence
            to share ideas in front of an audience.
          </p>
        </div>

      </section>



      {/* ROBOTICS */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center border-t border-gray-800">

        <div>
          <h2 className="text-3xl text-red-500 font-bold mb-4">
            Robotics & Innovation
          </h2>

          <p className="text-gray-300 leading-8">
            Our robotics and innovation labs encourage students to explore
            artificial intelligence, coding, automation and technology.
            Students design robots, build prototypes and participate in
            innovation challenges that prepare them for the future.
          </p>
        </div>

        <img
          src="https://i.pinimg.com/1200x/c1/83/e8/c183e8c566f1b189deb6b84181ad8105.jpg"
          className="rounded-lg"
        />

      </section>



      {/* COMMUNITY LEARNING */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center border-t border-gray-800">

        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
          className="rounded-lg"
        />

        <div>
          <h2 className="text-3xl text-red-500 font-bold mb-4">
            Community Engagement
          </h2>

          <p className="text-gray-300 leading-8">
            Students take part in community service programs that
            build empathy, leadership and social responsibility.
            Activities include volunteering, awareness campaigns
            and social impact initiatives.
          </p>
        </div>

      </section>



      {/* HOLISTIC EDUCATION */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center border-t border-gray-800">

        <div>
          <h2 className="text-3xl text-red-500 font-bold mb-4">
            Holistic Education Model
          </h2>

          <p className="text-gray-300 leading-8">
            Our education model focuses on academic excellence,
            emotional intelligence, creativity and leadership.
            Students develop life skills through experiential
            learning, collaboration and project-based activities.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070"
          className="rounded-lg"
        />

      </section>



      {/* STUDENT GALLERY */}

      <section className="py-20 border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Student Activities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070"
              className="rounded-lg object-cover h-[250px]"
            />

            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070"
              className="rounded-lg object-cover h-[250px]"
            />

            <img
              src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2070"
              className="rounded-lg object-cover h-[250px]"
            />

          </div>

        </div>

      </section>

    </div>
  );
};

export default BeyondAcademics;