import { Badge } from "./Badge";
import styles from "./SectionHeader.module.css";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
}) {
  return (
    <div className={`${styles.header} ${align === "center" ? styles.center : ""}`}>
      {eyebrow && <Badge onDark={onDark}>{eyebrow}</Badge>}
      <h2 className={onDark ? styles.titleOnDark : styles.title}>{title}</h2>
      {description && (
        <p className={onDark ? styles.descriptionOnDark : styles.description}>
          {description}
        </p>
      )}
    </div>
  );
}
