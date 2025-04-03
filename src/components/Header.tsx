"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaRegEnvelope, FaTimes } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

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
        className={`fixed top-0 right-0 h-full md:w-[40%] w-[80%]  bg-[#ffffff] border-l-2 border-[#9a4aaa] text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50 overflow-y-auto`}
      >
        <div className="p-4 flex justify-between items-center ">
          <h1>Kvi</h1>
          <FaTimes
            className="text-white bg-[#9a4aaa] rounded-full  p-2  text-4xl"
            onClick={toggleMenu}
          />
        </div>
        <div className="p-4">
          <ul className="space-y-5 text-black font-medium">
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
        <div className="text-black space-y-5 px-5 ">
          <p className=" font-semibold text-2xl ">Contact Info</p>
          <div className="flex items-center gap-5">
            <FaMapMarkerAlt className="text-[#9a4aaa]" />
            <p>Main Street, Melbourne</p>
          </div>
          <div className="flex items-center gap-5">
            <FaEnvelope className="text-[#9a4aaa]" />
            <p>contact@unleash.lk</p>
          </div>
          <div className="flex items-center gap-5">
            <FaClock className="text-[#9a4aaa]" />
            <p>Mon-Friday, 09am - 05pm</p>
          </div>
          <div className="flex items-center gap-5">
            <FaPhoneAlt className="text-[#9a4aaa]" />
            <p>+94 77 464 9914</p>
          </div>
        </div>
        <div className="p-5">
          <button className="bg-[#9a4aaa] py-3 px-5 rounded-full">
            GET A QUOTE
          </button>
          <div className="flex pt-5 gap-2">
            <FaFacebookF className="border text-4xl p-2 rounded-full border-black text-black" />
            <FaInstagram className="border text-4xl p-2 rounded-full border-black text-black" />
            <FaWhatsapp className="border text-4xl p-2 rounded-full border-black text-black" />
            <FaRegEnvelope className="border text-4xl p-2 rounded-full border-black text-black" />
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
