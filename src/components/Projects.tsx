import React from "react";
import Image from "next/image";
import { FaWordpress, FaPython } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      imgSrc: "/projects/keyword.webp",
      title: "Keyword Finder in Web Pages",
      tech: "Python",
      description:
        "A Python script that automates the process of scanning multiple web pages for a specific keyword. It extracts the content of each URL, analyzes it, and reports whether the keyword is present, making it a useful tool for SEO research and content analysis.",
      link: "https://github.com/Kvi666/Keyword-Finder-in-Web-Pages",
      icon: FaPython,
    }, 
    {
      imgSrc: "/projects/lootyco.webp",
      title: "Looty Co.",
      tech: "WordPress",
      description:
        "Looty Co. is an online skincare & beauty retailer that curates a selection of dermatologist-tested and effective products—ranging from cleansers, serums, moisturizers, sunscreens to hair care items.They also offer personalized skin consultations to help customers identify the right skincare routine.",
      link: "https://lootyco.com/",
      icon: FaWordpress,
    },
    {
      imgSrc: "/projects/sviss.webp",
      title: "Sviss",
      tech: "WordPress",
      description:
        "Sviss Cosmetics is a modern beauty destination dedicated to delivering high-performance skincare and beauty essentials. The brand brings together carefully formulated products—from daily face washes and targeted treatments to nourishing moisturizers, sun protection, and hair care—designed to support healthy, radiant skin.",
      link: "https://sviss.lk/",
      icon: FaWordpress,
    },
    {
          imgSrc: "/projects/tea.webp",
          title: "Three Flavours",
          tech: "WordPress",
          description:
            "Three Flavours offers premium tea blends that deliver rich, authentic flavors in every cup. With a selection of finely crafted teas, they provide a luxurious tea-drinking experience that delights the senses.",
          link: "https://3flavoursauthentic.com/",
          icon: FaWordpress,
        },
    // {
    //   imgSrc: "/projects/chamee.webp",
    //   title: "chameeth.com",
    //   tech: "WordPress",
    //   description:
    //     "Chameeth.com is an interactive platform for book lovers. It offers a wide variety of genres, personalized recommendations, and a user-friendly design, making it an ideal space for readers to discover new books. The website is built on WordPress, ensuring easy content updates and management.",
    //   link: "https://chameeth.com/",
    //   icon: FaWordpress,
    // },
    
  ];

  return (
    <div
      id="Portfolio"
      className="relative isolate overflow-hidden bg-gray-900"
    >
      <div className="min-h-screen max-w-[1200px] mx-auto px-4">
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
        </div>
        <div className="mx-auto">
          <div className="md:w-2/3 lg:w-1/2 my-12 md:mt-24 text-gray-100">
            <p className="text-3xl font-bold text-white md:text-4xl mb-4">
              Projects
            </p>
            <p className="text-gray-300">
              I have built many products, and some of them are showcased below.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-900 dark:border-gray-700 overflow-hidden"
              >
                <a href={project.link} target="_blank">
                  <Image
                    className="w-full object-cover"
                    src={project.imgSrc}
                    alt={project.title}
                    width={500}
                    height={500}
                  />
                </a>
                <div className="p-4 sm:p-6">
                  <a href={project.link} target="_blank">
                    <div className="flex justify-between">
                      <p className="text-lg font-semibold text-gray-300  transition-colors group-hover:text-secondary flex gap-2">
                        {project.title}
                      </p>
                      <p className="text-gray-300  bg-gray-600 w-fit rounded-full px-2 my-auto flex gap-2">
                        <project.icon className="my-auto" />
                        {project.tech}
                      </p>
                    </div>
                  </a>
                  <p className="text-gray-300  mt-2 text-justify">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="/portfolio"
            className="flex w-fit items-center gap-2 bg-gray-800 hover:bg-blue-600 text-white py-2 px-5 rounded-md shadow-md border border-slate-500 transition-all duration-300 mt-10 mx-auto"
          >
            <p>See All Projects</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
