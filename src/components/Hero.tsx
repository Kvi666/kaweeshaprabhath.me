import React from "react";
import Image from "next/image";

import {
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import Skills from "./Skills";

const Hero = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <section
        id="About"
        className="relative isolate py-12 md:pt-24 overflow-hidden  min-h-[80vh] flex flex-col justify-center pt-24"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12  ">
            {/* Text Section */}
            <div className="lg:w-2/3 text-center lg:text-left px-4 md:px-0">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-200 md:text-5xl">
                Hello Im Kaweesha
              </h2>
              <p className="mt-4 text-gray-300 text-base text-justify sm:text-lg max-w-2xl mx-auto lg:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit-
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>

              {/* Download CV Button */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6">
                {/* Social Icons */}
                <div className="hidden md:flex items-center gap-2 text-gray-500 mt-4 sm:mt-0  ">
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
                  <a
                    href="https://www.instagram.com/kvi69.exe/"
                    target="_blank"
                  >
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

              {/* Stats Section */}
              <div className="relative z-10 flex justify-center lg:justify-start mt-4 sm:mt-8 gap-6 sm:gap-12 text-center lg:text-left">
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">
                    30+
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Projects Completed
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">
                    20+
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Happy Clients
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-white">
                    6+
                  </h3>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="lg:w-1/3 flex justify-center lg:justify-end px-4 md:px-0">
              <Image
                className="w-full max-w-[250px] sm:max-w-xs lg:max-w-md rounded-2xl shadow-lg border border-blue-400"
                src="/dp.webp"
                alt="Profile"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
      <div>
        <Skills />
      </div>
    </div>
  );
};

export default Hero;
