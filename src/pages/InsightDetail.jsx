import { Navigate, useParams, Link } from "react-router-dom";
import { insights, insightTypeLabels } from "../data/insights";
import { insightContent } from "../data/insightContent";
import { CTASection } from "../components/ui/CTASection";
import { Badge } from "../components/ui/Badge";
import { useSEO } from "../lib/useSEO";
import styles from "./InsightDetail.module.css";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export default function InsightDetail() {
  const { slug } = useParams();
  const insight = insights.find((item) => item.slug === slug);

  useSEO({
    title: insight ? insight.title : "Insight not found",
    description: insight ? insight.excerpt : "This article could not be found.",
    path: `/insights/${slug}`,
  });

  if (!insight) {
    return <Navigate to="/insights" replace />;
  }

  const paragraphs = insightContent[slug] ?? [insight.excerpt];

  return (
    <>
      <article>
        <header className={styles.hero}>
          <div className={`container ${styles.heroInner}`}>
            <div className={styles.badgeRow}>
              <Badge onDark>{insight.category}</Badge>
              {insight.type && (
                <span className={styles.typeTag}>{insightTypeLabels[insight.type] ?? insight.type}</span>
              )}
            </div>
            <h1 className={styles.title}>{insight.title}</h1>
            <div className={styles.meta}>
              <time dateTime={insight.date}>{dateFormatter.format(new Date(insight.date))}</time>
              <span aria-hidden="true">·</span>
              <span>{insight.readingTime}</span>
            </div>
          </div>
        </header>

        <div className={`container ${styles.body}`}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <Link to="/insights" className={styles.back}>
            ← Back to all insights
          </Link>
        </div>
      </article>

      <CTASection
        title="Have an idea or problem worth exploring?"
        description="Let's discuss whether I can help — with the thinking, the build, or both."
        ctaLabel="Let's Talk"
        ctaTo="/contact"
      />
    </>
  );
}
