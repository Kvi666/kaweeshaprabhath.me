import React from "react";
import Dp from "../assets/dp.jpg";

const About = () => {
  return (
    <section className="relative isolate py-12 md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-gray-800 md:ml-96">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
      </div>
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Image Column */}
          <div className="flex justify-center lg:justify-end lg:col-span-1">
            <img
              className="w-full h-auto max-w-xs lg:max-w-md xl:max-w-lg rounded-3xl"
              src={Dp}
              alt="About Me"
            />
          </div>

          {/* Text and Stats Column */}
          <div className="lg:col-span-2 flex flex-col justify-center items-center lg:items-start lg:gap-4">
            {/* Heading and Paragraph */}
            <div className="flex flex-col text-center lg:text-left">
              <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl py-2">
                About Me
              </h2>
              <p className="text-gray-300 text-base lg:text-lg">
                Through collaboration, diverse perspectives and strengths are
                leveraged to create inclusive environments where everyone has
                the opportunity to thrive. This approach not only fosters
                personal growth and achievement but also strengthens the fabric
                of society.
              </p>
            </div>

            {/* Stats Section */}
            <div className="w-full flex flex-wrap justify-center lg:justify-start gap-8">
              <div className="flex flex-col justify-start items-center lg:items-start">
                <h3 className="text-white text-3xl lg:text-4xl font-bold leading-normal">
                  04+
                </h3>
                <h6 className="text-gray-500 text-sm lg:text-base font-normal leading-relaxed">
                  Years of Experience
                </h6>
              </div>
              <div className="flex flex-col justify-start items-center lg:items-start">
                <h4 className="text-white text-3xl lg:text-4xl font-bold leading-normal">
                  25+
                </h4>
                <h6 className="text-gray-500 text-sm lg:text-base font-normal leading-relaxed">
                  Successful Projects
                </h6>
              </div>
              <div className="flex flex-col justify-start items-center lg:items-start">
                <h4 className="text-white text-3xl lg:text-4xl font-bold leading-normal">
                  10+
                </h4>
                <h6 className="text-gray-500 text-sm lg:text-base font-normal leading-relaxed">
                  Happy Clients
                </h6>
              </div>
              <div className="flex flex-col justify-start items-center lg:items-start">
                <h4 className="text-white text-3xl lg:text-4xl font-bold leading-normal">
                  06+
                </h4>
                <h6 className="text-gray-500 text-sm lg:text-base font-normal leading-relaxed">
                  Countries
                </h6>
              </div>
            </div>

            {/* Button */}
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-800 transition-all duration-500 ease-in-out rounded-lg shadow-md flex justify-center items-center">
              <span className="text-white text-sm font-medium leading-6">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
