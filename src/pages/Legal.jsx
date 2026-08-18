import { PageHero } from "../components/ui/PageHero";
import { useSEO } from "../lib/useSEO";
import styles from "./Legal.module.css";

export function PrivacyPolicy() {
  useSEO({
    title: "Privacy Policy",
    description: "How Hatwartech handles information collected through this website.",
    path: "/privacy",
  });

  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="section">
        <div className={`container ${styles.body}`}>
          <p>
            This privacy policy is being finalized. In the meantime, if you have
            questions about how information submitted through this site is
            handled, please get in touch directly.
          </p>
        </div>
      </section>
    </>
  );
}

export function Terms() {
  useSEO({
    title: "Terms",
    description: "Terms of use for the Hatwartech website.",
    path: "/terms",
  });

  return (
    <>
      <PageHero eyebrow="Legal" title="Terms" />
      <section className="section">
        <div className={`container ${styles.body}`}>
          <p>
            These terms of use are being finalized. In the meantime, if you have
            questions about using this site, please get in touch directly.
          </p>
        </div>
      </section>
    </>
  );
}
