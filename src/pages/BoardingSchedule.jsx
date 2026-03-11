import React from "react";

const BoardingSchedule = () => {
  const weekdaySchedule = [
    { time: "5:30 AM", activity: "Wake Up & Freshen Up" },
    { time: "5:45 AM", activity: "Morning Exercise / Yoga" },
    { time: "6:15 AM", activity: "Meditation & Prayer" },
    { time: "6:45 AM", activity: "Breakfast" },
    { time: "7:30 AM", activity: "Morning Assembly" },
    { time: "8:00 AM - 1:00 PM", activity: "Academic Classes (Period 1-5)" },
    { time: "1:00 PM", activity: "Lunch Break" },
    { time: "2:00 PM - 3:30 PM", activity: "Academic Classes (Period 6-7)" },
    { time: "3:30 PM - 4:00 PM", activity: "Snack Break" },
    { time: "4:00 PM - 5:30 PM", activity: "Sports & Activities" },
    { time: "5:30 PM - 6:00 PM", activity: "Evening Tea & Rest" },
    { time: "6:00 PM - 7:00 PM", activity: "Self Study / Homework" },
    { time: "7:00 PM", activity: "Dinner" },
    { time: "7:45 PM - 9:00 PM", activity: "Evening Study / Library" },
    { time: "9:00 PM - 9:30 PM", activity: "Personal Time" },
    { time: "9:30 PM", activity: "Bedtime Prayer" },
    { time: "10:00 PM", activity: "Lights Out" },
  ];

  const weekendSchedule = [
    { time: "6:00 AM", activity: "Wake Up & Freshen Up" },
    { time: "6:30 AM", activity: "Morning Exercise" },
    { time: "7:30 AM", activity: "Breakfast" },
    { time: "8:30 AM - 11:30 AM", activity: "Academic Support / Tutoring" },
    { time: "11:30 AM - 1:00 PM", activity: "Sports Activities" },
    { time: "1:00 PM", activity: "Lunch" },
    { time: "2:00 PM - 4:00 PM", activity: "Club Activities / Hobbies" },
    { time: "4:00 PM - 6:00 PM", activity: "Outdoor Games" },
    { time: "6:00 PM", activity: "Evening Snacks" },
    { time: "6:30 PM - 8:00 PM", activity: "Weekend Study" },
    { time: "8:00 PM", activity: "Dinner" },
    { time: "9:00 PM - 10:00 PM", activity: "Movie Night / Entertainment" },
    { time: "10:30 PM", activity: "Lights Out" },
  ];

  return (
    <div className="bg-black text-white">
      {/* HERO SECTION */}
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070"
          className="w-full h-full object-cover opacity-60"
          alt="Boarding Schedule"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-red-500">
            Boarding Schedule
          </h1>
        </div>
      </div>

      {/* INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-red-500 mb-6 text-center">
          Daily Routine at Gurukul
        </h2>
        <p className="text-gray-300 leading-8 max-w-3xl mx-auto">
          Our well-structured boarding schedule ensures a perfect balance between
          academic studies, physical activities, and personal development. Each
          day is carefully planned to maximize learning while ensuring adequate
          rest and recreation for the overall well-being of our students.
        </p>
      </section>

      {/* WEEKDAY SCHEDULE */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Weekday Schedule (Monday - Friday)
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {weekdaySchedule.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row md:items-center bg-black p-6 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300"
                >
                  <div className="md:w-48 flex-shrink-0">
                    <span className="text-red-500 font-bold text-lg">
                      {item.time}
                    </span>
                  </div>
                  <div className="flex-grow">
                    <span className="text-gray-300 text-lg">
                      {item.activity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WEEKEND SCHEDULE */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
          Weekend Schedule (Saturday - Sunday)
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {weekendSchedule.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-red-600 transition duration-300"
              >
                <div className="md:w-48 flex-shrink-0">
                  <span className="text-red-500 font-bold text-lg">
                    {item.time}
                  </span>
                </div>
                <div className="flex-grow">
                  <span className="text-gray-300 text-lg">
                    {item.activity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTES */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl text-red-500 font-bold text-center mb-12">
            Important Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl text-red-400 mb-4 font-semibold">
                Academic Support
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Extra classes for weak students</li>
                <li>• One-on-one mentoring</li>
                <li>• Library access during study hours</li>
                <li>• Computer lab access</li>
              </ul>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl text-red-400 mb-4 font-semibold">
                Activities & Sports
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Football, Cricket, Basketball</li>
                <li>• Swimming pool access</li>
                <li>• Indoor games (Table Tennis, Chess, Carrom)</li>
                <li>• Music, Dance, Art & Craft</li>
              </ul>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl text-red-400 mb-4 font-semibold">
                Health & Wellness
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Regular health checkups</li>
                <li>• On-campus medical facility</li>
                <li>• Counseling services</li>
                <li>• Balanced nutritional meals</li>
              </ul>
            </div>
            <div className="bg-black p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl text-red-400 mb-4 font-semibold">
                Parent Communication
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li>• Weekly phone calls to parents</li>
                <li>• Regular progress reports</li>
                <li>• Parent-teacher meetings</li>
                <li>• Video calling facility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold text-red-500 mb-6">
          Experience Our Structured Lifestyle
        </h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Visit our campus to see our boarding facilities and learn more about
          our daily schedule.
        </p>
        <a
          href="/enquiry-form"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition duration-300"
        >
          Schedule a Visit
        </a>
      </section>
    </div>
  );
};

export default BoardingSchedule;

