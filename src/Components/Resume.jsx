import React from "react";
import Fiverr_Logo from "../assets/Fiverr-Logo.png";
import Udemy_Logo from "../assets/Udemy.png";
import Advirto_Logo from "../assets/Advirto.png";
import Esupport_Logo from "../assets/Esupport.jpg";
import Moratuwa_Logo from "../assets/Moratuwa.jpg";

const Resume = () => {
  return (
    <div
      id="Resume"
      className="relative isolate overflow-hidden bg-gray-900 md:ml-96 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 xl:px-20">
        <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
          <div
            aria-hidden="true"
            className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
          </div>
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
            Resume
          </h2>
          <p className="text-gray-300">
            We have built many products and some of them are below
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 p-6 sm:p-8 md:p-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div>
            <div className="flex justify-center">
              <div className="w-full max-w-lg flex justify-center">
                <div className="bg-gray-900 py-6 sm:py-8 md:py-10 px-4 sm:px-6 rounded">
                  <div className="container mx-auto">
                    <ul className="relative border-l-4 border-gray-600">
                      <li className="mb-8 sm:mb-10 ml-4 sm:ml-8">
                        <div className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full -left-5 border-2 border-gray-600 flex items-center justify-center">
                          <img
                            src={Moratuwa_Logo}
                            alt="Logo"
                            className="w-full h-full object-contain p-1 rounded-full"
                          />
                        </div>
                        <div className="hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900 rounded-lg p-2 transition duration-300 ease-in-out">
                          <time className="block mb-1 text-xs sm:text-sm font-mono italic text-gray-400 hover:text-gray-200 transition duration-300 ease-in-out">
                            2023 — 2024
                          </time>
                          <h5 className="text-base sm:text-md font-medium text-gray-200 hover:text-gray-100 transition duration-300 ease-in-out">
                            Full Stack Development
                          </h5>
                          <p className="text-gray-400 font-medium text-xs sm:text-sm text-start hover:text-gray-300 transition duration-300 ease-in-out">
                            Completed a Full Stack Development program at
                            Moratuwa University, covering frontend and backend
                            technologies. Gained skills in database management,
                            server-side scripting, and dynamic web applications.
                          </p>
                        </div>
                      </li>

                      <li className="mb-8 sm:mb-10 ml-4 sm:ml-8">
                        <div className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full -left-5 border-2 border-gray-600 flex items-center justify-center">
                          <img
                            src={Udemy_Logo}
                            alt="Logo"
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <div className="hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900 rounded-lg p-2 transition duration-300 ease-in-out">
                          <time className="block mb-1 text-xs sm:text-sm font-mono italic text-gray-400">
                            2023 - 2024
                          </time>
                          <h5 className="text-base sm:text-md font-medium text-gray-200">
                            Frontend Development
                          </h5>
                          <p className="text-gray-400 font-medium text-xs sm:text-sm text-start">
                            Finished a detailed Frontend Development course on
                            Udemy, mastering HTML, CSS, JavaScript, and React.
                            The course included practical projects to build
                            responsive and user-friendly web applications.
                          </p>
                        </div>
                      </li>
                      <li className="mb-8 sm:mb-10 ml-4 sm:ml-8">
                        <div className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full -left-5 border-2 border-gray-600 flex items-center justify-center">
                          <img
                            src={Udemy_Logo}
                            alt="Logo"
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <div className="hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900 rounded-lg p-2 transition duration-300 ease-in-out">
                          <time className="block mb-1 text-xs sm:text-sm font-mono italic text-gray-400">
                            2024 - Present
                          </time>
                          <h5 className="text-base sm:text-md font-medium text-gray-200">
                            MERN Stack
                          </h5>
                          <p className="text-gray-400 font-medium text-xs sm:text-sm text-start">
                            Completed a MERN Stack course on Udemy, focusing on
                            MongoDB, Express.js, React, and Node.js. Acquired
                            hands-on experience in building full-featured web
                            applications, including RESTful APIs and dynamic
                            interfaces.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div>
            <div className="flex justify-center">
              <div className="w-full max-w-lg flex justify-center">
                <div className="bg-gray-900 py-6 sm:py-8 md:py-10 px-4 sm:px-6">
                  <div className="container mx-auto">
                    <ul className="relative border-l-4 border-gray-600">
                      <li className="mb-8 sm:mb-10 ml-4 sm:ml-8">
                        <div className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full -left-5 border-2 border-gray-600 flex items-center justify-center">
                          <img
                            src={Advirto_Logo}
                            alt="Logo"
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <div className="hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900 rounded-lg p-2 transition duration-300 ease-in-out">
                          <time className="block mb-1 text-xs sm:text-sm font-mono italic text-gray-400">
                            2023 - Present
                          </time>
                          <h5 className="text-base sm:text-md font-medium text-gray-200">
                            Lead Developer
                          </h5>
                          <p className="text-gray-400 font-medium text-xs sm:text-sm text-start">
                            Leading web development at Advirto Digital, managing
                            a team to design, develop, and deploy web solutions.
                            Ensuring project success through effective
                            coordination and continuous workflow optimization.
                          </p>
                        </div>
                      </li>
                      <li className="mb-8 sm:mb-10 ml-4 sm:ml-8">
                        <div className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full -left-5 border-2 border-gray-600 flex items-center justify-center">
                          <img
                            src={Esupport_Logo}
                            alt="Logo"
                            className="w-full h-full object-contain rounded-full p-1"
                          />
                        </div>
                        <div className="hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900 rounded-lg p-2 transition duration-300 ease-in-out">
                          <time className="block mb-1 text-xs sm:text-sm font-mono italic text-gray-400">
                            2023 - Present
                          </time>
                          <h5 className="text-base sm:text-md font-medium text-gray-200">
                            Associate Software Engineer
                          </h5>
                          <p className="text-gray-400 font-medium text-xs sm:text-sm text-start">
                            Working as an Associate Software Engineer at
                            eSupport Technologies, responsible for developing
                            and maintaining software applications. Collaborating
                            with teams to design, implement, and optimize
                            solutions, ensuring efficient functionality and a
                            seamless user experience.
                          </p>
                        </div>
                      </li>
                      <li className="mb-8 sm:mb-10 ml-4 sm:ml-8">
                        <div className="absolute w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-full -left-5 border-2 border-gray-600 flex items-center justify-center">
                          <img
                            src={Fiverr_Logo}
                            alt="Logo"
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <div className="hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900 rounded-lg p-2 transition duration-300 ease-in-out">
                          <time className="block mb-1 text-xs sm:text-sm font-mono italic text-gray-400">
                            2022 - Present
                          </time>
                          <h5 className="text-base sm:text-md font-medium text-gray-200">
                            Freelancer
                          </h5>
                          <p className="text-gray-400 font-medium text-xs sm:text-sm text-start">
                            Providing freelance web development services on
                            Fiverr, specializing in custom websites and
                            e-commerce platforms. Managing client projects
                            end-to-end, from requirements gathering to
                            deployment and support.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
