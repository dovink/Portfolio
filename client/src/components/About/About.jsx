import React from "react";
import "./About.css";
import AboutBox from "./AboutBox";
import MyPhoto from "../../assets/Me.jpg";
import { skills } from "./Programming-skills";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={MyPhoto} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am an enthusiastic beginner programmer working towards higher
              education at Kaunas University of Technology.
            </p>
            <p className="about__description">
              My personal characteristics: diligence and ability to plan my time
              efficiently in order to achieve maximum work result. I am always
              trying to improve my knowledge in this field and find
              opportunities to apply it in practice.
            </p>
            <a
              href="https://drive.google.com/file/d/1C1YIPAWLF7KujXreQTWU6Z6y3NY7fEgX/view?usp=sharing"
              className="btn"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download CV
            </a>
          </div>
          <div className="about_skills grid">
            {skills.map((skill) => (
              <div className="skills__data" key={skill.name}>
                <div className="skills__titles">
                  <h3 className="skills__name"> {skill.name}</h3>
                  <span className="skills__number">{skill.procentage}</span>
                </div>
                <div className="skills__bar">
                  <span
                    className={`skills__percentage ${skill.name.toLocaleLowerCase()}`}
                  ></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
