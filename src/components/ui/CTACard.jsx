import { Badge } from "./Badge";
import { Button } from "./Button";
import { Icon } from "./Icon";
import styles from "./CTACard.module.css";

export function CTACard({
  eyebrow = "Let's Work Together",
  title,
  description,
  ctaLabel = "Start a Conversation",
  ctaTo = "/contact",
}) {
  return (
    <div className={styles.card}>
      <Badge>{eyebrow}</Badge>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Button to={ctaTo} variant="primary">
        {ctaLabel}
      </Button>
      <span className={styles.decoration} aria-hidden="true">
        <Icon name="chatBubble" size={64} strokeWidth={1.4} />
      </span>
    </div>
  );
}
