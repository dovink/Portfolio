import React, { useState } from "react";
import { category, ProjectDetails } from "./ProjectDetails";
import "./Projects.css";

const CategoryFilter = ({ setProjects }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = (projectCategory) => {
    const updatedProjects = ProjectDetails.filter((curProject) => {
      return curProject.category === projectCategory;
    });
    setProjects(updatedProjects);
  };

  const handleCategoryClick = (projectCategory) => {
    setActiveCategory(projectCategory);
    if (projectCategory === "All") {
      setProjects(ProjectDetails);
    } else {
      filteredProjects(projectCategory);
    }
  };

  return (
    <>
      <span
        className={`work__item ${activeCategory === "All" ? "active" : ""}`}
        onClick={() => handleCategoryClick("All")}
      >
        All
      </span>
      {Object.values(category).map((item) => (
        <span
          key={item}
          className={`work__item ${activeCategory === item ? "active" : ""}`}
          onClick={() => handleCategoryClick(item)}
        >
          {item}
        </span>
      ))}
    </>
  );
};

export default CategoryFilter;
