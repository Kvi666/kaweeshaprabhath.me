"use client";
import React from "react";

interface Experience {
  date: string;
  title: string;
  description: string;
}

interface SectionProps {
  title: string;
  data: Experience[];
}

const educationData: Experience[] = [
  {
    date: "January 2023 — June 2023 ",
    title: "Full Stack Development",
    description:
      "Completed a Full Stack Development program at Moratuwa University, covering frontend and backend technologies. Gained skills in database management, server-side scripting, and dynamic web applications.",
  },
  {
    date: "June 2023 — December 2023",
    title: "Frontend Development",
    description:
      "Finished a detailed Frontend Development course on Udemy, mastering HTML, CSS, JavaScript, and React. The course included practical projects to build responsive and user-friendly web applications.",
  },
  {
    date: "January 2024 — June 2024",
    title: "MERN Stack",
    description:
      "Completed a MERN Stack course on Udemy, focusing on MongoDB, Express.js, React, and Node.js. Acquired hands-on experience in building full-featured web applications, including RESTful APIs and dynamic interfaces.",
  },
];

const workExperienceData: Experience[] = [
  {
    date: "2023 - 2024",
    title: "Senior Developer",
    description:
      "Senior Developer at Advirto Digital, leading web development projects, managing a team, and optimizing workflows to ensure high-quality, on-time delivery.",
  },
  {
    date: "July 2020 - February 2022",
    title: "Associate Software Engineer",
    description:
      "Working as an Associate Software Engineer at eSupport Technologies, responsible for developing and maintaining software applications. Collaborating with teams to design, implement, and optimize solutions, ensuring efficient functionality and a seamless user experience.",
  },
  {
    date: "July 2020 - February 2022",
    title: "Freelancer",
    description:
      "Providing freelance web development services on Fiverr, specializing in custom websites and e-commerce platforms. Managing client projects end-to-end, from requirements gathering to deployment and support.c",
  },
];

function Section({ title, data }: SectionProps) {
  return (
    <div className="space-y-6">
      <div className="p-5">
        <span className="bg-slate-200 px-4 py-2 rounded-full">
          <span className="font-bold bg-gradient-to-r from-[#240CF2] to-[#00A9B5] bg-clip-text text-transparent">
            {title}
          </span>
        </span>
      </div>

      {data.map((item, index) => (
        <div key={index}>
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-600 to-transparent my-2 md:my-10" />
          <div className="flex flex-col md:flex-row py-4 px-4">
            <div className="w-full md:w-1/4">
              <p className="text-lg text-gray-200">{item.date}</p>
            </div>
            <div className="w-full md:w-3/4">
              <p className="text-xl font-semibold text-gray-200">
                {item.title}
              </p>
              <p className="text-gray-400 text-base text-justify sm:text-lg mx-auto lg:mx-0">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <div id="Resume" className="bg-gray-900 py-5 md:py-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="md:w-2/3 lg:w-1/2 my-12  text-gray-100">
          <h2 className="text-3xl font-bold text-white md:text-4xl mb-4">
            Resume
          </h2>

          <p className="text-gray-300">
            We have built many products, and some of them are showcased below.
          </p>
        </div>
        <div className="space-y-16">
          <Section title="Education" data={educationData} />
          <Section title="Work Experience" data={workExperienceData} />
        </div>
      </div>
    </div>
  );
}
