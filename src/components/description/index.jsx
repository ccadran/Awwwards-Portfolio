"use client";

import styles from "./style.module.scss";
import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./anim";
import { useRef } from "react";
import Button from "../common/button";

export default function index() {
  const container = useRef(null);
  const isInView = useInView(container);
  const phrases =
    "Je suis Clario Cadran, un photographe freelance. Depuis que je suis tout petit, la photographie a toujours été une passion, mais c'est à partir de 2020 que j'ai décidé de m'y investir plus sérieusement.";
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
          Dans ce portfolio, vous allez pouvoir retrouver certaines des photos
          que j’ai pu réaliser dans le cadre de différents projets.
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
