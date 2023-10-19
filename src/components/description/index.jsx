"use client";

import styles from "./style.module.scss";
import { motion, useInView } from "framer-motion";
import { slideUp, opacity } from "./anim";
import { useRef } from "react";

export default function index() {
  const container = useRef(null);
  const isInView = useInView(container);
  const phrases =
    "Je suis Clario Cadran, passionné par le développement web dans son ensemble et pour l’instant plus orienté sur le front-end.Je suis actuellement Étudiant en deuxième année du BUT MMI (Métiers du Multimédia et de l’Internet) à Bordeaux.";
  return (
    <div ref={container} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrases.split(" ").map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
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
          Dans ce portfolio vous allez pouvoir retrouver tous les projets que
          j’ai pu réaliser dans le cadre de mes études et à côté de celles-ci.
        </motion.p>
      </div>
    </div>
  );
}
