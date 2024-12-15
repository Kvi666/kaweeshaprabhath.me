import React from "react";
import Project_01 from "../assets/projects/keyword.webp";
import Project_02 from "../assets/projects/iwodress.webp";
import Project_03 from "../assets/projects/sindys.webp";
import Project_04 from "../assets/projects/afron.webp";

const Projects = () => {
  const projects = [
    {
      imgSrc: Project_01,
      title: "Keyword Finder in Web Pages",
      description:
        "A Python script that scans a list of URLs to check for the presence of a specific keyword.",
      link: "https://github.com/Kvi666/Keyword-Finder-in-Web-Pages",
    },
    {
      imgSrc: Project_02,
      title: "IwoDress",
      description:
        "IwoDress crafts custom, elegant dresses tailored to individual style, bringing fashion dreams to life with quality and care.",
      link: "https://www.iwodress.com/",
    },
    {
      imgSrc: Project_03,
      title: "Sindy's Clothing",
      description:
        "Sindy's Clothing offers trendy, bold styles for a fashion-forward audience, blending quality with unique designs.",
      link: "https://sindyss.com/",
    },
    {
      imgSrc: Project_04,
      title: "Afron Success",
      description:
        "Afron Success Academy empowers learners with courses designed to enhance personal and career growth.",
      link: "#",
    },

  ];

  return (
    <div
      id="Projects"
      className="relative isolate overflow-hidden bg-gray-800 md:ml-96"
    >
      <div className="bg-gray-800 p-8 min-h-screen">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto md:px-12 xl:px-8">
          <div className="md:w-2/3 lg:w-1/2 my-12 md:my-24 text-gray-100">
            <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">
              Projects
            </h2>

            <p className="text-gray-300">
              We have built many products, and some of them are showcased below.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
              >
                <a href={project.link}>
                  <img
                    className="w-full h-48 object-cover"
                    src={project.imgSrc}
                    alt={project.title}
                  />
                </a>
                <div className="p-4 sm:p-6">
                  <a href={project.link}>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors group-hover:text-secondary">
                      {project.title}
                    </h5>
                  </a>
                  <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm md:text-base">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-4 h-4 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none"
            >
              See All Projects
              <svg
                className="w-5 h-5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
