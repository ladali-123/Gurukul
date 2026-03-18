import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import pic1 from "../assets/pic1.jpg";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image: pic2,
      title: "Gurukul Vidyapeeth, Hajipur",
      subtitle:
        "Excellence in Education with Modern Innovation & Traditional Values",
      extra: "Admissions Open 2026-27",
    },
    {
      image: pic1,
      title: "World-Class Infrastructure",
      subtitle:
        "Smart Classrooms, Science Labs & Holistic Development Facilities",
    },
    {
      image: pic3,
      title: "Empowering Future Leaders",
      subtitle:
        "Shaping Young Minds with Discipline, Knowledge & Innovation",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt="slide"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center text-center px-6
              ${
                index === 0
                  ? "bg-black/50 text-white"   // ✅ FIXED first slide
                  : "bg-black/50 text-white"
              }`}
          >
            <div className="max-w-4xl">
              {/* Heading */}
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-2xl mb-6 drop-shadow-md">
                {slide.subtitle}
              </p>

              {/* Extra Badge */}
              {slide.extra && (
                <div className="inline-block px-6 py-2 rounded-full text-sm tracking-wider bg-red-600 text-white shadow-lg">
                  {slide.extra}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-black text-white p-3 rounded transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-black text-white p-3 rounded transition"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default Carousel;