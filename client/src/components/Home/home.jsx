import React from "react";
import MyPhoto from "../../assets/Me.jpg";
import Socials from "./Socials";
import ScrollDown from "./ScrollDown";
import styles from "./home.module.css";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.intro}>
        <img src={MyPhoto} alt="Profile" className={styles.home_img} />
        <h1 className={styles.home_name}>Dovydas Inkrata</h1>
        <span className={styles.home_education}>
          I am an entry-level full-stack developer
        </span>
        <Socials />
        <ScrollDown />
      </div>
    </section>
  );
};
export default Home;
