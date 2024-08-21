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
      className="relative isolate overflow-hidden bg-gray-900 md:ml-96"
    >
      {" "}
      {/* Add margin-left on medium screens and up */}
      <div className="bg-gray-900 p-4 min-h-screen px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-secondary"
            >
              <path
                fillRule="evenodd"
                d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
              Our Work
            </h2>
            <p className="text-gray-300">
              We have built many products and some of them are below
            </p>
          </div>

          <div className="flex justify-center gap-5">
            <div className="mt-16 flex  divide-gray-700 border  text-gray-600 border-gray-700 p-16 rounded-lg">
              <div className="m-auto">
                <img
                  src={Html_Logo}
                  loading="lazy"
                  className="w-16 h-16 "
                  alt="html logo"
                />
              </div>
            </div>
            <div className="mt-16 flex  divide-gray-700 border  text-gray-600 border-gray-700 p-16 rounded-lg">
              <div className="m-auto">
                <img
                  src={Css_Logo}
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 "
                  alt="css logo"
                />
              </div>
            </div>
            <div className="mt-16 flex  divide-gray-700 border  text-gray-600 border-gray-700 p-16 rounded-lg">
              <div className="m-auto">
                <img
                  src={Js_Logo}
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 rounded"
                  alt="js logo"
                />
              </div>
            </div>
            <div className="mt-16 flex  divide-gray-700 border  text-gray-600 border-gray-700 p-16 rounded-lg">
              <div className="m-auto">
                <img
                  src={Typescript_Logo}
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 "
                  alt="typescript logo"
                />
              </div>
            </div>
            <div className="mt-16 flex  divide-gray-700 border  text-gray-600 border-gray-700 p-16 rounded-lg">
              <div className="m-auto">
                <img
                  src={BootStrap_Logo}
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16"
                  alt="bootstrap logo"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-5">
            <div className="mt-16 flex  divide-gray-700 border  text-gray-600 border-gray-700 p-16 rounded-lg">
              <div className="m-auto">
                <img
                  src={Tailwind_Logo}
                  loading="lazy"
                  className="w-16 h-16 "
                  alt="tailwind logo"
                />
              </div>
            </div>
            <div className="mt-16 flex  divide-gray-700 border  text-gray-600 border-gray-700 p-16 rounded-lg">
              <div className="m-auto">
                <img
                  src={React_Logo}
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 "
                  alt="react logo"
                />
              </div>
            </div>
            <div className="mt-16 flex  divide-gray-700 border  text-gray-600 border-gray-700 p-16 rounded-lg">
              <div className="m-auto">
                <img
                  src={Php_Logo}
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 rounded"
                  alt="php logo"
                />
              </div>
            </div>
            <div className="mt-16 flex  divide-gray-700 border  text-gray-600 border-gray-700 p-16 rounded-lg">
              <div className="m-auto">
                <img
                  src={Laravel_Logo}
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16 "
                  alt="laravel logo"
                />
              </div>
            </div>
            <div className="mt-16 flex  divide-gray-700 border  text-gray-600 border-gray-700 p-16 rounded-lg">
              <div className="m-auto">
                <img
                  src={Figma_Logo}
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-16 h-16"
                  alt="figma logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
