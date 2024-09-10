import React from "react";
import styles from "./home.module.css";

const socials = [
  {
    href: "https://www.instagram.com/dovizs1/",
    icon: "fa-brands fa-instagram",
  },
  {
    href: "https://www.facebook.com/dovydas.in/",
    icon: "fa-brands fa-facebook",
  },
  {
    href: "https://github.com/dovink",
    icon: "fa-brands fa-github",
  },
  {
    href: "https://www.linkedin.com/in/dovydas-inkrata-22918923a/",
    icon: "fa-brands fa-linkedin",
  },
];

const Socials = () => {
  return (
    <div className={styles.home_socials}>
      {socials.map((social) => (
        <a
          key={social.href}
          href={social.href}
          className={styles.home_social_link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default Socials;
