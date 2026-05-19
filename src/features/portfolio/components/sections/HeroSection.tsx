type HeroSectionProps = {
  bars: number[];
};

export function HeroSection({ bars }: HeroSectionProps) {
  return (
    <section id="hero" className="hero section">
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="grid-bg" />
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">Ronit Kothari Portfolio</p>
        <h1>
          Building AI Products, Systems & <span className="accent">Experiences</span> That <span className="outline">Actually</span> Matter.
        </h1>
        <p className="sub">
          AI Engineer & Full Stack Developer from India turning complex problems into clean, scalable digital products. From machine learning pipelines to full-stack applications, I build things that work.
        </p>
        <p className="availability"><span /> Available for Projects - 2025</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#work" data-magnetic>Explore Work ↗</a>
          <a className="btn btn-outline" href="#contact" data-magnetic>Let&apos;s Build Something</a>
        </div>
        <p className="typing">&gt; Building systems that matter<span className="blink">_</span></p>
      </div>
      <div className="hero-visual" data-reveal>
        <article className="panel node-map floating"><h3>Current Focus</h3><div className="nodes"><span>LLM Systems</span><span>Product Engineering</span><span>Scalable AI Apps</span></div></article>
        <article className="panel chart"><h3>Execution Signals</h3><div className="bars">{bars.map((h, idx) => <i key={idx} style={{ height: `${h}%`, animationDelay: `${idx * 0.08}s` }} />)}</div></article>
        <article className="panel mini metric-a floating">AI + Product Focus</article>
        <article className="panel mini metric-b floating">Production Ready</article>
        <article className="panel code floating"><pre>{`const outcome = build({\n  strategy,\n  systems,\n  execution\n});`}</pre></article>
      </div>
    </section>
  );
}
