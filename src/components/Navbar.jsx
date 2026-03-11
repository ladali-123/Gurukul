import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [curriculumDropdown, setCurriculumDropdown] = useState(false);
  const [admissionsDropdown, setAdmissionsDropdown] = useState(false);
  const [boardingDropdown, setBoardingDropdown] = useState(false);
  const [beyondAcademicsDropdown, setBeyondAcademicsDropdown] = useState(false);
  const [senEslSubDropdown, setSenEslSubDropdown] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Leadership", path: "/leadership" },
    { name: "About Us", path: "/about", hasDropdown: true },
    { name: "Admissions", path: "/admissions", hasDropdown: true },
    { name: "Curriculum", path: "/curriculum", hasDropdown: true },
    { name: "Boarding", path: "/boarding", hasDropdown: true },
    { name: "Beyond Academics", path: "/beyond-academics", hasDropdown: true },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const aboutDropdownItems = [
    { name: " The School ", path: "/mission" },
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-red-700">
      <div className="h-[90px] flex items-center justify-between px-6 lg:px-12">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Gurukul Logo" className="h-16 w-auto" />
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
              onMouseEnter={() => {
                if (item.name === "About Us") setAboutDropdown(true);
                if (item.name === "Admissions") setAdmissionsDropdown(true);
                if (item.name === "Curriculum") setCurriculumDropdown(true);
                if (item.name === "Boarding") setBoardingDropdown(true);
                if (item.name === "Beyond Academics") setBeyondAcademicsDropdown(true);
              }}
              onMouseLeave={() => {
                if (item.name === "About Us") setAboutDropdown(false);
                if (item.name === "Admissions") setAdmissionsDropdown(false);
                if (item.name === "Curriculum") {
                  setCurriculumDropdown(false);
                  setSenEslSubDropdown(false);
                }
                if (item.name === "Boarding") setBoardingDropdown(false);
                if (item.name === "Beyond Academics") setBeyondAcademicsDropdown(false);
              }}
            >
              <Link to={item.path} className="flex items-center gap-1">
                {item.name}
                {item.hasDropdown && <ChevronDown size={16} />}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-600 transition-all
               duration-300 group-hover:w-full"></span>
              
              {/* About Us Dropdown */}
              {item.name === "About Us" && aboutDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-red-600/30 
                rounded-lg shadow-xl py-2">
                  {aboutDropdownItems.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      to={dropdownItem.path}
                      className="block px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white transition
                       duration-300"
                      onClick={() => setAboutDropdown(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Admissions Dropdown */}
              {item.name === "Admissions" && admissionsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-red-600/30 rounded-lg shadow-xl py-2">
                  {admissionsDropdownItems.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      to={dropdownItem.path}
                      className="block px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white transition duration-300"
                      onClick={() => setAdmissionsDropdown(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Curriculum Dropdown with Nested SEN & ESL */}
              {item.name === "Curriculum" && curriculumDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-red-600/30 rounded-lg shadow-xl py-2">
                  {curriculumDropdownItems.map((dropdownItem, dropdownIndex) => (
                    <div key={dropdownIndex} className="relative">
                      <Link
                        to={dropdownItem.path}
                        className="flex items-center justify-between px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white transition duration-300"
                        onClick={() => {
                          if (dropdownItem.hasSubDropdown) {
                            setSenEslSubDropdown(!senEslSubDropdown);
                          } else {
                            setCurriculumDropdown(false);
                          }
                        }}
                        onMouseEnter={() => {
                          if (dropdownItem.hasSubDropdown) {
                            setSenEslSubDropdown(true);
                          }
                        }}
                      >
                        {dropdownItem.name}
                        {dropdownItem.hasSubDropdown && <ChevronDown size={14} className="ml-2" />}
                      </Link>
                      
                      {/* Nested Sub-Dropdown for SEN & ESL */}
                      {dropdownItem.hasSubDropdown && senEslSubDropdown && (
                        <div className="absolute left-full top-0 ml-1 w-40 bg-gray-900 border border-red-600/30 rounded-lg shadow-xl py-2">
                          {dropdownItem.subItems && dropdownItem.subItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white transition duration-300"
                              onClick={() => {
                                setCurriculumDropdown(false);
                                setSenEslSubDropdown(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Boarding Dropdown */}
              {item.name === "Boarding" && boardingDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-gray-900 border border-red-600/30 rounded-lg shadow-xl py-2">
                  {boardingDropdownItems.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      to={dropdownItem.path}
                      className="block px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white transition duration-300"
                      onClick={() => setBoardingDropdown(false)}
                    >
                      {dropdownItem.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Beyond Academics Dropdown */}
              {item.name === "Beyond Academics" && beyondAcademicsDropdown && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-gray-900 border border-red-600/30 rounded-lg shadow-xl py-2">
                  {beyondAcademicsDropdownItems.map((dropdownItem, dropdownIndex) => (
                    <Link
                      key={dropdownIndex}
                      to={dropdownItem.path}
                      className="block px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white transition duration-300"
                      onClick={() => setBeyondAcademicsDropdown(false)}
                    >
                      {dropdownItem.name}
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
      <div
        className={`lg:hidden bg-black overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[800px] py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 text-white text-sm font-medium">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-red-600 transition duration-300 w-full text-center"
              onClick={() => {
                if (item.name === "About Us") {
                  setAboutDropdown(!aboutDropdown);
                  setCurriculumDropdown(false);
                  setAdmissionsDropdown(false);
                  setBoardingDropdown(false);
                } else if (item.name === "Admissions") {
                  setAdmissionsDropdown(!admissionsDropdown);
                  setAboutDropdown(false);
                  setCurriculumDropdown(false);
                  setBoardingDropdown(false);
                } else if (item.name === "Curriculum") {
                  setCurriculumDropdown(!curriculumDropdown);
                  setAboutDropdown(false);
                  setAdmissionsDropdown(false);
                  setBoardingDropdown(false);
                } else if (item.name === "Boarding") {
                  setBoardingDropdown(!boardingDropdown);
                  setAboutDropdown(false);
                  setAdmissionsDropdown(false);
                  setCurriculumDropdown(false);
                  setBeyondAcademicsDropdown(false);
                } else if (item.name === "Beyond Academics") {
                  setBeyondAcademicsDropdown(!beyondAcademicsDropdown);
                  setAboutDropdown(false);
                  setAdmissionsDropdown(false);
                  setCurriculumDropdown(false);
                  setBoardingDropdown(false);
                } else {
                  setIsOpen(false);
                }
              }}
            >
              <div className="flex items-center justify-center gap-1">
                <Link to={item.path}>{item.name}</Link>
                {item.hasDropdown && <ChevronDown size={16} />}
              </div>
              {/* Mobile About Us Dropdown */}
              {item.name === "About Us" && aboutDropdown && (
                <ul className="mt-2 space-y-2 pl-4">
                  {aboutDropdownItems.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex}>
                      <Link
                        to={dropdownItem.path}
                        className="text-gray-400 hover:text-red-600"
                        onClick={() => {
                          setIsOpen(false);
                          setAboutDropdown(false);
                        }}
                      >
                        {dropdownItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {/* Mobile Admissions Dropdown */}
              {item.name === "Admissions" && admissionsDropdown && (
                <ul className="mt-2 space-y-2 pl-4">
                  {admissionsDropdownItems.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex}>
                      <Link
                        to={dropdownItem.path}
                        className="text-gray-400 hover:text-red-600"
                        onClick={() => {
                          setIsOpen(false);
                          setAdmissionsDropdown(false);
                        }}
                      >
                        {dropdownItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {/* Mobile Curriculum Dropdown */}
              {item.name === "Curriculum" && curriculumDropdown && (
                <ul className="mt-2 space-y-2 pl-4">
                  {curriculumDropdownItems.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex}>
                      {dropdownItem.hasSubDropdown ? (
                        <div>
                          <div 
                            className="text-gray-300 hover:text-red-600 flex items-center justify-center gap-1 cursor-pointer"
                            onClick={(e) => {
                              e.preventDefault();
                              setSenEslSubDropdown(!senEslSubDropdown);
                            }}
                          >
                            {dropdownItem.name} <ChevronDown size={14} />
                          </div>
                          {/* Mobile Sub-Dropdown for SEN & ESL */}
                          {senEslSubDropdown && dropdownItem.subItems && (
                            <ul className="mt-2 space-y-2 pl-4">
                              {dropdownItem.subItems.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <Link
                                    to={subItem.path}
                                    className="text-gray-400 hover:text-red-600"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setCurriculumDropdown(false);
                                      setSenEslSubDropdown(false);
                                    }}
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={dropdownItem.path}
                          className="text-gray-400 hover:text-red-600"
                          onClick={() => {
                            setIsOpen(false);
                            setCurriculumDropdown(false);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
              {/* Mobile Boarding Dropdown */}
              {item.name === "Boarding" && boardingDropdown && (
                <ul className="mt-2 space-y-2 pl-4">
                  {boardingDropdownItems.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex}>
                      <Link
                        to={dropdownItem.path}
                        className="text-gray-400 hover:text-red-600"
                        onClick={() => {
                          setIsOpen(false);
                          setBoardingDropdown(false);
                        }}
                      >
                        {dropdownItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {/* Mobile Beyond Academics Dropdown */}
              {item.name === "Beyond Academics" && beyondAcademicsDropdown && (
                <ul className="mt-2 space-y-2 pl-4">
                  {beyondAcademicsDropdownItems.map((dropdownItem, dropdownIndex) => (
                    <li key={dropdownIndex}>
                      <Link
                        to={dropdownItem.path}
                        className="text-gray-400 hover:text-red-600"
                        onClick={() => {
                          setIsOpen(false);
                          setBeyondAcademicsDropdown(false);
                        }}
                      >
                        {dropdownItem.name}
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

