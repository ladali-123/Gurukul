import logo1 from "../assets/logo1.png"; // path apne structure ke hisaab se adjust karein
import { Link } from "react-router-dom";
import { Linkedin, Youtube, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white border-t border-white/20">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Logo Section */}
        <div>
          <img src={logo1} alt="School Logo" className="w-28 mb-6 rounded-full" />
          <p className="text-white text-sm">
            ISO CERTIFIED ORGANISATION
          </p>
        </div>

        {/* Main Links */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Main Links</h3>
          <ul className="space-y-3 text-white">
            <li><Link to="/" className="hover:text-white block py-1">Home</Link></li>
            <li><Link to="/about" className="hover:text-white block py-1">About Us</Link></li>
            <li><Link to="/admissions" className="hover:text-white block py-1">Admissions</Link></li>
            <li><Link to="/curriculum" className="hover:text-white block py-1">Curriculum</Link></li>
            <li><Link to="/careers" className="hover:text-white block py-1">Careers</Link></li>
          </ul>
        </div>

        {/* Mail Us */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Mail Us</h3>
          <ul className="space-y-3 text-white text-sm">
            <li>gurukulvidyapeethhaj@yahoo.in</li>
            <li>gurukulvidyapeeth330280@gmail.com</li>

            <li>
              <span className="font-semibold">Postal Address:</span><br />
              Rampur Nausahan, Nawada Chowk, Near Jadhua,<br />
              Hajipur (Vaishali), PIN - 844102
            </li>
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
        © 2024 Gurukul Vidyapeeth School Hajipur. All Rights Reserved.
      </div>

    </footer>
  );
}