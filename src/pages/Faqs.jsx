import React, { useState } from "react";
import { Link } from "react-router-dom";

const Faqs = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      category: "Admission Process",
      questions: [
        {
          q: "How do I apply for admission?",
          a: "You can apply for admission by filling out the enquiry form on our website. Our admission team will contact you within 24-48 hours to guide you through the process. Alternatively, you can visit our campus directly or call us to start the application process."
        },
        {
          q: "What is the admission process timeline?",
          a: "The admission process typically takes 1-2 weeks from enquiry to confirmation. This includes the initial consultation, campus visit, assessment (if required), and final admission. We recommend applying early as seats are limited."
        },
        {
          q: "Is there an entrance test for admission?",
          a: "For certain grades (Class 9 and above), we conduct a short assessment to understand the student's current academic level. The assessment includes basic concepts in Mathematics, English, and Science. Our counselors will inform you if an assessment is required for your child's grade."
        },
        {
          q: "Can I schedule a campus visit before applying?",
          a: "Absolutely! We encourage all parents to visit our campus before making a decision. You can schedule a campus tour by filling the enquiry form or calling our admission office. During the visit, you'll meet our faculty, explore facilities, and get a feel of our learning environment."
        }
      ]
    },
    {
      category: "Academic Programs",
      questions: [
        {
          q: "What boards and curricula do you offer?",
          a: "Gurukul Vidyapeeth offers multiple educational boards including CBSE and IB (International Baccalaureate). We provide comprehensive curricula designed to meet international standards while maintaining cultural values. Our curriculum focuses on holistic development including academics, sports, and life skills."
        },
        {
          q: "What is the student-teacher ratio?",
          a: "We maintain a healthy student-teacher ratio of 20:1 in primary grades and 25:1 in higher grades. This ensures personalized attention for each student and enables teachers to understand and address individual learning needs effectively."
        },
        {
          q: "Do you offer online or hybrid learning options?",
          a: "Yes, we have integrated technology into our teaching methodology. While we primarily follow in-person classes, we use smart boards, online resources, and digital learning tools to enhance the learning experience. During unforeseen circumstances, we are equipped to switch to online learning seamlessly."
        }
      ]
    },
    {
      category: "Fee Structure & Payment",
      questions: [
        {
          q: "What is the fee structure?",
          a: "Our fee structure varies by grade and program. The fees include tuition, books, uniforms, and access to all campus facilities. We offer flexible payment options including monthly, quarterly, and annual payment plans. Please contact our admission office for detailed fee information for your chosen grade."
        },
        {
          q: "Do you offer scholarships or financial aid?",
          a: "Yes, we offer merit-based scholarships for outstanding students and need-based financial aid for deserving families. Scholarships are available for academic excellence, sports achievements, and special talents. Contact our admission office to learn about available scholarship programs and eligibility criteria."
        },
        {
          q: "Are there any hidden costs?",
          a: "No, we believe in transparency. The fee structure provided is comprehensive and includes most necessities. Additional costs may include optional activities, field trips, special programs, and examination fees for external exams. All costs are clearly communicated during the admission process."
        }
      ]
    },
    {
      category: "Facilities & Services",
      questions: [
        {
          q: "What facilities are available on campus?",
          a: "Our campus offers state-of-the-art facilities including modern classrooms, well-equipped science and computer labs, a comprehensive library, sports fields, swimming pool, music and art rooms, medical room, and cafeteria. We prioritize creating a safe and conducive learning environment for all students."
        },
        {
          q: "Do you provide transport facilities?",
          a: "Yes, we offer safe and reliable transport facilities covering various routes in and around Hajipur and Bangalore. Our buses are equipped with GPS tracking and trained staff to ensure student safety. Transport availability and routes can be confirmed during the admission process."
        },
        {
          q: "Is there a medical facility on campus?",
          a: "Yes, we have a well-equipped medical room with qualified nursing staff. Regular health check-ups are conducted for all students. In case of medical emergencies, we have established protocols to ensure quick response and coordination with nearby hospitals."
        },
        {
          q: "What after-school activities are available?",
          a: "We offer a wide range of after-school activities including sports (cricket, football, basketball, swimming), performing arts (music, dance, drama), visual arts (painting, sculpture), clubs (debate, science, robotics), and community service. These activities are designed to discover and nurture each child's unique talents."
        }
      ]
    },
    {
      category: "General Information",
      questions: [
        {
          q: "What are the school hours?",
          a: "Our school timing is from 8:00 AM to 3:30 PM on weekdays. Primary grades (Nursery to Class 5) finish at 1:30 PM. We also offer after-school care facilities for parents who need extended hours. Please check with the specific campus for detailed timing information."
        },
        {
          q: "How can I communicate with teachers?",
          a: "We maintain open communication between parents and teachers. You can connect with teachers through our official communication app, scheduled parent-teacher meetings (conducted quarterly), email, or by appointment. We believe in partnership between parents and school for student success."
        },
        {
          q: "What is your attendance policy?",
          a: "Regular attendance is crucial for academic success. We expect students to maintain at least 90% attendance. In case of illness or emergencies, please inform the school immediately. For extended absences, parents need to apply for leave in advance through the proper channels."
        }
      ]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-[90px]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center pt-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Find answers to common questions about admissions, academics, facilities, and more.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-600 mr-4 rounded"></span>
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = catIndex * 100 + faqIndex;
                  return (
                    <div
                      key={faqIndex}
                      className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full text-left p-5 flex items-center justify-between font-medium hover:bg-gray-800 transition duration-300"
                      >
                        <span className="pr-4">{faq.q}</span>
                        <span className={`text-red-600 text-2xl flex-shrink-0 transition-transform duration-300 ${openFAQ === globalIndex ? 'rotate-180' : ''}`}>
                          ▼
                        </span>
                      </button>
                      {openFAQ === globalIndex && (
                        <div className="px-5 pb-5 text-gray-400 leading-relaxed border-t border-gray-800 pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            If you couldn't find the answer you're looking for, our admission team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to="/enquiry-form" 
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              Fill Enquiry Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;

