import { useState, useEffect } from "react";

export default function AdmissionsPage() {

  const [openFAQ, setOpenFAQ] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  
  {
    name: "Rahul Kumar",
    class: "Class 9",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "My studies have improved a lot since joining this school. The teachers are always helpful and explain everything clearly. The school environment is very friendly and supportive.",
  },
  {
    name: "Anjali Sharma",
    class: "Class 10",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    text: "The teachers here are very supportive and make every subject easy to understand. The school provides a perfect environment for focused learning.",
  },
  {
    name: "Amit Verma",
    class: "Class 11",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    text: "Along with studies, the school also offers amazing extra-curricular activities. I enjoy coming to school every day and learning new things.",
  },
  {
    name: "Sneha Gupta",
    class: "Class 9",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    text: "The teachers give time to every student and are very approachable. Class discussions and group activities make learning more interesting.",
  },
  {
    name: "Rohan Singh",
    class: "Class 10",
    image: "https://images.unsplash.com/photo-1531891437562-1a0ec1f1f2c3",
    text: "The school environment and teachers' support are amazing. Every subject is taught in an interactive and easy-to-understand way.",
  },
  {
    name: "Priya Nair",
    class: "Class 11",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    text: "I really like the school library and science labs. The facilities here make studying and doing projects much easier.",
  },
  {
    name: "Vikram Joshi",
    class: "Class 9",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "The teachers and senior students are very supportive. Besides studying, the school also organizes games and cultural activities which are really fun.",
  },
  {
    name: "Kavita Rao",
    class: "Class 10",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    text: "I love the school environment and the support from friends. Each student receives equal attention in class.",
  },
  {
    name: "Aditya Mehta",
    class: "Class 11",
    image: "https://images.unsplash.com/photo-1502764613149-7f1d229e230f",
    text: "The teachers make learning interesting and easy to follow. Extra help and guidance are always available for every subject.",
  },
];
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const faqs = [
    {
      q: "How do I apply for admission?",
      a: "Simply fill out the enquiry form and our team will contact you with the next steps.",
    },
    {
      q: "Is there an entrance test?",
      a: "For some programs we conduct a short assessment to understand your current level.",
    },
    {
      q: "Can I talk to a counselor before applying?",
      a: "Yes, once you submit the enquiry form our counselor will contact you.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-[90px]">

      {/* Hero */}
      <section className="text-center py-12 border-b border-gray-800 px-6">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Admissions Open
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Start your learning journey with us. Follow the simple admission process
          and join our community of passionate learners.
        </p>

      </section>


      {/* Admission Process */}
      <section className="py-14 bg-gray-950">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-14">
            Admission Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-semibold mb-2">Step 1</h3>
              <p className="text-gray-400 text-sm">
                Fill the enquiry form with your details and course interest.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold mb-2">Step 2</h3>
              <p className="text-gray-400 text-sm">
                Our counselor will contact you to discuss your goals.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-semibold mb-2">Step 3</h3>
              <p className="text-gray-400 text-sm">
                Complete registration and confirm your admission.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold mb-2">Step 4</h3>
              <p className="text-gray-400 text-sm">
                Start learning with expert mentors and real projects.
              </p>
            </div>

          </div>

        </div>

      </section>


      {/* Enquiry Form */}
      <section className="py-12 max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-10 text-center">
          Enquiry Form
        </h2>

        <form className="grid md:grid-cols-2 gap-6">

          <input
            type="text"
            placeholder="Full Name"
            className="bg-gray-900 border border-gray-700 p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-gray-900 border border-gray-700 p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Phone"
            className="bg-gray-900 border border-gray-700 p-3 rounded-lg"
          />

          <input
            type="text"
            placeholder="Course Interested"
            className="bg-gray-900 border border-gray-700 p-3 rounded-lg"
          />

          <textarea
            placeholder="Message"
            className="md:col-span-2 bg-gray-900 border border-gray-700 p-3 rounded-lg"
          />

          <button className="md:col-span-2 bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-300 transition">
            Submit Enquiry
          </button>

        </form>

      </section>


      {/* Testimonials */}
     {/* Testimonials */}
<section className="py-20 text-center px-6">

  <h2 className="text-3xl font-semibold mb-10">
    What Our Students Say
  </h2>

  <div className="max-w-3xl mx-auto bg-gray-900 p-10 rounded-xl border border-gray-800">

    <div className="flex items-center gap-4 mb-6 justify-center">

      <img
        src={testimonials[currentTestimonial].image}
        className="w-16 h-16 rounded-full object-cover"
      />

      <div className="text-left">

        <h4 className="font-semibold">
          {testimonials[currentTestimonial].name}
        </h4>

        <p className="text-gray-400 text-sm">
          {testimonials[currentTestimonial].class} {/* <-- fixed */}
        </p>

      </div>

    </div>

    <p className="text-gray-300 text-lg leading-relaxed">
      "{testimonials[currentTestimonial].text}"
    </p>

  </div>

</section>
      {/* FAQ */}
      <section className="py-20 bg-gray-950">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-center mb-12">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-800 rounded-lg mb-4"
            >

              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full text-left p-4 font-medium"
              >
                {faq.q}
              </button>

              {openFAQ === i && (
                <div className="p-4 text-gray-400 border-t border-gray-800">
                  {faq.a}
                </div>
              )}

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}