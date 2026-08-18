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
      "End-to-end product strategy, data & analytics, AI & automation, and digital product services from Hatwartech.",
    path: "/services",
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end solutions that drive business impact."
        description="We combine product thinking, data intelligence, AI and technology to help you build, grow and transform."
      />

      <section className={styles.section}>
        <div className={`container ${styles.list}`}>
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              id={service.slug}
              className={styles.row}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <span className={styles.iconWrap}>
                <Icon name={service.icon} size={24} />
              </span>
              <div className={styles.content}>
                <h2 className={styles.title}>{service.title}</h2>
                <p className={styles.summary}>{service.summary}</p>
              </div>
              <ul className={styles.capabilities}>
                {service.capabilities.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={14} strokeWidth={2.4} />
                    {item}
                  </li>
                ))}
              </ul>
              <Icon name="arrowRight" size={18} strokeWidth={2} className={styles.rowArrow} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to build something impactful?"
        description="Let's discuss your goals and explore how we can help you turn ideas into measurable outcomes."
        ctaLabel="Start a Conversation"
        ctaTo="/contact"
      />
    </>
  );
}
