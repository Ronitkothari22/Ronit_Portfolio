import { PROJECTS } from "../../data";

export function WorkSection() {
  return (
    <section id="work" className="section dark-alt">
      <p className="ghost-label">SELECTED WORK</p>
      <h2 data-reveal>Selected Work</h2>
      <div className="project-list">
        {PROJECTS.map((project) => (
          <article key={project.name} className="project" data-reveal>
            <div className="left">
              <p className="number">{project.number}</p>
              <h3>{project.name}</h3>
              <p><em>{project.tagline}</em></p>
              <p><strong>Problem Solved:</strong> {project.problemSolved}</p>
              <p><strong>What I Built:</strong> {project.whatIBuilt}</p>
              <p>
                <strong>Project Link:</strong>{" "}
                {project.projectLink ? (
                  <a href={project.projectLink} target="_blank" rel="noreferrer">View Project</a>
                ) : (
                  <em>Link will be added soon</em>
                )}
              </p>
              <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <div className="impact">{project.impact.map((item) => <em key={item}>{item}</em>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
