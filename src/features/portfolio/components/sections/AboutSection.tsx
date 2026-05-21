export function AboutSection() {
  return (
    <section id="about" className="section about-ref">
      <div className="about-copy" data-reveal>
        <p className="about-kicker">MORE ABOUT ME</p>
        <h2>
          I&apos;m Ronit, a creative <em>engineer</em>
        </h2>
        <p>
          I&apos;m Ronit Kothari, an AI engineer and full-stack developer passionate about building meaningful digital products. From
          frontend experiences to backend systems, I enjoy solving complex problems with clean and reliable code.
        </p>
        <p>
          My work spans Next.js, AI/ML systems, automation, and mobile applications. I focus on shipping products that are practical,
          scalable, and user-centric.
        </p>
        <p>I believe in learning fast, executing consistently, and building things that create real impact.</p>
        <div className="about-socials">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
        </div>
      </div>

      <div className="about-visual" data-reveal>
        <div className="about-card about-card-back" />
        <div className="about-card about-card-mid" />
        <div className="about-card about-card-front" />
        <p>I Build, Ship, Repeat</p>
      </div>
    </section>
  );
}
