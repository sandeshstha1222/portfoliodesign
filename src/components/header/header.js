import React from "react";
import "./header.css";
import photo from "../../assests/profile.png";
import { TypeAnimation } from "react-type-animation";
import Animation from "./Animation/index";
import Cv from "./Cv";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-Content">
        <div>
          <span> HELLO</span>
          <p
            style={{
              display: "flex",
              gap: "1em",
              alignItems: "end",
              // justifyContent: "center",
            }}
          >
            <p style={{ margin: "0 0 10px 2.5em" }}>I'm a</p>
            <TypeAnimation
              sequence={[
                "Sandesh",
                2000,
                " Student",
                2000,
                " Engineer",
                2000,
                " Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{
                color: "#4db5ff",
                textTransform: "uppercase",
                fontSize: "2em",
                alignItems: "end",
              }}
            />
          </p>

          <Cv />
        </div>
        <div className="Image">
          <img
            className="Profile-Image"
            style={{ width: "20em" }}
            src={photo}
            alt="SANDESH"
          />
          <Animation className="animation" />
        </div>
      </div>
    </div>
  );
};
// #ba08c4
export default Header;
