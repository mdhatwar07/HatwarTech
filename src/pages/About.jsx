import { PageHero } from "../components/ui/PageHero";
import { SectionHeader } from "../components/ui/SectionHeader";
import { CTASection } from "../components/ui/CTASection";
import { Reveal } from "../components/ui/Reveal";
import { HeroWave } from "../components/ui/HeroWave";
import { Icon } from "../components/ui/Icon";
import { company } from "../data/company";
import { useSEO } from "../lib/useSEO";
import styles from "./About.module.css";

const buildingAreas = [
  {
    icon: "layers",
    title: "Products",
    description: "Digital products and tools I'm developing.",
  },
  {
    icon: "spark",
    title: "Experiments",
    description: "Ideas, prototypes and technologies I'm exploring.",
  },
  {
    icon: "chart",
    title: "Research",
    description: "White papers, analysis and deeper explorations of technology and business topics.",
  },
  {
    icon: "compass",
    title: "Solutions",
    description: "Selected commercial consulting, advisory and technology work.",
  },
];

const process = [
  { icon: "compass", title: "Understand", description: "Start with the problem and context." },
  { icon: "spark", title: "Explore", description: "Identify opportunities and possible approaches." },
  { icon: "layers", title: "Build", description: "Turn ideas into practical solutions." },
  { icon: "chart", title: "Learn", description: "Measure, iterate and improve." },
];

const focusAreas = [
  "Product",
  "Business Analysis",
  "Data & Analytics",
  "AI & Automation",
  "Product Strategy",
  "Digital Products",
];

export default function About() {
  useSEO({
    title: "About",
    description:
      "Mayur Hatwar is a Technical Product Manager and product builder with an engineering foundation from NITK and an MBA from IIM Lucknow, working at the intersection of product, data and AI.",
    path: "/about",
  });

  return (
    <>
      <PageHero
        eyebrow="About Me"
        title="Mayur Hatwar"
        description="Product and technology professional exploring the intersection of product, data, AI and technology."
      />

      <section className={styles.section}>
        <div className={`container ${styles.introGrid}`}>
          <Reveal className={styles.photoWrap}>
            <img
              className={styles.photo}
              src={company.founder.photo}
              alt={company.founder.name}
              loading="lazy"
            />
          </Reveal>
          <Reveal className={styles.introCopy}>
            <span className={styles.founderRole}>{company.founder.role}</span>
            <h2 className={styles.introTitle}>
              Building at the intersection of product, data &amp; technology.
            </h2>
            <p className={styles.beliefText}>
              I&rsquo;m a Technical Product Manager and product builder with
              an engineering foundation from NITK and an MBA from IIM
              Lucknow.
            </p>
            <p className={styles.beliefText}>
              My career has evolved from analytics and data-driven problem
              solving into product management — working across healthcare,
              pharmaceuticals and consumer businesses to turn complex
              problems into products, insights and measurable outcomes.
            </p>
            <p className={styles.beliefText}>
              HatwarTech is where I bring those interests together: a space
              to build products, explore emerging technologies, share
              research and turn ideas into practical solutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={`${styles.section} section--alt`}>
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="My Journey" title="From data to products." />
            <p className={styles.beliefText}>
              My professional journey has taken me across{" "}
              <strong>analytics, business strategy, technology and product management</strong>.
            </p>
            <p className={styles.beliefText}>
              I started with an engineering foundation, developed my
              analytical perspective through data and business problems, and
              later moved into product thinking — connecting customer needs,
              technology, data and business outcomes.
            </p>
            <p className={styles.beliefText}>
              Along the way, I&rsquo;ve worked on product strategy, customer
              experiences, analytics, experimentation, personalization, AI
              and digital solutions.
            </p>
            <p className={styles.beliefText}>
              Today, I&rsquo;m particularly interested in the space where{" "}
              <strong>product thinking meets AI, data and emerging technology</strong> —
              understanding problems, finding opportunities and building
              solutions that create real value.
            </p>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.whyGrid}`}>
          <Reveal>
            <SectionHeader
              eyebrow="Why HatwarTech?"
              title="More than a resume. More than a portfolio."
            />
            <p className={styles.beliefText}>
              I wanted to create a space that goes beyond listing what
              I&rsquo;ve done.
            </p>
            <p className={styles.beliefText}>
              HatwarTech is a place to <strong>think, build and share</strong> —
              from product experiments and data-driven research to AI
              explorations, case studies, frameworks and digital products.
            </p>
            <ul className={styles.whyList}>
              <li>Some ideas will become experiments.</li>
              <li>Some experiments will become products.</li>
              <li>Some will simply become things worth sharing.</li>
            </ul>
            <p className={styles.beliefText}>
              The goal is simple:{" "}
              <strong>
                turn ideas into insights, insights into products, and
                products into impact.
              </strong>
            </p>
            <p className={styles.whyTagline}>Ideas. Intelligence. Impact.</p>
          </Reveal>
          <Reveal className={styles.introVisual}>
            <HeroWave className={styles.introWave} />
          </Reveal>
        </div>
      </section>

      <section className={`${styles.section} section--alt`}>
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="What I'm Building" title="Four areas I'm working across." align="center" />
          </Reveal>
          <div className={styles.buildingGrid}>
            {buildingAreas.map((area, i) => (
              <Reveal key={area.title} className={styles.buildingCard} style={{ transitionDelay: `${i * 80}ms` }}>
                <span className={styles.buildingIcon}>
                  <Icon name={area.icon} size={20} />
                </span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Reveal>
            <SectionHeader eyebrow="My Approach" title="How I work" align="center" />
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
            <SectionHeader eyebrow="What I Work On" title="Areas of focus." />
            <ul className={styles.focusList}>
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <Reveal className={styles.independenceCard}>
            <h2 className={styles.independenceTitle}>Professional Independence</h2>
            <p>
              HatwarTech is an independent personal and entrepreneurial
              initiative that I develop alongside my professional
              commitments.
            </p>
            <p>
              I do not undertake projects, advisory engagements or other
              commercial activities that could create an actual or potential
              conflict of interest with my professional responsibilities.
            </p>
            <p>
              I maintain strict confidentiality boundaries and do not
              discuss, disclose, seek or use confidential, proprietary or
              non-public information relating to my employer, its clients,
              products, processes or business activities.
            </p>
            <p>
              Commercial opportunities are considered selectively based on
              relevance, scope, availability and potential conflicts of
              interest.
            </p>
            <p className={styles.independenceNote}>
              If you&rsquo;re considering working with HatwarTech, please
              share only the high-level nature of the opportunity initially.
              I can determine whether the engagement is appropriate before
              any confidential or sensitive information is exchanged.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Have an idea worth exploring?"
        description="I take on selected product, data, AI and technology opportunities where I can add meaningful value."
        ctaLabel="Let's Talk"
        ctaTo="/contact"
      />
    </>
  );
}
