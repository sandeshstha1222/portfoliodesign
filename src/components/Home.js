import React from "react";
import UpGap from "./navbar/UpGap";
import Navbar from "./navbar/navbar";
import Header from "./header/header";
import Socials from "./header/Socials";
import About from "./about/about";
import Portfolio from "./portfolio/portfolio";
import Contact from "./contact/contact";
import "./Home.css";
import Projects from "./projects/projects";
import Footer from "./footer/footer";
const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <UpGap />
      <Navbar />
      <Socials />
      <Header />
      {/* <Portfolio /> */}
      <About />
      <Projects />

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
