import React from "react";
import Projects from "../Components/Projects";
import Resume from "../Components/Resume";
import ContactForm from "../Components/ContactForm";
import Expertise from "../Components/Expertise";
import About from "../Components/About";

const Home = () => {
  return (
    <>
      <About />
      <Expertise />
      <Resume />
      <Projects />
      <ContactForm />
    </>
  );
};

export default Home;
