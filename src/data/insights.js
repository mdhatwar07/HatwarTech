export const insightCategories = [
  "All",
  "AI & Automation",
  "Product",
  "Data & Analytics",
  "Strategy",
  "Technology",
];

// Optional `pdf` field per insight: path to a PDF under /public/presentations
// (e.g. "/presentations/my-deck.pdf"). When set, the article page shows a
// "Presentation" tab that embeds the PDF directly — no slide data needed.

// Content type — separate from topic category. Supports future additions
// (blog, whitepaper, research, case-study, analysis) without new components.
export const insightTypeLabels = {
  article: "Article",
  blog: "Blog",
  whitepaper: "White Paper",
  research: "Research",
  "case-study": "Case Study",
  analysis: "Analysis",
  opinion: "Opinion",
};

export const insights = [
  {
    slug: "does-your-product-really-need-ai",
    category: "AI & Automation",
    type: "opinion",
    title: "Does Your Product Really Need AI?",
    excerpt:
      "Before reaching for a model, it's worth asking what problem you're actually solving. A practical look at when AI adds real value — and when simpler tools do the job better.",
    date: "2026-06-12",
    readingTime: "6 min read",
  },
  {
    slug: "framework-to-prioritize-ai-use-cases",
    category: "Strategy",
    type: "article",
    title: "A Simple Framework to Prioritize AI Use Cases",
    excerpt:
      "Most teams have more AI ideas than they can execute. Here's a lightweight framework for scoring use cases on impact, feasibility and data readiness.",
    date: "2026-05-28",
    readingTime: "7 min read",
  },
  {
    slug: "turning-data-into-decisions",
    category: "Data & Analytics",
    type: "article",
    title: "Turning Data Into Decisions, Not Just Dashboards",
    excerpt:
      "Dashboards are easy to build and easy to ignore. A look at what it actually takes to make data part of how decisions get made.",
    date: "2026-05-10",
    readingTime: "5 min read",
  },
  {
    slug: "product-strategy-before-roadmap",
    category: "Product",
    type: "opinion",
    title: "Why Product Strategy Should Come Before the Roadmap",
    excerpt:
      "Roadmaps are a planning tool, not a strategy. Getting the sequence right changes how teams prioritize and ship.",
    date: "2026-04-22",
    readingTime: "5 min read",
  },
];
