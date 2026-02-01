import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Project from "./Project";
import Education from "./Education";
import Contact from "./Contact";

import TopScroll from "./TopScroll";
import ChatBot from "./ChatBot";


const Home = () => {
  return (
    <div className="scroll-smooth overflow-y-auto h-screen overflow-x-hidden bg-[#0f172b] scrollbar-hide md:snap-y md:snap-mandatory">
      <Navbar />
      <ChatBot />
      <TopScroll />

      {/* Main Content Sections */}
      <main>
        <section id="home" className="md:snap-center min-h-screen">
          <Hero />
        </section>

        <section id="about" className="md:snap-center min-h-screen">
          <About />
        </section>

        <section id="skills" className="md:snap-center min-h-screen">
          <Skills />
        </section>

        <section id="experience" className="md:snap-center min-h-screen">
          <Experience />
        </section>

        <section id="projects" className="md:snap-center min-h-screen">
          <Project />
        </section>

        <section id="education" className="md:snap-center min-h-screen">
          <Education />
        </section>

        <section id="contact" className="md:snap-center min-h-screen">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <section className="md:snap-center">
        <Footer />
      </section>
    </div>
  );
};

export default Home;