import { PageHero } from "../components/ui/PageHero";
import { Icon } from "../components/ui/Icon";
import { CTASection } from "../components/ui/CTASection";
import { Reveal } from "../components/ui/Reveal";
import { services } from "../data/services";
import { useSEO } from "../lib/useSEO";
import styles from "./Services.module.css";

export default function Services() {
  useSEO({
    title: "Services",
    description:
      "Selected product & business, data & analytics, AI & automation and digital solutions work from HatwarTech.",
    path: "/services",
  });

  return (
    <>
      <PageHero
        eyebrow="How I Can Help"
        title="Selected product, data, AI and technology work."
        description="I work on a small number of problems at a time, combining product thinking, data and AI to help businesses build practical solutions."
      />

      <section className="section">
        <div className={`container ${styles.list}`}>
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              id={service.slug}
              className={`${styles.row} ${i % 2 === 1 ? styles.rowReverse : ""}`}
            >
              <div className={styles.iconCol}>
                <div className={styles.iconWrap}>
                  <Icon name={service.icon} size={30} />
                </div>
              </div>
              <div className={styles.content}>
                <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                <h2 className={styles.title}>{service.title}</h2>
                <p className={styles.summary}>{service.summary}</p>
                <ul className={styles.capabilities}>
                  {service.capabilities.map((item) => (
                    <li key={item}>
                      <Icon name="check" size={16} strokeWidth={2.4} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Have an idea, workflow or business challenge worth exploring?"
        description="Let's discuss whether I can help."
        ctaLabel="Let's Talk"
        ctaTo="/contact"
      />
    </>
  );
}
