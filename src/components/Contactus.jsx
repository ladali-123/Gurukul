import React, { useState } from "react";
import pic2 from "../assets/pic2.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    dob: "",
    academic_year: "",
    email: "",
    mobile: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // success | error
  const [loading, setLoading] = useState(false); // optional UX

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_3pruyx9",
      "template_wmqr78g",
      {
        ...formData,
        time: new Date().toLocaleString()
      },
      "ALS-RHe7xrg_x2qz7"
    )
      .then(() => {
        setStatus("success");
        setLoading(false);

        setFormData({
          first_name: "",
          last_name: "",
          dob: "",
          academic_year: "",
          email: "",
          mobile: "",
          message: ""
        });

        setTimeout(() => setStatus(""), 3000);
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <div className="w-full h-[250px] md:h-[400px] relative">
        <img src={pic2} alt="contact" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="bg-red-500/40 px-6 py-4 rounded-xl text-center">
            <h1 className="text-3xl md:text-5xl font-bold">Contact Us</h1>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        <div>
          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p className="bg-green-600 text-white p-3 rounded mb-4">
              ✅ Enquiry Sent Successfully!
            </p>
          )}

          {status === "error" && (
            <p className="bg-red-600 text-white p-3 rounded mb-4">
              ❌ Failed to send. Try again!
            </p>
          )}

          <form onSubmit={sendEmail}>

            <div className="grid md:grid-cols-2 gap-4">

              <input name="first_name" value={formData.first_name} onChange={handleChange}
                type="text" placeholder="Student First Name"
                className="p-3 bg-gray-900 border border-gray-700 rounded" required />

              <input name="last_name" value={formData.last_name} onChange={handleChange}
                type="text" placeholder="Student Last Name"
                className="p-3 bg-gray-900 border border-gray-700 rounded" required />

              <input name="dob" value={formData.dob} onChange={handleChange}
                type="date"
                className="p-3 bg-gray-900 border border-gray-700 rounded" required />

              <select name="academic_year" value={formData.academic_year} onChange={handleChange}
                className="p-3 bg-gray-900 border border-gray-700 rounded" required>
                <option value="">Academic Year</option>
                <option>2025-26</option>
                <option>2026-27</option>
              </select>

              <input name="email" value={formData.email} onChange={handleChange}
                type="email" placeholder="Email Address"
                className="p-3 bg-gray-900 border border-gray-700 rounded" required />

              <input name="mobile" value={formData.mobile} onChange={handleChange}
                type="text" placeholder="Mobile Number"
                className="p-3 bg-gray-900 border border-gray-700 rounded" required />

            </div>

            <textarea name="message" value={formData.message} onChange={handleChange}
              placeholder="Message"
              className="w-full mt-4 p-3 bg-gray-900 border border-gray-700 rounded h-32"
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className={`mt-6 px-6 py-3 rounded font-semibold ${loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
                }`}
            >
              {loading ? "Sending..." : "Submit"}
            </button>

          </form>
        </div>

        {/* DETAILS */}
        <div className="bg-gray-900 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-red-500">Email Details</h2>
          <p className="mb-3">gurukulvidyapeethhaj@yahoo.in.com</p>
          <p className="mb-3">gurukulvidyapeeth330280@gmail.com</p>

          <h2 className="text-2xl font-bold mb-4 text-red-500">Phone Details</h2>
          <p> +91 9931602179</p>
          <p> +91 7673076349</p>
          <p>+91 8002043766</p>
        </div>

      </div>

      {/* MAP */}
      <div className="w-full h-[450px]">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=hajipur%20patna&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;