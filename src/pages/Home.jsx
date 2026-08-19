import { Link } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";
import { CTACard } from "../components/ui/CTACard";
import { HeroWave } from "../components/ui/HeroWave";
import { Reveal } from "../components/ui/Reveal";
import { ServiceCard } from "../components/cards/ServiceCard";
import { ProjectCard } from "../components/cards/ProjectCard";
import { InsightCard } from "../components/cards/InsightCard";
import { services } from "../data/services";
import { projects } from "../data/projects";
import { insights } from "../data/insights";
import { useSEO } from "../lib/useSEO";
import styles from "./Home.module.css";

export default function Home() {
  useSEO({
    title: "Product, Data & AI — Personal Technology Platform",
    description:
      "HatwarTech is my personal technology and entrepreneurial platform — where I build products, explore ideas, publish insights and take on selected product, data and AI work.",
    path: "/",
  });

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <Badge onDark>Product • Data • AI • Technology</Badge>
            <h1 className={styles.heroTitle}>
              I <span className={styles.highlight}>Build</span>,{" "}
              <span className={styles.highlight}>Explore</span> and{" "}
              <span className={styles.highlight}>Share Ideas</span> at the
              intersection of product, data and AI.
            </h1>
            <p className={styles.heroSubtitle}>
              HatwarTech is my personal technology and entrepreneurial
              platform — where I build products, explore ideas, publish
              insights and turn interesting problems into practical
              solutions.
            </p>
            <div className={styles.heroActions}>
              <Button to="/work" variant="primary">
                Explore My Work
              </Button>
              <Button to="/contact" variant="onDark">
                Let&rsquo;s Talk
              </Button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <HeroWave className={styles.heroWave} />
          </div>
        </div>
      </section>

      <section className={styles.homeSection}>
        <div className="container">
          <Reveal>
            <SectionHeader
              eyebrow="What I Do"
              title="Turning ideas and problems into practical solutions."
              align="center"
            />
          </Reveal>
          <div className={styles.serviceGrid}>
            {services.map((service, i) => (
              <Reveal key={service.slug} style={{ transitionDelay: `${i * 80}ms` }}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  summary={service.summary}
                  to={`/services#${service.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.homeSection} ${styles.homeSectionAlt}`}>
        <div className="container">
          <div className={styles.rowHeader}>
            <div>
              <Badge>What I&rsquo;m Building</Badge>
              <h2 className={styles.rowTitle}>Products, projects and experiments.</h2>
            </div>
            <Link to="/work" className={styles.viewAllLink}>
              View all work →
            </Link>
          </div>
          <div className={styles.buildingGrid}>
            {projects.slice(0, 3).map((project, i) => (
              <Reveal key={project.slug} style={{ transitionDelay: `${i * 80}ms` }}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.homeSection}>
        <div className="container">
          <div className={styles.combinedRow}>
            <div className={styles.insightsCol}>
              <div className={styles.rowHeader}>
                <div>
                  <Badge>Insights &amp; Perspectives</Badge>
                  <h2 className={styles.rowTitle}>Ideas, research and things I&rsquo;m learning.</h2>
                </div>
                <Link to="/insights" className={styles.viewAllLink}>
                  View all insights →
                </Link>
              </div>
              <div className={styles.insightGrid}>
                {insights.slice(0, 2).map((insight, i) => (
                  <Reveal key={insight.slug} style={{ transitionDelay: `${i * 80}ms` }}>
                    <InsightCard {...insight} layout="horizontal" />
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal className={styles.ctaCol}>
              <CTACard
                title="Have an idea or problem worth exploring?"
                description="I take on selected product, data, AI and technology opportunities where I can add meaningful value."
                ctaLabel="Let's Talk"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
