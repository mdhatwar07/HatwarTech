import { Button } from "../components/ui/Button";
import { Badge } from "../components/ui/Badge";
import { useSEO } from "../lib/useSEO";
import styles from "./NotFound.module.css";

export default function NotFound() {
  useSEO({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist.",
    path: "/404",
  });

  return (
    <section className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <Badge>404</Badge>
        <h1>This page doesn&rsquo;t exist.</h1>
        <p>The page you&rsquo;re looking for may have been moved or removed.</p>
        <Button to="/" showArrow={false}>
          Back to Home
        </Button>
      </div>
    </section>
  );
}
