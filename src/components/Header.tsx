"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (id: string) => {
    setActiveSection(id);
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      const hash = window.location.hash.replace("#", "");
      setActiveSection(hash || "About");
    }
  }, [menuOpen]);

  return (
    <header className="bg-gray-800 text-white p-4 shadow-xl">
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-5xl font-black">Kvi</p>
        </Link>
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/#Resume" className="hover:text-gray-400">
              Resume
            </Link>
          </li>
          <li>
            <Link href="/#Portfolio" className="hover:text-gray-400">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/#Contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hidden lg:flex items-center gap-10">
          <a
            href="/cv.pdf"
            download
            className="flex items-center gap-2 bg-gray-800 hover:bg-blue-600 text-white py-2 px-5 rounded-md shadow-md border border-slate-500 transition-all duration-300"
          >
            <BsDownload className="text-lg" />
            <p>Download CV</p>
          </a>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
        </div>
      </nav>

      {/* Sliding Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full md:w-[40%] w-[80%] bg-gray-900 border-l-2 border-gray-700 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50 overflow-y-auto`}
      >
        <div className="p-4 flex justify-between items-center">
          <FaTimes
            className="text-white bg-gray-700 rounded-full p-2 text-4xl"
            onClick={toggleMenu}
          />
        </div>

        <div className="flex flex-col items-center mt-6 -mx-2">
          <Image
            className="object-cover w-28 h-28 mx-2 rounded-full"
            src="/dp.webp"
            alt="Profile"
            width={112}
            height={112}
          />
          <h4 className="mx-2 mt-2 font-medium text-gray-200">
            Kaweesha Prabhath
          </h4>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="flex justify-center">
            <ul className="space-y-2 font-medium">
              <li>
                <Link
                  href="/"
                  onClick={() => handleLinkClick("About")}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition duration-300 ease-in-out ${
                    activeSection === "About"
                      ? "bg-gray-100 dark:bg-gray-700 scale-105 shadow-lg"
                      : ""
                  }`}
                >
                  <span className="flex-1 px-3 whitespace-nowrap text-center">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#Resume"
                  onClick={() => handleLinkClick("Resume")}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition duration-300 ease-in-out ${
                    activeSection === "Resume"
                      ? "bg-gray-100 dark:bg-gray-700 scale-105 shadow-lg"
                      : ""
                  }`}
                >
                  <span className="flex-1 px-3 whitespace-nowrap text-center">
                    Resume
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#Portfolio"
                  onClick={() => handleLinkClick("Portfolio")}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition duration-300 ease-in-out"
                >
                  <span className="flex-1 px-3 whitespace-nowrap text-center">
                    Portfolio
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/#Contact"
                  onClick={() => handleLinkClick("Contact")}
                  className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group transition duration-300 ease-in-out ${
                    activeSection === "Contact"
                      ? "bg-gray-100 dark:bg-gray-700 scale-105 shadow-lg"
                      : ""
                  }`}
                >
                  <span className="flex-1 px-3 whitespace-nowrap text-center">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Background Overlay */}
      {menuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
