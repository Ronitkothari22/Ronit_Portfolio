import { TECH_STACK } from "../../data";

const LOGO_MAP: Record<string, { slug: string; color?: string }> = {
  Python: { slug: "python", color: "3776AB" },
  JavaScript: { slug: "javascript", color: "F7DF1E" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  "C/C++": { slug: "cplusplus", color: "00599C" },
  "React.js": { slug: "react", color: "61DAFB" },
  "Next.js": { slug: "nextdotjs", color: "ffffff" },
  "Tailwind CSS": { slug: "tailwindcss", color: "06B6D4" },
  Redux: { slug: "redux", color: "764ABC" },
  "Node.js": { slug: "nodedotjs", color: "5FA04E" },
  "Express.js": { slug: "express", color: "ffffff" },
  FastAPI: { slug: "fastapi", color: "009688" },
  "REST APIs": { slug: "postman", color: "FF6C37" },
  GraphQL: { slug: "graphql", color: "E10098" },
  "React Native": { slug: "react", color: "61DAFB" },
  Flutter: { slug: "flutter", color: "02569B" },
  TensorFlow: { slug: "tensorflow", color: "FF6F00" },
  PyTorch: { slug: "pytorch", color: "EE4C2C" },
  Keras: { slug: "keras", color: "D00000" },
  "Scikit-learn": { slug: "scikitlearn", color: "F7931E" },
  BERT: { slug: "huggingface", color: "FFD21E" },
  LangChain: { slug: "langchain", color: "1C3C3C" },
  PostgreSQL: { slug: "postgresql", color: "4169E1" },
  MongoDB: { slug: "mongodb", color: "47A248" },
  MySQL: { slug: "mysql", color: "4479A1" },
  Pandas: { slug: "pandas", color: "150458" },
  NumPy: { slug: "numpy", color: "013243" },
  Git: { slug: "git", color: "F05032" },
  Docker: { slug: "docker", color: "2496ED" },
  Linux: { slug: "linux", color: "FCC624" },
  Vercel: { slug: "vercel", color: "ffffff" },
  Jupyter: { slug: "jupyter", color: "F37626" },
  Codex: { slug: "openai", color: "ffffff" },
  Cursor: { slug: "cursor", color: "ffffff" },
  "Claude Code": { slug: "anthropic", color: "ffffff" }
};

export function StackSection() {
  return (
    <section id="stack" className="section">
      <p className="ghost-label">TECH STACK</p>
      <h2 data-reveal>Technologies I Use</h2>
      <p className="stack-subtitle" data-reveal>Production tools I use to design, build, train, ship, and scale modern products.</p>
      <div className="stack-grid stack-grid-redesign">
        {TECH_STACK.map(([category, technologies], i) => (
          <article key={category} data-reveal style={{ transitionDelay: `${i * 0.05}s` }} className="stack-category">
            <div className="stack-category-head">
              <h3>{category}</h3>
            </div>
            <div className="stack-logos">
              {technologies.split(",").map((techRaw) => {
                const tech = techRaw.trim();
                const mapped = LOGO_MAP[tech];

                return (
                  <div key={`${category}-${tech}`} className="stack-pill" title={tech} aria-label={tech}>
                    {mapped ? (
                      <img
                        src={`https://cdn.simpleicons.org/${mapped.slug}/${mapped.color ?? "ffffff"}`}
                        alt={`${tech} logo`}
                        loading="lazy"
                        decoding="async"
                        width={18}
                        height={18}
                        onLoad={(e) => {
                          e.currentTarget.parentElement?.classList.add("has-logo");
                        }}
                        onError={(e) => {
                          e.currentTarget.parentElement?.classList.add("no-logo");
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : null}
                    <span className="stack-pill-fallback" aria-hidden="true">
                      {tech
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </span>
                    <span>{tech}</span>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
