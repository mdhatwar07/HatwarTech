import { useMemo, useState } from "react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal } from "../components/ui/Reveal";
import { InsightCard } from "../components/cards/InsightCard";
import { insights, insightCategories } from "../data/insights";
import { useSEO } from "../lib/useSEO";
import styles from "./Insights.module.css";

export default function Insights() {
  useSEO({
    title: "Insights",
    description:
      "Perspectives on product strategy, data, AI, technology and building impactful solutions from Hatwartech.",
    path: "/insights",
  });

  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return insights.filter((insight) => {
      const matchesCategory =
        activeCategory === "All" || insight.category === activeCategory;
      const matchesQuery = insight.title
        .toLowerCase()
        .includes(query.trim().toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      <PageHero
        eyebrow="Insights & Perspectives"
        title="Ideas, research & insights"
        description="Perspectives on product strategy, data, AI, technology and building impactful solutions."
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.toolbar}>
            <div className={styles.filters} role="group" aria-label="Filter articles by category">
              {insightCategories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`${styles.filter} ${
                    activeCategory === category ? styles.filterActive : ""
                  }`}
                  aria-pressed={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <label className={styles.search}>
              <span className="visually-hidden">Search articles</span>
              <input
                type="search"
                placeholder="Search articles…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </label>
          </div>

          <div className={styles.grid}>
            {filtered.map((insight) => (
              <Reveal key={insight.slug}>
                <InsightCard {...insight} />
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className={styles.empty}>No articles match your search.</p>
          )}
        </div>
      </section>
    </>
  );
}
