"use client";

import styles from "./style.module.scss";
import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./anim";
import { useRef } from "react";
import Button from "../common/button/Button";

export default function index() {
  const container = useRef(null);
  const isInView = useInView(container);
  const phrases =
    "I'm Clario Cadran, a freelance photographer. Photography has always been a passion of mine since I was a kid, but it was in 2020 that I decided to get more serious about it.";
  return (
    <div ref={container} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrases.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  custom={index}
                  variants={slideUp}
                  initial="initial"
                  animate={isInView ? "open" : "closed"}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p
          variants={opacity}
          initial="initial"
          animate={isInView ? "open" : "closed"}
        >
          In this portfolio, you'll find some of the photographs I've taken on
          various projects.
        </motion.p>
        <div data-scroll data-scroll-speed={0.1}>
          <Button className={styles.button}>
            <p>About Me</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
