import React from "react";

const Curriculum = () => {
  return (
    <div className="bg-black text-white">

      {/* HERO SECTION */}

      <div className="relative h-[380px]">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070"
          alt="curriculum"
          className="w-full h-full object-cover opacity-50"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            Our Curriculum
          </h1>
        </div>
      </div>


      {/* INTRO */}

      <section className="max-w-7xl mx-auto px-6 py-20 text-center">

        <h2 className="text-4xl font-bold text-red-500 mb-6">
          A Balanced & Future-Ready Curriculum
        </h2>

        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          Our curriculum is designed to provide a balanced and holistic
          education that develops academic excellence, creativity,
          critical thinking and leadership. We combine classroom
          learning with experiential projects, technology integration
          and collaborative learning experiences.
        </p>

      </section>


      {/* EARLY YEARS */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center border-t border-gray-800">

        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070"
          className="rounded-lg"
        />

        <div>

          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Early Years Programme
          </h2>

          <p className="text-gray-300 leading-8">
           The Early Years programme emphasizes play-based learning, creativity, and curiosity, enabling
            children to develop foundational literacy, numeracy, and social skills through engaging activities,
            interactive learning, and storytelling that nurture their overall growth and love for learning.
          </p>

        </div>

      </section>


      {/* PRIMARY YEARS */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center border-t border-gray-800">

        <div>

          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Primary School
          </h2>

          <p className="text-gray-300 leading-8">
           The Primary Years curriculum focuses on building a solid academic foundation in core 
           subjects such as language, mathematics, science, and social studies, while encouraging students
            to actively explore these areas through engaging projects, meaningful discussions,
            and collaborative learning activities that foster critical thinking and creativity.
          </p>

        </div>

        <img
          src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2070"
          className="rounded-lg"
        />

      </section>


      {/* MIDDLE SCHOOL */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center border-t border-gray-800">

        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
          className="rounded-lg"
        />

        <div>

          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Middle School
          </h2>

          <p className="text-gray-300 leading-8">
           Middle School fosters analytical thinking and a deeper understanding of academic subjects,
            encouraging students to explore concepts critically and creatively. They actively engage in
             interdisciplinary projects, hands-on research activities, and technology-based learning, which not only enhance their knowledge and skills but also develop problem-solving abilities, 
           collaboration, and independent thinking essential for future academic and personal growth.
          </p>

        </div>

      </section>


      {/* SENIOR SCHOOL */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center border-t border-gray-800">

        <div>

          <h2 className="text-3xl font-bold text-red-500 mb-4">
            Senior School
          </h2>

          <p className="text-gray-300 leading-8">
          The Senior School prepares students for higher education and future careers 
          by allowing them to specialise in subjects, develop research and critical thinking skills,
           and gain real-world experience through projects
           and leadership opportunities, fostering both academic and personal growth.
          </p>

        </div>

        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070"
          className="rounded-lg"
        />

      </section>


      {/* LEARNING APPROACH */}

      <section className="py-20 border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Our Learning Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            <div className="border border-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Project Based Learning
              </h3>
              <p className="text-gray-400">
                Students learn through real-world projects.
              </p>
            </div>

            <div className="border border-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Technology Integration
              </h3>
              <p className="text-gray-400">
                Digital tools and smart classrooms enhance learning.
              </p>
            </div>

            <div className="border border-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Collaborative Learning
              </h3>
              <p className="text-gray-400">
                Students work together to solve problems.
              </p>
            </div>

            <div className="border border-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Skill Development
              </h3>
              <p className="text-gray-400">
                Focus on creativity, leadership and communication.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Curriculum;