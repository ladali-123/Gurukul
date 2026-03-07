import React from "react";
import diagram from "../assets/diagram.png";
import sir from "../assets/sir.jpg";

const About = () => {
  return (
    <>
      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-2 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 mt-18">
            Best School in Hajipur – Gurukul
          </h2>

          <div className="text-gray-300 text-lg leading-relaxed space-y-4 text-justify">
            <p>
              Established with a vision to transform education,
              <span className="text-white font-semibold"> Gurukul </span>
              has proudly earned its reputation as the
              <span className="text-white font-semibold"> best school in Hajipur</span>.
              Our institution is built on a strong foundation of academic excellence,
              moral values, discipline, and holistic development. We believe that true
              education shapes not only brilliant minds but also strong character,
              integrity, resilience, empathy, leadership, responsibility, confidence,
              vision, lifelong wisdom, perseverance, adaptability, and compassion.
            </p>

            <p>
              At Gurukul, learning goes beyond textbooks and examinations. We foster
              an environment where curiosity is encouraged, creativity is nurtured,
              and leadership qualities are developed from an early age. Our curriculum
              is thoughtfully designed to combine academic rigor with co-curricular
              activities, ensuring that every child receives a balanced and enriching
              educational experience. Our dedicated and experienced faculty members
              are committed to guiding students toward academic success while also
              mentoring them in personal growth. With modern classrooms, advanced
              learning tools, and a supportive, innovative, dynamic, and inclusive
              atmosphere, we create inspiring opportunities for students to explore
              their talents and discover their true global, future-ready potential.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US SECTION ================= */}
      <section className="bg-black py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

          {/* Left Text */}
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl font-bold mb-6">
              Why Gurukul School Hajipur ?
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed text-justify">
             Gurukul School Hajipur is committed to providing quality education, experienced faculty, modern infrastructure, and a nurturing environment where every child feels valued and inspired to learn. We focus on academic excellence along with personality development, leadership skills, and moral values that help students succeed not only in examinations but also in real life challenges. Our balanced approach ensures students grow intellectually, socially, and emotionally, preparing them to become confident, responsible, and compassionate individuals. Through innovative teaching methods, continuous assessment, and active participation in co-curricular activities, we encourage students to think critically, communicate effectively, and develop a strong sense of discipline and integrity. At Gurukul, our goal is to empower young minds with knowledge, skills, and values that shape a bright and successful future.
            </p>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={diagram}
              alt="School Diagram"
              className="rounded-xl shadow-lg max-w-md w-full mt-4"
            />
          </div>

        </div>
      </section>

      {/* ================= FROM THE DESK OF MD & CEO SECTION ================= */}
      <section className="bg-black py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">

          {/* Left Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={sir}
              alt="MD & CEO"
              className="rounded-xl shadow-lg w-full max-w-xl lg:max-w-xl"
            />
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              FROM THE DESK OF MD & CEO
            </h2>

            <h3 className="text-xl font-semibold mb-4 text-green-500">
              Our Commitment to Excellence
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed text-justify mb-6">
              At Gurukul School Hajipur, our vision is to provide an education
              system that empowers students with knowledge, confidence, and strong
              moral values. We believe that education is not just about academic
              achievement, but about shaping responsible citizens who contribute
              positively to society.
            </p>

            
            <div className="mt-6">
              <p className="text-gray-400 italic">Warm Regards,</p>
              <p className="text-2xl font-semibold mt-2">Arjun Ray</p>
              <p className="text-gray-400 mt-1">
                Founder MD & CEO <br /> Gurukul School Hajipur
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;