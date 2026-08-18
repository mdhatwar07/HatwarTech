import { Button } from "./Button";
import { Icon } from "./Icon";
import styles from "./CTASection.module.css";

export function CTASection({
  title,
  description,
  ctaLabel = "Start a Conversation",
  ctaTo = "/contact",
  compact = false,
}) {
  if (compact) {
    return (
      <section className={styles.compactWrap}>
        <div className={`container ${styles.compactPanel}`}>
          <div className={styles.compactText}>
            <span className={styles.compactIcon}>
              <Icon name="rocket" size={20} />
            </span>
            <div>
              <h3 className={styles.compactTitle}>{title}</h3>
              {description && <p className={styles.compactDescription}>{description}</p>}
            </div>
          </div>
          <Button to={ctaTo} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.panel}>
          <span className={styles.iconWrap}>
            <Icon name="rocket" size={26} />
          </span>
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
          <Button to={ctaTo} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
