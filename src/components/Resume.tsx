"use client";
import React from "react";

interface Experience {
  date: string;
  title: string;
  company?: string;
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
    date: "December 2023 - June 2024",
    title: "Lead Developer",
    company: "Advirto Digital",
    description:
      "Started as an intern at Advirto Digital focused on WordPress-based solutions, led multiple client projects, developed custom themes and plugins.",
  },

  {
    date: "July 2024 - January 2025",
    title: "Associate Software Engineer",
    company: "Ceylon Ventures Pty Ltd",
    description:
      "Joined as an Associate Software Engineer, working on the development and maintenance of web and software applications. Gained hands-on experience with full-stack development, collaborating closely with cross-functional teams to deliver effective tech solutions.",
  },
  {
    date: "February 2025 - Present",
    title: "Associate Software Engineer",
    company: "Aurora 365",
    description:
      "Currently working as an Associate Software Engineer at Aurora 365, contributing to ongoing software development projects. Collaborating with teams to build efficient, user-friendly applications while continuing to grow and refine my skill set.",
  },
  {
    date: "2020 - Present",
    title: "Freelance Developer",
    company: "Self-employed",
    description:
      "Providing freelance web development services for a diverse range of clients — including local businesses, international clients, and Fiverr customers. Specializing in WordPress and custom web solutions, handling everything from project scoping and design to development, deployment, and post-launch support.",
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
              {item.company && (
                <p className="text-md text-sky-500 mb-1">{item.company}</p>
              )}
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
        <div className="md:w-2/3 lg:w-1/2 my-12  text-gray-100 px-4">
          <p className="text-3xl font-bold text-white md:text-4xl mb-4">
            Resume
          </p>

          <p className="text-gray-300">
            A snapshot of my career, from internships to freelance work with
            diverse clients.
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
