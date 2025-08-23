import React from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Service from "./components/Service/Service.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Processes from "../components/Process/Processes.jsx";
// import Contact from "../components/Contact/Contact"
// import Faq from "../components/Faq/Faq"
import Footer from "../components/Footer/Footer";
// import Whatsup from "../components/Whatsup/Whatsup"
// import Gallery from "../components/Gallery/Gallerys"

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <Processes />

      <Testimonials />
      <Footer/>
    </>
  );
};

export default Home;
