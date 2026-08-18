// All entries below are personal experiments, prototypes and research — not
// client engagements — until real products or case studies are ready to add.
//
// Schema (fields beyond the required ones are optional, for future entries):
//   slug          string   required, unique
//   category      string   required, one of projectCategories (excl. "All")
//   status        string   required, one of: "Live" | "In Development" |
//                          "Prototype" | "Experiment" | "Research"
//   title         string   required
//   description   string   required, short summary
//   tags          string[] required
//   technology    string[] optional — stack/tools used
//   problem       string   optional — the problem being explored
//   solution      string   optional — the approach taken
//   features      string[] optional
//   link          string   optional — live URL
//   demo          string   optional — demo URL
//   github        string   optional — repo URL
//   caseStudy     string   optional — slug of a matching insight write-up
export const projectCategories = [
  "All",
  "Products",
  "Projects",
  "Experiments",
  "Case Studies",
  "Research",
];

export const projects = [
  {
    slug: "ai-product-intelligence",
    category: "Projects",
    status: "Research",
    title: "AI Product Intelligence",
    description:
      "An exploration into using AI to surface product insights from unstructured customer feedback.",
    tags: ["AI Strategy", "Generative AI"],
  },
  {
    slug: "data-intelligence-dashboard",
    category: "Experiments",
    status: "Prototype",
    title: "Data Intelligence Dashboard",
    description:
      "A prototype dashboard concept for turning fragmented business data into a single decision-making view.",
    tags: ["Business Intelligence", "KPI Frameworks"],
  },
  {
    slug: "saas-product-concept",
    category: "Products",
    status: "In Development",
    title: "Digital Product / SaaS Concept",
    description:
      "An end-to-end product concept exploring how a lean SaaS MVP could be designed and engineered.",
    tags: ["Product Design", "MVP Development"],
  },
  {
    slug: "product-strategy-roadmap",
    category: "Projects",
    status: "Research",
    title: "Product Strategy & Roadmap",
    description:
      "A structured framework for translating early-stage business goals into a phased product roadmap.",
    tags: ["Product Strategy", "Roadmaps"],
  },
  {
    slug: "workflow-automation",
    category: "Research",
    status: "Prototype",
    title: "Workflow Automation",
    description:
      "A prototype exploring intelligent automation of repetitive, high-volume operational workflows.",
    tags: ["Automation", "AI Workflows"],
  },
  {
    slug: "advanced-analytics-solution",
    category: "Experiments",
    status: "Research",
    title: "Advanced Analytics Solution",
    description:
      "A research project into applying advanced analytics techniques to support better business decisions.",
    tags: ["Advanced Analytics", "Decision Systems"],
  },
];
