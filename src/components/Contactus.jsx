import React from "react";

const Contact = () => {
  return (
    <div className="bg-black text-white">

      {/* ======= HERO SECTION ======= */}
     {/* ======= HERO SECTION ======= */}
<div className="relative w-full h-[350px] overflow-hidden">

  <img
    src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2070&auto=format&fit=crop"
    alt="school"
    className="w-full h-full object-cover"
  />

  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* title */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500/60 backdrop-blur-sm px-6 sm:px-10 py-4 rounded-lg">
  <h1 className="text-3xl sm:text-4xl font-bold text-white text-center">
    Contact Us
  </h1>
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