import React from "react";

const Services = () => {
  return (
    <div
      id="Services"
      className="relative isolate overflow-hidden bg-gray-900 md:ml-96"
    >
      <div className="bg-gray-900 p-8 min-h-screen flex justify-center items-center">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 xl:px-20">
          <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
            <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
              Services
            </h2>
            <p className="text-gray-300">
              We have built many products and some of them are below
            </p>
          </div>
          <div className="mt-12 sm:mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
            {[
              {
                src: "https://www.svgrepo.com/show/164986/logo.svg",
                alt: "Xyz.com Logo",
                title: "Xyz.com",
                description:
                  "Platform to convert Domains into Content websites.",
              },
              {
                src: "https://www.svgrepo.com/show/120853/logo.svg",
                alt: "ABC.com Logo",
                title: "ABC.com",
                description: "Platform to create dynamic widgets for websites.",
              },
              {
                src: "https://www.svgrepo.com/show/120852/logo.svg",
                alt: "ASD.com Logo",
                title: "ASD.com",
                description:
                  "API SaaS Platform that provides API Suit to help you ship fast.",
              },
              {
                src: "https://www.svgrepo.com/show/120850/logo.svg",
                alt: "TMK.co Logo",
                title: "TMK.co",
                description:
                  "Chrome Extension that lets you add ChatGPT on any website",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
              >
                <div className="relative space-y-4 sm:space-y-8 py-8 sm:py-12 px-6 sm:px-10">
                  <img
                    src={service.src}
                    loading="lazy"
                    width="200"
                    height="200"
                    className="w-12 h-12 rounded-full"
                    alt={service.alt}
                  />
                  <div className="space-y-2">
                    <h5 className="text-lg sm:text-xl font-semibold text-white transition group-hover:text-secondary">
                      {service.title}
                    </h5>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
