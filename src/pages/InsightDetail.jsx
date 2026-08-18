import { Navigate, useParams, Link } from "react-router-dom";
import { insights } from "../data/insights";
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
            <Badge onDark>{insight.category}</Badge>
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
        title="Have a problem worth solving?"
        description="Let's explore how product thinking, data and AI can turn it into measurable business impact."
        ctaLabel="Start a Conversation"
        ctaTo="/contact"
      />
    </>
  );
}
