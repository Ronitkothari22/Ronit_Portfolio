export function ContactSection() {
  return (
    <section id="contact" className="section contact">
      <div className="orb orb-3" />
      <p className="ghost-label">CONTACT</p>
      <h2 data-reveal>Let&apos;s Build Something <span className="outline">Remarkable.</span></h2>
      <p className="contact-sub" data-reveal>If you&apos;re building something ambitious in AI or product engineering, share a quick brief. I reply with scope, timeline, and next steps.</p>

      <div className="contact-grid" data-reveal>
        <form className="contact-form" action="mailto:ronitkothari22@gmail.com" method="post" encType="text/plain">
          <h3>Project Brief</h3>
          <label>
            Your Name
            <input type="text" name="name" placeholder="John Doe" required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label>
            Project Type
            <select name="projectType" defaultValue="">
              <option value="" disabled>Select one</option>
              <option>AI System</option>
              <option>Automation</option>
              <option>Full Stack Web App</option>
              <option>Mobile App</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows={5} placeholder="Tell me what you are building, goals, and timeline." required />
          </label>
          <button className="btn btn-primary huge" type="submit" data-magnetic>Send Brief →</button>
        </form>

        <div className="contact-card">
          <h3>Direct Contact</h3>
          <div className="links">
            <a href="mailto:ronitkothari22@gmail.com">Email: ronitkothari22@gmail.com</a>
            <a href="tel:+919313485276">Phone: +91 9313485276</a>
            <a href="https://www.linkedin.com/in/ronit-kothari-843987251/" target="_blank" rel="noreferrer">LinkedIn: ronit-kothari</a>
            <a href="https://github.com/ronitkothari22" target="_blank" rel="noreferrer">GitHub: ronitkothari22</a>
          </div>
          <p>Prefer a quick intro instead of a form?</p>
          <div className="contact-actions">
            <a className="btn btn-outline huge" href="mailto:ronitkothari22@gmail.com" data-magnetic>Email Me</a>
            <a className="btn btn-outline huge" href="https://www.linkedin.com/in/ronit-kothari-843987251/" target="_blank" rel="noreferrer" data-magnetic>Connect on LinkedIn</a>
          </div>
        </div>
      </div>

      <footer className="contact-footer">
        <div>Ronit. - AI Engineer & Full Stack Developer</div>
        <div>© 2025 Ronit Kothari - Built with obsession, not templates.</div>
        <div><a href="https://github.com/ronitkothari22" target="_blank" rel="noreferrer">GitHub</a> · <a href="https://www.linkedin.com/in/ronit-kothari-843987251/" target="_blank" rel="noreferrer">LinkedIn</a> · <a href="mailto:ronitkothari22@gmail.com">Email</a> · <a href="#blog">Blog</a></div>
      </footer>
    </section>
  );
}
