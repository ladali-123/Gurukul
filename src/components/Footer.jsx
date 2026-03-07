import logo from "../assets/logo.png"; // path apne structure ke hisaab se adjust karein
import { Linkedin, Youtube, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white border-t border-white/20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Logo Section */}
        <div>
          <img src={logo} alt="School Logo" className="w-26 mb-6 rounded-full" />
          <p className="text-white text-sm">
            ISO CERTIFIED ORGANISATION
          </p>
        </div>

        {/* Main Links */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Main Links</h3>
          <ul className="space-y-3 text-white">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Curriculum</li>
            <li className="hover:text-white cursor-pointer">Admission</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Mail Us */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Mail Us</h3>
          <ul className="space-y-3 text-white text-sm">
            <li>admissions@yourschool.com</li>
            <li>feedback@yourschool.com</li>
            <li>recruitment@yourschool.com</li>
            <li>principal@yourschool.com</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Support</h3>

          <ul className="space-y-3 text-white mb-6">
            <li className="hover:text-gray-300 cursor-pointer">ERP Login</li>
            <li className="hover:text-gray-300 cursor-pointer">Careers</li>
            <li className="hover:text-gray-300 cursor-pointer">Privacy Policy</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <Linkedin className="hover:text-gray-300 cursor-pointer" />
            <Youtube className="hover:text-gray-300 cursor-pointer" />
            <Facebook className="hover:text-gray-300 cursor-pointer" />
            <Instagram className="hover:text-gray-300 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 text-center text-white text-sm">
        © 2024 Your School Name. All Rights Reserved.
      </div>

    </footer>
  );
}