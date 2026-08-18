import { useMemo, useState } from "react";
import { PageHero } from "../components/ui/PageHero";
import { CTASection } from "../components/ui/CTASection";
import { Reveal } from "../components/ui/Reveal";
import { ProjectCard } from "../components/cards/ProjectCard";
import { projects, projectCategories } from "../data/projects";
import { useSEO } from "../lib/useSEO";
import styles from "./Work.module.css";

export default function Work() {
  useSEO({
    title: "Work",
    description:
      "Internal projects, research and prototypes from Hatwartech exploring AI, data, digital products and strategy.",
    path: "/work",
  });

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  );

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Selected projects that solve real problems."
        description="A collection of internal projects and prototypes exploring how product thinking, data and AI translate into practical solutions."
      />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.filters} role="group" aria-label="Filter projects by category">
            {projectCategories.map((category) => (
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

          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <Reveal key={project.slug}>
                <ProjectCard {...project} />
              </Reveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className={styles.empty}>No projects in this category yet.</p>
          )}
        </div>
      </section>

      <CTASection
        compact
        title="Want to achieve similar results?"
        description="Let's discuss how we can help you solve your biggest challenges."
        ctaLabel="Let's Talk"
        ctaTo="/contact"
      />
    </>
  );
}
