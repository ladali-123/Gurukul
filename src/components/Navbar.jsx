import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState({});

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Leadership", path: "/leadership" },
    { name: "About Us", hasDropdown: true },
    { name: "Admissions", hasDropdown: true },
    { name: "Curriculum", hasDropdown: true },
    { name: "Boarding", hasDropdown: true },
    { name: "Beyond Academics", hasDropdown: true },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const aboutDropdownItems = [
    { name: "The School", path: "/mission" },
    { name: "Mission Vision", path: "/vision" },
    { name: "Fact Sheet", path: "/fact-sheet" },
    { name: "Hajipur Campus", path: "/hajipur-campus" },
    { name: "Parent Advisory Committee", path: "/parent-advisory" },
  ];

  const admissionsDropdownItems = [
    { name: "Admission Process", path: "/admission-process" },
    { name: "Enquiry Form", path: "/enquiry-form" },
    { name: "FAQs", path: "/faqs" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const curriculumDropdownItems = [
    { name: "IBS School Hajipur", path: "/curriculum/ibs-hajipur" },
    { name: "School Hajipur", path: "/curriculum/school-hajipur" },
    { name: "SEN & ESL", path: "/curriculum/sen-esl" },
    { name: "Age Criteria", path: "/age-criteria" },
  ];

  const boardingDropdownItems = [
    { name: "Best Boarding School in Hajipur", path: "/boarding/best-boarding-hajipur" },
    { name: "Boarding Schedule", path: "/boarding/schedule" },
    { name: "Boarding Gallery", path: "/boarding/gallery" },
  ];

  const beyondAcademicsDropdownItems = [
    { name: "Whole Education", path: "/beyond-academics/whole-education" },
    { name: "Collaborative Learning Model", path: "/beyond-academics/collaborative-learning" },
    { name: "Startup You", path: "/beyond-academics/startup-you" },
    { name: "Gurukul School of Leadership", path: "/beyond-academics/leadership" },
    { name: "Hajipur Training & Research Institute", path: "/beyond-academics/training-research" },
    { name: "Gurukul Community School", path: "/beyond-academics/community-school" },
  ];

  const getDropdownItems = (name) => {
    switch (name) {
      case "About Us":
        return aboutDropdownItems;
      case "Admissions":
        return admissionsDropdownItems;
      case "Curriculum":
        return curriculumDropdownItems;
      case "Boarding":
        return boardingDropdownItems;
      case "Beyond Academics":
        return beyondAcademicsDropdownItems;
      default:
        return [];
    }
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdown((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-red-700">
      <div className="h-[90px] flex items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Gurukul Logo" className="h-18 w-auto" />
          <div>
            <h1 className="text-white text-2xl tracking-widest font-semibold">GURUKUL</h1>
            <p className="text-white text-xl tracking-wider">Vidyapeeth</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-8 text-white text-sm font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="relative group z-50">
              <Link
                to={item.hasDropdown ? getDropdownItems(item.name)[0].path : item.path}
                className="flex items-center gap-1 cursor-pointer"
              >
                {item.name} {item.hasDropdown && <ChevronDown size={16} />}
              </Link>

              {item.hasDropdown && (
                <div className="absolute left-0 top-full mt-2 w-56 bg-gray-900 border border-red-600/30 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {getDropdownItems(item.name).map((d, i) => (
                    <Link
                      key={i}
                      to={d.path}
                      className="block px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white transition duration-300"
                    >
                      {d.name}
                    </Link>
                  ))}
                </div>
              )}
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
      <div className={`lg:hidden bg-black overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[800px] py-4" : "max-h-0"}`}>
        <ul className="flex flex-col items-center space-y-4 text-white text-sm font-medium">
          {navItems.map((item, index) => (
            <li key={index} className="w-full text-center cursor-pointer hover:text-red-600 transition duration-300">
              <div
                className="flex items-center justify-center gap-1"
                onClick={() => item.hasDropdown && toggleMobileDropdown(item.name)}
              >
                {item.hasDropdown ? (
                  <>
                    <span>{item.name}</span>
                    <ChevronDown size={16} />
                  </>
                ) : (
                  <Link to={item.path}>{item.name}</Link>
                )}
              </div>

              {/* Mobile Dropdowns */}
              {item.hasDropdown && mobileDropdown[item.name] && (
                <ul className="mt-2 space-y-2 pl-4">
                  {getDropdownItems(item.name).map((d, i) => (
                    <li key={i}>
                      <Link
                        to={d.path}
                        className="text-gray-400 hover:text-red-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {d.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;