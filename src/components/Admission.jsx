import { Phone } from "lucide-react";
import stude from "../assets/stude.png";

export default function AdmissionsOpen() {
  return (
    <section className="bg-black w-full ">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

        {/* Left Side */}
        <div className="px-8 py-16">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Admissions Open
          </h2>

          <p className="text-gray-200 mb-8 text-base">
            Get in touch with us to discuss it:
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-4 border-2 border-white px-6 py-5 w-80
             hover:bg-yellow-50 transition">
              <Phone className="text-white" />
              <span className="text-white font-semibold tracking-wider">
                +91 22895913 / 909
              </span>
            </div>

            <div className="flex items-center gap-4 border-2 border-white px-6 py-5 w-80 hover:bg-yellow-50 transition">
              <Phone className="text-white" />
              <span className="text-white font-semibold tracking-wider">
                +91 9611058843
              </span>
            </div>

            <div className="flex items-center gap-4 border-2 border-white px-6 py-5 w-80 hover:bg-yellow-50 transition">
              <Phone className="text-white" />
              <span className="text-white font-semibold tracking-wider">
                +91 9886268567
              </span>
            </div>

          </div>
        </div>

        {/* Right Side Image */}
        <div className="h-full">
          <img
            src={stude}
            alt="Students"
            className="w-full h-full object-cover "
          />
        </div>

      </div>
    </section>
  );
}