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
            Best School in Hajipur – Gurukul Vidyapeeth
          </h2>

          <div className="text-gray-300 text-lg leading-relaxed space-y-4 text-justify">
            <p>
              Established on
              <span className="text-white font-semibold"> 26th January 2002</span>,
              <span className="text-white font-semibold"> Gurukul Vidyapeeth </span>
              began its journey with 135 students and has today grown into one of the
              <span className="text-white font-semibold"> leading CBSE-affiliated schools</span>
              , with over 4000 students. Spread across a serene
              <span className="text-white font-semibold"> 5-acre green campus</span>,
              the school provides a peaceful and enriching environment surrounded by lush
              orchards and open spaces, creating a perfect atmosphere for learning and growth.
              Our institution stands on a strong foundation of academic excellence, discipline,
              values, and holistic development, where students are nurtured to become confident,
              responsible, and future-ready individuals.
            </p>

            <p>
              At Gurukul Vidyapeeth, education goes beyond textbooks, focusing equally on
              innovation and overall growth. The campus is equipped with modern facilities
              such as AI & Robotics Lab, smart classrooms, library and resource center,
              computer, science and mathematics labs, along with art, music, and activity rooms.
              We actively promote cultural activities, games and sports, excursions, and
              leadership development opportunities. With a safe and secure environment,
              dedicated faculty, and reliable transport facilities, we ensure that every
              student experiences a balanced, inspiring, and progressive journey of learning
              and personal development, preparing them to face future challenges with confidence and strong leadership qualities in a competitive global modern world.
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
              Why Gurukul Vidyapeeth Hajipur ?
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed text-justify">
              Gurukul Vidyapeeth Hajipur stands out for its commitment to modern, result-oriented
              education combined with strong academic guidance and student care. The school integrates
              smart classes to make learning interactive and effective while organizing regular trips
              and excursions to places of historical and scientific importance. Regular medical check-ups
              ensure students’ well-being. Special preparation for IIT, Medical, and other competitive
              examinations begins from class VII under expert guidance. Upgraded to Senior Secondary in 2013,
              the school continues to excel in preparing students for engineering and medical careers. With
              its extended branch at Anjanpeer Chauraha and additional coaching support without extra fees,
              along with a safe hostel facility, Gurukul provides a disciplined, supportive, and growth-oriented
              environment for every student, ensuring their overall academic excellence and holistic personality
              development for future success in a highly competitive world today globally successfully.
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
              className="rounded-xl shadow-lg w-full max-w-xl h-64 sm:h-80 md:h-80 lg:h-[500px] object-cover"
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
              At Gurukul Vidyapeeth (GKVP), we are committed to providing quality education in a
              nurturing and disciplined environment. As a CBSE-affiliated institution, we focus on
              the holistic development of every child—intellectual, moral, physical, and emotional.
              Guided by Neo-Humanistic values, we aim to shape compassionate, responsible, and confident
              individuals who are prepared to contribute meaningfully to society. We strive to create
              a learning atmosphere that inspires curiosity, creativity, and lifelong learning.
            </p>


            <div className="mt-6">
              <p className="text-gray-400 italic">Warm Regards,</p>
              {/* <p className="text-2xl font-semibold mt-2">Arjun Ray</p>*/}
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