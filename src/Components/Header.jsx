import React, { useState } from 'react';
import Dp from '../assets/dp.jpg';
import Logo from '../assets/logo.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            {/* Sidebar */}
            <aside className={`fixed z-40 top-0 left-0 w-64 h-full px-4 py-8 overflow-y-auto bg-white border-r dark:bg-gray-900 dark:border-gray-700 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out`}>
                <a href="#" className="mx-auto">
                    <img className="w-auto h-6 sm:h-7" src={Logo} alt="Logo" />
                </a>

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src={Dp} alt="Profile" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">Kvi</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">dev.kvi@gmail.com</p>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        {/* Add your nav items here */}
                    </nav>
                </div>
            </aside>

            {/* Hamburger Menu Button */}
            <div className="block md:hidden p-4 fixed z-50 top-0 right-0">
                <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 dark:text-gray-200 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Header;
