import { Link } from "react-router-dom";
import { Icon } from "../ui/Icon";
import styles from "./ServiceCard.module.css";

export function ServiceCard({ icon, title, summary, to }) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.iconWrap}>
        <Icon name={icon} size={22} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.summary}>{summary}</p>
      <span className={styles.link} aria-hidden="true">
        <Icon name="arrowRight" size={17} strokeWidth={2} />
      </span>
    </Link>
  );
}
