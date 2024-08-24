import React from "react";
import Code from "../assets/code.png";

const Services = () => {
  return (
    <div
      id="Services"
      className="relative isolate overflow-hidden bg-gray-900 md:ml-96"
    >
      {" "}
      {/* Add margin-left on medium screens and up */}
      <div className="bg-gray-800 p-4 min-h-screen px-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
            {/* <img src={Code} alt="Code png" /> */}
            <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
              Services
            </h2>
            <p className="text-gray-300">
              We have built many products and some of them are below
            </p>
          </div>
          <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://www.svgrepo.com/show/164986/logo.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  alt="Xyz.com Logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Xyz.com
                  </h5>
                  <p className="text-gray-300">
                    Platform to convert Domains into Content websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://www.svgrepo.com/show/120853/logo.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  alt="ABC.com Logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    ABC.com
                  </h5>
                  <p className="text-gray-300">
                    Platform to create dynamic widgets for websites.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://www.svgrepo.com/show/120852/logo.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  alt="ASD.com Logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    ASD.com
                  </h5>
                  <p className="text-gray-300">
                    API SaaS Platform that provides API Suit to help you ship
                    fast.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://www.svgrepo.com/show/120850/logo.svg"
                  loading="lazy"
                  width="200"
                  height="200"
                  className="w-12 h-12 rounded-full"
                  alt="TMK.co Logo"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    TMK.co
                  </h5>
                  <p className="text-gray-300">
                    Chrome Extension that lets you add ChatGPT on any website
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
