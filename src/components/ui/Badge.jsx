import styles from "./Badge.module.css";

export function Badge({ children, onDark = false }) {
  return (
    <span className={`${styles.badge} ${onDark ? styles.onDark : ""}`}>
      {children}
    </span>
  );
}
