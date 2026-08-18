import { HeroWave } from "./HeroWave";
import { Badge } from "./Badge";
import styles from "./PageHero.module.css";

export function PageHero({ eyebrow, title, description, children }) {
  return (
    <section className={styles.hero}>
      <HeroWave className={styles.wave} />
      <div className={`container ${styles.inner}`}>
        {eyebrow && <Badge onDark>{eyebrow}</Badge>}
        <h1 className={styles.title}>{title}</h1>
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
    </section>
  );
}
