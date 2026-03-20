import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import pic23 from "../assets/pic23.jpg";

const admissionsDropdownItems = [
  { name: "Admission Process", path: "/admission-process" },
  { name: "Enquiry Form", path: "/enquiry-form" },
  { name: "Frequently Asked Questions", path: "/faqs" },
  
];

const inputStyle =
  "w-full p-3 rounded bg-black border border-gray-700 text-white placeholder-gray-400 focus:bg-black focus:text-white focus:border-red-500 outline-none";

const EnquiryForm = () => {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    dob: "",
    academic_year: "",
    student_category: "",
    grade: "",
    email: "",
    mobile: "",
    parent_name: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // ✅ NEW

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_q5qmuz8",
      "template_sdqewm7",
      formData,
      "ALS-RHe7xrg_x2qz7"
    )
    .then(() => {
      setStatus("success"); // ✅

      // auto hide after 3 sec
      setTimeout(() => setStatus(""), 3000);

      setFormData({
        first_name: "",
        last_name: "",
        gender: "",
        dob: "",
        academic_year: "",
        student_category: "",
        grade: "",
        email: "",
        mobile: "",
        parent_name: "",
        message: ""
      });
    })
    .catch(() => {
      setStatus("error"); // ✅
    });
  };

  return (
   <div className="bg-black text-white pt-[90px]">

  {/* HERO IMAGE */}
  <section className="w-full h-[250px] md:h-[400px] relative">
    <img
      src={pic23}
      alt="Enquiry"
      className="w-full h-full object-cover"
      style={{ objectPosition: "center 35%" }}
    />

    <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
      <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Enquiry Form
        </h1>
      </div>
    </div>
  </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-gray-400">
        Home &gt; Admissions &gt; Enquiry Form
      </div>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <div className="md:col-span-1">
          <div className="border border-gray-800">

            {admissionsDropdownItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`block px-6 py-4 border-b border-gray-800 transition ${
                  item.name === "Enquiry Form"
                    ? "bg-red-600 text-white"
                    : "hover:bg-red-600"
                }`}
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>

        {/* FORM */}
        <div className="md:col-span-3">

          <h2 className="text-3xl font-bold mb-8 text-red-500">
            Online Enquiry Form
          </h2>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

            {/* ✅ SUCCESS / ERROR MESSAGE */}
            {status === "success" && (
              <div className="md:col-span-2 bg-green-600 text-white p-3 rounded">
                ✅ Enquiry Sent Successfully!
              </div>
            )}

            {status === "error" && (
              <div className="md:col-span-2 bg-red-600 text-white p-3 rounded">
                ❌ Failed to send. Try again.
              </div>
            )}

            <div>
              <label className="block mb-2 text-gray-300">
                Student's First Name *
              </label>
              <input name="first_name" type="text" className={inputStyle} onChange={handleChange} value={formData.first_name}/>
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Student's Last Name *
              </label>
              <input name="last_name" type="text" className={inputStyle} onChange={handleChange} value={formData.last_name}/>
            </div>

            <div>
              <label className="block mb-2 text-gray-300">Gender *</label>
              <div className="w-full p-3 rounded bg-black border border-gray-700 flex gap-8">
                <label>
                  <input type="radio" name="gender" value="Male" onChange={handleChange}/> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="Female" onChange={handleChange}/> Female
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-2 text-gray-300">
                Date of Birth *
              </label>
              <input
                name="dob"
                type="date"
                className={`${inputStyle} date-input`}
                onChange={handleChange}
                value={formData.dob}
              />
            </div>

            <select name="academic_year" className={inputStyle} onChange={handleChange}>
              <option>Please choose an option</option>
              <option>2024 - 2025</option>
              <option>2025 - 2026</option>
            </select>

            <select name="student_category" className={inputStyle} onChange={handleChange}>
              <option>Please choose an option</option>
              <option>Domestic</option>
              <option>International</option>
            </select>

            <select name="grade" className={inputStyle} onChange={handleChange}>
              <option>Please choose an option</option>
              <option>Grade 1</option>
              <option>Grade 2</option>
            </select>

            <input name="email" type="email" className={inputStyle} onChange={handleChange} value={formData.email}/>
            <input name="mobile" className={inputStyle} onChange={handleChange} value={formData.mobile}/>
            <input name="parent_name" className={inputStyle} onChange={handleChange} value={formData.parent_name}/>

            <div className="md:col-span-2">
              <textarea name="message" rows="4" className={inputStyle} onChange={handleChange} value={formData.message}></textarea>
            </div>

            <div className="md:col-span-2">
              <button type="submit" className="bg-red-600 hover:bg-red-700 px-8 py-3 font-semibold rounded">
                Enquire Now
              </button>
            </div>

          </form>

        </div>
      </section>
    </div>
  );
};

export default EnquiryForm;