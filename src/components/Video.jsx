import React from "react";
import campusVideo from "../assets/campus.mp4"; // adjust path if needed

export default function VideoSection() {
  return (
    <section className="bg-black w-full min-h-screen flex items-center justify-center">
      <div className="w-full h-screen relative">

        {/* Heading Overlay */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
            CAMPUS TOUR
          </h2>

          <div className="flex justify-center mt-4">
            <div className="w-20 h-1 bg-red-600 rounded-full"></div>
          </div>
        </div>

        {/* Local Video */}
        <video
          className="w-full h-full object-cover"
          src={campusVideo}
          autoPlay
          loop
          muted
          controls
        />
      </div>
    </section>
  );
}