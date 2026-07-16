'use client'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden">
        <section id="home">
          <Hero />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  )
}