"use client";
import { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_24irlkh",   // Your Service ID
        "template_3q9m4ep",  // Your Template ID (with admin + user in To)
        form.current,
        "1rwFgWqcUFu1JYkZz"  // Your Public Key
      )
      .then(
        () => {
          alert("Message sent! I’ll review it and get back to you as soon as possible. ");
          form.current?.reset();
        },
        (error) => {
          console.error("❌ Failed:", error.text);
          alert("Something went wrong. Try again later.");
        }
      );
  };

  return (
    <div id="Contact" className="bg-gray-900">
      <section className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-5 pt-10">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="mb-4 text-2xl font-medium text-white sm:text-3xl">
              Contact Me
            </h1>
            <p className="mx-auto">
              Feel free to reach out! Whether you have a question,
              feedback, or a collaboration proposal.
            </p>
          </div>

          <div className="mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div className="-m-2 flex flex-wrap">
                {/* Name Field */}
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="user_name" // EmailJS variable
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
                      name="user_email" // EmailJS variable
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
                      name="message" // EmailJS variable
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
                  <button className="mx-auto flex rounded border border-gray-400 bg-transparent py-2 px-8 text-lg text-gray-400 hover:bg-blue-600 hover:text-white">
                    Submit
                  </button>
                  <p className="text-center mt-2 text-sm text-gray-500"></p>
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
