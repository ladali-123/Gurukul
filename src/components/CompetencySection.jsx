import React from "react";
import { Users, BookOpen, BookMarked } from "lucide-react";

const CompetencySection = () => {
  return (
    <section className="bg-red-900 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side - Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-1/2">
          
          {/* Admissions */}
          <div className="border border-red-500 rounded-xl h-40 flex flex-col items-center justify-center text-center hover:bg-red-800 transition duration-300 cursor-pointer">
            <Users className="text-red-400 mb-3" size={32} />
            <h3 className="text-white font-semibold tracking-wide">
              ADMISSIONS
            </h3>
          </div>

          {/* Curriculum */}
          <div className="border border-red-500 rounded-xl h-40 flex flex-col items-center justify-center text-center hover:bg-red-800 transition duration-300 cursor-pointer">
            <BookOpen className="text-red-400 mb-3" size={32} />
            <h3 className="text-white font-semibold tracking-wide">
              CURRICULUM
            </h3>
          </div>

          {/* Beyond Academics */}
          <div className="border border-red-500 rounded-xl h-40 flex flex-col items-center justify-center text-center hover:bg-red-800 transition duration-300 cursor-pointer">
            <BookMarked className="text-red-400 mb-3" size={32} />
            <h3 className="text-white font-semibold tracking-wide">
              BEYOND ACADEMICS
            </h3>
          </div>

        </div>

        {/* Right Side - Text */}
        <div className="text-white w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold leading-relaxed mb-8 max-w-xl">
            We believe that competency development is essential for creativity
            and being start-up ready in life.
          </h2>

          <button className="bg-white text-red-900 px-8 py-4 rounded-md font-semibold tracking-wider hover:bg-red-600 hover:text-white transition duration-300">
            FIND OUT MORE →
          </button>
        </div>

      </div>
    </section>
  );
};

export default CompetencySection;