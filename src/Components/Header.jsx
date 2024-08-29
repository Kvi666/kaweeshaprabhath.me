import React, { useState, useEffect, useRef } from "react";
import Dp from "../assets/dp.jpg";
import Logo from "../assets/logo.png";
import Typewriter from "./TypeWriter";

const sections = [
  { id: "Home", label: "Home" },
  { id: "About", label: "About" },
  { id: "Services", label: "Services" },
  { id: "Expertise", label: "Expertise" },
  { id: "Resume", label: "Resume" },
  { id: "Projects", label: "Projects" },
  { id: "Contact", label: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const target = document.getElementById(section.id);
      if (target) observerRef.current.observe(target);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 w-96 h-full px-4 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <a href="#" className="mx-auto ">
          <img className="w-auto h-6 sm:h-7 mx-auto" src={Logo} alt="Logo" />
        </a>

        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-28 h-28 mx-2 rounded-full"
            src={Dp}
            alt="Profile"
          />
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
            Kvi
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            <Typewriter
              className=""
              words={["Web/Graphic", "UI/UX", "Designer/Developer"]}
              typingSpeed={100}
              deletingSpeed={50}
              pause={500}
            />
          </p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="flex justify-center">
            <ul className="space-y-2 font-medium">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition duration-300 ease-in-out ${
                      activeSection === section.id
                        ? "bg-gray-100 dark:bg-gray-700 scale-105 shadow-lg"
                        : ""
                    }`}
                  >
                    <span className="flex-1 px-3 whitespace-nowrap text-center">
                      {section.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>

      {/* Hamburger Menu Button */}
      <div className="block md:hidden p-4 fixed z-50 top-0 right-0">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 dark:text-gray-200 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
