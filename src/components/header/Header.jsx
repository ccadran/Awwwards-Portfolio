"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Nav from "./Header";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Magnetic from "../common/magnetic/Magnetic";
import Button from "../common/button/Button";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const burger = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(burger.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(burger.current, {
            scale: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  });

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
        <Magnetic>
          <div className={styles.el}>
            <p>Work</p>
            <div className={styles.indicator}></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className={styles.el}>
            <p>About</p>
            <div className={styles.indicator}></div>
          </div>
        </Magnetic>
        <Magnetic>
          <div className={styles.el}>
            <p>Contact</p>
            <div className={styles.indicator}></div>
          </div>
        </Magnetic>
      </div>
      <div ref={burger} className={styles.headerButtonContainer}>
        <Button
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
        </Button>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
