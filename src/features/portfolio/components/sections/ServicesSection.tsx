import { SERVICES } from "../../data";

export function ServicesSection() {
  return (
    <section id="services" className="section dark-alt services-section">
      <p className="ghost-label">SERVICES</p>
      <h2 data-reveal>What I Offer</h2>
      <p className="services-intro" data-reveal>
        Product-first engineering services designed to ship quickly, scale cleanly, and deliver visible business impact.
      </p>

      <div className="bento services-grid">
        {SERVICES.map(([n, title, desc], i) => (
          <article key={title} className="service-card" data-reveal style={{ transitionDelay: `${i * 0.08}s` }}>
            <div className="service-card-top">
              <p className="service-number">{n}</p>
              <span className="service-dot" aria-hidden="true" />
            </div>

            <h3>{title}</h3>
            <p>{desc}</p>

            <a href="#contact" className="service-cta" aria-label={`Let's talk about ${title}`}>
              <span>Let&apos;s build this</span>
              <strong aria-hidden="true">→</strong>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
