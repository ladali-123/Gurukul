import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const testimonials = [
    {
      name: "Rahul Kumar",
      class: "Class 9",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
      text: "My studies have improved a lot since joining Gurukul. The teachers are always helpful and explain everything clearly. The school environment is very friendly and supportive.",
      category: "Student"
    },
    {
      name: "Anjali Sharma",
      class: "Class 10",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      text: "The teachers here are very supportive and make every subject easy to understand. The school provides a perfect environment for focused learning.",
      category: "Student"
    },
    {
      name: "Amit Verma",
      class: "Class 11 - Science",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
      text: "Along with studies, the school also offers amazing extra-curricular activities. I enjoy coming to school every day and learning new things.",
      category: "Student"
    },
    {
      name: "Sneha Gupta",
      class: "Class 9",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200",
      text: "The teachers give time to every student and are very approachable. Class discussions and group activities make learning more interesting.",
      category: "Student"
    },
    {
      name: "Rohan Singh",
      class: "Class 10",
      image: "https://images.unsplash.com/photo-1531891437562-1a0ec1f1f2c3?w=200",
      text: "The school environment and teachers' support are amazing. Every subject is taught in an interactive and easy-to-understand way.",
      category: "Student"
    },
    {
      name: "Priya Nair",
      class: "Class 11 - Commerce",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200",
      text: "I really like the school library and science labs. The facilities here make studying and doing projects much easier.",
      category: "Student"
    },
    {
      name: "Vikram Joshi",
      class: "Class 9",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
      text: "The teachers and senior students are very supportive. Besides studying, the school also organizes games and cultural activities which are really fun.",
      category: "Student"
    },
    {
      name: "Kavita Rao",
      class: "Class 10",
      image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=200",
      text: "I love the school environment and the support from friends. Each student receives equal attention in class.",
      category: "Student"
    },
    {
      name: "Aditya Mehta",
      class: "Class 11 - Humanities",
      image: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f?w=200",
      text: "The teachers make learning interesting and easy to follow. Extra help and guidance are always available for every subject.",
      category: "Student"
    }
  ];

  const parentTestimonials = [
    {
      name: "Mrs. Sunita Sharma",
      child: "Anjali Sharma - Class 10",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
      text: "Choosing Gurukul for my daughter was the best decision. She has grown not just academically but also as a confident individual. The teachers truly care about each student.",
      category: "Parent"
    },
    {
      name: "Mr. Rajesh Kumar",
      child: "Rahul Kumar - Class 9",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
      text: "The school maintains a perfect balance between academics and extra-curricular activities. My son has become more disciplined and focused since joining Gurukul.",
      category: "Parent"
    },
    {
      name: "Dr. Meena Patel",
      child: "Arjun Patel - Class 8",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
      text: "As a parent, I appreciate the open communication between teachers and parents. The school keeps us informed about our child's progress and helps us support their learning at home.",
      category: "Parent"
    },
    {
      name: "Mr. Suresh Reddy",
      child: "Sneha Reddy - Class 11",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
      text: "The IB curriculum at Gurukul has prepared my daughter well for global opportunities. The holistic approach to education here is commendable.",
      category: "Parent"
    }
  ];

  const allTestimonials = [...testimonials, ...parentTestimonials];

  const categories = ["All", "Student", "Parent"];

  const filteredTestimonials = activeCategory === "All" 
    ? allTestimonials 
    : allTestimonials.filter(t => t.category === activeCategory);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-black text-white min-h-screen pt-[90px]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center pt-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Testimonials
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Hear what our students and parents have to say about their experience at Gurukul Vidyapeeth.
          </p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Voices
          </h2>
          
          <div className="relative bg-gray-900 rounded-2xl p-8 md:p-12 border border-red-600/30">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-red-600"
                />
              </div>
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                    {testimonials[currentTestimonial].category}
                  </span>
                </div>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[currentTestimonial].class}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    currentTestimonial === index ? "bg-red-600" : "bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Community Says
          </h2>

          {/* Category Filter */}
          <div className="flex justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                  activeCategory === category
                    ? "bg-red-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {category === "All" ? "All" : `${category}s`}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-2xl border border-gray-800 hover:border-red-600 transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.class || testimonial.child}
                    </p>
                  </div>
                </div>
                <span className="inline-block px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded mb-3">
                  {testimonial.category}
                </span>
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Video Testimonials
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Watch our students and parents share their experiences in their own words.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-red-700 transition">
                    <span className="text-3xl text-white">▶</span>
                  </div>
                  <p className="text-gray-400">Student Experience</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">Life at Gurukul</h4>
                <p className="text-gray-400 text-sm">Hear from our students about their daily experience</p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800">
              <div className="aspect-video bg-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-red-700 transition">
                    <span className="text-3xl text-white">▶</span>
                  </div>
                  <p className="text-gray-400">Parent Experience</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-2">Why We Chose Gurukul</h4>
                <p className="text-gray-400 text-sm">Parents share why they trusted Gurukul with their children's education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">500+</div>
              <div className="text-gray-400">Happy Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">400+</div>
              <div className="text-gray-400">Satisfied Parents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <div className="text-gray-400">Would Recommend</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">4.8/5</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Gurukul Family
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Give your child the gift of quality education. Start your journey with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/enquiry-form" 
              className="bg-white text-red-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Apply Now
            </Link>
            <Link 
              to="/admission-process" 
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-red-800 transition duration-300"
            >
              Learn About Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

