"use client";
import { useRef } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_24irlkh", 
        "template_3q9m4ep",  
        form.current,
        "1rwFgWqcUFu1JYkZz"  
      )
      .then(
        () => {
          toast.success("Message sent! I’ll get back to you soon.", {
            duration: 5000, 
          });
          form.current?.reset();
        },
        () => {
          toast.error("❌ Something went wrong. Try again later.", {
            duration: 7000, 
          });
        }
      );

  };

  return (
    <div id="Contact" className="bg-gray-900">
      {/* Toast Container */}
      <Toaster position="bottom-right" reverseOrder={false} />

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
                      name="user_name"
                      className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base text-gray-100 placeholder-transparent outline-none transition-colors duration-200 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Name"
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-3 -top-6 text-sm text-indigo-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
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
                      name="user_email"
                      className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base text-gray-100 placeholder-transparent outline-none transition-colors duration-200 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Email"
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-3 -top-6 text-sm text-indigo-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
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
                      className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base text-gray-100 placeholder-transparent outline-none transition-colors duration-200 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                      placeholder="Message"
                      required
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-3 -top-6 text-sm text-indigo-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-indigo-500"
                    >
                      Message
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="w-full p-2">
                  <button
                    type="submit"
                    className="mx-auto flex rounded border border-gray-400 bg-transparent py-2 px-8 text-lg text-gray-400 hover:bg-blue-600 hover:text-white transition"
                  >
                    Submit
                  </button>
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
