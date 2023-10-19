import Image from "next/image";
import styles from "./page.module.css";
import Landing from "../components/landing";
import Description from "../components/description";
import Projects from "../components/projects";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <Description />
      <Projects />
    </main>
  );
}
