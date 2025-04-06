import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div className="bg-gray-900">
      <div className="max-w-[1200px] text-center mx-auto text-gray-400 py-8">
        <div className="w-full border-t border-gray-800 p-2 pt-8 text-center">
          <p>© 2025 Kaweesha Prabhath Uduwilaarachchi. All rights reserved.</p>
        </div>

        <div className="inline-flex m-auto gap-4 text-grey mt-4 sm:mt-0">
          <a
            href="https://www.facebook.com/kaweeshaprabhathuduwilaarachchi"
            target="_blank"
          >
            <FaFacebook className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/kaweesha-prabhath-989305314/"
            target="_blank"
          >
            <FaLinkedin className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://github.com/Kvi666" target="_blank">
            <FaGithub className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=94702585455"
            target="_blank"
          >
            <IoLogoWhatsapp className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://www.instagram.com/kvi69.exe/" target="_blank">
            <FaInstagram className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
}
