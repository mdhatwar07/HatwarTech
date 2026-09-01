import { Link } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { CTACard } from "../components/ui/CTACard";
import { HeroWave } from "../components/ui/HeroWave";
import { Reveal } from "../components/ui/Reveal";
import { ProjectCard } from "../components/cards/ProjectCard";
import { InsightCard } from "../components/cards/InsightCard";
import { projects } from "../data/projects";
import { insights } from "../data/insights";
import { useSEO } from "../lib/useSEO";
import styles from "./Home.module.css";

export default function Home() {
  useSEO({
    title: "Data, Technology, Products & AI — HatwarTech",
    description:
      "HatwarTech is a founder-led technology platform where I build products, explore emerging technologies, share insights and document what I learn along the way.",
    path: "/",
  });

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <Badge onDark>Data • Technology • Products • AI</Badge>
            <h1 className={styles.heroTitle}>
              Building at the intersection of{" "}
              <span className={styles.highlight}>Data</span>,{" "}
              <span className={styles.highlight}>Technology</span>,{" "}
              <span className={styles.highlight}>Products</span> &amp;{" "}
              <span className={styles.highlight}>AI</span>.
            </h1>
            <p className={styles.heroSubtitle}>
              HatwarTech is a founder-led technology platform where I build
              products, explore emerging technologies, share insights and
              document what I learn along the way.
            </p>
            <div className={styles.heroActions}>
              <Button to="/work" variant="primary">
                Explore Projects
              </Button>
              <Button to="/contact" variant="onDark">
                Contact
              </Button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <HeroWave className={styles.heroWave} />
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
              View all projects →
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
                eyebrow="Get in Touch"
                title="Have an idea or problem worth exploring?"
                description="I take on selected product, data, AI and technology opportunities where I can add meaningful value."
                ctaLabel="Contact"
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
