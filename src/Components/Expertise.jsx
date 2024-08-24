import React from "react";
import Html_Logo from "../assets/html.png";
import Css_Logo from "../assets/css.png";
import BootStrap_Logo from "../assets/bootstrap.png";
import Tailwind_Logo from "../assets/tailwind.png";
import Js_Logo from "../assets/js.png";
import React_Logo from "../assets/react.png";
import Php_Logo from "../assets/php.png";
import Laravel_Logo from "../assets/laravel.png";
import Figma_Logo from "../assets/figma.png";
import Typescript_Logo from "../assets/typescript.png";

const Expertise = () => {
  return (
    <div
      id="Expertise"
      className="relative isolate overflow-hidden bg-gray-800 md:ml-96"
    >
      <div className="bg-gray-900 p-8 min-h-screen">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto md:px-12 xl:px-8">
          <div className="md:w-2/3 lg:w-1/2 my-12 md:my-24 text-gray-100">
            <h2 className="my-4 text-2xl font-bold text-white sm:my-8 md:text-4xl">
              Expertise
            </h2>
            <p className="text-gray-300">
              We have built many products and some of them are below
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 justify-center">
            {[
              { src: Html_Logo, alt: "HTML Logo", label: "HTML" },
              { src: Css_Logo, alt: "CSS Logo", label: "CSS" },
              { src: Js_Logo, alt: "JavaScript Logo", label: "JavaScript" },
              {
                src: Typescript_Logo,
                alt: "TypeScript Logo",
                label: "TypeScript",
              },
              {
                src: BootStrap_Logo,
                alt: "Bootstrap Logo",
                label: "Bootstrap",
              },
              { src: Tailwind_Logo, alt: "Tailwind Logo", label: "Tailwind" },
              { src: React_Logo, alt: "React Logo", label: "React" },
              { src: Php_Logo, alt: "PHP Logo", label: "PHP" },
              { src: Laravel_Logo, alt: "Laravel Logo", label: "Laravel" },
              { src: Figma_Logo, alt: "Figma Logo", label: "Figma" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center border text-gray-600 border-gray-700 p-6 sm:p-10 rounded-lg transform transition-transform hover:scale-105 hover:border-indigo-500 shadow-md"
              >
                <img
                  src={tech.src}
                  loading="lazy"
                  className="w-12 h-12 sm:w-16 sm:h-16"
                  alt={tech.alt}
                />
                <p className="text-xs sm:text-sm text-gray-300 mt-2 sm:mt-4">
                  {tech.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
