const PROCESS_STEPS = [
  ["01", "Research", "Understand the domain, users, and constraints before writing a single line of code. Good software starts with good questions."],
  ["02", "Strategy", "Map out the architecture, choose the right stack, and define clear milestones. No over-engineering. No under-thinking."],
  ["03", "Design", "Wireframes, system design, and UI structure. Every screen and every API endpoint is intentional."],
  ["04", "Development", "Clean, modular, well-documented code built in layers: core logic first, then the product layer on top."],
  ["05", "Deployment", "CI/CD, monitoring, and documentation. Shipped means live, stable, and maintainable, not just pushed to GitHub."]
] as const;

export function ProcessSection() {
  return (
    <section id="process" className="section dark-alt">
      <p className="ghost-label">PROCESS</p>
      <h2 data-reveal>How I Work</h2>
      <div className="process-line" data-reveal>
        {PROCESS_STEPS.map(([n, t, d]) => (
          <article key={t}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>
        ))}
      </div>
    </section>
  );
}
