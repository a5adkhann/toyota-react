import React from 'react'
import Slideshow from '../components/Slideshow'
import Cards from '../components/Cards'
import AboutSection from '../components/AboutSection'
import ContactForm from '../components/ContactForm'

const Home = () => {
  return (
    <>
        <Slideshow />
        <Cards />
        <AboutSection />
        <ContactForm />
    </>
  )
}

export default Home
