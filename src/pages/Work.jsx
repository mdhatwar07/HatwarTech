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
    title: "Work & Experiments",
    description:
      "Products, prototypes, experiments and research from HatwarTech, exploring AI, data and digital products.",
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
        eyebrow="Work & Experiments"
        title="Things I'm building, exploring and studying."
        description="A collection of products, projects, prototypes, experiments, research and case studies."
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
        title="Have an idea worth exploring?"
        description="Let's discuss whether I can help you solve it."
        ctaLabel="Let's Talk"
        ctaTo="/contact"
      />
    </>
  );
}
