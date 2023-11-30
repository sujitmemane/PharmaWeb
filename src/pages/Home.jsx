import React from "react";
import Hero from "../components/Hero";
import Statistic from "../components/Stats";
import Services from "../components/Services";
import Contact from "../components/Contact";
import CTA from "../components/CTA";
import Team from "../components/Team";
import Testinomials from "../components/Testinomials";
import MainServices from "../components/MainServices";
import Footer from "../components/Footer";
import Info from "../components/Info";
import About from "../components/About"
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Statistic />
      <About />
      <Contact />

      <CTA />
      <MainServices />
      <Team />
      <Testinomials />
      <Footer />

      <Info />
    </div>
  );
};

export default Home;
