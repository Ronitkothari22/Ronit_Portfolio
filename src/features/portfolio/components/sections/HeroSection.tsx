type HeroSectionProps = {
  bars: number[];
};

export function HeroSection({ bars: _bars }: HeroSectionProps) {
  return (
    <section id="hero" className="hero section">
      <div className="hero-stage" data-reveal>
        <a href="#work" className="hero-chip">Building AI Products That Scale</a>

        <h1>
          Code That Feels Designed.<br />
          <em>Engineering That Actually Ships.</em>
        </h1>

        <p className="hero-intro">
          Hello, I&apos;m <strong>Ronit Kothari</strong>
          <span>AI Engineer & Full Stack Developer</span>
        </p>

        <div className="hero-cta ref-cta">
          <a className="btn btn-primary" href="#contact" data-magnetic>Let&apos;s Connect</a>
          <a className="hero-email" href="mailto:ronitkothari22@gmail.com">ronitkothari22@gmail.com</a>
        </div>
      </div>
      <div className="hero-horizon" aria-hidden />
      <div className="hero-horizon-core" aria-hidden />
    </section>
  );
}
