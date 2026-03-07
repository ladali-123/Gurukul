import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Leadership", path: "/leadership" },
    { name: "About Us", path: "/about" },
    { name: "Admissions", path: "/admissions" },
    { name: "Curriculum", path: "/curriculum" },
    { name: "Boarding", path: "/boarding" },
    { name: "Beyond Academics", path: "/beyond-academics" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-red-700">
      <div className="h-[90px] flex items-center justify-between px-6 lg:px-12">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Gurukul Logo" className="h-14 w-auto" />
          <div>
            <h1 className="text-white text-2xl tracking-widest font-semibold">
              GURUKUL
            </h1>
            <p className="text-red-600 text-xl tracking-wider">
              Vidyapeeth
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-white text-sm font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer hover:text-red-600 transition duration-300 group"
            >
              <Link to={item.path}>{item.name}</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-black overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-white text-sm font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-red-600 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;