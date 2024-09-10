import React, { useState } from "react";
import Logo from "../../assets/logo.svg";
import styles from "./navbar.module.css";
import { sections } from "./navbar-items";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <aside
        className={
          toggle
            ? `${styles.aside + " " + styles.show_menu}`
            : `${styles.aside}`
        }
      >
        <a href="#home" className={styles.nav_logo}>
          <img className={styles.nav_img} src={Logo} alt="" />
        </a>
        <nav className={styles.nav}>
          <div className={styles.nav_menu}>
            <ul className={styles.nav_list}>
              {sections.map((section) => (
                <li className={styles.nav_item} key={section.href}>
                  <a href={section.href} className={styles.nav_link}>
                    <i className={section.icon}></i>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className={styles.nav_footer}>
          <span className={styles.copyright}>&copy; 2024-2025.</span>
        </div>
      </aside>

      <div
        className={
          toggle
            ? `${styles.nav__toggle + " " + styles.nav__toggle_open}`
            : `${styles.nav__toggle}`
        }
        onClick={() => setToggle(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Navbar;
