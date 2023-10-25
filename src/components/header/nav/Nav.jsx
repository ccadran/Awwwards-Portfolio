import styles from "./style.module.scss";
import Link from "./Link";
import Curve from "./Curve";
import { motion } from "framer-motion";
import { menuSlide } from "../anim";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/",
  },
  {
    title: "About",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];
export default function Nav() {
  return (
    <motion.div
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <Link data={{ ...item, index }} />;
          })}
        </div>
        <div className={styles.footer}>
          <a>Awwwards</a>
          <a>Instagram</a>
          <a>Dribble</a>
          <a>Linkedin</a>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
