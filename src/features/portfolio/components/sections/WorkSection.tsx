import { PROJECTS } from "../../data";

export function WorkSection() {
  const githubIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.24.78-.54 0-.27-.01-.98-.02-1.93-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.02 1.76 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.25.45-2.26 1.18-3.06-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.14 1.17a10.86 10.86 0 0 1 5.72 0c2.17-1.48 3.13-1.17 3.13-1.17.62 1.58.23 2.74.11 3.03.74.8 1.18 1.81 1.18 3.06 0 4.43-2.69 5.4-5.26 5.68.41.36.77 1.07.77 2.17 0 1.57-.01 2.84-.01 3.22 0 .3.2.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  );

  const linkIcon = (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Zm5 16V11h2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h8v2H5v14h14Z"
      />
    </svg>
  );

  return (
    <section id="work" className="section dark-alt">
      <p className="ghost-label">SELECTED WORK</p>
      <h2 data-reveal>Selected Work</h2>
      <div className="project-list">
        {PROJECTS.map((project) => {
          const hideMedia =
            project.name === "Smart Healthcare Platform" || project.name === "Farzi - Fake News Detector";

          return (
            <article key={project.name} className={`project ${hideMedia ? "project-no-media" : ""}`} data-reveal>
              <div className="left">
                <p className="number">{project.number}</p>
                <h3>{project.name}</h3>
                <p><em>{project.tagline}</em></p>
                <p><strong>Problem Solved:</strong> {project.problemSolved}</p>
                <p><strong>What I Built:</strong> {project.whatIBuilt}</p>
                <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="impact">{project.impact.map((item) => <em key={item}>{item}</em>)}</div>
              </div>
              {!hideMedia && (
                <div className="project-media">
                  <div className="project-photo-frame">
                    {project.image ? (
                      <img src={project.image} alt={`${project.name} preview`} className="project-photo" />
                    ) : (
                      <span className="photo-placeholder">Add project photo</span>
                    )}
                  </div>
                  <div className="project-links">
                    {project.githubLink ? (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub`}>
                        {githubIcon}
                      </a>
                    ) : (
                      <span className="icon-disabled" aria-hidden="true">{githubIcon}</span>
                    )}
                    {project.projectLink ? (
                      <a href={project.projectLink} target="_blank" rel="noreferrer" aria-label={`${project.name} Project link`}>
                        {linkIcon}
                      </a>
                    ) : (
                      <span className="icon-disabled" aria-hidden="true">{linkIcon}</span>
                    )}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
