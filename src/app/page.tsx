import Hero from "@/components/Hero";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import React from "react";
import Projects from "@/components/Projects";

export default function page() {
  return (
    <div>
      <Hero />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
