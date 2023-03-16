import React from "react";
import "./header.css";
import photo from "../../assests/profile.png";
import { TypeAnimation } from "react-type-animation";
import Cv from "./Cv";
import Socials from "./Socials";
const Header = () => {
  return (
    <div className="Header">
      <div>
        <span>Hello I am </span>
        <span>SANDESH SHRESTHA</span>
        <TypeAnimation
          sequence={["Student", 2000, "Engineer", 2000, "Developer", 2000]}
          speed={50}
          repeat={Infinity}
          style={{
            color: "#4db5ff",
            textTransform: "uppercase",
          }}
        />
        <Cv />
        <Socials />
      </div>
      <div className="Image">
        {/* <img style={{ width: "20em" }} src={photo} alt="SANDESH" /> */}
      </div>
    </div>
  );
};
// #ba08c4
export default Header;
