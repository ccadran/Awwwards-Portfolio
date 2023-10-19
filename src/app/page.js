"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Landing from "../components/landing";
import Description from "../components/description";
import Projects from "../components/projects";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className={styles.main}>
      <Landing />
      <Description />
      <Projects />
    </main>
  );
}
