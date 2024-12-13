import "./projects.css";
import React from "react";
import { projectdata } from "../../data/projectdata";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Projects = () => {
  return (
    <div className="Projects">
      <p>PROJECTS</p>
      <div>
        <div className="ProjectContainer">
          {projectdata.map((projects) => (
            <article className="ProjectBox">
              <div>
                <img src={projects.image} className="ProjectImage" />
              </div>
              <div className="ProjectContent">{projects.projectTitle}</div>
              <div className="ProjectBoxCTA">
                <a
                  href={projects.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
