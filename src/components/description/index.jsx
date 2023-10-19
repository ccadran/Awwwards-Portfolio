import styles from "./style.module.scss";

export default function index() {
  const phrases =
    "Je suis Clario Cadran, passionné par le développement web dans son ensemble et pour l’instant plus orienté sur le front-end.Je suis actuellement Étudiant en deuxième année du BUT MMI (Métiers du Multimédia et de l’Internet) à Bordeaux.";
  return (
    <div className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrases.split(" ").map((word, index) => {
            return (
              <span className={styles.mask}>
                <span>{word}</span>
              </span>
            );
          })}
        </p>
        <p>
          Dans ce portfolio vous allez pouvoir retrouver tous les projets que
          j’ai pu réaliser dans le cadre de mes études et à côté de celles-ci.
        </p>
      </div>
    </div>
  );
}
