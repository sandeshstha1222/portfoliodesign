import React from "react";
import UpGap from "./navbar/UpGap";
import Navbar from "./navbar/navbar";
import Header from "./header/header";
import Socials from "./header/Socials";
import About from "./about/about";

const Home = () => {
  return (
    <div>
      <UpGap />
      <Navbar />
      <Socials />
      <Header />
      <About />
    </div>
  );
};

export default Home;
