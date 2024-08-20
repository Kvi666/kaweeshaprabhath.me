import React, { useState } from 'react';
import Dp from '../assets/dp.jpg';
import Logo from '../assets/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside
                className={`fixed z-40 top-0 left-0 w-96 h-full px-4 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out`}
            >
                <a href="#" className="mx-auto ">
                    <img className="w-auto h-6 sm:h-7 mx-auto" src={Logo} alt="Logo" />
                </a>

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-28 h-28 mx-2 rounded-full" src={Dp} alt="Profile" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">Kvi</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">dev.kvi@gmail.com</p>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className='flex justify-center'>
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a href="#Home" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2.5l7.5 7.5v7.5h-5v-5h-5v5h-5v-7.5l7.5-7.5z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#Services" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 5h16v2H2V5zm2 4h12v6H4V9z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Services</span>
                                </a>
                            </li>
                            <li>
                                <a href="#Projects" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 2L2 7v11h16V7l-8-5zm0 2.2L15.6 7H4.4L10 4.2zM4 9v7h12V9H4z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
                                </a>
                            </li>
                            <li>
                                <a href="#Resume" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M3 2v16h14V6l-6-4H3zm2 2h6v4h4v8H5V4zm8 0v2H9V4h4z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Resume</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5 3h10v14H5V3zm2 2v2h6V5H7zm0 4v6h6V9H7z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Expertise</span>
                                </a>
                            </li>
                            <li>
                                <a href="#Contact" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3v14h16V3H2zm2 2h12v10H4V5zm1 1h10v2H5V6z" />
                                    </svg>
                                    <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

            {/* Hamburger Menu Button */}
            <div className="block md:hidden p-4 fixed z-50 top-0 right-0">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-700 dark:text-gray-200 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Header;
