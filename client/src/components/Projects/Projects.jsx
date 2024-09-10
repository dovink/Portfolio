import React, { useState } from "react";
import "./Projects.css";
import { category, ProjectDetails } from "./ProjectDetails";
import CategoryFilter from "./CategoryFilter";

const Project = () => {
  const [projects, setProjects] = useState(ProjectDetails);

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">My Projects</h2>
      <div className="work__filters">
        <CategoryFilter setProjects={setProjects} />
      </div>

      <div className="work__container grid">
        {projects.map((elem) => {
          const { id, image, title, category, desc, href } = elem;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
                <span className="work__category">{category}</span>
                <h3 className="work__title">{title}</h3>
                <p className="work__desc">{desc}</p>
                <a href={href} target="_blank" className="work__button">
                  <i className="icon-link work__button-icon"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
