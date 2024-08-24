// import React from "react";

// const Resume = () => {
//     const events = [
//         {
//             time: "2022 - 2023",
//             title: "Udemy",
//             description:
//                 "Completed Frontend Development coursework on Udemy from 2022 to 2023, gaining expertise in HTML, CSS, JavaScript, and responsive design, along with hands-on experience in building modern, user-friendly web interfaces.",
//         },
//         {
//             time: "2023 - 2024",
//             title: "Udemy",
//             description:
//                 "Completed Frontend Development coursework on Udemy from 2022 to 2023, gaining expertise in HTML, CSS, JavaScript, and responsive design, along with hands-on experience in building modern, user-friendly web interfaces.",
//         },
//         {
//             time: "2023 - 2024",
//             title: "Udemy",
//             description:
//                 "Completed MERN Stack development coursework on Udemy from 2023 to 2024, mastering MongoDB, Express.js, React, and Node.js to build full-stack web applications, with practical experience in developing scalable, responsive solutions.",
//         },
//     ];

//     return (
//         <div id='Projects' className="relative isolate overflow-hidden bg-gray-800 md:ml-64">
//             <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
//                 <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
//                         <path fillRule="evenodd"
//                             d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
//                             clipRule="evenodd"></path>
//                     </svg>
//                     <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Our Work</h2>
//                     <p className="text-gray-300">We have built many products and some of them are below</p>
//                 </div>
//                 <div class="grid grid-cols-1 md:grid-cols-2 p-12">

//                     <div><div className="flex justify-center">
//                         <div className="w-full max-w-2xl flex justify-center">
//                             <div className="bg-gray-800 py-10">

//                                 {/* <div className="md:w-2/3 lg:w-1/2 text-gray-100">
//                                     <p className="text-gray-300 py-10">We have built many products and some of them are below</p>
//                                 </div> */}
//                                 <div className="container mx-auto">

//                                     <ul className="relative border-l-4 border-gray-600">
//                                         {events.map((event, index) => (
//                                             <li key={index} className="mb-10 ml-8">
//                                                 <div className="absolute w-6 h-6 bg-gray-800 rounded-full -left-3 border-2 border-gray-600 flex items-center justify-center">
//                                                     <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
//                                                 </div>
//                                                 <time className="block mb-2 text-sm font-mono italic text-gray-400">
//                                                     {event.time}
//                                                 </time>
//                                                 <h3 className="text-lg font-semibold text-gray-200">
//                                                     {event.title}
//                                                 </h3>
//                                                 <p className="text-gray-400">{event.description}</p>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div></div>
//                     <div> <div className="flex justify-center">
//                         <div className="w-full max-w-2xl flex justify-center">

//                             <div className="bg-gray-800 py-10">
//                                 {/* <div className="md:w-2/3 lg:w-1/2 text-gray-100">
//                                     <p className="text-gray-300 py-10">We have built many products and some of them are below</p>
//                                 </div> */}
//                                 <div className="container mx-auto">
//                                     <ul className="relative border-l-4 border-gray-600">
//                                         {events.map((event, index) => (
//                                             <li key={index} className="mb-10 ml-8">
//                                                 <div className="absolute w-6 h-6 bg-gray-800 rounded-full -left-3 border-2 border-gray-600 flex items-center justify-center">
//                                                     <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
//                                                 </div>
//                                                 <time className="block mb-2 text-sm font-mono italic text-gray-400">
//                                                     {event.time}
//                                                 </time>
//                                                 <h3 className="text-lg font-semibold text-gray-200">
//                                                     {event.title}
//                                                 </h3>
//                                                 <p className="text-gray-400">{event.description}</p>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div></div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Resume;

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
      className="relative isolate overflow-hidden bg-gray-800 md:ml-96"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-20">
        <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
          <div
            aria-hidden="true"
            className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
          >
            <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
            <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
          </div>
          {/* <svg
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
          </svg> */}
          <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">
            Resume
          </h2>
          <p className="text-gray-300">
            We have built many products and some of them are below
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 p-12">
          <div>
            <div className="flex justify-center px-5">
              <div className="w-full max-w-2xl flex justify-center">
                <div className="bg-gray-800 py-10">
                  <div className="container mx-auto">
                    <ul className="relative border-l-4 border-gray-600">
                      <li className="mb-10 ml-8">
                        <div className="absolute w-10 h-10 bg-gray-800 rounded-full -left-5 border-2 border-gray-600 flex items-center justify-center">
                          <img
                            src={Moratuwa_Logo}
                            alt="Logo"
                            className="w-full h-full object-contain p-1 rounded-full"
                          />
                        </div>
                        <time className="block mb-2 text-sm font-mono italic text-gray-400">
                          2022 - 2023
                        </time>
                        <h3 className="text-lg font-semibold text-gray-200">
                          Full Stack Development
                        </h3>
                        <p className="text-gray-400 font-light text-sm text-justify">
                          Completed a Full Stack Development program at Moratuwa
                          University, covering frontend and backend
                          technologies. Gained skills in database management,
                          server-side scripting, and dynamic web applications,
                          preparing for comprehensive development roles.
                        </p>
                      </li>
                      <li className="mb-10 ml-8">
                        <div className="absolute w-10 h-10 bg-gray-800 rounded-full -left-5 border-2 border-gray-600 flex items-center justify-center">
                          <img
                            src={Udemy_Logo}
                            alt="Logo"
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <time className="block mb-2 text-sm font-mono italic text-gray-400">
                          2023 - 2024
                        </time>
                        <h3 className="text-lg font-semibold text-gray-200">
                          Frontend Development
                        </h3>
                        <p className="text-gray-400 font-light text-sm text-justify">
                          Finished a detailed Frontend Development course on
                          Udemy, mastering HTML, CSS, JavaScript, and React. The
                          course included practical projects to build responsive
                          and user-friendly web applications.
                        </p>
                      </li>
                      <li className="mb-10 ml-8">
                        <div className="absolute w-10 h-10 bg-gray-800 rounded-full -left-5 border-2 border-gray-600 flex items-center justify-center">
                          <img
                            src={Udemy_Logo}
                            alt="Logo"
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <time className="block mb-2 text-sm font-mono italic text-gray-400">
                          2024 - Present
                        </time>
                        <h3 className="text-lg font-semibold text-gray-200">
                          MERN Stack
                        </h3>
                        <p className="text-gray-400 font-light text-sm text-justify">
                          Completed a MERN Stack course on Udemy, focusing on
                          MongoDB, Express.js, React, and Node.js. Acquired
                          hands-on experience in building full-featured web
                          applications, including RESTful APIs and dynamic
                          interfaces.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center px-5">
              <div className="w-full max-w-2xl flex justify-center">
                <div className="bg-gray-800 py-10">
                  <div className="container mx-auto">
                    <ul className="relative border-l-4 border-gray-600">
                      <li className="mb-10 ml-8">
                        <div className="absolute w-10 h-10 bg-gray-800 rounded-full -left-5 border-2 border-gray-600 flex items-center justify-center">
                          <img
                            src={Advirto_Logo}
                            alt="Logo"
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <time className="block mb-2 text-sm font-mono italic text-gray-400">
                          2023 - Present
                        </time>
                        <h3 className="text-lg font-semibold text-gray-200">
                          Lead Developer
                        </h3>
                        <p className="text-gray-400 font-light text-sm text-justify">
                          Leading web development at Advirto Digital, managing a
                          team to design, develop, and deploy web solutions.
                          Ensuring project success through effective
                          coordination, innovative practices, and continuous
                          workflow optimization.
                        </p>
                      </li>
                      <li className="mb-10 ml-8">
                        <div className="absolute w-10 h-10 bg-gray-800 rounded-full -left-5 border-2 border-gray-600 flex items-center justify-center">
                          <img
                            src={Esupport_Logo}
                            alt="Logo"
                            className="w-full h-full object-contain rounded-full p-1"
                          />
                        </div>
                        <time className="block mb-2 text-sm font-mono italic text-gray-400">
                          2023 - Present
                        </time>
                        <h3 className="text-lg font-semibold text-gray-200">
                          Web Developer
                        </h3>
                        <p className="text-gray-400 font-light text-sm text-justify">
                          Working as a Web Developer at eSupport Technologies,
                          responsible for creating and maintaining client
                          websites. Collaborating on design, enhancing
                          functionality, and ensuring a high-quality user
                          experience.
                        </p>
                      </li>
                      <li className="mb-10 ml-8">
                        <div className="absolute w-10 h-10 bg-gray-800 rounded-full -left-5 border-2 border-gray-600 flex items-center justify-center">
                          <img
                            src={Fiverr_Logo}
                            alt="Logo"
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <time className="block mb-2 text-sm font-mono italic text-gray-400">
                          2022 - Present
                        </time>
                        <h3 className="text-lg font-semibold text-gray-200">
                          Freelancer
                        </h3>
                        <p className="text-gray-400 font-light text-sm text-justify">
                          Providing freelance web development services on
                          Fiverr, specializing in custom websites and e-commerce
                          platforms. Managing projects from start to finish,
                          leveraging HTML, CSS, JavaScript, and frameworks.
                        </p>
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

// import React from "react";
// import Logo from "../assets/Fiverr-Logo.png";

// const Resume = () => {
//     return (
//         <div id='Projects' className="relative isolate overflow-hidden bg-gray-800 md:ml-64">
//             <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
//                 <div className="md:w-2/3 lg:w-1/2 mt-12 text-gray-100">
//                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
//                         <path fillRule="evenodd"
//                             d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
//                             clipRule="evenodd"></path>
//                     </svg>
//                     <h2 className="my-8 text-2xl font-bold text-white md:text-4xl">Our Work</h2>
//                     <p className="text-gray-300">We have built many products and some of them are below</p>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 p-12">

//                     <div>
//                         <div className="flex justify-center">
//                             <div className="w-full max-w-2xl flex justify-center">
//                                 <div className="bg-gray-800 py-10">
//                                     <div className="container mx-auto">
//                                         <ul className="relative border-l-4 border-gray-600">
//                                             <li className="mb-10 ml-8">
//                                                 <div className="absolute w-10 h-10 -left-5 flex items-center justify-center">
//                                                     <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
//                                                 </div>
//                                                 <time className="block mb-2 text-sm font-mono italic text-gray-400">
//                                                     2022 - 2023
//                                                 </time>
//                                                 <h3 className="text-lg font-semibold text-gray-200">
//                                                     Frontend Development
//                                                 </h3>
//                                                 <p className="text-gray-400"> Udemy</p>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div>
//                         <div className="flex justify-center">
//                             <div className="w-full max-w-2xl flex justify-center">
//                                 <div className="bg-gray-800 py-10">
//                                     <div className="container mx-auto">
//                                         <ul className="relative border-l-4 border-gray-600">
//                                             <li className="mb-10 ml-8">
//                                                 <div className="absolute w-10 h-10 -left-5 flex items-center justify-center">
//                                                     <img src={Logo} alt="Logo" className="w-full h-full object-contain" />
//                                                 </div>
//                                                 <time className="block mb-2 text-sm font-mono italic text-gray-400">
//                                                     2023 - Present
//                                                 </time>
//                                                 <h3 className="text-lg font-semibold text-gray-200">
//                                                     Lead Developer
//                                                 </h3>
//                                                 <p className="text-gray-400">Advirto Digital</p>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Resume;
