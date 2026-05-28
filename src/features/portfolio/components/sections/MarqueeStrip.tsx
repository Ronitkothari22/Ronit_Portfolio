const ITEMS = ["LLM Engineering", "RAG Systems", "AI Agents", "Product Strategy", "Real-Time Infrastructure", "Next.js", "Startup Velocity"];

export function MarqueeStrip() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i}>{ITEMS.map((item) => <span key={`${item}-${i}`}>{item}</span>)}</div>
        ))}
      </div>
    </div>
  );
}
