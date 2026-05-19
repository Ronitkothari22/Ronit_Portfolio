import { BLOG_POSTS } from "../../data";

export function TestimonialsSection() {
  const blogSiteLink = "https://system-design-indol-eight.vercel.app/";

  return (
    <section id="blog" className="section dark-alt">
      <p className="ghost-label">WRITING & THINKING</p>
      <h2 data-reveal>I Don&apos;t Just Build Systems. I Explain Them.</h2>
      <p data-reveal>A space where I break down how real systems are designed from AI pipelines to distributed backends. No fluff, no filler. Just clear technical thinking.</p>
      <div className="testimonials-grid">
        {BLOG_POSTS.map((item) => (
          <a key={item.title} href={item.link} target="_blank" rel="noreferrer" className="blog-card-link" data-reveal>
            <article>
              <p className="quote">●</p>
              <p className="text"><strong>{item.title}</strong></p>
              <p className="text">{item.summary}</p>
              <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          </a>
        ))}
      </div>
      <a className="btn btn-outline blog-cta" href={blogSiteLink} target="_blank" rel="noreferrer" data-reveal>Read All Posts →</a>
    </section>
  );
}
