import React from "react";
import "./header.css";
import { SiLinkedin, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";

const Socials = () => {
  return (
    <div className="Socials">
      <div className="Social-Links">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com">
          <SiLinkedin size={30} />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/sandeshstha1222"
        >
          <SiGithub size={30} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/sandesh.shrestha.357"
        >
          <SiFacebook size={30} />
        </a>
        <a
          target="_blank" //open in new tab
          rel="noreferrer" //not mandatory...added inorder to avoid some warnings.
          href="https://www.instagram.com/san_desh1222/"
        >
          <SiInstagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default Socials;
