import { Link } from "react-router-dom";
import { Icon } from "../ui/Icon";
import { insightTypeLabels } from "../../data/insights";
import styles from "./InsightCard.module.css";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

export function InsightCard({
  slug,
  category,
  type,
  title,
  excerpt,
  date,
  readingTime,
  layout = "vertical",
}) {
  const isCompact = layout === "horizontal";

  return (
    <Link
      to={`/insights/${slug}`}
      className={`${styles.card} ${isCompact ? styles.horizontal : ""}`}
    >
      <div className={styles.visual} aria-hidden="true" />
      <div className={styles.body}>
        {!isCompact && (
          <div className={styles.badgeRow}>
            <span className={styles.category}>{category}</span>
            {type && <span className={styles.typeTag}>{insightTypeLabels[type] ?? type}</span>}
          </div>
        )}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
        <div className={styles.meta}>
          <time dateTime={date}>{dateFormatter.format(new Date(date))}</time>
          <span aria-hidden="true">·</span>
          <span>{readingTime}</span>
        </div>
        {!isCompact && (
          <span className={styles.link}>
            View article <Icon name="arrowRight" size={15} strokeWidth={2.2} />
          </span>
        )}
      </div>
    </Link>
  );
}
