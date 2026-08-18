import { Icon } from "../ui/Icon";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ category, type, title, description, tags }) {
  return (
    <article className={styles.card}>
      <div className={styles.visual} aria-hidden="true">
        <span className={styles.category}>{category}</span>
      </div>
      <div className={styles.body}>
        <span className={styles.type}>{type}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {tags?.length > 0 && (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        <span className={styles.link}>
          View Case Study <Icon name="arrowRight" size={15} strokeWidth={2.2} />
        </span>
      </div>
    </article>
  );
}
