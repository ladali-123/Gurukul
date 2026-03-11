import React, { useState } from "react";
import { Link } from "react-router-dom";
import admissionImg from "../assets/admission.jpg";

const admissionsDropdownItems = [
  { name: "Admission Process", path: "/admission-process" },
  { name: "Enquiry Form", path: "/enquiry-form" },
  { name: "Frequently Asked Questions", path: "/faqs" },
  { name: "Testimonials", path: "/testimonials" },
];

const faqs = [
  {
    question: "What curriculum does the school offer?",
    answer:
      "The school offers international curriculum with inquiry based learning and strong academic focus."
  },
  {
    question: "Which programmes are offered?",
    answer:
      "Programmes are offered for students from early years to senior secondary level."
  },
  {
    question: "What is the average class size?",
    answer:
      "The average class size is kept small to ensure personalized learning."
  },
  {
    question: "Are laptops allowed in school?",
    answer:
      "Yes, students may use laptops depending on grade level and subject requirements."
  },
  {
    question: "Is English language support available?",
    answer:
      "Yes, additional English support is provided for non-native speakers."
  },
  {
    question: "Are school meals provided?",
    answer:
      "Healthy meals are available in the school cafeteria."
  },
  {
    question: "Is school transportation available?",
    answer:
      "Yes, transportation is available across major areas of the city."
  },
  {
    question: "What are the school timings?",
    answer:
      "School timings vary depending on the grade level."
  },
  {
    question: "What is the admission procedure?",
    answer:
      "Admissions include enquiry, assessment and approval based on seat availability."
  }
];

const Faqs = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white pt-[90px]">

      {/* HERO SECTION */}
      <section className="relative h-[320px] w-full">
        <img
          src={admissionImg}
          alt="FAQ"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center">
          <div className="bg-red-700/90 px-10 py-6 ml-10 rounded">
            <h1 className="text-4xl md:text-5xl font-bold">
              Frequently Asked Questions
            </h1>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-gray-400">
        Home &gt; Admissions &gt; Frequently Asked Questions
      </div>

      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <div className="md:col-span-1">
          <div className="border border-gray-800">

            {admissionsDropdownItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`block px-6 py-4 border-b border-gray-800 transition ${
                  item.name === "Frequently Asked Questions"
                    ? "bg-red-600 text-white"
                    : "hover:bg-red-600"
                }`}
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>

        {/* FAQ CONTENT */}
        <div className="md:col-span-3">

          <h2 className="text-3xl font-bold mb-6 text-red-500">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-300 border-l-4 border-red-600 pl-4 mb-8">
            Here are some of the most commonly asked questions regarding
            admissions and school facilities. Click on a question to view the answer.
          </p>

          <div className="space-y-3">

            {faqs.map((faq, index) => (

              <div key={index} className="border border-gray-700">

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 flex justify-between items-center bg-gray-900 hover:bg-gray-800"
                >
                  <span className="text-left">{index + 1}. {faq.question}</span>

                  <span>
                    {openIndex === index ? "▲" : "▼"}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 text-gray-300 bg-black border-t border-gray-700">
                    {faq.answer}
                  </div>
                )}

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Faqs;