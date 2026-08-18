import { Link } from "react-router-dom";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { SectionHeader } from "../components/ui/SectionHeader";
import { CTACard } from "../components/ui/CTACard";
import { HeroWave } from "../components/ui/HeroWave";
import { Reveal } from "../components/ui/Reveal";
import { ServiceCard } from "../components/cards/ServiceCard";
import { InsightCard } from "../components/cards/InsightCard";
import { services } from "../data/services";
import { insights } from "../data/insights";
import { useSEO } from "../lib/useSEO";
import styles from "./Home.module.css";

export default function Home() {
  useSEO({
    title: "Product, Data & AI Consulting",
    description:
      "Hatwartech helps businesses turn ideas, data and AI into practical digital products, intelligent solutions and measurable business outcomes.",
    path: "/",
  });

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <Badge onDark>Product • Data • AI • Technology</Badge>
            <h1 className={styles.heroTitle}>
              Build <span className={styles.highlight}>smarter</span> products.
              <br />
              Create <span className={styles.highlight}>measurable</span> impact.
            </h1>
            <p className={styles.heroSubtitle}>
              Hatwartech helps businesses turn ideas, data and AI into practical
              digital products, intelligent solutions and measurable business
              outcomes.
            </p>
            <div className={styles.heroActions}>
              <Button to="/work" variant="primary">
                Explore Our Work
              </Button>
              <Button to="/contact" variant="onDark" showArrow={false}>
                Start a Conversation
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
              eyebrow="What We Do"
              title="From idea to impact."
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
          <div className={styles.combinedRow}>
            <div className={styles.insightsCol}>
              <div className={styles.insightsHeader}>
                <div>
                  <Badge>Insights &amp; Perspectives</Badge>
                  <h2 className={styles.insightsTitle}>Ideas, research &amp; insights</h2>
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
                title="Have a problem worth solving?"
                description="Let's explore how product thinking, data and AI can turn it into measurable business impact."
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
