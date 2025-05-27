import React from "react";
import Head from "next/head";
import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Page() {
  return (
    <>
      <Head>
        <title>Kaweesha Prabhath | Software Engineer & Web Developer</title>
        <meta
          name="description"
          content="Kaweesha Prabhath is a passionate Software Engineer and Web Developer. Explore resume, projects, and contact details."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://www.kaweeshaprabhath.me/" />
      </Head>

      <div>
        <Hero />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
