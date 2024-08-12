import React from 'react';
import ProjectImg from '../assets/tea.jpg';

const Projects = () => {
    const projects = [
        {
            imgSrc: ProjectImg,
            title: 'Noteworthy technology acquisitions 2021',
            description:
                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
            link: '#',
        },
        {
            imgSrc: ProjectImg,
            title: 'Innovative tech trends 2022',
            description:
                'Explore the most innovative technology trends that are set to shape the future in 2022 and beyond.',
            link: '#',
        },
        {
            imgSrc: ProjectImg,
            title: 'Top AI breakthroughs in 2023',
            description:
                'Discover the top AI breakthroughs that have the potential to revolutionize industries in 2023.',
            link: '#',
        },
    ];

    return (
        <div id='Projects' className="relative isolate overflow-hidden bg-gray-900 md:ml-64 pb-16 pt-12">
            <div className="max-w-7xl mx-auto px-8 md:px-16 xl:px-20">
                <div className="md:w-2/3 lg:w-1/2 mb-12 text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-secondary">
                        <path fillRule="evenodd"
                            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                            clipRule="evenodd"></path>
                    </svg>
                    <h2 className="my-8 text-3xl font-bold text-white md:text-4xl">Our Work</h2>
                    <p className="text-gray-300">We have built many products, and some of them are showcased below.</p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div key={index} className="group bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href={project.link}>
                                <img className="rounded-t-lg w-full h-48 object-cover" src={project.imgSrc} alt={project.title} />
                            </a>
                            <div className="p-6">
                                <a href={project.link}>
                                    <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                                        {project.title}
                                    </h5>
                                </a>
                                <p className="text-gray-300 mt-4">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    className="inline-flex items-center px-4 py-2 mt-6 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
            </div>
        </div>
    );
};

export default Projects;
