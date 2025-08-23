import React from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Service from "./components/Service/Service.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Processes from "./components/Process/Processes.jsx";
import Contact from "./components/Contact/Contact.jsx"
import Faq from "./components/Faq/Faq.jsx"
import Footer from "./components/Footer/Footer.jsx";
import Whatsup from "./components/Whatsup/Whatsup.jsx"
import Gallery from "./components/Gallery/Gallerys.jsx"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Processes />
      <Contact />
      <Testimonials />
       <Faq />
      <Gallery/>
      <Whatsup />
      <Footer/>
    </>
  );
};

export default Home;
