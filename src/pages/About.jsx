import { PageHero } from "../components/ui/PageHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { CTASection } from "../components/ui/CTASection";
import { Reveal } from "../components/ui/Reveal";
import { HeroWave } from "../components/ui/HeroWave";
import { Icon } from "../components/ui/Icon";
import { services } from "../data/services";
import { company } from "../data/company";
import { useSEO } from "../lib/useSEO";
import styles from "./About.module.css";

const principles = [
  { number: "01", title: "Business First", description: "We start with the problem, not the technology." },
  { number: "02", title: "Data Driven", description: "We use data to validate decisions and measure outcomes." },
  { number: "03", title: "Built to Deliver", description: "We focus on practical execution, not just strategy." },
];

const process = [
  { icon: "compass", title: "Discover", description: "Understand the problem and what success looks like." },
  { icon: "layers", title: "Define", description: "Translate discovery into a clear strategy and plan." },
  { icon: "spark", title: "Build", description: "Design and engineer with tight feedback loops." },
  { icon: "chart", title: "Deliver", description: "Ship, measure outcomes, and iterate." },
];

export default function About() {
  useSEO({
    title: "About",
    description:
      "Hatwartech is a product, data and AI consulting practice focused on turning ideas into measurable business impact.",
    path: "/about",
  });

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We are builders, thinkers and problem solvers."
        description={company.positioning}
      />

      <section className={styles.section}>
        <div className={`container ${styles.introGrid}`}>
          <Reveal>
            <SectionHeader eyebrow="What We Believe" title="Technology should create measurable value." />
            <p className={styles.beliefText}>
              We think technology is a means, not an end. Every engagement starts
              with a real business problem, not a technology in search of a use
              case — and it's judged by the outcome it produces, not the
              sophistication of what was built.
            </p>
          </Reveal>
          <Reveal className={styles.introVisual}>
            <HeroWave className={styles.introWave} />
          </Reveal>
        </div>
      </section>

      <section className={`${styles.section} section--alt`}>
        <div className="container">
          <Reveal>
            <SectionHeader
              align="center"
              title="Technology is only valuable when it solves a real problem."
            />
          </Reveal>
          <div className={styles.principlesGrid}>
            {principles.map((principle, i) => (
              <Reveal
                key={principle.number}
                className={styles.principle}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className={styles.stepNumber}>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Our Approach" title="How we work" align="center" />
          </Reveal>
          <div className={styles.processRow}>
            {process.map((step, i) => (
              <Reveal
                key={step.title}
                className={styles.processStep}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className={styles.processIcon}>
                  <Icon name={step.icon} size={22} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} section--alt`}>
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="Capabilities" title="What we bring to the table." />
          </Reveal>
          <div className={styles.capabilityGrid}>
            {services.map((service, i) => (
              <Reveal key={service.slug} className={styles.capabilityCard} style={{ transitionDelay: `${i * 80}ms` }}>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a problem worth solving?"
        description="Let's explore how product thinking, data and AI can turn it into measurable business impact."
        ctaLabel="Start a Conversation"
        ctaTo="/contact"
      />
    </>
  );
}
