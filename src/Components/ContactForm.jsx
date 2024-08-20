import React from 'react';

const ContactForm = () => {
    return (
        <div id='Contact' className="relative isolate overflow-hidden bg-gray-900 md:ml-96 pb-16 pt-12">
            <section className="body-font relative bg-gray-900 text-gray-400">
                <div className="container mx-auto px-5 py-24">
                    <div className="mb-12 flex w-full flex-col text-center">
                        <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Us</h1>
                        <p className="mx-auto text-base leading-relaxed lg:w-2/3">
                            Feel free to reach out to us! Whether you have a question, feedback, or a collaboration proposal, we'd love to hear from you.
                        </p>
                    </div>

                    <div className="mx-auto md:w-2/3 lg:w-1/2">
                        <div className="-m-2 flex flex-wrap">
                            {/* Name Field */}
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                                        placeholder="Name"
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                                    >
                                        Name
                                    </label>
                                </div>
                            </div>
                            {/* Email Field */}
                            <div className="w-1/2 p-2">
                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                                        placeholder="Email"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                                    >
                                        Email
                                    </label>
                                </div>
                            </div>
                            {/* Message Field */}
                            <div className="mt-4 w-full p-2">
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                                        placeholder="Message"
                                    ></textarea>
                                    <label
                                        htmlFor="message"
                                        className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-indigo-500 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                                    >
                                        Message
                                    </label>
                                </div>
                            </div>
                            {/* Submit Button */}
                            <div className="w-full p-2">
                                <button className="mx-auto flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                                    Button
                                </button>
                            </div>

                            {/* Footer */}
                            <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
                                <a href="mailto:example@email.com" className="text-indigo-400">
                                    dev.kaweeshaprabhath@gmail.com
                                </a>
                                <p className="my-5 leading-normal">
                                    49 Smith St. <br />
                                    Saint Cloud, MN 56301
                                </p>
                                <span className="inline-flex">
                                    <a href="#" className="text-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path d="M22.675 0h-21.35C.597 0 0 .598 0 1.326v21.348C0 23.402.597 24 1.326 24h11.495v-9.294H9.692V11.01h3.129V8.354c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.695h-3.12V24h6.116C23.403 24 24 23.402 24 22.674V1.326C24 .598 23.403 0 22.675 0z" />
                                        </svg>


                                    </a>
                                    <a href="#" className="ml-4 text-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path d="M12 0c-6.627 0-12 5.373-12 12 0 2.133.553 4.097 1.596 5.85L0 23.994a.997.997 0 001.185 1.184l5.48-1.548A11.957 11.957 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.07 15.292c-.244.683-.795 1.318-1.528 1.82-.473.326-1.007.571-1.574.723-1.33.326-2.708.449-4.077.343-1.233-.099-2.362-.378-3.351-.736-.09-.037-.181-.076-.271-.115-.512-.171-.924-.408-1.313-.689-.167-.106-.359-.085-.501.063-.237.24-.5.357-.742.447-.585.194-1.219.39-1.836.528-.496.105-.998-.038-1.354-.348-.663-.451-.933-.986-1.123-1.436-.105-.214-.196-.458-.256-.696-.35-1.176-.548-2.377-.683-3.57-.159-1.251.069-2.547.571-3.758.243-.553.462-1.111.732-1.664.354-.671.876-1.287 1.491-1.789.707-.591 1.494-1.078 2.347-1.449.634-.31 1.242-.654 1.814-.977.584-.331 1.182-.553 1.785-.725.646-.18 1.306-.332 1.95-.48.881-.177 1.757-.366 2.623-.398 1.237-.032 2.46.219 3.665.66 1.07.424 2.085.934 2.92 1.572.847.651 1.584 1.425 2.118 2.303.436.701.66 1.492.717 2.332.057.855-.18 1.676-.57 2.38z" />
                                        </svg>


                                    </a>
                                    <a href="#" className="ml-4 text-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path d="M12 0C5.371 0 0 5.371 0 12c0 5.301 3.438 9.799 8.207 11.387.6.111.82-.26.82-.577 0-.285-.01-1.041-.015-2.043-3.338.726-4.042-1.609-4.042-1.609-.546-1.389-1.333-1.759-1.333-1.759-1.089-.744.083-.729.083-.729 1.204.084 1.837 1.236 1.837 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.419-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.931 0-1.311.469-2.382 1.236-3.221-.124-.303-.536-1.523.118-3.176 0 0 1.008-.322 3.301 1.23.956-.266 1.982-.399 3.003-.404 1.021.005 2.047.138 3.005.404 2.29-1.553 3.297-1.23 3.297-1.23.656 1.653.244 2.873.12 3.176.77.839 1.235 1.91 1.235 3.221 0 4.609-2.807 5.623-5.48 5.921.43.37.815 1.104.815 2.224 0 1.606-.014 2.901-.014 3.292 0 .319.215.694.825.576C20.565 21.796 24 17.298 24 12c0-6.629-5.371-12-12-12z" />
                                        </svg>


                                    </a>
                                    <a href="#" className="ml-4 text-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path d="M22.23 0H1.77C.792 0 0 .77 0 1.723v20.554C0 23.23.792 24 1.77 24h20.46C23.208 24 24 23.23 24 22.277V1.723C24 .77 23.208 0 22.23 0zM7.07 20.452H3.875V9.026H7.07v11.426zM5.473 7.668h-.03c-1.07 0-1.76-.736-1.76-1.655 0-.94.71-1.654 1.792-1.654s1.76.714 1.79 1.654c0 .919-.69 1.655-1.792 1.655zm13.905 12.784h-3.193v-5.644c0-1.422-.508-2.394-1.778-2.394-.97 0-1.548.653-1.803 1.284-.093.227-.116.544-.116.862v5.892H9.495V9.026h3.065v1.558c.406-.627 1.134-1.525 2.756-1.525 2.012 0 3.522 1.315 3.522 4.144v7.249h-.002z" />
                                        </svg>


                                    </a>
                                    <a href="#" className="ml-4 text-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path d="M12 0c-6.627 0-12 5.373-12 12 0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0zm0 21.75c-5.425 0-9.75-4.325-9.75-9.75S6.575 2.25 12 2.25 21.75 6.575 21.75 12 17.425 21.75 12 21.75zM12 5.25a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zm0 11.25a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM17.5 7.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                                        </svg>



                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactForm;
