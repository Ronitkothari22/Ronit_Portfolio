import { EXPERIENCES } from "../../data";

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <p className="ghost-label">EXPERIENCE</p>
      <h2 data-reveal>Work Experience</h2>
      <div className="experience-timeline" data-reveal data-experience-timeline>
        {EXPERIENCES.map((item, idx) => (
          <article key={`${item.company}-${item.role}`} className={`experience-card ${idx % 2 === 0 ? "left" : "right"}`}>
            <p className="experience-duration">{item.duration}</p>
            <div className="experience-node" aria-hidden />
            <div className="experience-content">
              <h3>{item.role}</h3>
              <p className="experience-company">{item.company}</p>
              <ul>
                {item.details.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
