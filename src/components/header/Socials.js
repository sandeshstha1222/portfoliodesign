import React from "react";
import "./header.css";
import { SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";

const Socials = () => {
  return (
    <div className="Socials">
      <div className="Social-Links">
        <a>
          <SiLinkedin size={30} />
        </a>

        <a>
          <SiGithub size={30} />
        </a>
        <a>
          <SiFacebook size={30} />
        </a>
        <a>
          <SiInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
