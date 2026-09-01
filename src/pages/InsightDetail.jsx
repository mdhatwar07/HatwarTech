import { useState } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import { insights, insightTypeLabels } from "../data/insights";
import { insightContent } from "../data/insightContent";
import { insightSlides } from "../data/insightSlides";
import { InsightPresentation } from "../components/insights/InsightPresentation";
import { InsightPdf } from "../components/insights/InsightPdf";
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
  const [view, setView] = useState("article");

  useSEO({
    title: insight ? insight.title : "Insight not found",
    description: insight ? insight.excerpt : "This article could not be found.",
    path: `/insights/${slug}`,
  });

  if (!insight) {
    return <Navigate to="/insights" replace />;
  }

  const blocks = insightContent[slug] ?? [{ type: "p", text: insight.excerpt }];
  const slides = insightSlides[slug];
  const hasPresentation = Boolean(insight.pdf || slides);

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
          {hasPresentation && (
            <div className={styles.viewToggle} role="group" aria-label="Choose article view">
              <button
                type="button"
                className={view === "article" ? styles.viewActive : styles.viewButton}
                onClick={() => setView("article")}
              >
                Article
              </button>
              <button
                type="button"
                className={view === "presentation" ? styles.viewActive : styles.viewButton}
                onClick={() => setView("presentation")}
              >
                Presentation
              </button>
            </div>
          )}

          {view === "presentation" && hasPresentation ? (
            insight.pdf ? (
              <InsightPdf src={insight.pdf} title={insight.title} />
            ) : (
              <InsightPresentation slides={slides} />
            )
          ) : (
            blocks.map((block, i) => {
            const key = `${block.type}-${i}`;
            if (block.type === "heading") {
              return (
                <h2 key={key} className={styles.blockHeading}>
                  {block.text}
                </h2>
              );
            }
            if (block.type === "callout") {
              return (
                <p key={key} className={styles.callout}>
                  {block.text}
                </p>
              );
            }
            if (block.type === "list") {
              return (
                <div key={key} className={styles.list}>
                  {block.title && <h3 className={styles.listTitle}>{block.title}</h3>}
                  <ul>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            }
              return <p key={key}>{block.text}</p>;
            })
          )}
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
