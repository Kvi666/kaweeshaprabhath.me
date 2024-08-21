import React from "react";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Projects from "../Components/Projects";
import Resume from "../Components/Resume";
import ContactForm from "../Components/ContactForm";
import Expertise from "../Components/Expertise";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Expertise />
      <Resume />
      <Projects />
      <ContactForm />
    </>
  );
};

export default Home;
