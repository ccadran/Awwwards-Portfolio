"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";
import Nav from "./nav";
import { AnimatePresence } from "framer-motion";

export default function index() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.copyright}>@</div>
        <div className={styles.name}>
          <p className={styles.codeBy}>Code By</p>
          <p className={styles.clario}>Clario</p>
          <p className={styles.cadran}>Cadran</p>
        </div>
      </div>

      <div className={styles.nav}>
        <div className={styles.el}>
          <p>Work</p>
          <div className={styles.indicator}></div>
        </div>
        <div className={styles.el}>
          <p>About</p>
          <div className={styles.indicator}></div>
        </div>
        <div className={styles.el}>
          <p>Contact</p>
          <div className={styles.indicator}></div>
        </div>
      </div>
      <div className={styles.headerButtonContainer}>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
