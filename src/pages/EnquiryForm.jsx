import React, { useState } from "react";
import { Link } from "react-router-dom";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studentName: "",
    dateOfBirth: "",
    grade: "",
    campus: "",
    howDidYouHear: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    console.log("Form submitted:", formData);
  };

  const grades = [
    "Nursery",
    "Kindergarten",
    "Class 1",
    "Class 2",
    "Class 3",
    "Class 4",
    "Class 5",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12"
  ];

  const campuses = [
    "Hajipur Campus",
    "Bangalore Campus"
  ];

  const hearOptions = [
    "Google Search",
    "Social Media",
    "Friends & Family",
    "School Visit",
    "Advertisement",
    "Other"
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-[90px]">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 via-red-800 to-red-900 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center pt-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Enquiry Form
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Fill out the form below and our admission team will get in touch with you shortly.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          {isSubmitted ? (
            <div className="bg-gray-900 p-12 rounded-2xl border border-green-600 text-center">
              <div className="text-6xl mb-6">✅</div>
              <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
              <p className="text-gray-400 text-lg mb-8">
                Your enquiry has been submitted successfully. Our admission team will contact you within 24-48 hours.
              </p>
              <div className="flex gap-4 justify-center">
                <Link 
                  to="/" 
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  Go to Home
                </Link>
                <Link 
                  to="/testimonials" 
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-lg transition"
                >
                  View Testimonials
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-gray-900 p-8 md:p-12 rounded-2xl border border-gray-800">
              <h2 className="text-2xl font-bold mb-2">Student Information</h2>
              <p className="text-gray-400 mb-8">Please provide details about the student seeking admission</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Parent Details */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Parent's First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:border-red-600 focus:outline-none transition"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Parent's Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:border-red-600 focus:outline-none transition"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:border-red-600 focus:outline-none transition"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:border-red-600 focus:outline-none transition"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                {/* Student Details */}
                <div className="pt-6 border-t border-gray-800">
                  <h3 className="text-xl font-semibold mb-6">Student Details</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Student's Full Name *</label>
                    <input
                      type="text"
                      name="studentName"
                      required
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:border-red-600 focus:outline-none transition"
                      placeholder="Enter student's name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Date of Birth *</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:border-red-600 focus:outline-none transition text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Grade/Class Applying For *</label>
                    <select
                      name="grade"
                      required
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:border-red-600 focus:outline-none transition text-gray-400"
                    >
                      <option value="">Select Grade</option>
                      {grades.map((grade) => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Preferred Campus *</label>
                    <select
                      name="campus"
                      required
                      value={formData.campus}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:border-red-600 focus:outline-none transition text-gray-400"
                    >
                      <option value="">Select Campus</option>
                      {campuses.map((campus) => (
                        <option key={campus} value={campus}>{campus}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">How did you hear about us?</label>
                    <select
                      name="howDidYouHear"
                      value={formData.howDidYouHear}
                      onChange={handleChange}
                      className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:border-red-600 focus:outline-none transition text-gray-400"
                    >
                      <option value="">Select an option</option>
                      {hearOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 mb-2">Additional Message / Questions</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-gray-700 p-3 rounded-lg focus:border-red-600 focus:outline-none transition"
                    placeholder="Any specific questions or information you'd like to share..."
                  ></textarea>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-lg transition duration-300"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+91 XXX XXX XXXX</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400">admissions@gurukul.edu</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-400">Hajipur & Bangalore Campus</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnquiryForm;

