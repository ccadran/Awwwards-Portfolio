import { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
export default function index({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}) {
  const circle = useRef(null);
  const timeline = useRef(null);
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.4 },
        "exit"
      );
  }, []);
  const manageMouseEnter = () => {
    timeline.current.tweenFromTo("enter", "exit");
  };
  const manageMouseLeave = () => {
    timeline.current.play();
  };
  return (
    <div
      className={styles.roundedButton}
      style={{ overflow: "hidden" }}
      {...attributes}
      onMouseEnter={(e) => {
        manageMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        manageMouseLeave(e);
      }}
    >
      {children}
      <div
        ref={circle}
        className={styles.circle}
        style={{ backgroundColor }}
      ></div>
    </div>
  );
}
