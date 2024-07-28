import React from 'react';
import Dp from '../assets/dp.jpg'
import Typewriter from './TypeWriter';
import './Hero.css'

function Hero() {
    return (
        <section className="max-w-screen-xl mx-auto px-4">
            <div className="text-center items-center justify-center">
                <h1 className="text-5xl font-bold leading-none sm:hidden mt-5 bg-gradient-to-r from-slate-400 to-violet-500 bg-clip-text text-transparent">
                    <span className='font-thin text-md'>I am Kvi</span> <br />
                </h1>
                <h1 className="text-5xl font-bold leading-none sm:hidden bg-gradient-to-r from-slate-400 to-violet-500 bg-clip-text text-transparent">
                    <Typewriter words={['Developer', 'Designer']} />
                </h1>
            </div>

            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 sm:flex-row-reverse sm:justify-between">
                <div className="flex items-center justify-center  mt-5 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img
                        src={Dp}
                        alt="Business Illustration"
                        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded-3xl"
                    />
                </div>
                <div className="flex flex-col justify-center py-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl bg-gradient-to-r from-slate-400 to-violet-500 bg-clip-text text-transparent hidden sm:block">
                        <span className='font-thin text-md'>I am Kvi</span> <br />
                        <Typewriter words={['Developer', 'Designer']} />
                    </h1>

                    <p className="mt-6 mb-8 text-lg font-light sm:mb-12 text-white ">
                        I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
                    </p>
                    <div class="flex flex-wrap items-center space-x-4">
                        <a href="#" class="text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50 p-3">
                            Download CV
                            <i class="fa-solid fa-download"></i>
                        </a>
                        <ul class="flex space-x-4 list-none p-0 m-0 social-icons">
                            <li>
                                <a href="#" class="">
                                    <i class="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="">
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="">
                                    <i class="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="">
                                    <i class="fa-brands fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div >
        </section >
    );
}

export default Hero;
