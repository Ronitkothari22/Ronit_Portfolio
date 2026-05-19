import { SERVICES } from "../../data";

export function ServicesSection() {
  return (
    <section id="services" className="section light">
      <p className="ghost-label">SERVICES</p>
      <h2 data-reveal>What I Offer</h2>
      <div className="bento">
        {SERVICES.map(([n, title, desc], i) => (
          <article key={title} data-reveal style={{ transitionDelay: `${i * 0.06}s` }}>
            <p>{n}</p><h3>{title}</h3><p>{desc}</p><a href="#contact">→</a>
          </article>
        ))}
      </div>
    </section>
  );
}
