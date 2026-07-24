import React from "react";
import AboutMe from "./componenst/about/AboutMe";
import CtaBanner from "./componenst/ctaBanner/CtaBanner";
import Footer from "./componenst/footer/Footer";
import HeroSection from "./componenst/hero/HeroPage";
import Navbar from "./componenst/navBar/NavBarPage";
import SelectedWorks from "./componenst/selectWork/SelectedWorks";
import ServicesSection from "./componenst/services/ServicesSection";
import SkillsSection from "./componenst/skills/SkillsSection";

const App = () => {
  return (
    <>
      <Navbar />

      <section id="home">
        <HeroSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <SelectedWorks />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="contact">
        <CtaBanner />
      </section>

      <Footer />
    </>
  );
};

export default App;