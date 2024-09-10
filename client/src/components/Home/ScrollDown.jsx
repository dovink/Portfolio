import React from "react";
import styles from "./home.module.css";

const ScrollDown = () => {
  return (
    <div className={styles.scroll_down}>
      <a href="#game" className={styles.mouse_wrapper}>
        <span className={styles.home_scroll_name}>Scroll down</span>
        <span className={styles.mouse}>
          <span className={styles.wheel}></span>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;
