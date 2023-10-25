"use client";

import React, { useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "BMW.jpg",
  },
  {
    color: "#d6d7dc",
    src: "chabandelmas.jpg",
  },
  {
    color: "#e3e3e3",
    src: "Monoprix.jpg",
  },
  {
    color: "#21242b",
    src: "Randy2.jpg",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "nice2.jpg",
  },
  {
    color: "#e5e0e1",
    src: "mercedes.jpg",
  },
  {
    color: "#d7d4cf",
    src: "bacalan.jpg",
  },
  {
    color: "#e1dad6",
    src: "nice3.jpg",
  },
];

export default function SlidingImage() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {" "}
        {slider1.map((project, index) => {
          return (
            <div
              key={`sl1_${index}`}
              style={{ backgroundColor: project.color }}
              className={styles.project}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  src={`/images/clario/${project.src}`}
                  alt="image"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {" "}
        {slider2.map((project, index) => {
          return (
            <div
              key={`sl1_${index}`}
              style={{ backgroundColor: project.color }}
              className={styles.project}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  src={`/images/clario/${project.src}`}
                  alt="image"
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
