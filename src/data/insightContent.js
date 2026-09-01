// Full article bodies, keyed by slug. Kept separate from insights.js so
// listing pages don't need to load full article text.
//
// Each article is an array of blocks:
//   { type: "p", text }
//   { type: "heading", text }
//   { type: "list", title?, items: [string, ...] }
//   { type: "callout", text }
export const insightContent = {
  "does-your-product-really-need-ai": [
    {
      type: "p",
      text: "Investors ask about your “AI angle.” Competitors add “AI-powered” features every month. Your team is excited — but you're not sure where AI actually fits. The result is pressure to “add AI” without clarity on why or where. This is for founders and product leaders who want to be ambitious about AI, but honest about ROI.",
    },
    { type: "heading", text: "The Real Problem: AI as a Checkbox" },
    {
      type: "callout",
      text: "Your users don't care if it's AI. They care if it helps them win. Simple beats complex when it works better.",
    },
    {
      type: "p",
      text: "Three questions separate useful AI from expensive theater: do you have good data, is it better than a simpler approach, and is it truly differentiating?",
    },
    { type: "heading", text: "Question 1: Do You Have Enough Good Data?" },
    {
      type: "p",
      text: "AI needs data like engines need fuel. Without enough high-quality information, even the most impressive model is just making educated guesses. The question isn't whether AI is possible in the abstract — it's whether you have the volume, consistency and trustworthiness of data to make it useful in the real world.",
    },
    {
      type: "list",
      title: "When AI usually makes sense",
      items: [
        "Lots of repeat events",
        "Clear outcomes to learn from",
        "Data you can legally use",
        "Examples: logs, routes, delays, costs",
      ],
    },
    {
      type: "list",
      title: "When AI is usually premature",
      items: [
        "Too little usage data",
        "No reliable outcome tracking",
        "Key context stuck in notes or heads",
        "Fix tracking first, then revisit AI",
      ],
    },
    {
      type: "list",
      title: "What good data looks like",
      items: [
        "Enough examples to show patterns",
        "Clean enough to trust",
        "Feedback loops that prove improvement",
      ],
    },
    {
      type: "callout",
      text: "Practical test: if you cannot explain what the model would learn, what outcome it would predict, and how you would measure success, you probably do not have enough good data yet. Start with instrumentation and clearer workflows instead.",
    },
    { type: "heading", text: "Question 2: Does AI Clearly Beat a Simpler Approach?" },
    {
      type: "p",
      text: "The real test of AI isn't whether it's possible — it's whether it's better than the alternative. A well-designed form, a smart rule engine, or a cleaner workflow might solve your problem faster and with more user trust than a complex model.",
    },
    {
      type: "list",
      title: "When AI clearly wins",
      items: [
        "Users notice when AI is gone",
        "Speed and accuracy improve measurably",
        "The alternative creates friction",
        "Examples: fraud detection, e-commerce personalization",
      ],
    },
    {
      type: "list",
      title: "When simpler approaches win",
      items: [
        "Forms build more trust",
        "Regulatory or liability risks",
        "A 70–80% solution ships faster",
        "Users prefer transparency",
      ],
    },
    {
      type: "list",
      title: "The downgrade test",
      items: [
        "Remove AI tomorrow — would users complain?",
        "No complaints usually means no real value prop",
        "Real value means a load-bearing feature",
      ],
    },
    {
      type: "callout",
      text: "Practical test: build the non-AI version first. Get it working well. Then ask: does AI materially improve this, or just add complexity?",
    },
    { type: "heading", text: "Question 3: Will This Actually Differentiate You?" },
    {
      type: "p",
      text: "“We have an AI chatbot” is no longer a moat. Open APIs and off-the-shelf models make basic features easy to copy in weeks. Real defensibility comes from proprietary data, deep workflow understanding, and niche integrations that competitors can't easily replicate.",
    },
    {
      type: "list",
      title: "When AI creates real defensibility",
      items: [
        "Proprietary data competitors don't have",
        "Deeply integrated into your workflows",
        "The model improves with your unique data",
        "Examples: Stripe's fraud detection, Figma's design suggestions",
      ],
    },
    {
      type: "list",
      title: "When AI is easily copied",
      items: [
        "Uses public models or APIs",
        "No proprietary data advantage",
        "Competitors can ship the same thing in weeks",
        "Competing on commodity features",
      ],
    },
    {
      type: "list",
      title: "The moat questions",
      items: [
        "What data do we have that competitors don't?",
        "How long would it take to copy this?",
        "Does it lock users in?",
      ],
    },
    {
      type: "callout",
      text: "Practical test: if a competitor with the same budget and talent could replicate this in three months, it's not a defensible moat. Focus on what's genuinely yours.",
    },
    { type: "heading", text: "A Simple Founder/PM Checklist" },
    {
      type: "p",
      text: "Before committing serious effort and budget to AI, run this sanity scan. If several answers are “no” or “not sure,” you don't have an AI problem — you have a product and data strategy problem.",
    },
    {
      type: "list",
      items: [
        "Data — enough clean, relevant, legally usable data to learn from?",
        "Value — will users feel a real downgrade if this AI piece disappears?",
        "Differentiation — does this leverage something only we have: data, insight or workflow?",
        "Cost — are you prepared for the ongoing cost of experimentation, monitoring, infrastructure and model updates?",
        "Simpler options — is there a non-AI solution that gets 70–80% of the outcome, faster?",
      ],
    },
  ],
  "framework-to-prioritize-ai-use-cases": [
    {
      type: "p",
      text: "Most teams have plenty of AI ideas — but struggle to choose. The real blocker is decision paralysis, not the technology. Here's a simple 2×2 matrix to decide what to build first and move from planning to shipping.",
    },
    { type: "heading", text: "The Real Bottleneck: Prioritization" },
    {
      type: "p",
      text: "Most teams aren't stuck on ideas or AI talent. They're stuck because every idea feels urgent — and without a framework, nothing gets shipped.",
    },
    {
      type: "list",
      items: [
        "10+ good ideas — the backlog is full of promising AI use cases",
        "Everything feels urgent — every idea competes for the same time and attention",
        "Debates, not decisions — teams keep circling the same arguments",
      ],
    },
    { type: "heading", text: "A Simple 2×2 for AI Use Cases" },
    {
      type: "p",
      text: "Plot AI ideas on two axes: impact and effort. It creates a shared language for prioritization and forces clearer decisions. Once filled in, it shows what to build first, what to plan next, and what to skip.",
    },
    { type: "heading", text: "Read the Matrix" },
    {
      type: "list",
      items: [
        "Quick wins (high impact, low effort) — build first",
        "Strategic bets (high impact, high effort) — plan and invest",
        "Nice-to-haves (low impact, low effort) — do if there's capacity",
        "Avoid or defer (low impact, high effort) — not now",
      ],
    },
    { type: "heading", text: "One More Lens: Data Readiness" },
    {
      type: "p",
      text: "Impact and effort matter — but they aren't enough. If the data isn't ready, it isn't really a quick win. Add a third lens: data readiness.",
    },
    {
      type: "list",
      title: "The data check",
      items: [
        "Do you have the data you need?",
        "Is it clean and accessible?",
        "Can the team use it easily?",
      ],
    },
    {
      type: "callout",
      text: "High impact + low effort + ready data = a true quick win. If data is missing or messy, include the cleanup effort in the total cost before scoring the idea — this lens helps avoid mid-project surprises and keeps the roadmap honest.",
    },
    { type: "heading", text: "Worked Example: “Smart Scheduler”" },
    {
      type: "p",
      text: "A fitness or SaaS platform uses AI to auto-optimize each user's schedule. Where does it land on the matrix?",
    },
    {
      type: "list",
      items: [
        "Impact: High — strong engagement and retention upside",
        "Effort: Medium–high — needs calendar logic, ML training and tuning",
        "Data: Medium — usage data exists, but signals may be incomplete",
      ],
    },
    { type: "callout", text: "Verdict: it lands in Strategic Bets (high impact, high effort)." },
    { type: "heading", text: "Now Compare With: AI Chat Support" },
    {
      type: "p",
      text: "Same platform, different idea. Scoring it again shows where it lands versus Smart Scheduler.",
    },
    {
      type: "list",
      items: [
        "Impact: Medium–high — improves customer experience and reduces support load",
        "Effort: Medium–low — an LLM plus FAQs and routing logic",
        "Data: High — FAQs, tickets and chat logs are already available",
      ],
    },
    { type: "callout", text: "Verdict: AI Chat Support lands in Quick Wins — ship this first." },
    { type: "heading", text: "Want More Rigor? Score It" },
    {
      type: "p",
      text: "For teams with many ideas, a simple 1–5 score on each dimension helps reduce bias and politics. Effort is reverse-scored, and the priority score is the average of the three dimensions.",
    },
    {
      type: "list",
      items: [
        "Smart Scheduler — Impact 4.5, Effort 2.5, Data 3, Priority 3.6",
        "AI Chat Support — Impact 4, Effort 4, Data 4, Priority 4.2",
      ],
    },
    {
      type: "p",
      text: "Numbers depersonalize decisions. When the matrix and the score agree, you have a defensible roadmap.",
    },
    { type: "heading", text: "This Isn't Feature Tetris" },
    {
      type: "p",
      text: "Your AI roadmap should be a deliberate sequence, not a random pile of features.",
    },
    {
      type: "list",
      items: [
        "Data — clean, structured data is the foundation",
        "Insights — surface patterns and answer new questions",
        "Automation — automate high-frequency decisions once trust is built",
      ],
    },
    {
      type: "p",
      text: "Sequence matters: quick wins build trust, and strategic bets build defensibility.",
    },
  ],
  "turning-data-into-decisions": [
    {
      type: "p",
      text: "Most organizations don't have a shortage of dashboards — they have a shortage of decisions that are actually informed by them. A dashboard that nobody checks before making a call isn't adding value, no matter how well designed it is.",
    },
    {
      type: "p",
      text: "The gap usually isn't technical. It's that the metrics on the dashboard don't map cleanly to a decision someone is responsible for making. Analytics work best when they're built backwards from a specific decision — what would change if this number moved — rather than forwards from whatever data happens to be available.",
    },
    {
      type: "p",
      text: "Making data part of decision-making also requires a bit of process design: a regular cadence where the right people look at the right numbers before a decision gets made, not after. Without that habit, even the best dashboard becomes background noise.",
    },
  ],
  "product-strategy-before-roadmap": [
    {
      type: "p",
      text: "A roadmap answers “what are we building and when.” A strategy answers “why these things, and not something else.” Skipping straight to the roadmap without a clear strategy behind it usually produces a list of features rather than a coherent direction.",
    },
    {
      type: "p",
      text: "Good product strategy starts with a small number of clear bets about where the value is — which customer problems matter most, which capabilities are genuinely differentiating, and which trade-offs the team is willing to make. Everything on the roadmap should trace back to one of those bets.",
    },
    {
      type: "p",
      text: "Getting this sequence right changes how teams prioritize under pressure. When a strategy exists, a new request can be evaluated against it. Without one, every request looks equally urgent, and the roadmap becomes reactive rather than intentional.",
    },
  ],
};
