"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaBars,
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 shadow-xl">
      <nav className="max-w-[1200px] mx-auto flex justify-between items-center">
        <p className="text-5xl font-black">Kvi</p>
        <ul className="hidden lg:flex space-x-6 ">
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
            <Link href="portfolio" className="hover:text-gray-400">
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
          <button className="flex items-center gap-2 bg-gray-800 hover:bg-blue-700 text-white  py-2 px-5 rounded-md shadow-md border border-slate-500 transition-all duration-300">
            <BsDownload className="text-lg" />
            <a className="btn">
              <p>Download CV</p>
            </a>
          </button>
        </div>
        {/* Hamburger Menu Icon (visible on mobile) */}
        <div className="lg:hidden flex items-center" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
        </div>
      </nav>

      {/* Mobile Sliding Sidebar - Right to Left */}
      <div
        className={`fixed top-0 right-0 h-full md:w-[40%] w-[80%]  bg-gray-900 border-l-2 border-blue-400 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50 overflow-y-auto`}
      >
        <div className="p-4 flex justify-between items-center ">
          <h1>Kvi</h1>
          <FaTimes
            className="text-white bg-gray-700 rounded-full  p-2  text-4xl"
            onClick={toggleMenu}
          />
        </div>
        <div className="p-4">
          <ul className="space-y-5 text-gray-300 font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-gray-400"
                onClick={toggleMenu}
              >
                About
              </Link>
              <hr />
            </li>
            <li>
              <Link
                href="/#Resume"
                className="hover:text-gray-400"
                onClick={toggleMenu}
              >
                Resume
              </Link>
              <hr />
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-gray-400"
                onClick={toggleMenu}
              >
                Projects
              </Link>
              <hr />
            </li>
            <li>
              <Link
                href="/#contact"
                className="hover:text-gray-400"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <hr />
            </li>
          </ul>
        </div>
        <div className="text-gray-200 space-y-5 px-5 ">
          <p className=" font-semibold text-2xl ">Contact Info</p>

          <div className="flex items-center gap-5">
            <FaEnvelope className="text-gray-500" />
            <p>dev@kaweeshaprabhath.me</p>
          </div>

          <div className="flex items-center gap-5">
            <FaPhoneAlt className="text-gray-500" />
            <p>+94 70 2585 455</p>
          </div>
        </div>
        <div className="p-5">
          <button className="bg-gray-700 py-3 px-5 rounded-full">
            GET A QUOTE
          </button>
          <div className="flex items-center gap-2 text-gray-500 mt-4 sm:mt-0  ">
            <a
              href="https://www.facebook.com/kaweeshaprabhathuduwilaarachchi"
              target="_blank"
            >
              <FaFacebookSquare className="text-2xl md:text-3xl cursor-pointer hover:text-blue-500 transition duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/kaweesha-prabhath-989305314/"
              target="_blank"
            >
              <FaLinkedin className="text-2xl md:text-3xl cursor-pointer hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://github.com/Kvi666" target="_blank">
              <FaGithubSquare className="text-2xl md:text-3xl cursor-pointer hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/kvi69.exe/" target="_blank">
              <FaInstagram className="text-2xl md:text-3xl cursor-pointer hover:text-blue-500 transition duration-300" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=94702585455"
              target="_blank"
            >
              <IoLogoWhatsapp className="text-2xl md:text-3xl cursor-pointer hover:text-blue-500 transition duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Overlay Background When Menu is Open */}
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
