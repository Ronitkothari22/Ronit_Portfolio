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
          <a href="https://www.linkedin.com/in/ronit-kothari-843987251/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/ronitkothari22" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <div className="about-visual" data-reveal>
        <div className="about-aura about-aura-one" />
        <div className="about-aura about-aura-two" />
        <div className="about-photo-wrap">
          <img src="/profile.png" alt="Ronit Kothari portrait" className="about-photo" />
        </div>
        <div className="about-badge about-badge-top">AI + Full Stack</div>
        <div className="about-badge about-badge-bottom">Build. Ship. Repeat.</div>
        <div className="about-orbit" />
      </div>
    </section>
  );
}
