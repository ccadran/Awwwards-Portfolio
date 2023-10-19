import Image from "next/image";
import styles from "./page.module.css";
import Landing from "../components/landing";
import Description from "../components/description";

export default function Home() {
  return (
    <main className={styles.main}>
      <Landing />
      <Description />
    </main>
  );
}
