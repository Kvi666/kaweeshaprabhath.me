import React from 'react'
import Hero from '../Components/Hero'
import Services from '../Components/Services'
import Projects from '../Components/Projects'
import Resume from '../Components/Resume'
import ContactForm from '../Components/ContactForm'

const Home = () => {
    return (
        <>
            <Hero />
            <Services />
            <Projects />
            <Resume />
            <ContactForm />
        </>

    )
}

export default Home