import React from "react";
import Project_01 from "../assets/projects/keyword.webp";
import Project_02 from "../assets/projects/iwodress.webp";
import Project_03 from "../assets/projects/sindys.webp";
import Project_04 from "../assets/projects/afron.webp";
import Project_05 from "../assets/projects/amj.webp";
import Project_06 from "../assets/projects/api_flora.webp";
import Project_07 from "../assets/projects/aura_sushi.webp";
import Project_08 from "../assets/projects/chamee.webp";
import Project_09 from "../assets/projects/design_link.webp";
import Project_10 from "../assets/projects/gallage.webp";
import Project_11 from "../assets/projects/kv_line.webp";
import Project_12 from "../assets/projects/musket.webp";
import Project_13 from "../assets/projects/natural_lanka.webp";
import Project_14 from "../assets/projects/reliable.webp";
import Project_15 from "../assets/projects/rfr.webp";
import Project_16 from "../assets/projects/rock_inn.webp";
import Project_17 from "../assets/projects/seafood.webp";
import Project_18 from "../assets/projects/sviss.webp";
import Project_19 from "../assets/projects/three_flavours.webp";
import Project_20 from "../assets/projects/twentyplus.webp";

const ProjectsPage = () => {
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
        {
            imgSrc: Project_05,
            title: "AMJ Trading",
            description:
                "Quality equipment and services for fuel stations and service centers.",
            link: "https://amjtradingsolutions.com/",
        }, {
            imgSrc: Project_06,
            title: "Api Flora",
            description:
                "Premium flower shop offering fresh, beautiful floral arrangements for all occasions.",
            link: "https://apiflora.lk/",
        }, {
            imgSrc: Project_07,
            title: "Aura Sushi",
            description:
                "Exquisite sushi and grill dining experience with a modern touch.",
            link: "https://aurasushibarandgrill.co.uk/",
        }, {
            imgSrc: Project_08,
            title: "Chameeth",
            description:
                "Engaging book-reading platform offering a wide range of genres for every reader.",
            link: "https://chameeth.com/",
        },
        {
            imgSrc: Project_09,
            title: "Design Link",
            description:
                "Creative interior design solutions for modern and functional living and working spaces.",
            link: "https://designlink.lk/",
        }, {
            imgSrc: Project_10,
            title: "Gallage Construction",
            description:
                "Specializing in bathroom renovations, floor tiling, and plumbing services.",
            link: "https://gallageconstruction.lk/",
        }, {
            imgSrc: Project_11,
            title: "KV Line",
            description:
                "High-quality drumsticks crafted for professional and passionate musicians.",
            link: "https://kvline.lk/",
        }, {
            imgSrc: Project_12,
            title: "Musket Movers",
            description:
                "Professional moving services ensuring seamless, stress-free relocations.",
            link: "https://muscathousemovers.org/",
        }, {
            imgSrc: Project_13,
            title: "Natural Lanka",
            description:
                "Organic and natural beauty products for a healthier, sustainable lifestyle.",
            link: "https://natural-lanka.com/",
        }, {
            imgSrc: Project_14,
            title: "Reliable GCC",
            description:
                "Comprehensive construction and development services with global expertise.",
            link: "https://reliablegcc.com/",
        }, {
            imgSrc: Project_15,
            title: "RFRMA",
            description:
                "Expert digital marketing solutions to elevate your online presence.",
            link: "https://rfrma.com/",
        }, {
            imgSrc: Project_16,
            title: "Rock Inn",
            description:
                "Charming riverside inn offering comfort, great food, and stunning views.",
            link: "https://rockinnwaterrow.com/",
        }, {
            imgSrc: Project_17,
            title: "Sea Food",
            description:
                "Fresh, flavorful seafood specialties inspired by global culinary traditions.",
            link: "https://3flavoursseafood.com/",
        }, {
            imgSrc: Project_18,
            title: "Sviss",
            description:
                "Premium personal care and beauty products for a luxurious lifestyle.",
            link: "https://sviss.lk/",
        }, {
            imgSrc: Project_19,
            title: "Three Flavours",
            description:
                "Premium tea blends offering rich flavors and authentic tea experiences.",
            link: "https://3flavoursauthentic.com/",
        }, {
            imgSrc: Project_20,
            title: "Twenty Plus",
            description:
                "Picture a world sans photography, devoid of vibrant hues and illuminating moments.",
            link: "https://twentyplus.lk/",
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
                            href="/"
                            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-indigo-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none"
                        >
                            Back To Home                            <svg
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

export default ProjectsPage;
