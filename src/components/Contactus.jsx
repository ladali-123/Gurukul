import React from "react";
import pic2 from "../assets/pic2.jpg";

const Contact = () => {
  return (
    <div className="bg-black text-white">

      {/* ======= HERO SECTION ======= */}
     {/* ======= HERO SECTION ======= */}
<div className="w-full h-[250px] md:h-[400px] relative">
  <img
    src={pic2}
    alt="contact"
    className="w-full h-full object-cover"
    style={{ objectPosition: "center 50%" }}
  />

  <div className="absolute inset-0 bg-black/30 flex items-center justify-center px-4">
    <div className="bg-red-500/40 px-4 py-3 md:px-12 md:py-6 rounded-xl md:rounded-2xl text-center max-w-[90%] md:max-w-fit">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
        Contact Us
      </h1>
    </div>
  </div>
</div>



      {/* ======= FORM SECTION ======= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* FORM */}
        <div>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Student First Name"
              className="p-3 bg-gray-900 border border-gray-700 rounded"
            />

            <input
              type="text"
              placeholder="Student Last Name"
              className="p-3 bg-gray-900 border border-gray-700 rounded"
            />

            <input
              type="date"
              className="p-3 bg-gray-900 border border-gray-700 rounded"
            />

            <select className="p-3 bg-gray-900 border border-gray-700 rounded">
              <option>Academic Year</option>
              <option>2025-26</option>
              <option>2026-27</option>
            </select>

            <input
              type="email"
              placeholder="Email Address"
              className="p-3 bg-gray-900 border border-gray-700 rounded"
            />

            <input
              type="text"
              placeholder="Mobile Number"
              className="p-3 bg-gray-900 border border-gray-700 rounded"
            />

          </div>

          <textarea
            placeholder="Message"
            className="w-full mt-4 p-3 bg-gray-900 border border-gray-700 rounded h-32"
          ></textarea>

          <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold">
            Submit
          </button>

        </div>


        {/* CONTACT DETAILS */}
        <div className="bg-gray-900 p-8 rounded-lg">

          <h2 className="text-2xl font-bold mb-6 text-red-500">
            Email Details
          </h2>

          <p className="mb-3">Admissions: admissions@gurukulschool.com</p>
          <p className="mb-3">Feedback: feedback@gurukulschool.com</p>
          <p className="mb-3">Careers: careers@gurukulschool.com</p>
          <p className="mb-6">Principal: principal@gurukulschool.com</p>


          <h2 className="text-2xl font-bold mb-4 text-red-500">
            Phone Details
          </h2>

          <p>Reception: +91 9876543210</p>
          <p>Administration: +91 9876543211</p>
          <p>HR: +91 9876543212</p>


          <h2 className="text-2xl font-bold mt-6 mb-4 text-red-500">
            Admissions
          </h2>

          <p>+91 9876543213</p>
          <p>+91 9876543214</p>

        </div>

      </div>


      {/* ======= MAP ======= */}

      <div className="w-full h-[450px]">

        <iframe
          title="map"
          src="https://www.google.com/maps?q=hajipur%20patna&output=embed"
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </div>

    </div>
  );
};

export default Contact;