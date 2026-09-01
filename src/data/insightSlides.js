// Presentation-view slide decks for select Insights articles, keyed by slug.
// Each slide has a "layout" that InsightPresentation.jsx knows how to render:
//   title    — big statement + supporting body text
//   columns  — 2-4 icon cards side by side (optionally with a verdict line)
//   matrix   — a 2x2 impact/effort style grid
//   stats    — a row of labeled stat call-outs (optionally with a verdict line)
//   table    — a simple headers + rows table
export const insightSlides = {
  "does-your-product-really-need-ai": [
    {
      layout: "title",
      kicker: "AI Strategy",
      icon: "spark",
      title: "Does Your Product Really Need AI?",
      body: "Investors ask about your “AI angle.” Competitors add “AI-powered” features every month. This is for founders and product leaders who want to be ambitious about AI, but honest about ROI.",
    },
    {
      layout: "columns",
      title: "The Real Problem: AI as a Checkbox",
      body: "Your users don't care if it's AI. They care if it helps them win. Simple beats complex when it works better.",
      columns: [
        { icon: "database", title: "Good data?", text: "Enough signal, labels, and rights to use it." },
        { icon: "spark", title: "Better than simpler?", text: "Users should feel the difference if AI disappears." },
        { icon: "star", title: "Truly differentiating?", text: "Hard to copy because it's yours." },
      ],
    },
    {
      layout: "columns",
      title: "Question 1: Do You Have Enough Good Data?",
      columns: [
        {
          icon: "check",
          title: "When AI usually makes sense",
          items: ["Lots of repeat events", "Clear outcomes to learn from", "Data you can legally use"],
        },
        {
          icon: "layers",
          title: "When AI is usually premature",
          items: ["Too little usage data", "No reliable outcome tracking", "Key context stuck in notes or heads"],
        },
        {
          icon: "database",
          title: "What good data looks like",
          items: ["Enough examples to show patterns", "Clean enough to trust", "Feedback loops that prove improvement"],
        },
      ],
      verdict:
        "Practical test: if you can't explain what the model would learn and how you'd measure success, start with instrumentation instead.",
    },
    {
      layout: "columns",
      title: "Question 2: Does AI Clearly Beat a Simpler Approach?",
      columns: [
        {
          icon: "rocket",
          title: "When AI clearly wins",
          items: ["Users notice when AI is gone", "Speed and accuracy improve measurably", "The alternative creates friction"],
        },
        {
          icon: "compass",
          title: "When simpler approaches win",
          items: ["Forms build more trust", "Regulatory or liability risks", "A 70–80% solution ships faster"],
        },
        {
          icon: "arrowRight",
          title: "The downgrade test",
          items: ["Remove AI tomorrow — would users complain?", "No complaints = no real value prop", "Real value = load-bearing feature"],
        },
      ],
      verdict: "Practical test: build the non-AI version first, then ask if AI materially improves it.",
    },
    {
      layout: "columns",
      title: "Question 3: Will This Actually Differentiate You?",
      columns: [
        {
          icon: "lock",
          title: "When AI creates real defensibility",
          items: ["Proprietary data competitors don't have", "Deeply integrated into your workflows", "Model improves with your unique data"],
        },
        {
          icon: "chip",
          title: "When AI is easily copied",
          items: ["Uses public models or APIs", "No proprietary data advantage", "Competitors ship the same thing in weeks"],
        },
        {
          icon: "shield",
          title: "The moat questions",
          items: ["What data do we have competitors don't?", "How long to copy this?", "Does it lock users in?"],
        },
      ],
      verdict: "Practical test: if a competitor could replicate this in 3 months, it's not a defensible moat.",
    },
    {
      layout: "columns",
      title: "A Simple Founder/PM Checklist",
      body: "If several answers are “no” or “not sure,” you don't have an AI problem — you have a product and data strategy problem.",
      columns: [
        { icon: "database", title: "Data", text: "Enough clean, relevant, legally usable data to learn from?" },
        { icon: "star", title: "Value", text: "Will users feel a real downgrade if this AI piece disappears?" },
        { icon: "shield", title: "Differentiation", text: "Does this leverage something only we have?" },
        { icon: "chip", title: "Cost", text: "Ready for ongoing cost of experimentation, monitoring, infra?" },
        { icon: "compass", title: "Simpler options", text: "Is there a non-AI solution that gets 70–80% there, faster?" },
      ],
    },
  ],
  "framework-to-prioritize-ai-use-cases": [
    {
      layout: "title",
      kicker: "AI Prioritization Framework",
      icon: "layers",
      title: "Too Many AI Ideas. Nothing Shipped?",
      body: "Most teams have plenty of AI ideas — but struggle to choose. The real blocker is decision paralysis, not the technology. Use this simple 2×2 matrix to decide what to build first.",
    },
    {
      layout: "columns",
      title: "The Real Bottleneck: Prioritization",
      body: "Most teams aren't stuck on ideas or AI talent. They're stuck because every idea feels urgent — and without a framework, nothing gets shipped.",
      columns: [
        { icon: "layers", title: "10+ Good Ideas", text: "Your backlog is full of promising AI use cases." },
        { icon: "spark", title: "Everything Feels Urgent", text: "Every idea competes for the same time and attention." },
        { icon: "chatBubble", title: "Debates, Not Decisions", text: "Teams keep circling the same arguments." },
      ],
    },
    {
      layout: "matrix",
      title: "A Simple 2×2 for AI Use Cases",
      body: "Plot AI ideas on two axes: Impact and Effort. It creates a shared language for prioritization and forces clearer decisions.",
      xLabel: "Effort",
      yLabel: "Impact",
    },
    {
      layout: "matrix",
      title: "Read the Matrix",
      xLabel: "Effort",
      yLabel: "Impact",
      quadrants: {
        tl: { title: "Quick Wins", sub: "Build first" },
        tr: { title: "Strategic Bets", sub: "Plan and invest" },
        bl: { title: "Nice-to-Haves", sub: "Do if capacity" },
        br: { title: "Avoid or Defer", sub: "Not now" },
      },
    },
    {
      layout: "columns",
      title: "One More Lens: Data Readiness",
      body: "Impact and effort matter — but they aren't enough. If the data isn't ready, it's not a quick win.",
      columns: [
        {
          icon: "database",
          title: "The data check",
          items: ["Do you have the needed data?", "Is it clean and accessible?", "Can the team use it easily?"],
        },
      ],
      verdict: "High impact + low effort + ready data = a true quick win.",
    },
    {
      layout: "stats",
      title: "Worked Example: “Smart Scheduler”",
      body: "A fitness or SaaS platform uses AI to auto-optimize each user's schedule.",
      stats: [
        { label: "Impact", value: "High", text: "Strong engagement and retention upside." },
        { label: "Effort", value: "Medium–High", text: "Needs calendar logic, ML training and tuning." },
        { label: "Data", value: "Medium", text: "Usage data exists, but signals may be incomplete." },
      ],
      verdict: "Verdict: lands in Strategic Bets (high impact, high effort).",
    },
    {
      layout: "stats",
      title: "Now Compare With: AI Chat Support",
      body: "Same platform, different idea — scored again to compare against Smart Scheduler.",
      stats: [
        { label: "Impact", value: "Medium–High", text: "Improves CX and reduces support load." },
        { label: "Effort", value: "Medium–Low", text: "LLM + FAQs + routing logic." },
        { label: "Data", value: "High", text: "FAQs, tickets and chat logs already available." },
      ],
      verdict: "Verdict: lands in Quick Wins — ship this first.",
    },
    {
      layout: "table",
      title: "Want More Rigor? Score It",
      body: "A simple 1–5 score on each dimension helps reduce bias and politics. Effort is reverse-scored.",
      table: {
        headers: ["Use Case", "Impact", "Effort", "Data", "Priority"],
        rows: [
          ["Smart Scheduler", "4.5", "2.5", "3", "3.6"],
          ["AI Chat Support", "4", "4", "4", "4.2"],
        ],
      },
    },
    {
      layout: "columns",
      title: "This Isn't Feature Tetris",
      body: "Your AI roadmap should be a deliberate sequence, not a random pile of features.",
      columns: [
        { icon: "database", title: "1. Data", text: "Clean, structured data is the foundation." },
        { icon: "spark", title: "2. Insights", text: "Surface patterns and answer new questions." },
        { icon: "chip", title: "3. Automation", text: "Automate high-frequency decisions once trust is built." },
      ],
      verdict: "Sequence matters: quick wins build trust, strategic bets build defensibility.",
    },
  ],
};
