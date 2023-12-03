import "./projects.css";
import React from "react";
import { projectdata } from "../../data/projectdata";

const Projects = () => {
  return (
    <div>
      PROJECTS
      {projectdata.map((projects) => (
        <div>{projects.projectTitle}</div>
      ))}
    </div>
  );
};

export default Projects;
