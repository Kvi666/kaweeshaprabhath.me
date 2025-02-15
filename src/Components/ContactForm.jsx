import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub, } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        access_key: "c7d325b3-4f99-4797-89b7-70c63e7a8767",
      }),
    });

    const result = await response.json();
    if (result.success) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div id="Contact" className="relative isolate overflow-hidden bg-gray-900 md:ml-96 pt-12">
      <section className="body-font relative bg-gray-900 text-gray-400">
        <div className="container mx-auto px-5 py-16">
          <div className="mb-12 flex w-full flex-col text-center">
            {/* Heading */}
            <div aria-hidden="true" className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
              <div className="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
              <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
            </div>
            <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Me</h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/4">
              Feel free to reach out to us! Whether you have a question, feedback, or a collaboration proposal, we'd love to hear from you.
            </p>
          </div>

          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <form onSubmit={handleSubmit}>
              <div className="-m-2 flex flex-wrap">
                {/* Name Field */}
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Name"
                      required
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
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Email"
                      required
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
                      value={formData.message}
                      onChange={handleChange}
                      className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Message"
                      required
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
                  <button className="mx-auto flex rounded border-0 bg-indigo-600 py-2 px-8 text-lg text-white hover:bg-blue-600 focus:outline-none">
                    Submit
                  </button>
                  <p className="text-center mt-2 text-sm text-gray-500">{status}</p>
                </div>

                {/* Footer */}
                <div className="mt-8 w-full border-t border-gray-800 p-2 pt-8 text-center">
                  <a href="mailto:contact@kaweeshaprabhath.me" className="">
                    contact@kaweeshaprabhath.me

                  </a>
                </div>

                <div className="inline-flex m-auto gap-4 text-grey mt-4 sm:mt-0">
                  <a href="https://www.facebook.com/kaweeshaprabhathuduwilaarachchi" target="_blank"><FaFacebook className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" /></a>
                  <a href="https://www.linkedin.com/in/kaweesha-prabhath-989305314/" target="_blank"><FaLinkedin className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" /></a>
                  <a href="https://github.com/Kvi666" target="_blank"><FaGithub className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" /></a>
                  <a href="https://api.whatsapp.com/send?phone=94702585455" target="_blank"><IoLogoWhatsapp className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" /></a>
                  <a href="https://www.instagram.com/kvi69.exe/" target="_blank"><FaInstagram className="text-xl sm:text-2xl cursor-pointer hover:text-blue-500 transition duration-300" /></a>

                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
