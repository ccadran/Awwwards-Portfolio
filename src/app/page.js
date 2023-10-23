"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Landing from "../components/landing";
import Description from "../components/description";
import Projects from "../components/projects";
import SlidingImage from "../components/slidingImage";
import Footer from "../components/footer";
import Preloader from "../components/preloader";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
      }, 2000);
    })();
  }, []);
  return (
    <main className={styles.main}>
      {isLoading && <Preloader />}
      <Landing />
      <Description />
      <Projects />
      <SlidingImage />
      <Footer />
    </main>
  );
}
