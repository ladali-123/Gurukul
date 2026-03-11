import React from "react";
import { Link } from "react-router-dom";

const AdmissionProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Enquiry",
      description: "Fill out the enquiry form with your details and course interest. Our team will review your application and get in touch with you.",
      icon: "📝"
    },
    {
      number: "02",
      title: "Counselor Consultation",
      description: "Our experienced counselors will contact you to discuss your goals, answer your questions, and guide you through the admission process.",
      icon: "📞"
    },
    {
      number: "03",
      title: "Visit Campus",
      description: "Schedule a visit to our campus to meet our faculty, explore facilities, and experience the learning environment firsthand.",
      icon: "🏫"
    },
    {
      number: "04",
      title: "Application & Assessment",
      description: "Complete the application form and attend the entrance assessment (if required for your chosen program).",
      icon: "📋"
    },
    {
      number: "05",
      title: "Admission Confirmation",
      description: "Upon successful assessment, receive your admission offer and complete the registration process to secure your seat.",
      icon: "✅"
    },
    {
      number: "06",
      title: "Join Gurukul",
      description: "Attend orientation, meet your teachers and classmates, and begin your exciting learning journey with us!",
      icon: "🚀"
    }
  ];

  const requirements = [
    { title: "Age Criteria", description: "Minimum age as per class requirements", path: "/age-criteria" },
    { title: "Previous Records", description: "Academic transcripts from previous school", path: "/admissions" },
    { title: "Documents", description: "Birth certificate, photographs, ID proofs", path: "/admissions" },
    { title: "Transfer Certificate", description: "TC from previous school (if applicable)", path: "/admissions" }
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-[90px]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center pt-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Admission Process
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Your journey to quality education begins here. Follow our simple step-by-step admission process to join the Gurukul Vidyapeeth family.
          </p>
          <Link 
            to="/enquiry-form" 
            className="inline-block bg-white text-red-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Start Your Application
          </Link>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How to Apply
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
            We have streamlined our admission process to make it as simple and straightforward as possible for you.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-600 transition duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl font-bold text-red-600 opacity-50 group-hover:opacity-100 transition">
                    {step.number}
                  </span>
                  <span className="text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What You Need
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                To complete the admission process, please ensure you have the following documents and information ready.
              </p>
              <div className="space-y-4">
                {requirements.map((req, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 bg-gray-900 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300"
                  >
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{req.title}</h4>
                      <p className="text-gray-400 text-sm">{req.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 p-8 rounded-2xl border border-red-600/30">
                <h3 className="text-2xl font-bold mb-6">Important Notes</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">▸</span>
                    <span>Admissions are open for Academic Year 2024-25</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">▸</span>
                    <span>Limited seats available in each grade</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">▸</span>
                    <span>Entrance assessment is conducted for Grade 9 & above</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">▸</span>
                    <span>Early application is recommended for better seat availability</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-3">▸</span>
                    <span>Our admission team is available for personalized guidance</span>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-gray-800">
                  <p className="text-gray-400 mb-4">Have questions? Our counselors are here to help!</p>
                  <Link 
                    to="/contact" 
                    className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Take the first step towards your child's bright future. Apply now and join our community of achievers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/enquiry-form" 
              className="bg-white text-red-800 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Fill Enquiry Form
            </Link>
            <Link 
              to="/faqs" 
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-red-800 transition duration-300"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdmissionProcess;

