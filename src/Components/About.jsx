import React from "react";
import Dp from "../assets/dp.webp";
import CV from "../assets/Kaweesha_Prabhath.pdf"
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


import { BsDownload } from "react-icons/bs";

const About = () => {
  return (
    <section
      id="About"
      className="relative isolate py-12 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-gray-900 md:ml-96 min-h-screen flex flex-col justify-center"
    >
      {/* Background text */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width="200"
            height="200"
            x="100%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth="0"
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        ></div>
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="lg:w-2/3 text-center lg:text-left px-4 md:px-0">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white md:text-5xl">
            Hello I'm Kaweesha
          </h2>
          <p className="mt-4 text-gray-300 text-base text-sm-justify sm:text-lg max-w-lg mx-auto lg:mx-0">
            Hello there! I'm Kvi, a 22-year-old developer, UI/UX designer and
            graphic artist. I navigate the digital realm with a passion for
            crafting immersive online experiences and pushing the boundaries of
            creativity.
          </p>

          {/* Download CV Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-6">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-blue-700 text-white  py-2 px-5 rounded-full shadow-md transition-all duration-300">
              <BsDownload className="text-lg" />
              <a href={CV} download="My_CV.pdf" className="btn" >
                <p>Download CV</p>
              </a>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-indigo-500 mt-4 sm:mt-0">
              <a href="https://www.facebook.com/kaweeshaprabhathuduwilaarachchi" target="_blank"><FaFacebook className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" /></a>
              <a href="https://www.linkedin.com/in/kaweesha-prabhath-989305314/" target="_blank"><FaLinkedin className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" /></a>
              <a href="https://github.com/Kvi666" target="_blank"><FaGithub className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" /></a>
              <a href="https://api.whatsapp.com/send?phone=94702585455" target="_blank"><IoLogoWhatsapp className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" /></a>
              <a href="https://www.instagram.com/kvi69.exe/" target="_blank"><FaInstagram className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" /></a>

            </div>
          </div>

          {/* Stats Section */}
          <div className="relative z-10 flex justify-center lg:justify-start mt-4 sm:mt-8 gap-6 sm:gap-12 text-center lg:text-left">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">5+</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Countries</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">30+</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Projects Completed
              </p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">20+</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white">6+</h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Years of Experience
              </p>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end px-4 md:px-0">
          <img
            className="w-full max-w-[250px] sm:max-w-xs lg:max-w-md rounded-2xl shadow-lg border border-blue-400"
            src={Dp}
            alt="Profile"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
