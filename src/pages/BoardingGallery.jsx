import React from "react";

const BoardingGallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2070",
      category: "Classroom",
      title: "Modern Classrooms",
    },
    {
      src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2020",
      category: "Students",
      title: "Active Learning",
    },
    {
      src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070",
      category: "Events",
      title: "Cultural Activities",
    },
    {
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2070",
      category: "Campus",
      title: "Boarding Campus",
    },
    {
      src: "https://images.unsplash.com/photo-1544531696-b474ca1355e3?q=80&w=2070",
      category: "Sports",
      title: "Sports Activities",
    },
    {
      src: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070",
      category: "Hostel",
      title: "Hostel Building",
    },
    {
      src: "https://images.unsplash.com/photo-1525921429618-f5170869b628?q=80&w=2070",
      category: "Library",
      title: "Library",
    },
    {
      src: "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?q=80&w=2070",
      category: "Lab",
      title: "Science Lab",
    },
    {
      src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070",
      category: "Sports",
      title: "Swimming Pool",
    },
    {
      src: "https://images.unsplash.com/photo-1591129841117-3adfd313e34f?q=80&w=2070",
      category: "Dining",
      title: "Dining Hall",
    },
    {
      src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070",
      category: "Events",
      title: "Annual Function",
    },
    {
      src: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=2070",
      category: "Sports",
      title: "Playground",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070"
          className="w-full h-full object-cover opacity-60"
          alt="Boarding Gallery"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            Boarding Gallery
          </h1>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">
          Life at Our Boarding School
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          Experience the vibrant life at Gurukul Vidyapeath through our gallery.
          From state-of-the-art classrooms to exciting sports activities, cultural
          events to comfortable hostel life - our students enjoy a holistic
          residential education experience.
        </p>
      </section>

      {/* GALLERY GRID */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Our Campus Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-[280px] object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center">
                  <span className="text-red-500 font-semibold text-sm mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          Video Gallery
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-[300px] bg-black flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=2070"
                className="w-full h-full object-cover opacity-50"
                alt="Campus Tour"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition">
                  <span className="text-white text-2xl font-bold">▶</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Campus Tour
              </h3>
              <p className="text-gray-400">
                Take a virtual tour of our beautiful campus
              </p>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="relative h-[300px] bg-black flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1544531696-b474ca1355e3?q=80&w=2070"
                className="w-full h-full object-cover opacity-50"
                alt="Student Life"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition">
                  <span className="text-white text-2xl font-bold">▶</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                Student Life
              </h3>
              <p className="text-gray-400">
                Experience the daily life of our students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            What Students Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 italic mb-6">
                "Living at Gurukul has been an amazing experience. The routine
                helps me stay disciplined and the teachers are very supportive."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">A</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Aarav Sharma</h4>
                  <p className="text-gray-400 text-sm">Class 10</p>
                </div>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 italic mb-6">
                "I love the sports facilities and the friendships I've made here.
                The boarding life teaches us to be independent."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">P</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Priya Singh</h4>
                  <p className="text-gray-400 text-sm">Class 9</p>
                </div>
              </div>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <p className="text-gray-300 italic mb-6">
                "The study environment is great. I can focus on my studies and
                also enjoy extracurricular activities."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">R</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Rahul Kumar</h4>
                  <p className="text-gray-400 text-sm">Class 11</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Visit Our Campus
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          See our boarding facilities firsthand by scheduling a visit to our campus.
        </p>
        <a
          href="/enquiry-form"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Schedule a Visit
        </a>
      </section>
    </div>
  );
};

export default BoardingGallery;

