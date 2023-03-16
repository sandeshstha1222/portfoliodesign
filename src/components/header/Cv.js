import React from "react";
import cv from "../../assests/CV.pdf";
import "./header.css";
const Cv = () => {
  return (
    <div className="CV">
      <a href={cv} download className="btn">
        Download CV
      </a>
      <a href="#" className="btn2">
        Let's Talk
      </a>
    </div>
  );
};

export default Cv;
