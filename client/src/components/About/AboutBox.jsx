import React from "react";

import "./About.css";

const ABOUT_ITEMS = [
  {
    title: "2",
    subtitle: "Project completed",
    icon: "about__icon icon-fire",
  },
  {
    title: "97",
    subtitle: "Cup of coffee",
    icon: "about__icon icon-cup",
  },
  {
    title: "100kg's",
    subtitle: "Bench PR",
    icon: "about__icon icon-emotsmile",
  },
];

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      {ABOUT_ITEMS.map((item) => (
        <div className="about__box" key={item.title}>
          <i className={item.icon}></i>
          <div>
            <h3 className="about__title">{item.title}</h3>
            <span className="about__subtitle"> {item.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutBox;
