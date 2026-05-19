import { TECH_STACK } from "../../data";

export function StackSection() {
  return (
    <section id="stack" className="section">
      <p className="ghost-label">TECH STACK</p>
      <h2 data-reveal>Technologies I Use</h2>
      <div className="stack-grid" style={{ gridTemplateColumns: "1fr" }}>
        {TECH_STACK.map(([category, technologies], i) => (
          <article key={category} data-reveal style={{ transitionDelay: `${i * 0.03}s`, display: "grid", gridTemplateColumns: "220px 1fr", gap: "12px", alignItems: "start" }}>
            <h3>{category}</h3>
            <small>{technologies}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
