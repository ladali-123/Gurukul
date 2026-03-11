import React from "react";
import { Link } from "react-router-dom";
import boardingImg from "../assets/boarding.jpg";

const boardingDropdownItems = [
  { name: "Best Boarding School in Hajipur", path: "/boarding/best-boarding-hajipur" },
  { name: "Boarding Schedule", path: "/boarding/schedule" },
  { name: "Boarding Gallery", path: "/boarding/gallery" },
];

const schedule = [
  { no: 1, time: "5:45", activity: "Wake Up Call" },
  { no: 2, time: "5:55 - 6:10", activity: "Wash and change for morning activity" },
  { no: 3, time: "6:15 - 6:45", activity: "Morning Activity" },
  { no: 4, time: "6:45 - 7:30", activity: "Change, Shower and Get Ready for School" },
  { no: 5, time: "7:30 - 8:00", activity: "Breakfast" },
  { no: 6, time: "8:00 - 3:15", activity: "Students are in School" },
  { no: 7, time: "3:15 - 3:30", activity: "Students Return to Boarding" },
  { no: 8, time: "3:30 - 3:45", activity: "Change for Sports" },
  { no: 9, time: "3:45 - 5:00", activity: "Sports" },
  { no: 10, time: "5:00 - 5:15", activity: "Tuck Shop / CCD" },
  { no: 11, time: "5:15 - 5:45", activity: "Snacks, Change and Shower" },
  { no: 12, time: "5:45 - 6:00", activity: "Students Leave Hostel for Prep" },
  { no: 13, time: "6:00 - 7:30", activity: "1st Study Hour" },
  { no: 14, time: "7:30 - 8:00", activity: "Dinner" },
  { no: 15, time: "8:00 - 8:30", activity: "Phone Calls as per Schedule" },
  { no: 16, time: "8:30 - 8:45", activity: "Free Time" },
  { no: 17, time: "8:45 - 10:00", activity: "Second Study Hour" },
  { no: 18, time: "10:00 - 10:30", activity: "Laptop Collection / Get Ready for Bed" },
  { no: 19, time: "10:30", activity: "Lights Off" },
];

const BoardingSchedule = () => {
  return (
    <div className="bg-black text-white pt-[90px]">

      {/* HERO */}
      <section className="relative h-[320px] w-full">
        <img
          src={boardingImg}
          alt="Boarding Schedule"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center md:justify-start">
          <div className="bg-red-700/90 px-6 md:px-10 py-4 md:py-6 md:ml-10 rounded">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center md:text-left">
              Boarding Schedule
            </h1>
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-gray-400">
        Home &gt; Boarding &gt; Boarding Schedule
      </div>

      {/* MAIN */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-4 gap-10">

        {/* SIDEBAR */}
        <div className="md:col-span-1">
          <div className="border border-gray-800">

            {boardingDropdownItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={`block px-6 py-4 border-b border-gray-800 ${item.name === "Boarding Schedule"
                    ? "bg-red-600"
                    : "hover:bg-red-600"
                  }`}
              >
                {item.name}
              </Link>
            ))}

          </div>
        </div>

        {/* CONTENT */}
        <div className="md:col-span-3">

          <h2 className="text-3xl font-bold text-red-500 mb-6">
            Week Days Schedule (Monday to Friday)
          </h2>

          <div className="overflow-x-auto">

            <table className="w-full border border-gray-700">

              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-3 border border-gray-700">No</th>
                  <th className="p-3 border border-gray-700">Time</th>
                  <th className="p-3 border border-gray-700">Activity</th>
                </tr>
              </thead>

              <tbody>

                {schedule.map((item) => (

                  <tr
                    key={item.no}
                    className="text-gray-300 hover:bg-gray-900"
                  >
                    <td className="p-3 border border-gray-700 text-center">
                      {item.no}
                    </td>

                    <td className="p-3 border border-gray-700">
                      {item.time}
                    </td>

                    <td className="p-3 border border-gray-700">
                      {item.activity}
                    </td>
                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>

    </div>
  );
};

export default BoardingSchedule;